// Définit l'état initial pour le reducer des employés.
const initialState = {
    employees: [], // Initialisation du tableau des employés.
};

/**
 * Reducer pour gérer les actions liées aux employés.
 *
 * @param {Object} state - L'état actuel de la partie des employés dans le store Redux.
 * @param {Object} action - L'action dispatchée.
 * @returns {Object} - Le nouvel état après application de l'action.
 */
function employeesReducer(state = initialState, action) {
    // Gère les actions en fonction de leur type.
    switch (action.type) {
        case 'ADD_EMPLOYEE':
            // Ajoute un nouvel employé à la liste des employés.
            return {
                ...state, // Copie l'état actuel.
                employees: [...state.employees, action.payload], // Ajoute le nouvel employé à la liste.
            };
        default:
            // Retourne l'état actuel si aucune action correspondante n'est trouvée.
            return state;
    }
}

export default employeesReducer;