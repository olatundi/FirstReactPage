import axios from  'axios';

class DataService {

    retrievefindRecords(id){
        return axios.get(`http://localhost:8080/show/${id}`)
    }
    retrieveShowRecords(id){
        return axios.get(`http://localhost:8080/show/${id}`)
    }
    retrieveShowAllRecords(){
        return axios.get(`http://localhost:8080/showAll`)
    }

    deleteRecord(id){
        return axios.delete(`http://localhost:8080/delete/${id}`)
    }

    updateRecord(id,name, city){
        return axios.post(`http://localhost:8080/update/${id}/${name}/${city}`)
    }

    updateRecord2(id){
        return axios.post(`http://localhost:8080/update2/${id}/`)
    }

    createRecord(name,city){
        return axios.post(`http://localhost:8080/create/${name}/${city}`)
    }

    createRecord2(){
        return axios.post(`http://localhost:8080/create2/`)
    }


}

export default new DataService()
