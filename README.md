# Banco de Dados de Livraria

## Descrição do Projeto

Implementei um banco de dados para uma livraria, abrangendo a criação de tabelas, relacionamentos e consultas SQL. O objetivo é modelar e manipular dados de autores, livros, categorias e informações de contato, seguindo as instruções fornecidas.

### Funcionalidades Principais

1. **Criação do Banco de Dados e Tabelas:**
   - Criação da pasta "sql" e do arquivo "database.sql" para a definição do banco de dados e suas tabelas.
   - Estabelecimento de relacionamentos entre tabelas com chaves estrangeiras, definindo cláusulas "ON DELETE" adequadas.

2. **Inserção de Dados:**
   - Criação do arquivo "insertData.sql" para inserção de dados nas tabelas "authors," "books," "categories," "books_categories," e "contact_infos."
   - Utilização da cláusula "RETURNING" para obter resultados das inserções.

3. **Leitura de Dados:**
   - Desenvolvimento do arquivo "selectData.sql" para consultas SQL, incluindo leitura de todos os livros, livros de uma categoria específica e informações detalhadas sobre livros e autores.

4. **Atualização de Dados:**
   - Elaboração do arquivo "updateData.sql" para atualizações, como a mudança do nome de um livro e a associação de autores a volumes específicos de uma série.

5. **Exclusão de Dados:**
   - Criação do arquivo "deleteData.sql" para exclusão de registros, contemplando a remoção de um livro e autores específicos.

6. **Execução dos Comandos:**
   - Orientação para executar os comandos SQL na ordem especificada, garantindo a correta implementação e ausência de erros sintáticos.
