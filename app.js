// --- BASE DE DATOS PROGRESIVA (15 Expresiones por Módulo - Nivel A1 a B2) ---
const courseData = [
    {
        id: "m1",
        level: "A1",
        title: "👋 Saludos y Presentaciones Básicas",
        items: [
            { id: 1, croatian: "Bok!", spanish: "¡Hola! / ¡Chao!", example: "El saludo informal por excelencia en Zagreb.", options: ["¡Hola! / ¡Chao!", "Buenas tardes", "No entiendo", "Sí"] },
            { id: 2, croatian: "Dobro jutro", spanish: "Buenos días", example: "Se usa por la mañana hasta mediodía.", options: ["Buenos días", "Buenas noches", "Hasta luego", "Por favor"] },
            { id: 3, croatian: "Dobar dan", spanish: "Buenas tardes / Hola (formal)", example: "Saludo estándar al entrar a cualquier tienda.", options: ["Buenas tardes / Hola (formal)", "De nada", "Adiós", "Lo siento"] },
            { id: 4, croatian: "Kako si?", spanish: "¿Cómo estás?", example: "Pregunta informal entre conocidos.", options: ["¿Cómo estás?", "¿Qué hora es?", "¿De dónde eres?", "¿Cuánto cuesta?"] },
            { id: 5, croatian: "Ja sam...", spanish: "Yo soy / Me llamo...", example: "Para presentarte ante otra persona.", options: ["Yo soy / Me llamo...", "Tengo hambre", "No lo sé", "Quiero esto"] },
            { id: 6, croatian: "Drago mi je", spanish: "Mucho gusto / Encantado", example: "Respuesta educada al conocer a alguien.", options: ["Mucho gusto / Encantado", "Hasta mañana", "Buenas noches", "Buen provecho"] },
            { id: 7, croatian: "Hvala lijepa", spanish: "Muchas gracias", example: "Forma educada y completa de dar las gracias.", options: ["Muchas gracias", "Por favor", "Disculpa", "No pasa nada"] },
            { id: 8, croatian: "Vidimo se!", spanish: "¡Nos vemos!", example: "Despedida informal muy común.", options: ["¡Nos vemos!", "Buen viaje", "Hola amigo", "Buenas tardes"] },
            { id: 9, croatian: "Doviđenja", spanish: "Adiós (formal)", example: "Despedida estándar en comercios y con desconocidos.", options: ["Adiós (formal)", "Hola", "Buenas noches", "Gracias"] },
            { id: 10, croatian: "Laku noć", spanish: "Buenas noches", example: "Se dice antes de ir a dormir.", options: ["Buenas noches", "Buenos días", "Hasta luego", "Buen viaje"] },
            { id: 11, croatian: "Tko si ti?", spanish: "¿Quién eres tú?", example: "Para preguntar la identidad de alguien.", options: ["¿Quién eres tú?", "¿Cómo te llamas?", "¿De dónde vienes?", "¿Qué haces?"] },
            { id: 12, croatian: "Odakle si?", spanish: "¿De dónde eres?", example: "Pregunta clásica al conocer a extranjeros.", options: ["¿De dónde eres?", "¿Dónde vives?", "¿A dónde vas?", "¿Qué edad tienes?"] },
            { id: 13, croatian: "Ja sam iz Španjolske", spanish: "Soy de España", example: "Para indicar tu país de origen.", options: ["Soy de España", "Voy a España", "Vivo en España", "Conozco España"] },
            { id: 14, croatian: "Govoriš li španjolski?", spanish: "¿Hablas español?", example: "Para preguntar si dominan tu idioma.", options: ["¿Hablas español?", "¿Hablas inglés?", "¿Hablas croata?", "¿Entiendes todo?"] },
            { id: 15, croatian: "Razumijem", spanish: "Entiendo / Comprendo", example: "Para confirmar que has captado la idea.", options: ["Entiendo / Comprendo", "No entiendo", "No lo sé", "Olvídelo"] }
        ]
    },
    {
        id: "m2",
        level: "A1+",
        title: "🤝 Cortesía y Despedidas",
        items: [
            { id: 16, croatian: "Molim te", spanish: "Por favor (informal)", example: "Para pedir algo a un amigo.", options: ["Por favor (informal)", "Muchas gracias", "De nada", "Disculpa"] },
            { id: 17, croatian: "Izvolite", spanish: "Pase / Dígame / Aquí tiene", example: "Muy usado por dependientes al atenderte.", options: ["Pase / Dígame / Aquí tiene", "Adiós", "Lo siento", "Espere"] },
            { id: 18, croatian: "Oprosti", spanish: "Disculpa / Perdón (informal)", example: "Para llamar la atención o pedir disculpas.", options: ["Disculpa / Perdón (informal)", "De nada", "Gracias", "Claro"] },
            { id: 19, croatian: "Nema na čemu", spanish: "De nada", example: "Respuesta amable a las gracias.", options: ["De nada", "Por favor", "Lo siento", "Buenas"] },
            { id: 20, croatian: "Sve u redu", spanish: "Todo bien / Todo en orden", example: "Para indicar que todo marcha correctamente.", options: ["Todo bien / Todo en orden", "Todo mal", "No pasa nada", "Es complicado"] },
            { id: 21, croatian: "Lijep pozdrav", spanish: "Un cordial saludo", example: "Cierre cortés en mensajes o correos.", options: ["Un cordial saludo", "Hasta pronto", "Buenas tardes", "Adiós"] },
            { id: 22, croatian: "Vidimo se sutra", spanish: "Nos vemos mañana", example: "Para planificar el día siguiente.", options: ["Nos vemos mañana", "Hasta luego", "Buenos días", "Nos vemos nunca"] },
            { id: 23, croatian: "Laku noć i ugodan san", spanish: "Buenas noches y que descanses", example: "Despedida nocturna más elaborada.", options: ["Buenas noches y que descanses", "Buenos días", "Hola", "Buen viaje"] },
            { id: 24, croatian: "Naravno", spanish: "Claro / Por supuesto", example: "Para dar afirmación rotunda.", options: ["Claro / Por supuesto", "Jamás", "Imposible", "Tal vez"] },
            { id: 25, croatian: "Može", spanish: "Vale / Hecho", example: "Confirmación informal súper común.", options: ["Vale / Hecho", "No quiero", "Quizás", "Imposible"] },
            { id: 26, croatian: "Nema problema", spanish: "Sin problema", example: "Para quitar hierro a una situación.", options: ["Sin problema", "Tengo un problema", "Es grave", "Ayuda"] },
            { id: 27, croatian: "Žao mi je", spanish: "Lo siento", example: "Para expresar pesar o disculpa.", options: ["Lo siento", "Me alegro", "Felicidades", "Gracias"] },
            { id: 28, croatian: "Sretno!", spanish: "¡Buena suerte!", example: "Para desear éxito en un reto.", options: ["¡Buena suerte!", "¡Cuidado!", "¡Atención!", "¡Felicidades!"] },
            { id: 29, croatian: "Uživaj!", spanish: "¡Disfruta!", example: "Para desear que alguien lo pase bien.", options: ["¡Disfruta!", "¡Trabaja!", "¡Cansa!", "¡Espera!"] },
            { id: 30, croatian: "Bok bok!", spanish: "¡Chao chao! (cariñoso)", example: "Despedida amigable y repetida.", options: ["¡Chao chao! (cariñoso)", "Hola", "Buenos días", "Gracias"] }
        ]
    },
    {
        id: "m3",
        level: "A2",
        title: "☕ En el Café y Bar",
        items: [
            { id: 31, croatian: "Kavu s mlijekom, molim", spanish: "Un café con leche, por favor", example: "El clásico café que pedirás en cualquier terraza.", options: ["Un café con leche, por favor", "Un té helado", "La cuenta, por favor", "Agua sin gas"] },
            { id: 32, croatian: "Jedno veliko pivo", spanish: "Una cerveza grande", example: "Indispensable para pedir en los bares.", options: ["Una cerveza grande", "Un vaso de vino", "Un zumo de naranja", "Café solo"] },
            { id: 33, croatian: "Račun, molim", spanish: "La cuenta, por favor", example: "Para pedir la cuenta al camarero.", options: ["La cuenta, por favor", "Dónde está el baño", "Está riquísimo", "Menú del día"] },
            { id: 34, croatian: "Živjeli!", spanish: "¡Salud! / ¡Chinchín!", example: "Obligatorio al chocar los vasos al brindar.", options: ["¡Salud! / ¡Chinchín!", "¡Buen provecho!", "¡Feliz cumpleaños!", "¡Salud y suerte!"] },
            { id: 35, croatian: "Imate li slobodan stol?", spanish: "¿Tiene una mesa libre?", example: "Al entrar a un bar concurrido.", options: ["¿Tiene una mesa libre?", "¿A qué hora cierran?", "¿Puedo pagar con tarjeta?", "¿Dónde está la cocina?"] },
            { id: 36, croatian: "Dobar tek", spanish: "¡Buen provecho!", example: "Se dice antes de empezar a comer.", options: ["¡Buen provecho!", "Gracias por la comida", "Está muy caliente", "Quiero repetir"] },
            { id: 37, croatian: "Čašu vode, molim", spanish: "Un vaso de agua, por favor", example: "Acompañamiento clásico con el café.", options: ["Un vaso de agua, por favor", "Un vino tinto", "Un refresco", "La cuenta"] },
            { id: 38, croatian: "Meni, molim", spanish: "El menú, por favor", example: "Para pedir la carta de platos.", options: ["El menú, por favor", "La factura", "El postre", "La salida"] },
            { id: 39, croatian: "Što preporučujete?", spanish: "¿Qué recomienda?", example: "Para pedir consejo al camarero.", options: ["¿Qué recomienda?", "¿Cuánto cuesta?", "¿Está picante?", "¿Tiene gluten?"] },
            { id: 40, croatian: "Jako je fino", spanish: "Está riquísimo", example: "Para elogiar la comida o bebida.", options: ["Está riquísimo", "Está salado", "Está frío", "No me gusta"] },
            { id: 41, croatian: "Samo piće", spanish: "Solo una consumición / bebida", example: "Cuando solo vas a tomar algo rápido.", options: ["Solo una consumición / bebida", "Quiero cenar", "Menú completo", "Para llevar"] },
            { id: 42, croatian: "Još jednu, molim", spanish: "Otra más, por favor", example: "Para repetir ronda.", options: ["Otra más, por favor", "La cuenta", "Nada más", "Suficiente"] },
            { id: 43, croatian: "Plaćam ja", spanish: "Invito yo / Pago yo", example: "Para ofrecerte a pagar la cuenta.", options: ["Invito yo / Pago yo", "A medias", "Pagas tú", "Es gratis"] },
            { id: 44, croatian: "Može li karticom?", spanish: "¿Se puede con tarjeta?", example: "Para consultar método de pago en el bar.", options: ["¿Se puede con tarjeta?", "Solo efectivo", "No aceptamos VISA", "Cercano"] },
            { id: 45, croatian: "Hvala, bilo je odlično", spanish: "Gracias, estuvo excelente", example: "Despedida y agradecimiento al marcharte del local.", options: ["Gracias, estuvo excelente", "Estuvo malo", "Muy caro", "Hasta nunca"] }
        ]
    },
    {
        id: "m4",
        level: "A2+",
        title: "🛒 Supermercado y Tiendas",
        items: [
            { id: 46, croatian: "Koliko ovo košta?", spanish: "¿Cuánto cuesta esto?", example: "Para preguntar precios en tiendas.", options: ["¿Cuánto cuesta esto?", "¿Tiene cambio?", "¿Está abierto?", "¿Dónde está la caja?"] },
            { id: 47, croatian: "Trebam vrećicu", spanish: "Necesito una bolsa", example: "Te lo preguntarán casi siempre en caja.", options: ["Necesito una bolsa", "Pago con tarjeta", "No tengo efectivo", "Guardar recibo"] },
            { id: 48, croatian: "Karticom, molim", spanish: "Con tarjeta, por favor", example: "Para indicar método de pago electrónico.", options: ["Con tarjeta, por favor", "En efectivo", "Tenga el cambio", "Está muy caro"] },
            { id: 49, croatian: "Samo razgledavam", spanish: "Solo estoy mirando", example: "Lo que dices cuando te preguntan si buscas algo.", options: ["Solo estoy mirando", "Voy a comprar esto", "No me gusta", "Busco ayuda"] },
            { id: 50, croatian: "Imate li na popustu?", spanish: "¿Tiene esto en descuento?", example: "Útil para cazar ofertas.", options: ["¿Tiene esto en descuento?", "¿Está fresco?", "¿Hay más tallas?", "¿Dónde se paga?"] },
            { id: 51, croatian: "Gdje je blagajna?", spanish: "¿Dónde está la caja?", example: "Para saber dónde pagar en el supermercado.", options: ["¿Dónde está la caja?", "Salida de emergencia", "Sección de frutería", "Atención al cliente"] },
            { id: 52, croatian: "Imate li manji broj?", spanish: "¿Tiene una talla más pequeña?", example: "Al probarte ropa.", options: ["¿Tiene una talla más pequeña?", "¿Tiene más grande?", "¿Está agotado?", "¿Hay probador?"] },
            { id: 53, croatian: "Gdje je probna kabina?", spanish: "¿Dónde está el probador?", example: "Para probarte prendas antes de comprar.", options: ["¿Dónde está el probador?", "Caja registradora", "Entrada principal", "Almacén"] },
            { id: 54, croatian: "Ovo je preveliko", spanish: "Esto es demasiado grande", example: "Al elegir ropa o calzado.", options: ["Esto es demasiado grande", "Es perfecto", "Es muy pequeño", "Me gusta"] },
            { id: 55, croatian: "Trebam račun", spanish: "Necesito el ticket / recibo", example: "Para guardar comprobante de compra.", options: ["Necesito el ticket / recibo", "Sin recibo", "Bolsa por favor", "Regalo"] },
            { id: 56, croatian: "Je li ovo svježe?", spanish: "¿Esto está fresco?", example: "En la sección de panadería o frutería.", options: ["¿Esto está fresco?", "¿Está caducado?", "¿Es congelado?", "¿Tiene descuento?"] },
            { id: 57, croatian: "Kilogram kruha, molim", spanish: "Un kilo de pan, por favor", example: "Para comprar pan en la panadería.", options: ["Un kilo de pan, por favor", "Una botella de leche", "Un cartón de huevos", "Queso fresco"] },
            { id: 58, croatian: "Imate li sitnog novca?", spanish: "¿Tiene cambio / moneda suelta?", example: "Cuando pagas con billete grande.", options: ["¿Tiene cambio / moneda suelta?", "No tengo efectivo", "Pago exacto", "Tarjeta"] },
            { id: 59, croatian: "Sve zajedno, molim", spanish: "Todo junto, por favor", example: "Al empaquetar la compra.", options: ["Todo junto, por favor", "Separado", "Bolsas aparte", "Sin bolsa"] },
            { id: 60, croatian: "Zatvoreno je", spanish: "Está cerrado", example: "Cuando llegas fuera de horario.", options: ["Está cerrado", "Está abierto", "Abierto 24h", "En reformas"] }
        ]
    },
    {
        id: "m5",
        level: "B1",
        title: "🚌 Transporte y Ubicación en la Ciudad",
        items: [
            { id: 61, croatian: "Gdje je autobusna stanica?", spanish: "¿Dónde está la estación de autobuses?", example: "Para orientarte al viajar.", options: ["¿Dónde está la estación de autobuses?", "¿A qué hora sale el tren?", "¿Dónde alquilo un coche?", "¿Parada de taxis cercana?"] },
            { id: 62, croatian: "Idem ravno pa lijevo", spanish: "Voy todo recto y luego a la izquierda", example: "Para describir direcciones al caminar.", options: ["Voy todo recto y luego a la izquierda", "Gira en la rotonda", "Cruza el puente", "Sube la colina"] },
            { id: 63, croatian: "Daleko je odavde?", spanish: "¿Está lejos de aquí?", example: "Para saber si puedes ir andando.", options: ["¿Está lejos de aquí?", "¿Es peligroso de noche?", "¿Hay mucha gente?", "¿Cuánto se tarda?"] },
            { id: 64, croatian: "Karta u jednom smjeru", spanish: "Un billete de ida", example: "Lo pides en ventanilla para transporte.", options: ["Un billete de ida", "Un billete de ida y vuelta", "Abono mensual", "Pase de 24 horas"] },
            { id: 65, croatian: "Kada kreće vlak?", spanish: "¿A qué hora sale el tren?", example: "En la estación ferroviaria.", options: ["¿A qué hora sale el tren?", "¿Cuándo llega?", "¿Dónde compro billete?", "¿Hay retraso?"] },
            { id: 66, croatian: "Koliko traje vožnja?", spanish: "¿Cuánto dura el trayecto?", example: "Para calcular tiempos de viaje.", options: ["¿Cuánto dura el trayecto?", "¿Es muy caro?", "¿Hay conexión?", "¿Paradas intermedias?"] },
            { id: 67, croatian: "Koji autobus ide za centar?", spanish: "¿Qué autobús va al centro?", example: "En paradas urbanas.", options: ["¿Qué autobús va al centro?", "¿Pasa por aquí el metro?", "¿Dónde está el taxi?", "¿Hay tranvía?"] },
            { id: 68, croatian: "Moram presjesti", spanish: "Tengo que hacer transbordo", example: "Cuando tu ruta requiere cambiar de línea.", options: ["Tengo que hacer transbordo", "Es directo", "Fin de trayecto", "Siguiente parada"] },
            { id: 69, croatian: "Slobodno je?", spanish: "¿Está libre (el asiento)?", example: "Al subir a un tren o autobús lleno.", options: ["¿Está libre (el asiento)?", "¿Está ocupado?", "¿Es reservado?", "¿Puedo pasar?"] },
            { id: 70, croatian: "Možete li mi reći kada stignemo?", spanish: "¿Me puede decir cuándo llegamos?", example: "Pidiendo al conductor que te avise.", options: ["¿Me puede decir cuándo llegamos?", "¿Cuánto falta?", "¿Es aquí?", "Parada obligatoria"] },
            { id: 71, croatian: "Gorio sam", spanish: "Me he perdido / Estoy desorientado", example: "Cuando no encuentras tu rumbo.", options: ["Me he perdido / Estoy desorientado", "Conozco este lugar", "Voy bien", "Llegué"] },
            { id: 72, croatian: "Gdje mogu kupiti kartu?", spanish: "¿Dónde puedo comprar un billete?", example: "Buscando taquilla o estanco.", options: ["¿Dónde puedo comprar un billete?", "A bordo", "Gratis", "En línea"] },
            { id: 73, croatian: "Koji peron?", spanish: "¿Qué andén / plataforma?", example: "Para buscar tu tren en la estación.", options: ["¿Qué andén / plataforma?", "Salida", "Taquilla", "Información"] },
            { id: 74, croatian: "Vlak kasni", spanish: "El tren lleva retraso", example: "Aviso habitual en pantallas.", options: ["El tren lleva retraso", "Sale puntual", "Cancelado", "Llegó antes"] },
            { id: 75, croatian: "Stigli smo", spanish: "Hemos llegado", example: "Al alcanzar tu destino.", options: ["Hemos llegado", "Falta mucho", "Nos pasamos", "Seguimos viaje"] }
        ]
    },
    {
        id: "m6",
        level: "B1+",
        title: "💬 Conversación y Planes",
        items: [
            { id: 76, croatian: "Što ima novo?", spanish: "¿Qué hay de nuevo? / ¿Qué cuentas?", example: "Pregunta informal para romper el hielo.", options: ["¿Qué hay de nuevo? / ¿Qué cuentas?", "¿Qué hora es?", "¿Dónde has estado?", "¿Qué te pasa?"] },
            { id: 77, croatian: "Baš mi se da...", spanish: "Me apetece mucho...", example: "Para expresar ganas de hacer algo.", options: ["Me apetece mucho...", "No tengo ganas de...", "Me da igual", "Prefiero quedarme"] },
            { id: 78, croatian: "Dogovoreno!", spanish: "¡Trato hecho! / ¡Acordado!", example: "Para cerrar un plan o acuerdo rápido.", options: ["¡Trato hecho! / ¡Acordado!", "Ni hablar", "Imposible", "Ya veremos"] },
            { id: 79, croatian: "Nemam pojma", spanish: "No tengo ni idea", example: "Respuesta común cuando no sabes algo.", options: ["No tengo ni idea", "Lo sé todo", "Es obvio", "Seguro que sí"] },
            { id: 80, croatian: "Što misliš o tome?", spanish: "¿Qué opinas de eso?", example: "Para pedir la opinión de alguien en una charla.", options: ["¿Qué opinas de eso?", "¿Te importa?", "¿Es verdad?", "¿Quién lo sabe?"] },
            { id: 81, croatian: "Imam plan", spanish: "Tengo un plan", example: "Para proponer algo a los amigos.", options: ["Tengo plan", "No tengo planes", "Estoy ocupado", "Descanso"] },
            { id: 82, croatian: "Gdje se nalazimo?", spanish: "¿Dónde quedamos? / ¿Dónde nos vemos?", example: "Para fijar un punto de encuentro.", options: ["¿Dónde quedamos? / ¿Dónde nos vemos?", "¿A qué hora?", "¿Quién viene?", "¿Por qué?"] },
            { id: 83, croatian: "Kasnim desetak minuta", spanish: "Llego tarde unos diez minutos", example: "Aviso de retraso por WhatsApp o llamada.", options: ["Llego tarde unos diez minutos", "Llego puntual", "Ya estoy aquí", "No voy"] },
            { id: 84, croatian: "Nema frke", spanish: "No hay problema / Tranquilo", example: "Expresión coloquial para restar importancia.", options: ["No hay problema / Tranquilo", "Es grave", "Me enfadas", "Prisa"] },
            { id: 85, croatian: "To se podrazumijeva", spanish: "Eso se cae de maduro / Por supuesto", example: "Cuando algo es totalmente obvio.", options: ["Eso se cae de maduro / Por supuesto", "Es extraño", "Dudoso", "Imposible"] },
            { id: 86, croatian: "Baš šteta", spanish: "Qué pena / Qué lástima", example: "Reacción ante una mala noticia menor.", options: ["Qué pena / Qué lástima", "Qué alegría", "Genial", "Excelente"] },
            { id: 87, croatian: "Drago mi je što te čujem", spanish: "Qué alegría oírte", example: "Al hablar por teléfono con alguien conocido.", options: ["Qué alegría oírte", "Adiós", "No molutes", "Ocupado"] },
            { id: 88, croatian: "Čujemo se uskoro", spanish: "Hablamos pronto", example: "Despedida en conversaciones virtuales.", options: ["Hablamos pronto", "No me escribas", "Jamás", "Ayer"] },
            { id: 89, croatian: "Kako je prošlo?", spanish: "¿Cómo fue? / ¿Qué tal salió?", example: "Para interesarte por el resultado de un evento.", options: ["¿Cómo fue? / ¿Qué tal salió?", "¿Cuándo es?", "¿Dónde?", "¿Quién?"] },
            { id: 90, croatian: "Sve je ispalo super", spanish: "Salió todo genial", example: "Respuesta positiva a un evento pasado.", options: ["Salió todo genial", "Fue un desastre", "Aburrido", "Normal"] }
        ]
    },
    {
        id: "m7",
        level: "B2",
        title: "🔥 Slang de Calle y Expresiones Avanzadas",
        items: [
            { id: 91, croatian: "Može!", spanish: "¡Vale! / ¡De acuerdo! / ¡Hecho!", example: "Se usa 100 veces al día para confirmar planes.", options: ["¡Vale! / ¡De acuerdo!", "No quiero", "Quizás", "Imposible"] },
            { id: 92, croatian: "Brijem da...", spanish: "Creo que... / Tengo la sensación de que...", example: "Slang moderno muy usado por jóvenes.", options: ["Creo que... / Tengo la sensación de que...", "Estoy seguro de que", "Dudo mucho que", "Es mentira que"] },
            { id: 93, croatian: "Izgorio sam od posla", spanish: "Estoy quemado del trabajo / Exhausto", example: "Expresión coloquial para cuando estás agotado.", options: ["Estoy quemado del trabajo / Exhausto", "Tengo mucho tiempo libre", "Me aburre trabajar", "Busco empleo"] },
            { id: 94, croatian: "Lova do tapa", spanish: "Pasta gansa / Mucho dinero", example: "Slang para referirse a tener mucha pasta.", options: ["Pasta gansa / Mucho dinero", "No tengo un duro", "Gasté todo", "Es muy barato"] },
            { id: 95, croatian: "Stvarno?", spanish: "¿En serio? / ¿De verdad?", example: "Expresión de sorpresa al escuchar anécdotas.", options: ["¿En serio? / ¿De verdad?", "¿Por qué?", "¿Quién fue?", "¿Cuándo pasa?"] },
            { id: 96, croatian: "Nisam znao", spanish: "No lo sabía", example: "Reacción típica al enterarte de algo nuevo.", options: ["No lo sabía", "Ya lo sabía todo", "Me da igual", "Es falso"] },
            { id: 97, croatian: "Ma daj!", spanish: "¡Venga ya! / ¡No me digas!", example: "Para mostrar incredulidad o sorpresa.", options: ["¡Venga ya! / ¡No me digas!", "De acuerdo", "Claro que sí", "Cierto"] },
            { id: 98, croatian: "Kužiš?", spanish: "¿Pillaste / Entiendes?", example: "Coloquial equivalente a ¿captas?", options: ["¿Pillaste / Entiendes?", "¿Qué dices?", "¿Dónde?", "¿Cuándo?"] },
            { id: 99, croatian: "Kužim", spanish: "Lo pillo / Entiendo", example: "Respuesta afirmativa a 'kužiš'.", options: ["Lo pillo / Entiendo", "No entiendo", "Mentira", "Duda"] },
            { id: 100, croatian: "Ide mi na živce", spanish: "Me saca de quicio / Me pone nervioso", example: "Cuando algo o alguien te irrita.", options: ["Me saca de quicio / Me pone nervioso", "Me encanta", "Me da igual", "Me divierte"] },
            { id: 101, croatian: "Boli me briga", spanish: "Me importa un bledo / Me da igual", example: "Expresión de total indiferencia.", options: ["Me importa un bledo / Me da igual", "Me importa mucho", "Estoy preocupado", "Interesante"] },
            { id: 102, croatian: "Totalno", spanish: "Totalmente / ¡De acuerdo al 100%!", example: "Para dar la razón con énfasis.", options: ["Totalmente / ¡De acuerdo al 100%!", "Para nada", "Imposible", "Dudoso"] },
            { id: 103, croatian: "Svaka čast!", spanish: "¡Mis respetos! / ¡Muy bien hecho!", example: "Para felicitar a alguien efusivamente.", options: ["¡Mis respetos! / ¡Muy bien hecho!", "Qué mal", "Qué desastre", "Aburrido"] },
            { id: 104, croatian: "Bilo pa prošlo", spanish: "Lo pasado, pisado / Ya pasó", example: "Para quitar importancia a algo que ocurrió antes.", options: ["Lo pasado, pisado / Ya pasó", "Recuerdo todo", "No olvido", "Futuro"] },
            { id: 105, croatian: "Ajmo!", spanish: "¡Vámonos! / ¡Vamos ya!", example: "Para animar a moverse o arrancar algo.", options: ["¡Vámonos! / ¡Vamos ya!", "Espera", "Quédate", "Paren"] }
        ]
    }
];

