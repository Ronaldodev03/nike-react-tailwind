import { star } from "../assets/icons";

const PopularProductCard = ({ imgURL, name, price }) => {
  return (
    /* 
    
    **** Así estaba ****

    1. Le puse el mx-auto para centrar la img, el problema es que el contenido quedaba a la derecha y había como un desfase no deseado,
       y si colocaba el contenido al centro no se veía tan bien.

    2. Todo esto no servía para una vrg => "flex-1 w-full max-sm:w-full".
    
    */

    /*  <div className="flex flex-1 flex-col w-full max-sm:w-full ">
      <img src={imgURL} alt={name} className="w-[282px] h-[282px] mx-auto" />
      <div className="mt-8 flex justify-start gap-2.5">
        <img src={star} alt="rating icon" width={24} height={24} />
        <p className="font-montserrat text-xl leading-normal text-slate-gray">
          (4.5)
        </p>
      </div>
      <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin">
        {name}
      </h3>
      <p className="mt-2 font-semibold font-montserrat text-coral-red text-2xl leading-normal">
        {price}
      </p>
    </div> */

    /* 
    
    **** Así lo dejé ****

    1. Le eliminé lo que consideraba inecesario => "flex-1 w-full max-sm:w-full".

    2. Le puse "w-[400px] object-contain" a la img, así abarcaba todo el div y no quedaba el desfase no deseado de la version anterior.

    3. Luego opté por quitar el div porue no era necesario tampoco, solo deje la img con el w y un mx-auto.

    */

    <div>
      {/* 
      
      1. A esta img yo le había colocado un div alrededor con w-full, pero no fué necesario, a menos que quiera setear el w en el div o colocar un bg.

      2. Le había colocado un object-contain, pero looks like el h-auto está por default, entonces no es necesario, incluso colocandole otro h no es necesario.

      3. mx-auto si es necesario porque para w entre 470px y sm hay que centrar la img, del resto de casos la img toma todo el w.

      4. Recuerda que las img son svg en este caso, siempre haz el container como si no fuesen svg, es decir, mejor le hubiese dejado el div y el object-contain.
      
      */}
      <img src={imgURL} alt={name} className="w-[400px] mx-auto" />

      {/* 
      
      1. Este div con mx-auto max-w-[400px] es para que el contenido tome el ancho de la img para  w entre 470px y sm  y se centre junto con ella.
      
      */}
      <div className=" mx-auto max-sm:max-w-[400px]">
        <div className="mt-8 flex justify-start gap-2.5">
          <img src={star} alt="rating icon" width={24} height={24} />
          <p className="font-montserrat text-xl leading-normal text-slate-gray">
            (4.5)
          </p>
        </div>
        <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin">
          {name}
        </h3>
        <p className="mt-2 font-semibold font-montserrat text-coral-red text-2xl leading-normal">
          {price}
        </p>
      </div>
    </div>
  );
};

export default PopularProductCard;
