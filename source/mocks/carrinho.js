import topo from '../../assets/topo.png';
import logoVendedor from '../../assets/logo.png';

import antena2g from '../../assets/Itens/antena2g3g.png';
import antenaWifi from '../../assets/Itens/antenaWifi.png';
import modem from '../../assets/Itens/modem.png';
import node from '../../assets/Itens/nodeMcu.png';
import mouse from '../../assets/Itens/mouse.png';
import teclado from '../../assets/Itens/teclado.png';
import headset from '../../assets/Itens/headset.png';
import ssd from '../../assets/Itens/ssd.png'


const carrinho = {
    topo: {
        titulo: "Carrinho",
        imagem: topo,

    },

    detalhes: {
        titulo: "Detalhes do Carrinho",
        nomeProduto:"Kit IoT",
        descricao:"Um que que revoluciona a vida dos estudantes!",
        logoVendedor: logoVendedor,
        nomeVendedor:"Nuvem's Shopping",
        precoAntigo:"R$ 189,99",
        precoNovo:"R$ 99,90",
    },

    itens: {
        titulo: "Itens do Carrinho",
        lista: [
            {
                nome: "Antena 2g/3g",
                imagem: antena2g
            },

            {
                nome: "Antena Wifi",
                imagem: antenaWifi
            },

            {
                nome: "Modem",
                imagem: modem
            },

            {
                nome: "Node MCU",
                imagem: node
            }
        ],
        titulo2: "Footer",
        lista2: [
            {
                nome: "Mouse 12000 DPI",
                imagem: mouse
            },

            {
                nome: "Teclado Mecânico",
                imagem: teclado
            },

            {
                nome: "Headset 7.1",
                imagem: headset
            },

            {
                nome: "SSD Samsung NVME m.2",
                imagem: ssd
            }
        ]
    }
}

export default carrinho;