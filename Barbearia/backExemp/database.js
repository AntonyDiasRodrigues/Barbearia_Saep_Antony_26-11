import postgres from 'postgres';
const sql = postgres('postgres://postgres:SesiSenaisp@localhost:5432/saep_pratico');
//trocar apenas /mecanica para o nome do BD
//verificar node_modules e se está na pasta correta
export default sql;