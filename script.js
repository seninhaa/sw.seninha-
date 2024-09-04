const avanca= document.querySelectorAll('.btn-proximo');

avanca.forEach(bottun=> {
    bottun.addEventListener('click', function(){
        const atual= document.querySelector('.ativo')
        const proximoPasso = 'passo-' + this.getAtribute('data-proximo');

        atual.classList.remove('ativo');
        document.getElementById(proximo).classList.add('ativo');

    } )
})