// --- ESTADO DE LA APLICACIÓN ---
let userStats = JSON.parse(localStorage.getItem('croatian_app_stats')) || {};
userStats = {
    xp: userStats.xp || 0,
    streak: userStats.streak || 1,
    lives: userStats.lives || 3,
    lastInteraction: userStats.lastInteraction || Date.now(),
    completedModules: Array.isArray(userStats.completedModules) ? userStats.completedModules : []
};

let activeModule = null;
let currentSessionItems = [];
let currentIndex = 0;
let selectedOption = null;

// --- ELEMENTOS DOM ---
const streakEl = document.getElementById('streak-count');
const xpEl = document.getElementById('xp-count');
const livesEl = document.getElementById('lives-count');
const reviewBanner = document.getElementById('review-banner');

const homeScreen = document.getElementById('home-screen');
const modeScreen = document.getElementById('mode-screen');
const learnScreen = document.getElementById('learn-screen');
const quizScreen = document.getElementById('quiz-screen');

const modulesList = document.getElementById('modules-list');

const learnCroatian = document.getElementById('learn-croatian');
const learnSpanish = document.getElementById('learn-spanish');
const learnExample = document.getElementById('learn-example');
const learnCounter = document.getElementById('learn-counter');
const prevLearnBtn = document.getElementById('prev-learn-btn');
const nextLearnBtn = document.getElementById('next-learn-btn');

