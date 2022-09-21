<template>
    <div>

        <section>

            <b-field label="Nome">
                <b-input></b-input>
            </b-field>

            <b-field label="E-mail">
                <b-input type="email"></b-input>
            </b-field>

            <b-field label="Senha">
                <b-input type="password" password-reveal></b-input>
            </b-field>

            <b-field label="Descrição">
                <b-input maxlength="200" type="textarea"></b-input>
            </b-field>

            <b-field label="Número">
                <b-numberinput v-model="number"></b-numberinput>
            </b-field>

            <b-field label="Data">
                <b-datepicker placeholder="Selecione uma data...">
                </b-datepicker>
            </b-field>    
            
            <b-field label="Data/Hora">
                <b-datetimepicker placeholder="Selecione uma data...">
                </b-datetimepicker>
            </b-field>     
            
            <b-field label="Cidade">
                <b-select placeholder="Selecione uma cidade" expanded>
                    <option>
                        Curitiba
                    </option>
                    <option>
                        Campo Largo
                    </option>      
                    <option>
                        Guarapuava
                    </option>                                  
                </b-select>
            </b-field>       
            
            <b-field label="Slider">
                <b-slider :value="45" :min="1" :max="100"></b-slider>
            </b-field>            

            <b-field label="Estado civil">
                <div class="block">
                    <b-radio v-model="radio"
                        name="estadoCivil"
                        native-value="Solteiro">
                        Solteiro
                    </b-radio>
                    <b-radio v-model="radio"
                        name="estadoCivil"
                        native-value="Casado">
                        Casado
                    </b-radio>
                    <b-radio v-model="radio"
                        name="estadoCivil"
                        native-value="Divorciado">
                        Divorciado
                    </b-radio>
                </div>            
            </b-field>

            <b-field>
                <b-checkbox>Ativo</b-checkbox>
            </b-field>

            <b-field>
                <b-switch>Switch</b-switch>
            </b-field>         
            
            <b-rate custom-text="Rate" :max="5"></b-rate>            

            <b-field>
                <b-upload v-model="dropFiles"
                    multiple
                    drag-drop>
                    <section class="section">
                        <div class="content has-text-centered">
                            <p>
                                <b-icon
                                    icon="upload"
                                    size="is-large">
                                </b-icon>
                            </p>
                            <p>Arraste seus arquivos aqui para fazer upload</p>
                        </div>
                    </section>
                </b-upload>
            </b-field>            


            <b-button type="is-primary">Salvar</b-button>
            <b-button type="is-default">Cancelar</b-button>
        </section>

    </div>
</template>