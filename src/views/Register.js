import React, { useEffect, useState } from 'react'
import { useHistory, Link } from 'react-router-dom';
import {
  CButton,
  CCard,
  CAlert,
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
  const history = useHistory();

  const [courseList, setCourseList] = useState([]);
  const [courseId, setCourseId] = useState(0);
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    getCourse();
  }, []);

  const getCourse = async () => {
    setLoading(true);
    const result = await api.getCourses();
    setLoading(false);
    if (result.error === '') {
      setCourseList(result.list);

    } else {
      alert(result.error);
    }
  }

  const handleSave = async () => {
    if (email) {
      let admin = '0';
      setLoading(true);
      let data = {
        username: username,
        name: name,
        email: email,
        cpf: cpf,
        password: password,
        password_confirm: passwordConfirm,
        id_course: courseId,
        admin: admin
      }
      const result = await api.register(data);
      setLoading(false)
      if (result.error === "") {
        localStorage.setItem('token', result.token);
        history.push('/');
      } else {
        alert(result.error);
      }
    } else {
      alert("Preencha os campos!")
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
                  {error !== '' &&
                      <CAlert color="danger">{error}</CAlert>
                    }
                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-user" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput
                    type="text"
                    placeholder="Usúario"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>N</CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput 
                    type="text" 
                    placeholder="Nome"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>@</CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput 
                    type="text" 
                    placeholder="Email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>C</CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput type="text" placeholder="CPF"
                    value={cpf}
                    onChange={e => setCpf(e.target.value)}
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-lock-locked" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput type="password" placeholder="Sua senha"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                     />
                  </CInputGroup>
                  <CInputGroup className="mb-4">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-lock-locked" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput type="password" placeholder="Repetir senha"
                    value={passwordConfirm}
                    onChange={e => setPasswordConfirm(e.target.value)} 
                    />
                  </CInputGroup>
                  <CFormGroup>
                    <CLabel htmlFor="course">Seu Curso</CLabel>
                    <CSelect
                      id="course"
                      custom
                      onChange={e => setCourseId(e.target.value)}
                      value={courseId}
                      disabled={courseList.length === 0}
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
                  <CButton color="success" block
                    onClick={handleSave}
                  >
                    {loading ? "Carregando..." : "Ser Associado!"}
                  </CButton>
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