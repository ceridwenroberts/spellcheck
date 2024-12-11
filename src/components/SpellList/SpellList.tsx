"use client";

import { useState } from "react";
import { createPortal } from "react-dom"
import { Spell, useSpells } from "@/contexts/SpellsContext";
import SpellCard from "@/components/SpellCard/SpellCard"

interface ModalHandlers {
    openModal: (spell: Spell) => void,
    closeModal: () => void
}

const SpellList = () => {
    //   console.log("SpellList");
    const { spellsByLetter } = useSpells();
    //   console.log("spellsByLetter", spellsByLetter);
    const [showModal, setShowModal] = useState<boolean>(false);
    const [selectedSpell, setSelectedSpell] = useState<Spell | null>();

    const handleModalOpen: ModalHandlers["openModal"] = (spell) => {
        console.log("modalopen click")
        console.log("spell in modal", spell)

        if (selectedSpell !== spell) {
            setSelectedSpell(spell);
            setShowModal(true);
        }
        console.log("show modal", showModal)
    };

    const handleModalClose: ModalHandlers["closeModal"] = () => {
        setSelectedSpell(null);
        setShowModal(false);
    }

    return (
        <>
        <div className="spell-list">
            { Object.keys(spellsByLetter)
                .sort()
                .map(
                    (letter: string) => (
                        <div key={ letter } id={ letter } className="lexico-container">
                            <h3>{ letter }</h3>
                            { Array.isArray(spellsByLetter[letter]) && spellsByLetter[letter].map((spell: Spell) => (
                                <div className="incantation-container" key={ spell.id } onClick={ () => handleModalOpen(spell) }>
                                    <p>{ spell.incantation }</p>
                                </div>
                            )) }
                        </div>
                    )) }
                </div>
            <div>
                { showModal &&
                    selectedSpell &&
                    createPortal(

                        <SpellCard onClose={ handleModalClose } spell={ selectedSpell } />, document.body
                    )
                }
            </div>
        </>
    );
};

export default SpellList;
