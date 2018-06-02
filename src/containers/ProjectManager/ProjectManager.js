import React, {Component} from 'react';
import axios from 'axios';

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
            beneficiaryOutput = <p>Beneficjenci {this.state.beneficiaries[0].name}</p>
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