const targetPhrase = document.getElementById('target-phrase');
const optionsContainer = document.getElementById('options-container');
const checkBtn = document.getElementById('check-btn');
const progressBar = document.getElementById('progress-bar');

const feedbackModal = document.getElementById('feedback-modal');
const feedbackTitle = document.getElementById('feedback-title');
const feedbackMsg = document.getElementById('feedback-msg');
const nextQuizBtn = document.getElementById('next-quiz-btn');

// --- INICIALIZACIÓN ---
function init() {
    updateUIHeader();
    checkReviewNeeded();
    renderModules();

    document.getElementById('home-btn')?.addEventListener('click', showHomeScreen);
    document.getElementById('back-to-home-btn')?.addEventListener('click', showHomeScreen);
    
    document.querySelectorAll('.exit-session-btn').forEach(btn => {
        btn.addEventListener('click', () => showModeScreen(activeModule.id));
    });

    document.getElementById('start-review-btn')?.addEventListener('click', startReviewSession);

    document.getElementById('learn-mode-btn')?.addEventListener('click', startLearnMode);
    document.getElementById('learn-audio-btn')?.addEventListener('click', () => speakCroatian(learnCroatian.innerText));
    prevLearnBtn?.addEventListener('click', prevLearnCard);
    nextLearnBtn?.addEventListener('click', nextLearnCard);

    document.getElementById('quiz-mode-btn')?.addEventListener('click', startQuizMode);
    document.getElementById('audio-btn')?.addEventListener('click', () => speakCroatian(targetPhrase.innerText));
    checkBtn?.addEventListener('click', checkAnswer);
    nextQuizBtn?.addEventListener('click', nextQuizQuestion);
}

