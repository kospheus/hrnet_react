import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addEmployee } from '../../redux/actions/employeesActions';
import { Calendar } from 'primereact/calendar';
import { Dropdown } from 'primereact/dropdown';
import { ModalToast } from '@kospheus/modal-toast';
import "react-datepicker/dist/react-datepicker.css";
import "primereact/resources/themes/tailwind-light/theme.css";
import './form.css';

function EmployeeForm() {

    const dispatch = useDispatch();

    // Hook d'état pour contrôler la visibilité de la notification toast et du message d'erreur
    const [isToastVisible, setToastVisible] = useState(false);
    const [isErrorVisible, setErrorVisible] = useState(false);

    //Hook d'état pour gérer les données du formulaire d'employé
    // Initialise tous les champs à des chaînes vides
    const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    startDate: '',
    street: '',
    city: '',
    state: '',
    zipCode: '',
    department: '',
    });

    /**
     * Convertit une date au format ISO 8601 en une chaîne de caractères au format MM/DD/YYYY.
     * 
     * @param {string} isoDate - La date en format ISO 8601 à convertir.
     * @returns {string} La date au format MM/DD/YYYY.
     */
    function formatDateToMMDDYYYY(isoDate) {
        const date = new Date(isoDate);
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const day = date.getDate().toString().padStart(2, '0');
        const year = date.getFullYear();
        return `${month}/${day}/${year}`;
    }


    /**
     * Gère la sauvegarde des données d'employé depuis un formulaire dans la liste des employés et dans le stockage local.
     * Récupère les valeurs des champs de saisie, les valide, puis met à jour l'état du composant et le stockage local.
     * Réinitialise également les champs de saisie et affiche une notification.
     * 
     * @param {event} e - L'objet événement qui a déclenché la fonction.
     */
    const handleSave = (e) => {

        e.preventDefault()
         // Récupération des valeurs des champs du formulaire
        let inputFirstName = document.querySelector('#first-name').value;
        let inputLastName = document.querySelector('#last-name').value;
        let inputDateOfBirth = formatDateToMMDDYYYY(birthDate);
        let inputStartDate = formatDateToMMDDYYYY(startDate);
        let inputStreet = document.querySelector('#street').value;
        let inputCity = document.querySelector('#city').value;
        let inputState = selectedState ? selectedState.name : '';
        let inputZipCode = document.querySelector('#zip-code').value;
        let inputDepartment = selectedDepartment ? selectedDepartment.name : '';

        const newEmployee = {
            firstName: inputFirstName,
            lastName: inputLastName,
            dateOfBirth: inputDateOfBirth,
            startDate: inputStartDate,
            street: inputStreet,
            city: inputCity,
            state: inputState,
            zipCode: inputZipCode,
            department: inputDepartment,
        };

        // Vérification que tous les champs sont remplis
        if (
            inputFirstName &&
            inputLastName &&
            inputDateOfBirth &&
            inputStartDate &&
            inputStreet &&
            inputCity &&
            inputState &&
            inputZipCode &&
            inputDepartment 
        ) {
            console.log('Dispatching:', newEmployee);
            dispatch(addEmployee(newEmployee));

            // Affichage de la notification toast
            setToastVisible(true);
            setErrorVisible(false);
            // Réinitialisation des données du formulaire et des états liés
            setFormData({
                firstName: '',
                lastName: '',
                dateOfBirth: '',
                startDate: '',
                street: '',
                city: '',
                state: '',
                zipCode: '',
                department: '',
            });
            // Réinitialisation des sélecteurs de date et des sélections de state et de departement
            setBirthDate(new Date());
            setStartDate(new Date());
            setSelectedState(null);
            setSelectedDepartment(null);
        } else {
            setErrorVisible(true);
        }
    };

    // Crochets d'état pour les sélections de dates, initialisés à la date actuelle
    const [startDate, setStartDate] = useState(new Date());
    const [birthDate, setBirthDate] = useState(new Date());

    // Crochet d'état pour l'état sélectionné avec la valeur par défaut null, et les options d'états correspondantes
    const [selectedState, setSelectedState] = useState(null)
    const states = [
    {
        "name": "Alabama",
        "abbreviation": "AL"
    },
    {
        "name": "Alaska",
        "abbreviation": "AK"
    },
    {
        "name": "American Samoa",
        "abbreviation": "AS"
    },
    {
        "name": "Arizona",
        "abbreviation": "AZ"
    },
    {
        "name": "Arkansas",
        "abbreviation": "AR"
    },
    {
        "name": "California",
        "abbreviation": "CA"
    },
    {
        "name": "Colorado",
        "abbreviation": "CO"
    },
    {
        "name": "Connecticut",
        "abbreviation": "CT"
    },
    {
        "name": "Delaware",
        "abbreviation": "DE"
    },
    {
        "name": "District Of Columbia",
        "abbreviation": "DC"
    },
    {
        "name": "Federated States Of Micronesia",
        "abbreviation": "FM"
    },
    {
        "name": "Florida",
        "abbreviation": "FL"
    },
    {
        "name": "Georgia",
        "abbreviation": "GA"
    },
    {
        "name": "Guam",
        "abbreviation": "GU"
    },
    {
        "name": "Hawaii",
        "abbreviation": "HI"
    },
    {
        "name": "Idaho",
        "abbreviation": "ID"
    },
    {
        "name": "Illinois",
        "abbreviation": "IL"
    },
    {
        "name": "Indiana",
        "abbreviation": "IN"
    },
    {
        "name": "Iowa",
        "abbreviation": "IA"
    },
    {
        "name": "Kansas",
        "abbreviation": "KS"
    },
    {
        "name": "Kentucky",
        "abbreviation": "KY"
    },
    {
        "name": "Louisiana",
        "abbreviation": "LA"
    },
    {
        "name": "Maine",
        "abbreviation": "ME"
    },
    {
        "name": "Marshall Islands",
        "abbreviation": "MH"
    },
    {
        "name": "Maryland",
        "abbreviation": "MD"
    },
    {
        "name": "Massachusetts",
        "abbreviation": "MA"
    },
    {
        "name": "Michigan",
        "abbreviation": "MI"
    },
    {
        "name": "Minnesota",
        "abbreviation": "MN"
    },
    {
        "name": "Mississippi",
        "abbreviation": "MS"
    },
    {
        "name": "Missouri",
        "abbreviation": "MO"
    },
    {
        "name": "Montana",
        "abbreviation": "MT"
    },
    {
        "name": "Nebraska",
        "abbreviation": "NE"
    },
    {
        "name": "Nevada",
        "abbreviation": "NV"
    },
    {
        "name": "New Hampshire",
        "abbreviation": "NH"
    },
    {
        "name": "New Jersey",
        "abbreviation": "NJ"
    },
    {
        "name": "New Mexico",
        "abbreviation": "NM"
    },
    {
        "name": "New York",
        "abbreviation": "NY"
    },
    {
        "name": "North Carolina",
        "abbreviation": "NC"
    },
    {
        "name": "North Dakota",
        "abbreviation": "ND"
    },
    {
        "name": "Northern Mariana Islands",
        "abbreviation": "MP"
    },
    {
        "name": "Ohio",
        "abbreviation": "OH"
    },
    {
        "name": "Oklahoma",
        "abbreviation": "OK"
    },
    {
        "name": "Oregon",
        "abbreviation": "OR"
    },
    {
        "name": "Palau",
        "abbreviation": "PW"
    },
    {
        "name": "Pennsylvania",
        "abbreviation": "PA"
    },
    {
        "name": "Puerto Rico",
        "abbreviation": "PR"
    },
    {
        "name": "Rhode Island",
        "abbreviation": "RI"
    },
    {
        "name": "South Carolina",
        "abbreviation": "SC"
    },
    {
        "name": "South Dakota",
        "abbreviation": "SD"
    },
    {
        "name": "Tennessee",
        "abbreviation": "TN"
    },
    {
        "name": "Texas",
        "abbreviation": "TX"
    },
    {
        "name": "Utah",
        "abbreviation": "UT"
    },
    {
        "name": "Vermont",
        "abbreviation": "VT"
    },
    {
        "name": "Virgin Islands",
        "abbreviation": "VI"
    },
    {
        "name": "Virginia",
        "abbreviation": "VA"
    },
    {
        "name": "Washington",
        "abbreviation": "WA"
    },
    {
        "name": "West Virginia",
        "abbreviation": "WV"
    },
    {
        "name": "Wisconsin",
        "abbreviation": "WI"
    },
    {
        "name": "Wyoming",
        "abbreviation": "WY"
    }
    ];

    // Crochet d'état pour le département sélectionné avec la valeur par défaut null, et les options de départements correspondantes
    const [selectedDepartment, setSelectedDepartment] = useState(null) 
    const departments = [
    {"name": "Sales"},
    {"name": "Marketing"},
    {"name": "Engineering"},
    {"name": "Legal"},
    ]

    // Objet de style pour les composants déroulants
    const dropdownStyle = {
        textAlign: 'left',
    }



  return (
    <>
        <form onSubmit={handleSave} action="#" id="create-employee">
            <section className="form-title">
            <h2 className='title'>Create Employee</h2> 
            </section>
            <label htmlFor="first-name" className='labels'>First Name</label>
            <input type="text" id="first-name" className='inputs'
            value={formData.firstName}
            onChange={(e) => setFormData({...formData, firstName: e.target.value})} />

            <label htmlFor="last-name" className='labels'>Last Name</label>
            <input type="text" id="last-name" className='inputs'
            value={formData.lastName}
            onChange={(e) => setFormData({...formData, lastName: e.target.value})}/>

            <label htmlFor="date-of-birth" className='labels'>Date of Birth</label>
            <Calendar 
            showIcon
            value={birthDate} 
            onChange={(e) => setBirthDate(e.value)}
            dateFormat="dd/mm/yy"
            id='date-of-birth'
            className='calendar-inputs' />

            <label htmlFor="start-date" className='labels'>Start Date</label>
            <Calendar 
            showIcon
            value={startDate} 
            onChange={(e) => setStartDate(e.value)}
            dateFormat="dd/mm/yy"
            id='start-date'
            className='calendar-inputs' />

            <fieldset className="address">
            <legend>Address</legend>

            <label htmlFor="street" className='labels'>Street</label>
            <input id="street" type="text" className='large-inputs'
            value={formData.street}
            onChange={(e) => setFormData({...formData, street: e.target.value})}/>

            <label htmlFor="city" className='labels'>City</label>
            <input id="city" type="text" className='large-inputs'
            value={formData.city}
            onChange={(e) => setFormData({...formData, city: e.target.value})}/>

            <label htmlFor="state" className='labels'>State</label>
            <Dropdown 
                value={selectedState} 
                onChange={(e) => setSelectedState(e.value)} 
                options={states} optionLabel="name" 
                placeholder="Select a State"
                style={dropdownStyle}
                id='state'
                className="large-inputs w-full md:w-14rem" />

            <label htmlFor="zip-code" className='labels'>Zip Code</label>
            <input id="zip-code" type="number" className='large-inputs'
            value={formData.zipCode}
            onChange={(e) => setFormData({...formData, zipCode: e.target.value})}/>
            </fieldset>

            <label htmlFor="department" className='labels'>Department</label>
            <Dropdown 
                value={selectedDepartment} 
                onChange={(e) => setSelectedDepartment(e.value)} 
                options={departments} optionLabel="name" 
                placeholder="Select a Department"
                style={dropdownStyle}
                id='department'
                className="large-inputs w-full md:w-14rem" />
            <button type="submit" className='button'>Save</button>
            {isErrorVisible && <div className='error-modal'>
            <p className='error-message'>Please fill out all fields in the form</p>
            </div>}
        </form>
        {isToastVisible && <ModalToast 
        message="Employee added successfully !" 
        isVisible={isToastVisible} 
        backgroundColor='#199260'
        timerColor='#7fca00'
        onClose={() => setToastVisible(false)} />}
    </>
  );
}

export default EmployeeForm;