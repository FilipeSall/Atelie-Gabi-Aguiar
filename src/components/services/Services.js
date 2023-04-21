import React from 'react';
import styles from './Services.module.css';
import 'react-toastify/dist/ReactToastify.css';
import InfoBtn from '../link/InfoBtn';

function Services() {

    return (
        <main className={styles.container}>
         <h1 className={`${styles.tableTitle} ${styles.fadeIn}`}>Cilios</h1>
            <table className={styles.table1}>
                <thead>
                    <tr>
                        <th>Along</th>
                        <th>1º vez</th>
                        <th>15 dias</th>
                        <th>20 dias</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            Classico
                            <InfoBtn modalInfo='O alongamento clássico é uma técnica de extensão de cílios que envolve a aplicação de um único cílio sintético a cada cílio natural. Isso proporciona um visual mais suave e natural, melhorando o comprimento e a curvatura dos cílios existentes.'/>
                        </td>
                        <td>
                            $150,00
                        </td>
                        <td>
                            $90,00
                        </td>
                        <td>
                            $110,00
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Brasileiro
                            <InfoBtn modalInfo='O alongamento brasileiro é uma técnica de extensão de cílios que combina aspectos do alongamento clássico e do volume russo. Esta técnica envolve a aplicação de múltiplos cílios finos em leques sobre os cílios naturais, criando um visual mais volumoso e cheio, sem comprometer a leveza e a aparência natural.' />
                        </td>
                        <td>
                            $170,00
                        </td>
                        <td>
                            $95,00
                        </td>
                        <td>
                            $120,00
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Hibrido
                            <InfoBtn modalInfo='O alongamento híbrido é uma técnica de extensão de cílios que combina o alongamento clássico e o volume russo. A técnica híbrida cria um visual personalizado, adicionando tanto volume quanto comprimento aos cílios naturais. É ideal para quem deseja um visual mais completo do que o alongamento clássico, mas menos dramático do que o volume russo.' />
                        </td>
                        <td>
                            $180,00
                        </td>
                        <td>
                            $100,00
                        </td>
                        <td>
                            $125,00
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Russo
                            <InfoBtn modalInfo=' O alongamento russo é uma técnica avançada de extensão de cílios que envolve a aplicação de múltiplos cílios ultrafinos em leques sobre os cílios naturais. Isso cria um visual extremamente volumoso e dramático, proporcionando uma aparência mais ousada e intensa.' />
                        </td>
                        <td>
                            $200,00
                        </td>
                        <td>
                            $110,00
                        </td>
                        <td>
                            $130,00
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Gabi 30+
                        </td>
                        <td>
                            $240,00
                        </td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>
                            Remoção
                        </td>
                        <td>
                            $50,00
                        </td>
                        <td>
                            
                        </td>
                        <td>
                           
                        </td>
                    </tr>
                </tbody>
            </table>
            <h1 className={`${styles.tableTitle} ${styles.fadeIn}`}>Micropigmentação</h1>
            <table className={styles.table2}>
                <thead>
                    <tr>
                        <th>Micro</th>
                        <th>Valor</th>
                        <th>Retoque</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            Sobrancelha
                            <InfoBtn modalInfo='A micropigmentação de sobrancelhas é um procedimento semipermanente que ajuda a dar forma e cor às sobrancelhas, preenchendo áreas esparsas e proporcionando uma aparência mais cheia e definida. É ideal para pessoas com sobrancelhas finas ou irregulares que desejam melhorar sua aparência.'/>
                        </td>
                        <td>
                            $400,00
                        </td>
                        <td>
                            $300,00
                        </td>
                 
                    </tr>
                    <tr>
                        <td>
                            Labio
                            <InfoBtn modalInfo='A micropigmentação labial é um tratamento cosmético semipermanente que realça a cor e o contorno dos lábios. O procedimento pode ajudar a corrigir assimetrias, adicionar cor e definir a forma dos lábios, proporcionando uma aparência mais jovem e vibrante.'/>
                        </td>
                        <td>
                            $500,00
                        </td>
                        <td>
                            $350,00
                        </td>
                       
                    </tr>
                    <tr>
                        <td>
                            Olhos
                            <InfoBtn modalInfo='A micropigmentação de olhos, também conhecida como delineador permanente, é um procedimento que aplica pigmento ao longo da linha dos cílios para criar a aparência de um delineador. Este tratamento pode realçar e definir os olhos, tornando-os mais expressivos.'/>
                        </td>
                        <td>
                            $250,00
                        </td>
                        <td>
                            $200,00
                        </td>
                  
                    </tr>
                    <tr>
                        <td>
                            Limpeza de pele
                            <InfoBtn modalInfo='A limpeza de pele é um procedimento estético que ajuda a remover impurezas, desobstruir poros e melhorar a saúde e aparência da pele. O tratamento pode incluir esfoliação, extração de cravos e espinhas, e aplicação de produtos específicos para a pele.'/>
                        </td>
                        <td>
                            $110,00
                        </td>
                        <td>

                        </td>
                     
                    </tr>
                    <tr>
                        <td>
                            Design
                            <InfoBtn modalInfo='O design de sobrancelhas é um serviço de modelagem e correção das sobrancelhas para criar uma forma harmoniosa e equilibrada. Pode incluir depilação com pinça, cera ou linha, bem como o uso de produtos cosméticos para realçar e definir a forma das sobrancelhas.'/>
                        </td>
                        <td>
                            $0,00
                        </td>
                        <td>

                        </td>
                       
                    </tr>
                    <tr>
                        <td>
                            Henna
                            <InfoBtn modalInfo='A henna para sobrancelhas é um tratamento temporário que utiliza uma tinta natural à base de plantas para colorir e preencher as sobrancelhas. É uma opção mais suave e menos invasiva do que a micropigmentação, com resultados que duram de duas a quatro semanas.'/>
                        </td>
                        <td>
                            $25,00
                        </td>
                        <td></td>
                      
                    </tr>
                    <tr>
                        <td>
                            Tintura
                            <InfoBtn modalInfo='A tintura de sobrancelhas é um procedimento que utiliza corantes para alterar a cor dos pelos das sobrancelhas, proporcionando uma aparência mais definida e harmoniosa com a cor do cabelo e do tom de pele. Os resultados geralmente duram de três a seis semanas.'/>
                        </td>
                        <td>
                            $35,00
                        </td>
                        <td>

                        </td>
                    
                    </tr>
                    <tr>
                        <td>
                            Buço
                            <InfoBtn modalInfo='A depilação do buço é um tratamento que remove os pelos indesejados na área do lábio superior. As técnicas comuns incluem depilação com cera, pinça, linha ou até mesmo laser, dependendo das preferências e necessidades do cliente.'/>
                        </td>
                        <td>
                            $25,00
                        </td>
                        <td>

                        </td>
                
                    </tr>
                    <tr>
                        <td>
                            Plasma
                            <InfoBtn modalInfo='O tratamento a plasma é um procedimento não cirúrgico que utiliza energia de plasma para rejuvenescer e melhorar a aparência da pele. É usado para tratar rugas, linhas finas, cicatrizes de acne e outros problemas de pele, proporcionando uma aparência mais jovem e saudável.' />
                        </td>
                        <td>
                            $200,00
                        </td>
                        <td>

                        </td>
                    
                    </tr>
                </tbody>
            </table>
        </main>
    )
}

export default Services