function hideAllScreens() {
    homeScreen.classList.add('hidden');
    modeScreen.classList.add('hidden');
    learnScreen.classList.add('hidden');
    quizScreen.classList.add('hidden');
}

function showHomeScreen() {
    hideAllScreens();
    homeScreen.classList.remove('hidden');
    renderModules();
}

function showModeScreen(moduleId) {
    const modIndex = courseData.findIndex(m => m.id === moduleId);
    const isUnlocked = modIndex === 0 || userStats.completedModules.includes(courseData[modIndex - 1].id);

    if (!isUnlocked) {
        alert("🔒 Este módulo está bloqueado. ¡Completa el nivel anterior para desbloquearlo!");
        return;
    }

    hideAllScreens();
    activeModule = courseData[modIndex];
    
    document.getElementById('selected-module-title').innerText = activeModule.title;
    document.getElementById('selected-module-count').innerText = `${activeModule.items.length} expresiones de nivel ${activeModule.level}`;
    
    modeScreen.classList.remove('hidden');
}

function renderModules() {
    if (!modulesList) return;
    modulesList.innerHTML = '';
    
    courseData.forEach((mod, index) => {
        const isUnlocked = index === 0 || userStats.completedModules.includes(courseData[index - 1].id);
        const isCompleted = userStats.completedModules.includes(mod.id);

        const card = document.createElement('div');
        card.className = `module-card ${isUnlocked ? '' : 'locked'}`;
        
        let statusText = `Disponible`;
        if (isCompleted) {
            statusText = `<span class="module-status completed">✓ Completado</span>`;
        } else if (!isUnlocked) {
            statusText = `<span class="module-status">🔒 Bloqueado</span>`;
        }

        card.innerHTML = `
            <div class="module-card-header">
                <h3>${mod.title}</h3>
                <span class="level-badge">${mod.level}</span>
            </div>
            <div class="module-status">${statusText}</div>
        `;

        card.onclick = () => {
            if (isUnlocked) {
                showModeScreen(mod.id);
            } else {
                alert("🔒 ¡Completa los niveles anteriores en orden para desbloquear este reto!");
            }
        };

        modulesList.appendChild(card);
    });

    try {
        if (typeof lucide !== 'undefined') lucide.createIcons();
    } catch (e) {
        console.log("Lucide icons notice:", e);
    }
}

