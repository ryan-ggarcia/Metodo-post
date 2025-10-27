import express from 'express'
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.write(`
            <html>
                <head>
                    <meta charset="UTF-8">
                    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossorigin="anonymous">
                    <title>Minha Primeira Página</title>
                </head>
                <body>
                  <nav class="navbar navbar-expand-lg bg-body-tertiary">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="#">Navbar</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Cadastros
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="/cadastros">Usuarios</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><hr class="dropdown-divider"></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="logout">Sair</a>
                            </li>
                        </ul>
                        </div>
                    </div>
                    </nav>
                    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js" integrity="sha384-FKyoEForCGlyvwx9Hj09JcYn3nv7wiPVlz7YYwJrWVcXK/BmnVDxM+D2scQbITxI" crossorigin="anonymous"></script>
                </body>
            </html>
        `)
})

app.get('/cadastros', (req,res)=>{
    res.send(`
                 <html>
                <head>
                    <meta charset="UTF-8">
                    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossorigin="anonymous">
                    <title>Minha Primeira Página</title>
                </head>
                <body>
                <h1> Cadastro de Clientes</h1>
                 <form class="row g-3 needs-validation" novalidate>
                    <div class="col-md-4">
                        <label for="txt" class="form-label">Nome</label>
                        <!-- O atributo 'id' identifica um elemento html na pagina para o servidor --!>
                        <!-- O atributo 'name' rotula o conteudo que esse elemento armazena para o destinatario --!>

                        <input type="text" class="form-control" id="nome" name="nome" placehouder="Mark" required>
                        <div class="invalid-feedback">
                            Preencha o nome do usuario !
                        </div>
                    </div>
                    <div class="col-md-4">
                        <label for="txt" class="form-label">Sobrenome</label>
                        <input type="text" class="form-control" id="sbNome" value="Otto" required>
                        <div class="invalid-feedback">
                        Preencha o sobrenome do usuario !
                        </div>
                    </div>
                    <div class="col-md-4">
                        <label for="text" class="form-label">Email</label>
                        <div class="input-group has-validation">
                        <span class="input-group-text" id="inputGroupPrepend">@</span>
                        <input type="text" class="form-control" id="email" name="email" aria-describedby="inputGroupPrepend" required>
                        <div class="invalid-feedback">
                            Preencha o email !!
                        </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <label for="txt" class="form-label">Cidade</label>
                        <input type="text" class="form-control" id="cidade" name="cidade" required>
                        <div class="invalid-feedback">
                        Preencha a cidade !
                        </div>
                    </div>
                    <div class="col-md-3">
                        <label for="txt" class="form-label">UF</label>
                        <select class="form-select" id="uf" name=""uf required>
                            <option selected disabled value="">Escolha</option>
                            <option value="AC">Acre</option>
                            <option value="AL">Alagoas</option>
                            <option value="AP">Amapá</option>
                            <option value="AM">Amazonas</option>
                            <option value="BA">Bahia</option>
                            <option value="CE">Ceará</option>
                            <option value="DF">Distrito Federal</option>
                            <option value="ES">Espírito Santo</option>
                            <option value="GO">Goiás</option>
                            <option value="MA">Maranhão</option>
                            <option value="MT">Mato Grosso</option>
                            <option value="MS">Mato Grosso do Sul</option>
                            <option value="MG">Minas Gerais</option>
                            <option value="PA">Pará</option>
                            <option value="PB">Paraíba</option>
                            <option value="PR">Paraná</option>
                            <option value="PE">Pernambuco</option>
                            <option value="PI">Piauí</option>
                            <option value="RJ">Rio de Janeiro</option>
                            <option value="RN">Rio Grande do Norte</option>
                            <option value="RS">Rio Grande do Sul</option>
                            <option value="RO">Rondônia</option>
                            <option value="RR">Roraima</option>
                            <option value="SC">Santa Catarina</option>
                            <option value="SP">São Paulo</option>
                            <option value="SE">Sergipe</option>
                            <option value="TO">Tocantins</option>
                        </select>
                        <div class="invalid-feedback">
                            Selecione um estado!!
                        </div>
                    </div>
                    <div class="col-md-3">
                        <label for="validationCustom05" class="form-label">Cep</label>
                        <input type="number" class="form-control" id="cep" name="cep" required>
                        <div class="invalid-feedback">
                        Please provide a valid cep.
                        </div>
                    </div>
                    <div class="col-12">
                        <button class="btn btn-primary" type="submit">Cadastrar</button>
                        <a class="btn btn-primary" href="/">Voltar</a>
                    </div>
                </form>
                    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js" integrity="sha384-FKyoEForCGlyvwx9Hj09JcYn3nv7wiPVlz7YYwJrWVcXK/BmnVDxM+D2scQbITxI" crossorigin="anonymous"></script>
                    <script>
                    // Example starter JavaScript for disabling form submissions if there are invalid fields
                        (() => {
                        'use strict'

                        // Fetch all the forms we want to apply custom Bootstrap validation styles to
                        const forms = document.querySelectorAll('.needs-validation')

                        // Loop over them and prevent submission
                        Array.from(forms).forEach(form => {
                            form.addEventListener('submit', event => {
                            if (!form.checkValidity()) {
                                event.preventDefault()
                                event.stopPropagation()
                            }

                            form.classList.add('was-validated')
                            }, false)
                        })
                        })()
                    </script>
                </body>
            </html>
        `)
})

app.listen(port, () => {
    console.log(`Servidor Online na porta: ${port}`)
})



// parada em 56:34 video aula!