import { useEffect, useState } from "react";
import { useCarDataMutate } from "../../hooks/useCarDataMutate";
import { CarData } from "../../interface/CarData";
import "./modal.css";

interface InputProps{
    label: string,
    value: string | number,
    updateValue(value: any):void
}

interface ModalProps{
    closeModal(): void;
}

const Input = ({label,value,updateValue}: InputProps)=>{
    return (
        <>
            <label>{label}</label>
            <input value={value} onChange={event => updateValue(event.target.value)}></input>
        </>
    )
}

export function CreateModal({ closeModal }: ModalProps) {

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [image, setImage] = useState("");
    const mutation = useCarDataMutate();

    const submit = () => {
        const carData: CarData = {
            title, price, image
        }
        mutation.mutate(carData);
    };
    useEffect(() => {
        if (mutation.isSuccess) {
            closeModal();
        }
    }, [mutation.isSuccess, closeModal])

    return (
        <div className="modal-overlay">
            <div className="modal-body">
                <h2>Cadastre um Novo Item no Catalogo</h2>
                <form className="input-container">
                    <Input label="title" value={title} updateValue={setTitle}></Input>
                    <Input label="price" value={price} updateValue={setPrice}></Input>
                    <Input label="image" value={image} updateValue={setImage}></Input>
                </form>
                <button onClick={submit} className="btn-secondary">
                    {!['error', 'idle', 'pending', 'success'].includes(mutation.status) ? 'Postando..' : 'Postar'}
                </button>
            </div>
        </div>
    );
}
