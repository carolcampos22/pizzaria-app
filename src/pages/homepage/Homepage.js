import img from "../../assets/chef.png";

export const Homepage = () => {
    return (
        <div className="flex flex-col min-h-[75vh] bg-black p-24">
            <div>
                <h3 className="mr-5 text-5xl text-orange-500">Cadastre-se ou faça login e conheça nosso cardápio!</h3>
                <div className="flex flex-col md:flex-row items-center m-5 gap-4">
                    <div className="flex flex-wrap w-full md:w-3/4 gap-4">
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQRzHq1cwWSplqrvMQlfhtSuxDSjbUyNZvJA&usqp=CAU"
                            className="w-full md:w-1/3 h-48 object-cover"
                        />
                        <img
                            src="https://www.receitasnestle.com.br/sites/default/files/srh_recipes/d036cd01122da62bf581784f52d99b3a.jpg"
                            className="w-full md:w-1/3 h-48 object-cover"
                        />
                        <img
                            src="https://www.paollarestaurante.com.br/uploads/images/2019/08/pizza-strogonoff-de-carne-1565146013.jpg"
                            className="w-full md:w-1/3 h-48 object-cover"
                        />
                        <img
                            src="https://www.ogastronomo.com.br/upload/389528334-curiosidades-sobre-a-pizza-portuguesa.jpg"
                            className="w-full md:w-1/3 h-48 object-cover"
                        />
                        <img
                            src="https://www.designi.com.br/images/preview/10072860.jpg"
                            className="w-full md:w-1/3 h-48 object-cover"
                        />
                        <img
                            src="https://forneriaoriginal.com/wp-content/uploads/2020/04/45_chocolate-mm-branco1.jpg"
                            className="w-full md:w-1/3 h-48 object-cover"
                        />
                    </div>
                    <img className="w-full md:w-1/4 h-auto" src={img} alt="Chef" />
                </div>
                <h3 className="mr-5 text-5xl text-orange-500">A melhor pizza da região!</h3>
            </div>
        </div>
    );
};


// import img from "../../assets/chef.png"

// export const Homepage = () => {
//     return (
//         <div className="flex min-h-[75vh] bg-black p-10">
//             <div>
//                 <h3 className="mr-5 text-5xl text-orange-500">Cadastre-se ou faça login e conheça nosso cardápio!</h3>
//                 <div className="flex items-center m-5   ">

//                     <div className="flex flex-wrap flex-col md:flex-row md:justify-between md:space-x-4">
//                         <img
//                             src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQRzHq1cwWSplqrvMQlfhtSuxDSjbUyNZvJA&usqp=CAU"
//                             className="w-full md:w-1/4 mb-4"
//                         />
//                         <img
//                             src="https://www.receitasnestle.com.br/sites/default/files/srh_recipes/d036cd01122da62bf581784f52d99b3a.jpg"
//                             className="w-full md:w-1/4 mb-4"
//                         />
//                         <img
//                             src="https://www.paollarestaurante.com.br/uploads/images/2019/08/pizza-strogonoff-de-carne-1565146013.jpg"
//                             className="w-full md:w-1/4 mb-4"
//                         />
//                         <img
//                             src="https://www.ogastronomo.com.br/upload/389528334-curiosidades-sobre-a-pizza-portuguesa.jpg"
//                             className="w-full md:w-1/4 mb-4"
//                         />

//                         <img
//                             src="https://www.designi.com.br/images/preview/10072860.jpg"
//                             className="w-full md:w-1/4 mb-4"
//                         />

//                         <img
//                             src="https://forneriaoriginal.com/wp-content/uploads/2020/04/45_chocolate-mm-branco1.jpg"
//                             className="w-full md:w-1/4 mb-4"
//                         />


//                     </div>

//                     <img className="w-96" src={img} />


//                 </div>
//                 <h3 className="mr-5 text-5xl text-orange-500">A melhor pizza da região! Entre e peça agora!</h3>
//             </div>

//             {/* <h3 className="mr-5 text-5xl text-green-500">Bebidas</h3>
//             <div className="flex items-center m-5   ">
                
//                 <div className="flex">
//                     <img src="https://api.freelogodesign.org/assets/blog/thumb/f4dae7732213491da3952f853c48f6dc_1176x840.jpg" className="w-1/4 mr-4"/>
//                     <img src="https://down-br.img.susercontent.com/file/sg-11134201-7rbkl-lqdw312g3zty96" className="w-1/4 mr-4"/>
//                     <img src="https://a-static.mlcdn.com.br/450x450/cha-ice-tea-leao-pessego-450ml-6-unidades-coca-cola/jhulymagazine/593adc72ebcd11ee95064201ac185034/72f907b43061cf15200f445b2b8029be.jpeg" className="w-1/4 mr-4" />
//                     <img src="https://down-br.img.susercontent.com/file/3cb41e0ef155f5f87f8c32d153862888" className="w-1/4 mr-4"/>
//                 </div>
                
//             </div>

//             <h3 className="mr-5 text-5xl text-yellow-500">Aperitivos</h3>
//             <div className="flex items-center m-5   ">
                
//                 <div className="flex">
//                     <img src="https://static.itdg.com.br/images/1200-630/150ba2d5d2874bed8561dd8edbdc1323/164773-original.jpg" className="w-1/4 mr-4"/>
//                     <img src="https://conteudo.imguol.com.br/c/entretenimento/15/2020/09/08/aneis-de-cebola-na-fritadeira-eletrica-1599588496071_v2_615x300.jpg" className="w-1/4 mr-4"/>
//                     <img src="https://images-cdn.festejante.com.br/uploads/shop/055fd080-01ac-4af0-b89f-27452ed3c456/products/1249/2e11cce6-f850-4f65-a1e0-ff7e9a767f85.jpg__cropped.jpg" className="w-1/4 mr-4" />
//                     <img src="https://www.comidaereceitas.com.br/wp-content/uploads/2010/07/Nacho-mexicano-chips-e-molho.jpg" className="w-1/4 mr-4"/>
//                 </div>
                
//             </div>

//             <h3 className="mr-5 text-5xl text-blue-700">Sobremesas</h3>
//             <div className="flex items-center m-5   ">
                
//                 <div className="flex">
//                     <img src="https://bolosparavender.com.br/wp-content/uploads/2023/03/Torta-de-chocolate-cremosa-1200x900.jpg" className="w-1/4 mr-4"/>
//                     <img src="https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2023/07/28/834523765-sorvete-de-flocos-caseiro-38742.jpg" className="w-1/4 mr-4"/>
//                     <img src="https://www.sabornamesa.com.br/media/k2/items/cache/ad14e3f1ea53ec7346e0758c14413a30_XL.jpg" className="w-1/4 mr-4" />
//                     <img src="https://oquetempracomer.com.br/wp-content/uploads/2022/02/pizza-chocolate-com-morango-capa.jpg" className="w-1/4 mr-4"/>
//                 </div>
                
//             </div> */}
//         </div>
//     )
// }