function startLearnMode() {
    hideAllScreens();
    learnScreen.classList.remove('hidden');
    currentSessionItems = activeModule.items;
    currentIndex = 0;
    renderLearnCard();
}

function renderLearnCard() {
    const item = currentSessionItems[currentIndex];
    learnCroatian.innerText = item.croatian;
    learnSpanish.innerText = item.spanish;
    learnExample.innerText = item.example || "Uso cotidiano en la calle.";
    learnCounter.innerText = `${currentIndex + 1} / ${currentSessionItems.length}`;

    prevLearnBtn.style.visibility = currentIndex === 0 ? 'hidden' : 'visible';
    nextLearnBtn.innerText = currentIndex === currentSessionItems.length - 1 ? 'Finalizar' : 'Siguiente';

    speakCroatian(item.croatian);
}

function prevLearnCard() {
    if (currentIndex > 0) {
        currentIndex--;
        renderLearnCard();
    }
}

function nextLearnCard() {
    if (currentIndex < currentSessionItems.length - 1) {
        currentIndex++;
        renderLearnCard();
    } else {
        userStats.xp += 10;
        updateInteractionTime();
        alert("¡Módulo estudiado! Has ganado +10 XP. ¡Ahora ve al Quiz para desbloquear el siguiente nivel!");
        showModeScreen(activeModule.id);
    }
}

