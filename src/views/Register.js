import React, { useEffect, useState } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow,
  CFormGroup,
  CLabel,
  CSelect
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

import useApi from '../services/api';

const Register = () => {
  const api = useApi();

  const [ courseList, setCourseList ] = useState([]);
  const [ courseId, setCourseId ] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCourse();
  }, []);

  const getCourse = async () => {
    setLoading(true);
    const result = await api.getCourses;
    console.log(result)
    setLoading(false);
    if (result.error === '') {
      setCourseList(result.list);
    } else {
      alert(result.error);
    }
  }

  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="9" lg="7" xl="6">
            <CCard className="mx-4">
              <CCardBody className="p-4">
                <CForm>
                  <h1>Cadastro</h1>
                  <p className="text-muted">Olá, preencha todos os dados corretamente!</p>
                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-user" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput type="text" placeholder="Usúario" />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>N</CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput type="text" placeholder="Nome" />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>@</CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput type="text" placeholder="Email" />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>C</CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput type="text" placeholder="CPF" />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-lock-locked" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput type="password" placeholder="Sua senha" />
                  </CInputGroup>
                  <CInputGroup className="mb-4">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-lock-locked" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput type="password" placeholder="Repetir senha" />
                  </CInputGroup>
                  <CFormGroup>
                    <CLabel htmlFor="course">Seu Curso</CLabel>
                    <CSelect
                      id="course"
                      custom
                      onChange={e => setCourseId(e.target.value)}
                      value={courseId}
                    >
                      {courseList.map((item, index) => (
                        <option
                          key={index}
                          value={item.id}
                        >
                          {item.name}
                        </option>
                      ))}
                    </CSelect>
                  </CFormGroup>
                  <CButton color="success" block>Ser Associado!</CButton>
                </CForm>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Register