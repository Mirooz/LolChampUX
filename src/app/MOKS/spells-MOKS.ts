import { Spells } from "../champion/model/spells";

// Données de test
const spells: Spells[] = [
  new Spells(
    "Champion1",
    "A",
    "Description of Spell A for Champion1. This spell allows Champion1 to unleash a powerful blast of energy, dealing massive damage to enemies in a wide area. It also applies a debuff that reduces their movement speed and increases their vulnerability to subsequent attacks. Use this spell strategically to turn the tide of battle!",
    "Range A",
    "Spell A",
    [20, 18, 15.5, 14, 12], // Exemple de cooldowns avec une liste de taille 5
    [50, 60, 70, 80, 90] // Exemple de coûts avec une liste de taille 5
  ),
  new Spells(
    "Champion1",
    "B",
    "Description of Spell B for Champion1. With this spell, Champion1 creates an impenetrable shield that blocks all incoming damage for a short duration. It provides valuable protection and allows Champion1 to engage in risky situations without fear. Use this spell wisely to nullify enemy attacks and protect yourself and your allies.",
    "Range B",
    "Spell B",
    [15, 13, 12, 10.5, 9], // Exemple de cooldowns avec une liste de taille 5
    [40, 45, 50, 55, 60] // Exemple de coûts avec une liste de taille 5
  ),
  new Spells(
    "Champion2",
    "A",
    "Description of Spell A for Champion2. Champion2 channels their inner strength and enters a heightened state, gaining increased attack speed, movement speed, and bonus damage. This spell turns Champion2 into a formidable force on the battlefield, capable of decimating enemies with lightning-fast strikes. Unleash the power of this spell to dominate your opponents!",
    "Range A",
    "Spell A",
    [25, 23, 20], // Exemple de cooldowns avec une liste de taille 4
    [60, 70, 80] // Exemple de coûts avec une liste de taille 4
  ),
  new Spells(
    "Champion2",
    "B",
    "Description of Spell B for Champion2. With this spell, Champion2 creates a mystical barrier that blocks all incoming projectiles and reduces incoming damage from melee attacks. It provides temporary invulnerability and allows Champion2 to survive dangerous situations. Master the timing of this spell to negate enemy damage and escape unscathed.",
    "Range B",
    "Spell B",
    [12, 11, 9], // Exemple de cooldowns avec une liste de taille 4
    [80, 90, 110] // Exemple de coûts avec une liste de taille 4
  ),
];

export const MOCK_SPELLS = spells;