function startQuizMode() {
    hideAllScreens();
    quizScreen.classList.remove('hidden');
    currentSessionItems = [...activeModule.items].sort(() => 0.5 - Math.random());
    currentIndex = 0;
    loadQuizQuestion();
}

function loadQuizQuestion() {
    selectedOption = null;
    checkBtn.classList.add('hidden');
    
    const item = currentSessionItems[currentIndex];
    targetPhrase.innerText = item.croatian;
    speakCroatian(item.croatian);

    const progress = ((currentIndex) / currentSessionItems.length) * 100;
    progressBar.style.width = `${progress}%`;

    const shuffledOptions = [...item.options].sort(() => 0.5 - Math.random());

    optionsContainer.innerHTML = '';
    shuffledOptions.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.innerText = opt;
        btn.onclick = () => selectOption(btn, opt);
        optionsContainer.appendChild(btn);
    });
}

function selectOption(btnElement, optionValue) {
    document.querySelectorAll('.option-btn').forEach(b => b.classList.remove('selected'));
    btnElement.classList.add('selected');
    selectedOption = optionValue;
    checkBtn.classList.remove('hidden');
}

function checkAnswer() {
    const item = currentSessionItems[currentIndex];
    const isCorrect = selectedOption === item.spanish;

    if (isCorrect) {
        userStats.xp += 15;
        feedbackTitle.innerText = "¡Correcto! 🎯";
        feedbackTitle.style.color = "var(--primary)";
        feedbackMsg.innerText = "¡Excelente dominio del croata!";
    } else {
        userStats.lives = Math.max(0, userStats.lives - 1);
        feedbackTitle.innerText = "Incorrecto ❌";
        feedbackTitle.style.color = "var(--danger)";
        feedbackMsg.innerText = `La respuesta correcta es: "${item.spanish}"`;
    }

    updateInteractionTime();
    feedbackModal.classList.remove('hidden');
}

