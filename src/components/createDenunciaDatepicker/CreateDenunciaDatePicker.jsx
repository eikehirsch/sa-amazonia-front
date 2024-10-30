import React, { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ptBR } from 'date-fns/locale';
import { registerLocale } from 'react-datepicker';

registerLocale('pt-BR', ptBR);


import "react-datepicker/dist/react-datepicker.css";
import "./CreateDenunciaDatePicker.css"

function CreateDenunciaDatePicker({dateDenuncia, setDateDenuncia}) {

    return (
        <DatePicker className="custom-datepicker" locale="pt-BR" dateFormat="dd/MM/yyyy" selected={dateDenuncia} onChange={(date) => setDateDenuncia(date)} />
    );
}

export default CreateDenunciaDatePicker