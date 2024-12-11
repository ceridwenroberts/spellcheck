import { Spell } from "@/contexts/SpellsContext"

interface SpellCardProps {
    spell: Spell,
    onClose: () => void

}

const SpellCard: React.FC<SpellCardProps> = ({ spell, onClose }: SpellCardProps) => {
    console.log("spellcard")
    return (
        <div className="modal">
            <div className="modal-content">
                <h2>{ spell.incantation }</h2>
                { spell.name !== spell.incantation &&
                    <p>{ spell.name }</p>
                }
                <p><strong>Type:</strong> { spell.type }</p>
                <p><strong>Light:</strong> { spell.light }</p>
                <p><strong>Effect:</strong> { spell.effect }</p>
                <button onClick={ onClose }>Close</button>
            </div>
        </div>
    )
}

export default SpellCard