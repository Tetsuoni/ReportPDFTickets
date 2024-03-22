import React, { useState, useEffect }from 'react';
import './App.css';
import { SignInWithApple, SignInWithAppleResponse, SignInWithAppleOptions } from '@capacitor-community/apple-sign-in';

function App() {

  const handleSignInWithApple = async () => {
    const options: SignInWithAppleOptions = {
      clientId: 'com.tu.servicio', //APP ID, no Service ID
      redirectURI: 'https://www.tufrontend.com/login', //URL
      scopes: 'email name',
      state: '12345',
      nonce: 'nonce',
    };

    try {
      const result: SignInWithAppleResponse = await SignInWithApple.authorize(options);
      // Manejar la información del usuario
      // Validar el token con el servidor y crear una nueva sesión
      console.log(result);
    } catch (error) {
      // Manejar errores
      console.error('Error al iniciar sesión con Apple:', error);
    }
  };

  return (
    <button onClick={handleSignInWithApple}>Iniciar sesión con Apple</button>
  );
};

export default App;

/* Pasos a seguir con la cuenta Apple:
  1.
    Voy a usar FireBase para la gestión de cuentas (similar a OAuth), ya que además de ser compatible con Apple, nos da acceso a ciertas funciones útiles.
    Parece que puede usarse también Apple js sdk en lugar de firebase, pero desconozco el como.
    Creamos un nuevo proyecto en FireBase (similar a lo que hacíamos con OAuth).
    Creamos nueva aplicación web.
    Activar database en testmode, para que los usuarios estén siempre autentificados (seleccioanr test y next a todo).
    Ir a authentication y seleccionar apple, activarla y dejar la ventana abierta para más tarde.
    Ahora hay que configurar la cuenta de apple.
  2.
    Necesitamos una cuenta de desarrollador de apple.
    Una vez obtenida, debemos ir a developer.apple.com/account/resorces/identifiers/list y crear una nueva apple id (en caso de que no tengamos una ya creada).
    Para hacer esto, una vez estemos en la pestaña de indentifiers, pulsamos en el + de color azul.
    Seleccionamos la opción de App IDs y pulsamos en continuar.
    En seleccionar un tipo, seleccionamos App (creo que viene seleccionada por defecto) y pulsamos continuar.
    Escribimos una descripción y el bundle ID (explicit), y seleccionamos las capabilities que queramos (importante seleccionar Sign In with Apple).
    En Sign In with Apple, darle a editar y se nos abrirá su configuración del App ID.
    Asegurarse de que está seleccionado Enable as a primary App ID.
    Guardar y pulsar en continuar.
    Pulsar en Register y ya estará la ID de la App registrada.
  3.
    Ahora veremos todas nuestras App IDs.
    Arriba a la derecha, en el icono de la lupa + App ID, seleccionar Services IDs y clicamos en el + de color azul de nuevo.
    Seleccionamos Service IDs y pulsamos continuar.
    Le damos una descripción y un identificador (teóricamente distinto a bundle ID, por si acaso).
    Pulsamos continuar y Register. Ahora veremos la lista de Service IDs.
    Pulsar en Identificador que hemos creado, lo que nos llevará a la página de editar la configuración de nuestro Service ID.
    Seleccionar Enable Sign Up with Apple y darle a configurar.
  4.
    Se nos abrirá la ventana de configuración de la autentificación web. Seleccionamos la Primary App ID que hemos creado anteriormente.
    Ahora tenemos que registrar nuestros dominios, subdominions y URLs de web. Una vez hecho dalre a next y done.
    Los Dominios Y Subdominios están en firebase, en la pestaña de authentication de nuestro proyecto. Debajo de donde se pone la Private Key.
    Pegar el identificador en firebase, athentication, Services ID. Se encuentra en la Apple, en certificates, Identifiers & Profiles, con el nombre de Identifier.
    Pone que no es necesario, pero por si acaso. Hay gente que dice lo contrario y que no va sin ella.
  5.
    Ir a la pestaña de keys de apple en Certificados, identificadore sy perfiles. Le damos al + azul pera crear uan nueva key.
    Le damos un nombre y seleccionamos Sign In with Apple.
    Pulsamos en configurar y seleccionamos la Primary App ID. Pulsamos next y continuar. Sign In with Apple debería aparecer marcada.
    Pulsamos en register y copiamos la Key ID y la Team ID (Arriba a la derecha, justo debajo de nuestro nombre de cuenta. Aparecerá nuestro nombre - Team ID).
    No cerrar la pestaña / ventana.
  6.
    Pegar Key ID y Team ID en la ventana de firebase que hemos dejado abeirta antes con lo de auth.
    En apple de nuevo, pulsar download para descarcar nuestra clave en formato json.
    Desde una terminal, ejecutamos el comando cat + dirección del archivo descargado, así podemos ver el mensaje y copiarlo.
    Pegar el mensaje entero, y pegarlo en la ventana de firebase donde dice Private Key.
    Guardar cambios en firebase.
  7.
    Las opciones ( const options ), se encuentran en firebase, en la aplicación web.
    Hay que asegurarse de que los usuarios que logean no solo aparezcan en el apartado de usuarios, sino en la base de datos también.
    Para ello, revisar que en el apartado de rules de la base de datos, pone: "allow read, write: if true;" en vez de false.
    Asegurarse de configurar bien capacitor (la webDir más que nada).
    Al testear en IOS, seleccionar la APP, e ir a Signing & Capabilities y seleccionar el Team correcto.
    Darle al + y seleccionar Sign In with Apple, en la misma pestaña de Signing & Capabilities.
    También necesitamos la Aplicación IOS en capacitor


*/
