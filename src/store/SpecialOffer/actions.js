import axios from "axios";

export const getData = ({commit}) => {

                axios.get("https://mapis.namaatests.com/api/product/18")

                   .then((response) => {

                    commit("all_Data", response);
    
                   console.log(response);
                  
                }).catch((error) => {   console.log(error);   });
}