function nextQuizQuestion() {
    feedbackModal.classList.add('hidden');
    currentIndex++;

    if (currentIndex < currentSessionItems.length && userStats.lives > 0) {
        loadQuizQuestion();
    } else {
        if (userStats.lives > 0) {
            if (!userStats.completedModules.includes(activeModule.id)) {
                userStats.completedModules.push(activeModule.id);
            }
            alert(`🎉 ¡Nivel superado! Has desbloqueado el siguiente paso en el camino.`);
        } else {
            alert("Te has quedado sin vidas. ¡Repasa las tarjetas en modo estudio y vuelve a intentarlo!");
            userStats.lives = 3;
        }
        updateUIHeader();
        showHomeScreen();
    }
}

// --- REPASO EXPRESS (Sólo lecciones ya aprobadas/completadas) ---
function startReviewSession() {
    reviewBanner.classList.add('hidden');
    
    // Filtrar estrictamente los módulos que el usuario ya ha completado
    let eligibleModules = courseData.filter(m => userStats.completedModules.includes(m.id));
    
    // Si por alguna razón no ha completado ninguno aún, usamos por defecto el primer módulo (A1)
    if (eligibleModules.length === 0) {
        eligibleModules = [courseData[0]];
    }

    const allItems = eligibleModules.flatMap(m => m.items);
    currentSessionItems = allItems.sort(() => 0.5 - Math.random()).slice(0, 10);
    currentIndex = 0;
    
    hideAllScreens();
    quizScreen.classList.remove('hidden');
    loadQuizQuestion();
}

