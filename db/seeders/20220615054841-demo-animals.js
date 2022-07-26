module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Animals', [{
      name: 'Енот-полоскун',
      description: `Своё название енот получил за характерные движения, которые он производит, добывая из-под коряги лягушку, или отмывая от грязи вкусный корешок.

      Слово енот произошло от индейского слова «arakun», который означает — «он царапает своими руками». Американские колонисты начали опускать звук «а», упоминая это животное, и оно стало называться «raccoon».
      
      Своим общим обликом, движениями и любознательностью енот очень напоминает медведя. Недаром индейцы — аборигены Северной Америки — называли его «младшим братом медведя». В Азербайджане, куда еноты были завезены в начале 20 столетия, тоже подметили это сходство, отсюда местное название — «баладжа аи» — маленький медвежонок.
      
      Люди испокон веку охотились на енотов ради меха — одного из самых дорогих мехов диких животных Северной Америки. Ещё в 19 веке шкурка енота была в Америке платёжным средством. Но интенсивная охота не привела к серьёзному уменьшению численности животных.
      
      В настоящее время на своей родине, в Америке, еноты прекрасно уживаются рядом с людьми: в поисках съестного часто заходят в посёлки и на окраины городов. Этот симпатичный зверёк с лукавой, остренькой мордочкой стал героем множества комиксов и мультфильмов.
      
      Естественный ареал енота-полоскуна — Центральная и Северная Америка, от Панамского перешейка до р. Св. Лаврентия, куда входят южные провинции Канады и территория США за исключением штатов Юта, Невада, Скалистых гор.
      
      В начале 20 века енотов начали разводить на зверофермах в некоторых европейских странах и в России. В 1936 г. начались первые опыты по акклиматизации этого зверя в нескольких регионах Советского Союза: в Белоруссии, Азербайджане, Киргизии, Приморском крае и в Средней Азии. В течение нескольких лет были выпущены около полутора тысяч зверей. Наиболее успешно еноты приспособились к новым условиям в Белоруссии и Азербайджане. В настоящее время специально выпущенные, а также сбежавшие со звероферм еноты расселились и по многим европейским странам.
      
      Енот-полоскун встречается в самых разнообразных биотопах. Самое главное условие — наличие неподалёку водоёма — речки или озера. Предпочитает низинные или равнинные участки. Часто встречается на окраинах полей, в садах, других лесонасаждениях, заходит в пригороды.
      
      Внешний вид и морфология
      Небольшой, коренастый зверь размером со среднюю собаку: длина туловища енота в среднем 65 см, хвоста — 25, высота в холке 30–35 см. Вес животного от 5,4 до 15,8 кг, в среднем 6 кг. Самцы тяжелее самок примерно на 10–30%. Голова широкая, морда острая и короткая. Уши небольшие и притупленные на конце. Ноги относительно короткие, подошвы лап голые. Пальцы длинные, подвижные, почти такие же ловкие, как у обезьян. Когти не втяжные.
      
      Окраска этого зверя желтовато-серая, с примесью чёрного. На морде очень характерная «маска»: от лба до кончика носа тянется чёрно-бурая полоса, а от глаз вниз и на щёки идут две широкие чёрные полосы, окаймлённые белой шерстью над глазами и на конце мордочки. По бокам головы шерсть несколько удлинённая, образует бакенбарды. На хвосте 5–7 широких колец серо-желтого и черно-бурого цвета. Мех енота-полоскуна длинный и пушистый.
      
      У енотов прекрасное ночное зрение и острый слух. Несмотря на кажущуюся неуклюжесть, еноты превосходно лазают по деревьям, причём спускаются головой вниз, благодаря подвижным ступням ног, которые могут поворачиваться практически на 180 градусов. Еноты способны так же, как обезьяны или ленивцы, лазать по горизонтальным ветвям, вися на них вниз спиной.`,
      createdAt: new Date(),
      updatedAt: new Date(),
      main_pic_id: null,
    }, {
      name: 'Голубой баран',
      description: `Как и для большинства диких копытных, для голубого барана основную опасность представляет браконьерство. К счастью, этот вид животных обитает в труднодоступных местах Гималаев и, кроме того, находится под защитой вокруг буддистских монастырей. Местные охотники не оказывают значительного воздействия на популяцию, однако, используя современное оружие и вертолёты можно и в горах добывать копытных без особого труда. Этим пользуются зарубежные хантеры во время трофейных охот. В результате погибают наиболее крупные взрослые самцы, что не может не сказываться пагубно на популяции.

      Иногда нахуры вступают в конфликт с человеком, повреждая в долинах сельскохозяйственные культуры и конкурируя за пастбища с домашним скотом. Однако эти копытные живут в таких горных районах, где земледелие практически отсутствует, и домашний скот встречается не часто.
      
      Вид встречается в Гималаях на территории Непала, Китая и Индии.
      
      Населяет плоскогорья и открытые склоны на высоте 3000-5500 м. Держится вблизи скал и редко удаляется от скалистых участков дальше 200 метров. Так легче спастись от главных врагов в природе - леопарда и снежного барса. Избегает лесов и кустарников и только зимой спускается до верхней границы леса.
      
      Животное средних размеров животное: длина тела 115-165 см, высота – 69-91 см, длина хвоста от 10 до 20 см и масса тела от 35 до 75 кг. Самцы незначительно крупнее самок.
      
      Своё название голубой баран получил из-за окраски: спина, бока и шея коричневато-серого цвета, часто с голубоватым оттенком, более заметным зимой.  Белый живот отделён от бока угольно-черной полосой, грудь и передняя сторона ног также черные. На запястьях белые поперечные полосы. У самок чуть менее контрастная окраска, чем у самцов. Животные обоих полов имеют рога с ребристой верхней поверхностью. У самок рога небольшие, длиной до 20 см, но острые. Рога самцов очень эффектны, они растут в течение почти всей жизни и могут достигать в длину 80 см. Направление рогов - вверх, затем - в стороны и назад.
      `,
      createdAt: new Date(),
      updatedAt: new Date(),
      main_pic_id: null,
    }, {
      name: 'Нутрия',
      description: `Нутрия — промысловый зверь, которого добывают из-за ценного меха, а также разводят на фермах и в звероводческих хозяйствах. Ценится не только мех, но и мясо нутрии, нежирное и с низким содержанием холестерина. Первые фермы по разведению нутрий появились в конце XIX — начале ХХ веков в Аргентине, где их начали создавать из-за резкого снижения численности животных в природе. Позднее нутрий стали разводить в Европе, Азии и Северной Америке. Когда мода на мех нутрии проходила, фермы переставали себя окупать и становились нерентабельными. Часто разорившиеся хозяева выпускали зверьков в природу — или они разбегались сами. Размножившись, нутрии в некоторых местах становились вредителями, поедая водную растительность, вытесняя местные виды животных, подрывая речные берега, нанося ущерб болотам и ирригационным системам. На юге США, в Луизиане, они обгрызали даже деревянную обшивку жилых домов!

      В 1930-е годы нутрии появились в Советском Союзе. Диких зверьков выпустили во многих районах, преимущественно на юге страны. В Азербайджане, Грузии и Таджикистане акклиматизация была успешной, в более северных регионах нутрии не прижились из-за того, что не приспособлены к жизни в замерзающих водоемах. В отличие, например, от бобра и ондатры, они не умеют, плавая подо льдом, находить полыньи и, нырнув, погибают, не находя выхода. Не умеют они и делать запасов на зиму.
      
      Изначально нутрии обитали в южной половине Южной Америке, от Боливии до Огненной Земли. Во многих странах Европы и Азии, а также в Северной Америке вид был акклиматизирован позднее. В некоторых регионах (например, в США) ареал нутрии то расширяется, то сужается в зависимости от того, мягкая или суровая выдастся зима.
      
      Внешний вид и особенности строения
      Нутрии наделены внешностью типичных грызунов — они похожи на крыс, но очень крупных: длина тела 50–60 см, хвост 40–45 см. Самцы несколько крупнее, чем самки. Весят нутрии от 5 до 12 кг. Передние зубы — резцы — у них ярко-оранжевые и, как и у всех грызунов, постоянно растут на протяжении всей жизни.
      
      Нутрии отлично приспособлены в жизни в воде: перепонки между пальцами задних лап, не намокающий в воде мех, длинный, почти без шерсти хвост, который служит плывущему зверьку рулем — все это позволяет им прекрасно чувствовать себя в водной стихии. Специальные запирательные мышцы позволяют нутрии плотно закрывать ноздри под водой. Особое строение имеют губы: спереди они разделены, так что удобно грызть растения, и очень плотно смыкаются позади резцов, не позволяя воде заливаться в рот. Благодаря этому нутрии могут питаться под водой. Зверьки могут проводить под водой до 10 минут, не поднимаясь на поверхность. У самок необычно расположены молочные железы — они находятся высоко на боках, так что детеныши имеют возможность кормиться даже в воде.
      В отличие от животных средней полосы, линька у нутрии происходит постепенно в течение года, но зимой мех все же бывает более пушистым и теплым. У диких нутрий мех коричневый, более светлый на боках и брюхе. Ость длинная и жесткая, подшерсток пушистый и теплый. В звероводческих хозяйствах держат не только зверьков природной окраски. Селекционерами выведены различные цветовые вариации — серый, белый, золотистый, черный и др.
      `,
      createdAt: new Date(),
      updatedAt: new Date(),
      main_pic_id: null,
    }, {
      name: 'Обыкновенный бобр',
      description: `В настоящее время он до сих пор входит в международный список краснокнижных животных, но уже в статусе Least Concern — вид, вызывающий наименьшие опасения. В европейских странах бобров ещё мало, а вот в России на них уже открыта ограниченная охота.

      В настоящее время ареал бобра довольно обширен, это результат усилий зоологов по акклиматизации и реинтродукции этого зверя. Он встречается на большей территории северной Европы, в низовьях р. Роны, бассейне р. Эльбы, Вислы, в лесной и отчасти в лесостепной зоне европейской части России. Разрозненные очаги обитания речного бобра имеются в верховьях Енисея, в Кузбассе, Прибайкалье, в бассейне Амура, на Камчатке.
      
      Бобр — типичное полуводное животное, жизнь которого тесно связана с небольшими водоёмами: медленно текущими лесными речками, ручьями, старицами, озёрами. Широких и быстротекущих рек бобры избегают. Для этих животных важно наличие лиственных пород деревьев, а также травянистой растительности, которые составляют основу их питания.
      
      Внешний вид и морфология
      Бобр — самый крупный грызун северного полушария. У него короткое массивное тело длиной до 70–80 см, а иногда и до 1 м. Вес старых крупных самцов может достигать 30 кг, самки ещё чуть крупнее. Лапы короткие и толстые, задние длиннее и сильнее передних. На каждой по 5 пальцев, на передних лапах первый палец противопоставлен остальным, благодаря чему бобр может очень ловко манипулировать предметами. На задних хорошо развиты плавательные перепонки, и животное может в воде развивать скорость до 7 км/час. Когти мощные, крепкие, коготь на 2-м пальце задней конечности раздвоен в виде небольшой вилки. С его помощью бобр расчесывает шерсть и обрабатывает волосы особой смесью парных анальных желёз и выделений так называемой «бобровой струи».
      
      К бобровой струе, издающей сильный мускусный запах, издавна был повышенный интерес, поскольку люди приписывали ей поистине чудодейственные свойства. Гистологические исследования показали, что бобровая струя не имеет железистой структуры, это так называемые препуциальные органы, которые представляют собой кожные мешочки, и их содержимое образуется в результате взаимодействия ороговевающего эпителия и солей, приносимых мочой. Различий в строении и образовании содержимого этих органов между самцами и самками не выявлено.
      
      Рядом с бобровой струёй расположены анальные железы, выделяющие маслянистый секрет, различающийся у самцов и самок и по цвету, и по запаху, и по консистенции. Самцы имеют секрет желтого цвета, а самки — серого. Совокупность выделений анальных желёз и бобровой струи несёт запаховую информацию о поле, возрасте, физиологическом состоянии животного и его индивидуальности. Ими бобры метят свою территорию, причем секрет жировиков, используемый совместно со струёй, позволяет дольше сохранять бобровую метку в «рабочем» состоянии благодаря маслянистой структуре, которая испаряется намного медленнее секрета бобровой струи.
      
      У бобра особенный хвост — такого больше ни у кого нет! По форме он напоминает весло, уплощенное в горизонтальной плоскости. Длина хвоста лишь вдвое превышает его ширину. В верхней части имеется небольшой роговой вырост — киль, большая часть которого покрыта шестиугольными роговыми пластинками. У основания хвоста ещё есть шерсть, далее между пластинками растут отдельные короткие и жесткие волоски. Плавая, бобр использует хвост как руль глубины. Под водой бобр может находиться до 5 минут.
      
      Небольшие глаза этого животного при нырянии закрываются мигательной перепонкой (третье веко), которая одновременно обеспечивает защиту глаз и четкое видение под водой. У бобров великолепный слух, хотя уши тоже небольшие, широкие и короткие, едва заметные над мехом. И уши, и ноздри под водой смыкаются, так что вода туда не попадает. Крупные, красновато-коричневые резцы бобра отделены от ротовой полости особыми выростами верхних губ, благодаря чему животное может грызть под водой, без риска наглотаться её. Эти зубы у бобров, как и у всех грызунов, растут всю жизнь. Передняя поверхность резцов покрыта эмалью, а задняя состоит из более мягкого дентина, так что чем больше бобр грызет, тем острее зубы.
      
      Бобр — обладатель красивого меха, окраска которого варьирует у разных животных от светло-коричневого до почти черного. Волосяной покров состоит из длинной грубой ости длиной до 5 см (на спине) и мягкого, очень густого подшерстка длиной около 2 см. На 1 см² в среднем приходится около 32 тыс. волосков, а на один остевой волос приходится 230–300 пуховых волос. В целом мех бобра очень прочный и влагоустойчивый, ведь он должен согревать зверя, вылезшего из воды морозной зимой.`,
      createdAt: new Date(),
      updatedAt: new Date(),
      main_pic_id: null,
    }, {
      name: 'Обыкновенный или азиатский шакал',
      description: `Взаимоотношения человек – шакал насчитывают тысячелетия. Этот зверь часто живёт рядом с человеком, кормится возле него, подбирает пищевые отходы, нападает на домашний скот и птицу. Шакал хитрый и даже нахальный зверь. По степени дерзости нападений на птичники он превосходит лисиц. Вместе с тем, шакал довольно труслив и для человека не опасен.

      Там, где шакалов много, они наносят большой ущерб садам, бахчам и плантациям, поедая дыни, арбузы, виноград и даже сахарный тростник. Они любят сладкое и выбирают самые спелые плоды, но при этом портят много других. Значительно страдают от шакалов фазаны, живущие в тугайных зарослях.
      
      Распространение и места обитания
      
      Распространён шакал преимущественно в полупустынях и пустынях на юге Азии от Индостана до Палестины, в Средней Азии, на юго-востоке Европы и в северной части Африки. В Россию вид заходит самым краешком своего ареала – встречается в Западном и Восточном Предкавказье.
      
      Шакал поселяется в долинах рек, по берегам крупных водоёмов, предгорьям, в оазисах. Его излюбленные места – густые заросли колючих кустарников и тростника, тугаи, которые растут по поймам рек и ложам временных весенних водотоков, повсюду прорезающих предгорные пустыни. В оазисах шакалы поселяются в непосредственной близости от человека – заходят на окраины поселков, бахчей. Самих пустынь этот зверь избегает.
      
      Норы шакал роет редко, лишь в тех местах, где мало растительности, либо занимает лисью или барсучью. Чаще логово-лёжку устраивает под переплетёнными ветвями кустарников, иногда под корнями или даже в дуплах больших упавших деревьев.
      
      Внешний вид
      
      Внешне шакал очень похож на волка, однако голова не такая лобастая, мордочка более узкая и заострённая, да и размеры поменьше. Длина тела у взрослых самцов 70-85 см, длина хвоста не более 30 см, вес от 6,5 до 13 кг. Уши похожи на волчьи – широко расставленные, заострённые. Шерсть грубая, жесткая. Общий тон окраски зимой рыжевато-серый, концы остевых волос на спине тёмные. Летний мех более короткий и грубый, ярче и светлее зимнего.
      `,
      createdAt: new Date(),
      updatedAt: new Date(),
      main_pic_id: null,
    }, {
      name: 'Обыкновенный песец',
      description: `Песец — житель Крайнего Севера, именно поэтому у него такая тёплая, лёгкая и красивая шуба, которая и согревает, и делает его малозаметным на снегу. К сожалению, именно из-за неё зверёк стал широко известен.
      На большой части своего ареала вид обычен, однако, численность отдельных подвидов значительно варьирует. Самый редкий песец обитает на острове Медный, он занесён в Красную книгу МСОП, численность взрослых особей не превышает 100.
      
      Песец — типичный представитель фауны Арктики и Субарктики, его область распространения как бы кольцом охватывает Северный Ледовитый океан. Этот зверь населяет материковые тундры, начиная со Скандинавского и Кольского полуостровов через всю полярную Евразию и Северную Америку, а также Гренландию, Шпицберген, Новую Землю, многие острова Северного Ледовитого океана, Канадский архипелаг. Песцы постоянно обитают на островах Прибылова, Алеутских и Командорских островах. Примечательно, что границы ареала этого хищника сильно смещаются в зависимости от сезона. Строят норы и размножаются эти животные в тундре и на Арктических островах, а во время зимних кочевок они иногда заходят далеко в глубь материка и могут оказаться не только во многих северных таёжных районах, но и в Южной Финляндии (почти на широте Москвы), южной части Прибайкалья, низовьях Амура. Иногда зимой песцы уходят из родной тундры и на север, во льды океана. Следуя за белым медведем и питаясь остатками его добычи, песцы проникают в очень отдалённые от суши места.
      
      Большой подвижностью зверьков и постоянным смешением популяций объясняется и слабо выраженная географическая изменчивость этого вида: на всём обширном пространстве его ареала выделяется всего от 8 до 10 подвидов.
      
      Наиболее типичными местами обитания песца в летнюю пору, когда они живут осёдло, являются открытые тундры с холмистым рельефом. Чаще всего зверьки выбирают для поселений вершины водоразделов и сопок, верхние террасы речных долин, высокие берега озёр и морских побережий.
      
      Внешний вид и морфология
      
      Полярная лисичка — некрупный зверь (длина тела 45–70 см, вес от 2 до 8 кг) в зависимости от сезона года выглядит по-разному. Зимой, когда шерсть чрезвычайно густая и пышная, он кажется приземистым, широко расставленные уши едва выступают из меха. В коротком летнем мехе песец довольно высоконогий и стройный. Относительно крупная голова летом выглядит непропорционально большой, с огромными ушами и притупленной мордочкой. Различают две цветовые морфы по зимнему окрасу: белую и голубую. Каждая морфа по своему меняется к лету: «голубой» песец летом становится шоколадно-коричневым, а «белый» — бурым сверху и светло-серым снизу.
      
      Песец — подвижный зверёк, по манере поведения похож на лисицу. Органы чувств у этого обитателя суровых полярных пустынь развиты лучше, чем у других представителей семейства псовых. Мышкующий песец за несколько метров слышит движение полёвки под снегом, тетеревиных птиц, ночующих в снегу, чует за 100 м, видит белых куропаток, которые для глаза человека сливаются с белыми фоном.
      `,
      createdAt: new Date(),
      updatedAt: new Date(),
      main_pic_id: null,
    }, {
      name: 'Росомаха обыкновенная',
      description: `Виды, подобные росомахе, ученые называют естественно редкими. Их численность никогда не бывает высокой, распространены животные в пределах ареала более-менее равномерно. На сегодняшний день общее количество росомах, по оценкам ученых, вряд ли превышает 20–30 тысяч особей. Международная красная книга относит ее к категории малоуязвимых видов.

      Однако природоохранным законодательством разных стран и регионов росомахи включены в местные Красные книги. В такой случае статус вида зависит от ситуации, которая складывается конкретно на той или иной территории. К примеру, в большинстве европейских стран, на юге Канады росомаха находится под охраной как редкий вид, поскольку деятельность человека (вырубка лесов) привела к сокращению численности животных в этой части ареала ниже естественного фона. В Финляндии и Удмуртии росомаха — вид, находящийся под угрозой исчезновения, охота на нее в этих регионах запрещена.
      
      В пушном промысле имеет второстепенное значение из-за довольно грубого жесткого меха.
      
      Распространена росомаха преимущественно в тайге, лесотундре, местами заходит в тундры Евразии и Северной Америки, встречается по высоким горным хребтам, поросшим лесом. В горах доходит до альпийских лугов. В Европе она сохранилась в Финляндии и на севере Скандинавского полуострова. На территории нашей страны ее ареал охватывает Ленинградскую, Вологодскую области, Пермский край, а также территорию Сибири.
      Соседства с человеком росомаха не избегает, но все-таки не любит. Места, которые человек начинает активно осваивать, росомаха покидает. Это одна из причин исчезновения и уменьшения ее численности во многих районах Европы и Северной Америки.
      
      Летом держится в самых различных биотопах, а вот зимой предпочитает территории с глубоким снегом, где добыча достается легче. Определяющее значение при выборе зимней территории играет наличие на ней стад крупных копытных — основной добычи росомахи в холодное время года.
      
      Внешний вид и морфология
      
      Внешность у росомахи необычная и запоминающаяся. Приземистая, она похожа одновременно и на медвежонка, и на соболя. Сходство с последним вполне объяснимо: росомаха — самый крупный представитель куньих. Однако пропорции зверя для куньих нетипичны. Туловище не вытянутое, а довольно короткое: длина тела самцов 70–90 см, самки мельче. Вес самца порядка 12–16 кг, самки на 2–3 кг легче. Длина хвоста равна четверти длины тела. Голова у росомахи небольшая, скуластая, с большим ртом и маленькими ушками, едва выступающими из-под меха. Конечности длинные, с несоразмерно большими пятипалыми когтистыми лапами (передняя лапа напоминает медвежью). Из-за них росомаха кажется непропорциональной. Ступни, кроме подушечек, покрыты шерстью. Двигаться по снегу на таких «лыжах» можно не проваливаясь. Мех росомахи обладает удивительным свойством: благодаря густому подшерстку с водоотталкивающим эффектов, он никогда не покрывается инеем, даже в самые лютые морозы. Зимний мех отличается особой густотой и длиной. Самые длинные волосы растут на боках и задней части спины зверя, образуя своеобразную юбку. В окраске заметны светлые узоры — поперек лба проходит белая полоса, а на боках и крестце подковообразный светлый рисунок.
      
      Как и у всех куньих, у росомахи есть прианальные железы. Их выделения, которые росомахи могут выбрызгивать на расстояние до 3 метров, обладают особенно крепким и неприятным запахом. Такое химическое «оружие» не только защищает охотницу от других хищников, но и придает ей смелости, да такой, что она нагло отбирает добычу у более крупных конкурентов, например, у рыси. Развит у хищниц также железистый участок и на животе. Его животное использует для маркировки границ территории — трется животом о ветки, камни.
      `,
      createdAt: new Date(),
      updatedAt: new Date(),
      main_pic_id: null,
    }], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
