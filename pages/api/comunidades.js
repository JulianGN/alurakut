// arquivo criado como BFF (Backend for Frontend), deixando o token seguro
import { SiteClient } from 'datocms-client'

export default async function recebeRequest(request, response){

    if(request.method === 'POST'){
        const TOKEN = '3481e7e55e4d53be055a38e3b50a47';
        const client = new SiteClient(TOKEN)
        const registroCriado = await client.items.create({
            itemType: '967238',
            // title: 'Primeira comunidade',
            // imageUrl: 'http://placehold.it/1080x1080',
            // creatorSlug: 'juliangn',
            ...request.body, 
        })
    
        response.json({
            dados: 'Teste',
            registroCriado: registroCriado,
        })
        return;
    }

    response.status(404).json({
        message: 'Para inserir comunidades, utilize o formulário de envio'
    })
}