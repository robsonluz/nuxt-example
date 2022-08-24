<template>
    <div>
        <section class="hero is-primary">
            <div class="hero-body">
                <p class="title">
                    Imagens
                </p>
                <p class="subtitle">
                    Exemplo de utilização de imagens
                </p>
            </div>
        </section>

        <!-- imagem ocupando todo o espaço lateral -->
        <!-- as imagens devem ser colocadas na pasta assets -->
        <b-image
            :src="require('@/assets/img-1.png')"
            alt="Texto descrevendo a image m"
        ></b-image>


        <div class="columns">
            <div class="column is-3">
                <!-- imagem com tamanho lateral limitado pelo tamanho da coluna -->
                <b-image
                    :src="require('@/assets/img-1.png')"
                    alt="Texto descrevendo a image m"
                ></b-image>
            </div>
        </div>

        <a href="https://buefy.org/documentation/image" target="_blank">Componente b-image</a>

    </div>
</template>