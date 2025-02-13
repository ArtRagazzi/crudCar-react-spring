import axios, {AxiosPromise} from "axios";
import { CarData } from "../interface/CarData";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const API_URL = "http://localhost:8080";
const postData = async (data: CarData): AxiosPromise<any> =>{
    const response = await axios.post(API_URL + '/car',data);
    return response;



}
export function useCarDataMutate(){

    const queryClient = useQueryClient();
    const mutate = useMutation({
        mutationFn: postData,
        retry: 2,
        onSuccess: ()=>{
            queryClient.invalidateQueries({ queryKey: ['car-data'] });
        }
    })
    return mutate
}