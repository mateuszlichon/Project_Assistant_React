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
            console.log(this.state.beneficiaries[0].name);
            beneficiaryOutput = this.state.beneficiaries.map(beneficiary => {
                return <Beneficiary key={beneficiary.id} name={beneficiary.name}/>
            });
        }
        return (

            <div>
                {beneficiaryOutput}
                <p>Projekty</p>
                <p>Zadania</p>
            </div>

        )
    }
} 

export default ProjectManager;