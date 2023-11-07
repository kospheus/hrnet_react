import React, { useState } from 'react';
import { Calendar } from 'primereact/calendar';
import { Dropdown } from 'primereact/dropdown';
import { ModalToast } from '@kospheus/modal-toast';
import "react-datepicker/dist/react-datepicker.css";
import "primereact/resources/themes/tailwind-light/theme.css";
import './form.css';

function EmployeeForm() {

    let storedData = localStorage.getItem('employeeList');
    let employeeList = (storedData && storedData !== 'null' && storedData !== '') ? JSON.parse(storedData) : [];

    localStorage.setItem('employeeList', JSON.stringify(employeeList));

    const [isToastVisible, setToastVisible] = useState(false);

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

    function formatDateToMMDDYYYY(isoDate) {
        const date = new Date(isoDate);
        const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Les mois sont de 0 à 11, donc on ajoute 1
        const day = date.getDate().toString().padStart(2, '0');
        const year = date.getFullYear();
        return `${month}/${day}/${year}`;
    }

    // const [showToast, setShowToast] = useState(false);

    const handleSave = (e) => {

        e.preventDefault()
        let inputFirstName = document.querySelector('#first-name').value;
        let inputLastName = document.querySelector('#last-name').value;
        let inputDateOfBirth = formatDateToMMDDYYYY(birthDate);
        let inputStartDate = formatDateToMMDDYYYY(startDate);
        let inputStreet = document.querySelector('#street').value;
        let inputCity = document.querySelector('#city').value;
        let inputState = selectedState.name;
        let inputZipCode = document.querySelector('#zip-code').value;
        let inputDepartment = selectedDepartment.name;

        // Vérifiez si tous les champs sont remplis
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
            setFormData((state) => {
                state.firstName = inputFirstName;
                state.lastName = inputLastName;
                state.dateOfBirth = inputDateOfBirth;
                state.startDate = inputStartDate;
                state.street = inputStreet;
                state.city = inputCity;
                state.state = inputState;
                state.zipCode = inputZipCode;
                state.department = inputDepartment;
                });
            employeeList.push(formData);
            localStorage.setItem('employeeList', JSON.stringify(employeeList));
            setToastVisible(true);
            console.log(employeeList);

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
            setBirthDate(new Date());
            setStartDate(new Date());
            setSelectedState(null);
            setSelectedDepartment(null);
        }
    };


    // * pour les datepickers
    const [startDate, setStartDate] = useState(new Date());
    const [birthDate, setBirthDate] = useState(new Date());

    // * pour le select State
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

    // * pour le select Department
    const [selectedDepartment, setSelectedDepartment] = useState(null) 
    const departments = [
    {"name": "Sales"},
    {"name": "Marketing"},
    {"name": "Engineering"},
    {"name": "Legal"},
    ]

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
        </form>
        {isToastVisible && <ModalToast 
        message="Employee added successfully !" 
        isVisible={isToastVisible} 
        onClose={() => setToastVisible(false)} />}
    </>
  );
}

export default EmployeeForm;