function updateUIHeader() {
    if (streakEl) streakEl.innerText = userStats.streak;
    if (xpEl) xpEl.innerText = `${userStats.xp} XP`;
    if (livesEl) livesEl.innerText = userStats.lives;
    localStorage.setItem('croatian_app_stats', JSON.stringify(userStats));
}

function checkReviewNeeded() {
    const TWELVE_HOURS = 12 * 60 * 60 * 1000;
    const now = Date.now();
    if ((now - userStats.lastInteraction) >= TWELVE_HOURS && reviewBanner) {
        reviewBanner.classList.remove('hidden');
    }
}

function updateInteractionTime() {
    userStats.lastInteraction = Date.now();
    updateUIHeader();
}

// --- SÍNTESIS DE VOZ NATIVA (Motor de Google Translate) ---
function speakCroatian(text) {
    try {
        window.speechSynthesis?.cancel();
        const ttsUrl = `https://translate.google.com/translate_tts?ie=UTF-8&q=${encodeURIComponent(text)}&tl=hr&client=tw-ob`;
        const audio = new Audio(ttsUrl);
        audio.play().catch(error => {
            console.log("Audio play failed, falling back", error);
            fallbackWebSpeech(text);
        });
    } catch (e) {
        fallbackWebSpeech(text);
    }
}

function fallbackWebSpeech(text) {
    if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'hr-HR';
        utterance.rate = 0.85;
        window.speechSynthesis.speak(utterance);
    }
}

init();
