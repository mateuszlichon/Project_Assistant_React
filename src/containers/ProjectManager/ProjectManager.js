import React, {Component} from 'react';
import axios from 'axios';

import Beneficiary from '../../components/Beneficiary/Beneficiary';

class ProjectManager extends Component {
    state = {
        beneficiaries: []
    }

    componentDidMount() {
        axios.get('http://localhost:8080/beneficiaries')
            .then(response => {
                const beneficiaries = response.data;
                this.setState({beneficiaries : beneficiaries});
                console.log(beneficiaries);
            });
    }

    render() {
        let beneficiaryOutput = <p>Brak beneficjentów w bazie danych</p>
        if (this.state.beneficiaries.length > 0) {
            beneficiaryOutput = this.state.beneficiaries.map(beneficiary => {
                return <Beneficiary key={beneficiary.id} name={beneficiary.name}/>
            });
        }
        return (

            <div>
                <div className="card-deck">{beneficiaryOutput}</div>
                <p>Projekty</p>
                <p>Zadania</p>
            </div>

        )
    }
} 

export default ProjectManager;