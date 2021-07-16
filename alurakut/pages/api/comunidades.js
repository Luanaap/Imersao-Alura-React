import { SiteClient } from 'datocms-client';

export default async function recebedorDeRequest(request, response){ 


    if(request.method === 'POST'){
        const TOKEN = 'b43f02c0dcaa8440deca1c004538ea';
        const client = new SiteClient(TOKEN);
        
        //Validar os dados antes de sair cadastrando 
         const registroCriado = await client.items.create({
            itemType: "972677", //ID do Model de "Communities" criado pelo Dato
            ...request.body,
            // title: "Comunidade de Teste",
            // imageUrl: "https://github.com/Luanaap.png",
            // creatorSlug: "Luanaap"
        })

        console.log(registroCriado);
    
        console.log(TOKEN);
        response.json({
            dados:'Algum dado qualquer',
            registroCriado: registroCriado,
        })
        return;
    }
    
    response.status(404).json({
        message: 'Ainda não temos nada no GET, mas no POST tem!'
    })

}