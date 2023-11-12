/**
 * Action pour ajouter un nouvel employé au store Redux.
 *
 * @param {Object} employee - L'objet représentant un employé avec toutes ses données.
 * @returns {Object} Une action Redux avec le type 'ADD_EMPLOYEE' et l'employé à ajouter comme payload.
 */
export const addEmployee = (employee) => {
    return {
        type: 'ADD_EMPLOYEE',
        payload: employee,
    };
};