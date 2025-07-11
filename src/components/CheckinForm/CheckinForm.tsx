import { useForm, type SubmitHandler } from 'react-hook-form';
import { CheckinButton } from '../CheckinButton/CheckinButton';
import HandleSubmit from '../../services/handleForm';

<<<<<<< HEAD
// Style 
import {
  Container,
  Title,
  FormBox,
  FormGrid,
  InputGroup,
  Label,
  Input,
} from '../../styles/CheckinForm.styles';
=======
const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.lg};

  @media (max-width: 768px) {
    padding: ${({ theme }) => theme.spacing.md};
  }

  @media (max-width: 480px) {
    padding: ${({ theme }) => theme.spacing.sm};
  }
`;


const Title = styled.h2`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.blueDark};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const FormBox = styled.form`
  background-color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing.lg};
  width: 100%;
  max-width: 1100px;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};
`;

const FormGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.xl};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;


const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-size: 0.95rem;
  font-weight: 500;
  color: #333;
  margin-bottom: 4px;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  border: none;
  box-shadow: 0 6px 12px -2px ${({ theme }) => theme.colors.pinkShadow}80;
  background-color: ${({ theme }) => theme.colors.greyLight};
  border-radius: 100px;
  font-size: 1rem;
  outline-color: #aaa;

  &::placeholder {
    color: #aaa;
  }
`;
>>>>>>> 5af6a04e224fc7c9b10e80f4c772867718b2c351

type Inputs = {
  name: string;
  cpf: string;
  birthDate: string;
  phoneNumber: string;
  zipCode: string;
  street: string;
  complement: string;
  number: string;
  city: string;
  state: string;
};

const CheckinForm = () => {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const handle = new HandleSubmit()
    const response = await handle.execute(data)
    alert(response.message)

const CheckinForm = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    if (form.checkValidity()) {
      const formData = new FormData(form);
      const dados = Object.fromEntries(formData.entries());
      console.log('✅ Dados válidos:', dados);
      alert('Check-in realizado com sucesso!');
      form.reset();
    } else {
      form.reportValidity();
    }
  };

  return (
    <Container>
      <Title>Confira e preencha seus dados</Title>
      <FormBox onSubmit={handleSubmit(onSubmit)}>
      <FormBox onSubmit={handleSubmit} noValidate>
        <FormGrid>
          <InputGroup>
            <Label htmlFor="nome">Nome completo</Label>
            <Input
              id="name"
              placeholder="Digite seu "
              title="Digite seu  corretamente (pelo menos uma letra)"
              {...register('name')}
              id="nome"
              name="nome"
              placeholder="Digite seu nome"
              required
              pattern=".*[A-Za-z]+.*"
              title="Digite seu nome corretamente (pelo menos uma letra)"
            />
          </InputGroup>

          <InputGroup>
            <Label htmlFor="cep">CEP</Label>
            <Input
              id="cep"
              placeholder="Digite o CEP"
              title="Digite o CEP com 8 números"
              {...register('zipCode')}
              name="cep"
              placeholder="Digite o CEP"
              required
              pattern="\d{8}"
              title="Digite o CEP com 8 números"
            />
          </InputGroup>

          <InputGroup>
            <Label htmlFor="cpf">CPF</Label>
            <Input
              id="cpf"
              placeholder="Digite seu CPF"
              title="Digite os 11 números do CPF sem ponto ou traço"
              {...register('cpf')}
              name="cpf"
              placeholder="Digite seu CPF"
              required
              pattern="\d{11}"
              title="Digite os 11 números do CPF sem ponto ou traço"
            />
          </InputGroup>

          <InputGroup>
            <Label htmlFor="endereco">Endereço</Label>
            <Input
              id="endereco"
              placeholder="Digite seu endereço"
              title="Preencha o endereço"
              {...register('street')}
              name="endereco"
              placeholder="Digite seu endereço"
              required
              title="Preencha o endereço"
            />
          </InputGroup>

          <InputGroup>
            <Label htmlFor="nascimento">Data de Nascimento</Label>
            <Input
              id="nascimento"
              type="date"
              title="Informe a data de nascimento"
              {...register('birthDate')}
              name="nascimento"
              type="date"
              required
              title="Informe a data de nascimento"
            />
          </InputGroup>

          <InputGroup>
            <Label htmlFor="numero">Número</Label>
            <Input
              id="numero"
              placeholder="Digite o número"
              title="Informe o número"
              {...register('number')}
              name="numero"
              placeholder="Digite o número"
              required
              title="Informe o número"
            />
          </InputGroup>

          <InputGroup>
            <Label htmlFor="telefone">Telefone (Whatsapp)</Label>
            <Input
              id="telefone"
              placeholder="(11) 91234-5678"
              title="Digite um telefone válido com DDD"
              {...register('phoneNumber')}
              name="telefone"
              placeholder="(11) 91234-5678"
              required
              pattern="\(?\d{2}\)?[\s-]?\d{4,5}-?\d{4}"
              title="Digite um telefone válido com DDD"
            />
          </InputGroup>

          <InputGroup>
            <Label htmlFor="complemento">Complemento</Label>
            <Input id="complemento"
              placeholder="Opcional"
              {...register('complement')}
            />
            <Input id="complemento" name="complemento" placeholder="Opcional" />
          </InputGroup>

          <InputGroup>
            <Label htmlFor="cidade">Cidade</Label>
            <Input
              id="cidade"
              placeholder="Digite a cidade"
              title="Use apenas letras e espaços"
              {...register('city')}
              name="cidade"
              placeholder="Digite a cidade"
              required
              pattern="^[A-Za-zÀ-ú\s]+$"
              title="Use apenas letras e espaços"
            />
          </InputGroup>

          <InputGroup>
            <Label htmlFor="estado">Estado</Label>
            <Input
              id="estado"
              placeholder="Digite o estado"
              title="Use apenas letras e espaços"
              {...register('state')}
              name="estado"
              placeholder="Digite o estado"
              required
              pattern="^[A-Za-zÀ-ú\s]+$"
              title="Use apenas letras e espaços"
            />
          </InputGroup>
        </FormGrid>

        <CheckinButton type="submit">Realizar Check-in</CheckinButton>
      </FormBox>
    </Container>
  );
};

export default CheckinForm;
