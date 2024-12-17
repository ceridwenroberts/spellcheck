import { createContext, useContext, useEffect, useState } from "react";

export interface Spell {
  id: string;
  name: string;
  incantation: string;
  effect: string;
  canBeVerbal: boolean;
  type: string;
  light: string;
  creator: string;
}

interface SpellsProviderProps {
  children: React.ReactNode;
}
interface SpellsContextType {
  spells: Spell[];
  spellsByLetter: Record<string, Spell[]>;
}

const SpellsContext = createContext<SpellsContextType | undefined>(undefined);

export const SpellsProvider = ({ children }: SpellsProviderProps) => {
  const [spells, setSpells] = useState<Spell[]>([]);
  const [spellsByLetter, setSpellsByLetter] = useState<Record<string, Spell[]>>(
    {}
  );

  useEffect(() => {
    //USE CLEANUP?
    // let isMounted = true;

    const fetchSpells = async (): Promise<void> => {
      try {
        const data = await fetch(
          "https://wizard-world-api.herokuapp.com/Spells"
        );
        const spellsData = await data.json();
        setSpells(spellsData);
      } catch (error) {
        console.error(error);
      }
    };
    fetchSpells();

    // return () => {
    //     isMounted = false; // Cleanup on unmount
    // };
  }, []);

  useEffect((): void => {
    if (spells.length > 0) {
      const withIncantation: Spell[] = [...spells].filter(
        (spell: Spell): boolean => !!spell.incantation
      ); //double negation makes sure return of boolean, and not string
      const groupedSpells: Record<string, Spell[]> = withIncantation.reduce(
        (
          acc: Record<string, Spell[]>,
          spell: Spell
        ): Record<string, Spell[]> => {
          if (spell.incantation) {
            const firstLetter = spell.incantation[0].toUpperCase();
            if (!acc[firstLetter]) {
              acc[firstLetter] = [];
            }
            acc[firstLetter].push(spell);
          }
          return acc;
        },
        {}
      );
      setSpellsByLetter(groupedSpells);
    }
  }, [spells]);

  return (
    <SpellsContext.Provider value={{ spells, spellsByLetter }}>
      {children}
    </SpellsContext.Provider>
  );
};

export const useSpells = (): SpellsContextType => {
  const context = useContext(SpellsContext);
  if (!context) {
    throw new Error("useSpells must be used within a SpellsProvider");
  }
  return context;
};
