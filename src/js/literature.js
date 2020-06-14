

nav.addEventListener('click', (e) => {

    const commercialLit = e.target.closest('#commercial-lit-link')
    const medicalLit = e.target.closest('#medical-lit-link')

    if(commercialLit){
        showContentAndCloseNav()

        contentContainer.innerHTML = `
            <div class="literature">
                <div class="literature__container">
                        <div class="literature__container__text ">
                            <p id="literature-title">Literaturegi </p>
                            <p id="literature-info">Select a piece of literature below to view.</p>
                        </div>
                    
                </div>

            </div>
        `

    }else if(medicalLit) {
        showContentAndCloseNav()

        contentContainer.innerHTML = `
            <div class="literature">
                <div class="literature__container">
                        <div class="literature__container__text ">
                            <p id="literature-title">Literature</p>
                            <p id="literature-info">Select a piece of literature below to view.</p>
                        </div>
                    
                </div>

            </div>
        `
    }
})