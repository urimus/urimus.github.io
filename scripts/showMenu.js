"use strict";

function  getLangShort(lang1, lang) {

	switch(lang1) {
	case 'eng':
		if (lang=='eng' || lang=='lat') return 'eng.';
		if (lang=='rus') return 'англ.';
		break;
	case 'fr':
		if (lang=='eng' || lang=='lat') return 'fr.';
		if (lang=='rus') return 'фр.';
		break;
	case 'rus':
		if (lang=='eng' || lang=='lat') return 'rus.';
		if (lang=='rus') return 'рус.';
		break;
	case 'chi':
		if (lang=='eng' || lang=='lat') return 'chi.';
		if (lang=='rus') return 'кит.';
		break;
	case 'hun':
		if (lang=='eng' || lang=='lat') return 'hung.';
		if (lang=='rus') return 'венг.';
		break;
	case 'sp':
		if (lang=='eng' || lang=='lat') return 'sp.';
		if (lang=='rus') return 'исп.';
		break;
	case 'port':
		if (lang=='eng' || lang=='lat') return 'port.';
		if (lang=='rus') return 'порт.';
		break;
	case 'it':
		if (lang=='eng' || lang=='lat') return 'it.';
		if (lang=='rus') return 'ит.';
		break;
	case 'ice':
		if (lang=='eng' || lang=='lat') return 'icel.';
		if (lang=='rus') return 'исл.';
		break;
	case 'nor':
		if (lang=='eng' || lang=='lat') return 'norw.';
		if (lang=='rus') return 'норв.';
		break;
	case 'kor':
		if (lang=='eng' || lang=='lat') return 'kor.';
		if (lang=='rus') return 'кор.';
		break;
	case 'arab':
		if (lang=='eng' || lang=='lat') return 'arab.';
		if (lang=='rus') return 'араб.';
		break;
	case 'tur':
		if (lang=='eng' || lang=='lat') return 'tur.';
		if (lang=='rus') return 'тур.';
		break;
	default:
		if (lang=='eng' || lang=='lat') return 'orig.';
		if (lang=='rus') return 'ориг.';
	}


}



function  getFlagTitle(flag, lang) {


	switch(flag) {
	case 'usa':
		if (lang=='eng' || lang=='lat') return 'United States of America';
		if (lang=='rus') return 'Соединённые Штаты Америки';
		break;
	case 'united_kingdom':
		if (lang=='eng' || lang=='lat') return 'United Kingdom of Great Britain and Northern Ireland';
		if (lang=='rus') return 'Соединённое Королевство Великобритании и Северной Ирландии';
		break;
	case 'france':
		if (lang=='eng' || lang=='lat') return 'French Republic';
		if (lang=='rus') return 'Французская Республика';
		break;
	case 'russia':
		if (lang=='eng' || lang=='lat') return 'Russian Federation';
		if (lang=='rus') return 'Российская Федерация';
		break;
	case 'ussr':
		if (lang=='eng' || lang=='lat') return 'Union of Soviet Socialist Republics';
		if (lang=='rus') return 'Союз Советских Социалистических Республик';
		break;
	case 'sanmarino':
		if (lang=='eng' || lang=='lat') return 'Republic of San Marino';
		if (lang=='rus') return 'Республика Сан-Марино';
		break;
	case 'israel':
		if (lang=='eng' || lang=='lat') return 'State of Israel';
		if (lang=='rus') return 'Государство Израиль';
		break;
	case 'finland':
		if (lang=='eng' || lang=='lat') return 'Republic of Finland';
		if (lang=='rus') return 'Финляндская Республика';
		break;
	case 'south_korea':
		if (lang=='eng' || lang=='lat') return 'Republic of Korea';
		if (lang=='rus') return 'Республика Корея';
		break;
	case 'germany':
		if (lang=='eng' || lang=='lat') return 'Federal Republic of Germany';
		if (lang=='rus') return 'Федеративная Республика Германия';
		break;
	case 'norway':
		if (lang=='eng' || lang=='lat') return 'Kingdom of Norway';
		if (lang=='rus') return 'Королевство Норвегия';
		break;
	case 'sweden':
		if (lang=='eng' || lang=='lat') return 'Kingdom of Sweden';
		if (lang=='rus') return 'Королевство Швеция';
		break;
	case 'italy':
		if (lang=='eng' || lang=='lat') return 'Italian Republic';
		if (lang=='rus') return 'Итальянская Республика';
		break;
	case 'belgium':
		if (lang=='eng' || lang=='lat') return 'Kingdom of Belgium';
		if (lang=='rus') return 'Королевство Бельгия';
		break;
	case 'spain':
		if (lang=='eng' || lang=='lat') return 'Kingdom of Spain';
		if (lang=='rus') return 'Королевство Испания';
		break;
	case 'mexico':
		if (lang=='eng' || lang=='lat') return 'United Mexican States';
		if (lang=='rus') return 'Мексиканские Соединённые Штаты';
		break;
	case 'brazil':
		if (lang=='eng' || lang=='lat') return 'Federative Republic of Brazil';
		if (lang=='rus') return 'Федеративная Республика Бразилия';
		break;
	case 'greece':
		if (lang=='eng' || lang=='lat') return 'Hellenic Republic';
		if (lang=='rus') return 'Греческая Республика';
		break;
	case 'denmark':
		if (lang=='eng' || lang=='lat') return 'Kingdom of Denmark';
		if (lang=='rus') return 'Королевство Дания';
		break;
	case 'bulgaria':
		if (lang=='eng' || lang=='lat') return 'Republic of Bulgaria';
		if (lang=='rus') return 'Республика Болгария';
		break;
	case 'canada':
		if (lang=='eng' || lang=='lat') return 'Canada';
		if (lang=='rus') return 'Канада';
		break;
	case 'china':
		if (lang=='eng' || lang=='lat') return 'People&apos;s Republic of China';
		if (lang=='rus') return 'Китайская Народная Республика';
		break;
	case 'japan':
		if (lang=='eng' || lang=='lat') return 'Japan';
		if (lang=='rus') return 'Государство Япония';
		break;
	case 'hungary':
		if (lang=='eng' || lang=='lat') return 'Hungary';
		if (lang=='rus') return 'Венгрия';
		break;
	case 'australia':
		if (lang=='eng' || lang=='lat') return 'Commonwealth of Australia';
		if (lang=='rus') return 'Австралийский Союз';
		break;
	case 'austria':
		if (lang=='eng' || lang=='lat') return 'Republic of Austria';
		if (lang=='rus') return 'Австрийская Республика';
		break;
	case 'switzerland':
		if (lang=='eng' || lang=='lat') return 'Swiss Confederation';
		if (lang=='rus') return 'Швейцарская Конфедерация';
		break;
	case 'argentina':
		if (lang=='eng' || lang=='lat') return 'Argentine Republic';
		if (lang=='rus') return 'Аргентинская Республика';
		break;
	case 'ireland':
		if (lang=='eng' || lang=='lat') return 'Republic of Ireland';
		if (lang=='rus') return 'Республика Ирландия';
		break;
	case 'romania':
		if (lang=='eng' || lang=='lat') return 'Romania';
		if (lang=='rus') return 'Румыния';
		break;
	case 'iceland':
		if (lang=='eng' || lang=='lat') return 'Iceland';
		if (lang=='rus') return 'Исландия';
		break;
	case 'south_africa':
		if (lang=='eng' || lang=='lat') return 'Republic of South Africa';
		if (lang=='rus') return 'Южно-Африканская Республика';
		break;
	case 'new_zealand':
		if (lang=='eng' || lang=='lat') return 'New Zealand';
		if (lang=='rus') return 'Новая Зеландия';
		break;
	case 'czech':
		if (lang=='eng' || lang=='lat') return 'Czech Republic';
		if (lang=='rus') return 'Чешская Республика';
		break;
	case 'poland':
		if (lang=='eng' || lang=='lat') return 'Republic of Poland';
		if (lang=='rus') return 'Республика Польша';
		break;
	case 'serbia':
		if (lang=='eng' || lang=='lat') return 'Republic of Serbia';
		if (lang=='rus') return 'Республика Сербия';
		break;
	case 'colombia':
		if (lang=='eng' || lang=='lat') return 'Republic of Colombia';
		if (lang=='rus') return 'Республика Колумбия';
		break;
	case 'netherlands':
		if (lang=='eng' || lang=='lat') return 'Netherlands';
		if (lang=='rus') return 'Нидерланды';
		break;
	case 'ukraine':
		if (lang=='eng' || lang=='lat') return 'Ukraine';
		if (lang=='rus') return 'Украина';
		break;
	case 'kazakhstan':
		if (lang=='eng' || lang=='lat') return 'Republic of Kazakhstan';
		if (lang=='rus') return 'Республика Казахстан';
		break;
	case 'hong_kong':
		if (lang=='eng' || lang=='lat') return 'Hong Kong Special Administrative Region of the People&apos;s Republic of China';
		if (lang=='rus') return 'Специальный Административный Район Гонконг';
		break;
	case 'malta':
		if (lang=='eng' || lang=='lat') return 'Republic of Malta';
		if (lang=='rus') return 'Республика Мальта';
		break;
	case 'uae':
		if (lang=='eng' || lang=='lat') return 'United Arab Emirates';
		if (lang=='rus') return 'Объединённые Арабские Эмираты';
		break;
	case 'egypt':
		if (lang=='eng' || lang=='lat') return 'Arab Republic of Egypt';
		if (lang=='rus') return 'Арабская Республика Египет';
		break;
	case 'saudi_arabia':
		if (lang=='eng' || lang=='lat') return 'Kingdom of Saudi Arabia';
		if (lang=='rus') return 'Королевство Саудовская Аравия';
		break;
	case 'cambodia':
		if (lang=='eng' || lang=='lat') return 'Kingdom of Cambodia';
		if (lang=='rus') return 'Королевство Камбоджа';
		break;
	case 'qatar':
		if (lang=='eng' || lang=='lat') return 'State of Qatar';
		if (lang=='rus') return 'Государство Катар';
		break;
	case 'chile':
		if (lang=='eng' || lang=='lat') return 'Republic of Chile';
		if (lang=='rus') return 'Республика Чили';
		break;
	case 'turkey':
		if (lang=='eng' || lang=='lat') return 'Republic of Türkiye';
		if (lang=='rus') return 'Турецкая Республика';
		break;
	default:
		return flag;
	}


}


function  loadMenuSitemap(lang) {


var wholeMenu = {};


if (lang=="eng") {

	wholeMenu["● Site Map"] = {};
	wholeMenu["● Site Map"].id = "1";
	wholeMenu["● Site Map"].color = "blue";
	wholeMenu["● Site Map"].hasSub = 1;
	wholeMenu["● Site Map"].link = "";
	wholeMenu["● Site Map"].html = '&#9679; Site Map';


	wholeMenu["● About me"] = {};
	wholeMenu["● About me"].id = "1_1";
	wholeMenu["● About me"].color = "blue";
	wholeMenu["● About me"].hasSub = 1;
	wholeMenu["● About me"].alternativeCaption = "&#9679; About me, Sort by";
	wholeMenu["● About me"].link = "";
	wholeMenu["● About me"].html = '&#9679; About me';

	wholeMenu["11SortBy"] = {};
	wholeMenu["11SortBy"].id = "1_1_1";
	wholeMenu["11SortBy"].color = "blue";
	wholeMenu["11SortBy"].hasSub = 0;
	wholeMenu["11SortBy"].link = "index_eng.html?type=aboutme&sortby=name";
	wholeMenu["11SortBy"].html = '<img src="scripts/contents/icons/sortby_name_blue.svg" height="18"  style="vertical-align:middle; padding-right: 5px;"/>Name';

	wholeMenu["12SortBy"] = {};
	wholeMenu["12SortBy"].id = "1_1_2";
	wholeMenu["12SortBy"].color = "blue";
	wholeMenu["12SortBy"].hasSub = 0;
	wholeMenu["12SortBy"].link = "index_eng.html?type=aboutme&sortby=date";
	wholeMenu["12SortBy"].html = '<img src="scripts/contents/icons/sortby_date_blue.svg" height="18"  style="vertical-align:middle; padding-right: 5px;"/>Date';

	wholeMenu["● About my work"] = {};
	wholeMenu["● About my work"].id = "1_2";
	wholeMenu["● About my work"].color = "blue";
	wholeMenu["● About my work"].hasSub = 1;
	wholeMenu["● About my work"].alternativeCaption = "&#9679; About my work, Sort by";
	wholeMenu["● About my work"].link = "";
	wholeMenu["● About my work"].html = '&#9679; About my work';

	wholeMenu["21SortBy"] = {};
	wholeMenu["21SortBy"].id = "1_2_1";
	wholeMenu["21SortBy"].color = "blue";
	wholeMenu["21SortBy"].hasSub = 0;
	wholeMenu["21SortBy"].link = "index_eng.html?type=aboutwork&sortby=name";
	wholeMenu["21SortBy"].html = '<img src="scripts/contents/icons/sortby_name_blue.svg" height="18"  style="vertical-align:middle; padding-right: 5px;"/>Name';

	wholeMenu["22SortBy"] = {};
	wholeMenu["22SortBy"].id = "1_2_2";
	wholeMenu["22SortBy"].color = "blue";
	wholeMenu["22SortBy"].hasSub = 0;
	wholeMenu["22SortBy"].link = "index_eng.html?type=aboutwork&sortby=date";
	wholeMenu["22SortBy"].html = '<img src="scripts/contents/icons/sortby_date_blue.svg" height="18"  style="vertical-align:middle; padding-right: 5px;"/>Date';

	wholeMenu["● About my PhD"] = {};
	wholeMenu["● About my PhD"].id = "1_3";
	wholeMenu["● About my PhD"].color = "blue";
	wholeMenu["● About my PhD"].hasSub = 1;
	wholeMenu["● About my PhD"].alternativeCaption = "&#9679; About my PhD, Sort by";
	wholeMenu["● About my PhD"].link = "";
	wholeMenu["● About my PhD"].html = '&#9679; About my PhD';

	wholeMenu["31SortBy"] = {};
	wholeMenu["31SortBy"].id = "1_3_1";
	wholeMenu["31SortBy"].color = "blue";
	wholeMenu["31SortBy"].hasSub = 0;
	wholeMenu["31SortBy"].link = "index_eng.html?type=aboutphd&sortby=name";
	wholeMenu["31SortBy"].html = '<img src="scripts/contents/icons/sortby_name_blue.svg" height="18"  style="vertical-align:middle; padding-right: 5px;"/>Name';

	wholeMenu["32SortBy"] = {};
	wholeMenu["32SortBy"].id = "1_3_2";
	wholeMenu["32SortBy"].color = "blue";
	wholeMenu["32SortBy"].hasSub = 0;
	wholeMenu["32SortBy"].link = "index_eng.html?type=aboutphd&sortby=date";
	wholeMenu["32SortBy"].html = '<img src="scripts/contents/icons/sortby_date_blue.svg" height="18"  style="vertical-align:middle; padding-right: 5px;"/>Date';

	wholeMenu["● Links"] = {};
	wholeMenu["● Links"].id = "1_4";
	wholeMenu["● Links"].color = "blue";
	wholeMenu["● Links"].hasSub = 1;
	wholeMenu["● Links"].alternativeCaption = "&#9679; Links, Sort by";
	wholeMenu["● Links"].link = "";
	wholeMenu["● Links"].html = '&#9679; Links';

	wholeMenu["41SortBy"] = {};
	wholeMenu["41SortBy"].id = "1_4_1";
	wholeMenu["41SortBy"].color = "blue";
	wholeMenu["41SortBy"].hasSub = 0;
	wholeMenu["41SortBy"].link = "index_eng.html?type=links&sortby=name";
	wholeMenu["41SortBy"].html = '<img src="scripts/contents/icons/sortby_name_blue.svg" height="18"  style="vertical-align:middle; padding-right: 5px;"/>Name';

	wholeMenu["42SortBy"] = {};
	wholeMenu["42SortBy"].id = "1_4_2";
	wholeMenu["42SortBy"].color = "blue";
	wholeMenu["42SortBy"].hasSub = 0;
	wholeMenu["42SortBy"].link = "index_eng.html?type=links&sortby=date";
	wholeMenu["42SortBy"].html = '<img src="scripts/contents/icons/sortby_date_blue.svg" height="18"  style="vertical-align:middle; padding-right: 5px;"/>Date';

	wholeMenu["● HTML Editor"] = {};
	wholeMenu["● HTML Editor"].id = "1_5";
	wholeMenu["● HTML Editor"].color = "blue";
	wholeMenu["● HTML Editor"].hasSub = 1;
	wholeMenu["● HTML Editor"].alternativeCaption = '&#9679; HTML Editor, Sort by';
	wholeMenu["● HTML Editor"].link = "";
	wholeMenu["● HTML Editor"].html = '&#9679; HTML Editor';

	wholeMenu["51SortBy"] = {};
	wholeMenu["51SortBy"].id = "1_5_1";
	wholeMenu["51SortBy"].color = "blue";
	wholeMenu["51SortBy"].hasSub = 0;
	wholeMenu["51SortBy"].link = "index_eng.html?type=htmleditor&sortby=name";
	wholeMenu["51SortBy"].html = '<img src="scripts/contents/icons/sortby_name_blue.svg" height="18"  style="vertical-align:middle; padding-right: 5px;"/>Name';

	wholeMenu["52SortBy"] = {};
	wholeMenu["52SortBy"].id = "1_5_2";
	wholeMenu["52SortBy"].color = "blue";
	wholeMenu["52SortBy"].hasSub = 0;
	wholeMenu["52SortBy"].link = "index_eng.html?type=htmleditor&sortby=date";
	wholeMenu["52SortBy"].html = '<img src="scripts/contents/icons/sortby_date_blue.svg" height="18"  style="vertical-align:middle; padding-right: 5px;"/>Date';

	wholeMenu["● Music ☥ Vampiric ☥"] = {};
	wholeMenu["● Music ☥ Vampiric ☥"].id = "1_6";
	wholeMenu["● Music ☥ Vampiric ☥"].color = "black";
	wholeMenu["● Music ☥ Vampiric ☥"].hasSub = 1;
	wholeMenu["● Music ☥ Vampiric ☥"].alternativeCaption = '&#9679; Music <font color="purple"><sup>&#9765; Vampiric &#9765;</sup></font>, Sort by';
	wholeMenu["● Music ☥ Vampiric ☥"].link = "";
	wholeMenu["● Music ☥ Vampiric ☥"].html = '&#9679; Music <font color="purple"><sup>&#9765; Vampiric &#9765;</sup></font>';

	wholeMenu["61SortBy"] = {};
	wholeMenu["61SortBy"].id = "1_6_1";
	wholeMenu["61SortBy"].color = "black";
	wholeMenu["61SortBy"].hasSub = 0;
	wholeMenu["61SortBy"].link = "index_eng.html?type=music&sortby=name";
	wholeMenu["61SortBy"].html = '<img src="scripts/contents/icons/sortby_name_black.svg" height="18"  style="vertical-align:middle; padding-right: 5px;"/>Name';

	wholeMenu["62SortBy"] = {};
	wholeMenu["62SortBy"].id = "1_6_2";
	wholeMenu["62SortBy"].color = "black";
	wholeMenu["62SortBy"].hasSub = 0;
	wholeMenu["62SortBy"].link = "index_eng.html?type=music&sortby=date";
	wholeMenu["62SortBy"].html = '<img src="scripts/contents/icons/sortby_date_black.svg" height="18"  style="vertical-align:middle; padding-right: 5px;"/>Date';

	wholeMenu["63SortBy"] = {};
	wholeMenu["63SortBy"].id = "1_6_3";
	wholeMenu["63SortBy"].color = "black";
	wholeMenu["63SortBy"].hasSub = 0;
	wholeMenu["63SortBy"].link = "index_eng.html?type=music&sortby=flag";
	wholeMenu["63SortBy"].html = '<img src="scripts/contents/icons/sortby_flag_black.svg" height="18"  style="vertical-align:middle; padding-right: 5px;"/>Country';

	wholeMenu["● Movies 💎 Unique 💎"] = {};
	wholeMenu["● Movies 💎 Unique 💎"].id = "1_7";
	wholeMenu["● Movies 💎 Unique 💎"].color = "black";
	wholeMenu["● Movies 💎 Unique 💎"].hasSub = 1;
	wholeMenu["● Movies 💎 Unique 💎"].alternativeCaption = "&#9679; Movies <font color='DodgerBlue'><sup>&#128142; Unique &#128142;</sup></font>, Sort by";
	wholeMenu["● Movies 💎 Unique 💎"].link = "";
	wholeMenu["● Movies 💎 Unique 💎"].html = '&#9679; Movies <font color="DodgerBlue"><sup>&#128142; Unique &#128142;</sup></font>';

	wholeMenu["71SortBy"] = {};
	wholeMenu["71SortBy"].id = "1_7_1";
	wholeMenu["71SortBy"].color = "black";
	wholeMenu["71SortBy"].hasSub = 0;
	wholeMenu["71SortBy"].link = "index_eng.html?type=movies&sortby=name";
	wholeMenu["71SortBy"].html = '<img src="scripts/contents/icons/sortby_name_black.svg" height="18"  style="vertical-align:middle; padding-right: 5px;"/>Name';

	wholeMenu["72SortBy"] = {};
	wholeMenu["72SortBy"].id = "1_7_2";
	wholeMenu["72SortBy"].color = "black";
	wholeMenu["72SortBy"].hasSub = 0;
	wholeMenu["72SortBy"].link = "index_eng.html?type=movies&sortby=date";
	wholeMenu["72SortBy"].html = '<img src="scripts/contents/icons/sortby_date_black.svg" height="18"  style="vertical-align:middle; padding-right: 5px;"/>Date';

	wholeMenu["73SortBy"] = {};
	wholeMenu["73SortBy"].id = "1_7_3";
	wholeMenu["73SortBy"].color = "black";
	wholeMenu["73SortBy"].hasSub = 0;
	wholeMenu["73SortBy"].link = "index_eng.html?type=movies&sortby=flag";
	wholeMenu["73SortBy"].html = '<img src="scripts/contents/icons/sortby_flag_black.svg" height="18"  style="vertical-align:middle; padding-right: 5px;"/>Country';

	wholeMenu["● Series ⚘ Forbidden ⚘"] = {};
	wholeMenu["● Series ⚘ Forbidden ⚘"].id = "1_27";
	wholeMenu["● Series ⚘ Forbidden ⚘"].color = "black";
	wholeMenu["● Series ⚘ Forbidden ⚘"].hasSub = 1;
	wholeMenu["● Series ⚘ Forbidden ⚘"].alternativeCaption = "&#9679; Series <font color='MediumSlateBlue'><sup>&#9880; Forbidden &#9880;</sup></font>, Sort by";
	wholeMenu["● Series ⚘ Forbidden ⚘"].link = "";
	wholeMenu["● Series ⚘ Forbidden ⚘"].html = "&#9679; Series <font color='MediumSlateBlue'><sup>&#9880; Forbidden &#9880;</sup></font>";

	wholeMenu["271SortBy"] = {};
	wholeMenu["271SortBy"].id = "1_27_1";
	wholeMenu["271SortBy"].color = "black";
	wholeMenu["271SortBy"].hasSub = 0;
	wholeMenu["271SortBy"].link = "index_eng.html?type=series&sortby=name";
	wholeMenu["271SortBy"].html = '<img src="scripts/contents/icons/sortby_name_black.svg" height="18"  style="vertical-align:middle; padding-right: 5px;"/>Name';

	wholeMenu["272SortBy"] = {};
	wholeMenu["272SortBy"].id = "1_27_2";
	wholeMenu["272SortBy"].color = "black";
	wholeMenu["272SortBy"].hasSub = 0;
	wholeMenu["272SortBy"].link = "index_eng.html?type=series&sortby=date";
	wholeMenu["272SortBy"].html = '<img src="scripts/contents/icons/sortby_date_black.svg" height="18"  style="vertical-align:middle; padding-right: 5px;"/>Date';

	wholeMenu["273SortBy"] = {};
	wholeMenu["273SortBy"].id = "1_27_3";
	wholeMenu["273SortBy"].color = "black";
	wholeMenu["273SortBy"].hasSub = 0;
	wholeMenu["273SortBy"].link = "index_eng.html?type=series&sortby=flag";
	wholeMenu["273SortBy"].html = '<img src="scripts/contents/icons/sortby_flag_black.svg" height="18"  style="vertical-align:middle; padding-right: 5px;"/>Country';

	wholeMenu["● Games"] = {};
	wholeMenu["● Games"].id = "1_8";
	wholeMenu["● Games"].color = "black";
	wholeMenu["● Games"].hasSub = 1;
	wholeMenu["● Games"].alternativeCaption = "&#9679; Games, Sort by";
	wholeMenu["● Games"].link = "";
	wholeMenu["● Games"].html = '&#9679; Games';

	wholeMenu["81SortBy"] = {};
	wholeMenu["81SortBy"].id = "1_8_1";
	wholeMenu["81SortBy"].color = "black";
	wholeMenu["81SortBy"].hasSub = 0;
	wholeMenu["81SortBy"].link = "index_eng.html?type=games&sortby=name";
	wholeMenu["81SortBy"].html = '<img src="scripts/contents/icons/sortby_name_black.svg" height="18"  style="vertical-align:middle; padding-right: 5px;"/>Name';

	wholeMenu["82SortBy"] = {};
	wholeMenu["82SortBy"].id = "1_8_2";
	wholeMenu["82SortBy"].color = "black";
	wholeMenu["82SortBy"].hasSub = 0;
	wholeMenu["82SortBy"].link = "index_eng.html?type=games&sortby=date";
	wholeMenu["82SortBy"].html = '<img src="scripts/contents/icons/sortby_date_black.svg" height="18"  style="vertical-align:middle; padding-right: 5px;"/>Date';

	wholeMenu["● Books"] = {};
	wholeMenu["● Books"].id = "1_9";
	wholeMenu["● Books"].color = "red";
	wholeMenu["● Books"].hasSub = 1;
	wholeMenu["● Books"].alternativeCaption = "&#9679; Books, Sort by";
	wholeMenu["● Books"].link = "";
	wholeMenu["● Books"].html = '&#9679; Books';

	wholeMenu["91SortBy"] = {};
	wholeMenu["91SortBy"].id = "1_9_1";
	wholeMenu["91SortBy"].color = "red";
	wholeMenu["91SortBy"].hasSub = 0;
	wholeMenu["91SortBy"].link = "index_eng.html?type=books&sortby=name";
	wholeMenu["91SortBy"].html = '<img src="scripts/contents/icons/sortby_name_red.svg" height="18"  style="vertical-align:middle; padding-right: 5px;"/>Name';

	wholeMenu["92SortBy"] = {};
	wholeMenu["92SortBy"].id = "1_9_2";
	wholeMenu["92SortBy"].color = "red";
	wholeMenu["92SortBy"].hasSub = 0;
	wholeMenu["92SortBy"].link = "index_eng.html?type=books&sortby=date";
	wholeMenu["92SortBy"].html = '<img src="scripts/contents/icons/sortby_date_red.svg" height="18"  style="vertical-align:middle; padding-right: 5px;"/>Date';

	wholeMenu["93SortBy"] = {};
	wholeMenu["93SortBy"].id = "1_9_3";
	wholeMenu["93SortBy"].color = "red";
	wholeMenu["93SortBy"].hasSub = 0;
	wholeMenu["93SortBy"].link = "index_eng.html?type=books&sortby=flag";
	wholeMenu["93SortBy"].html = '<img src="scripts/contents/icons/sortby_flag_red.svg" height="18"  style="vertical-align:middle; padding-right: 5px;"/>Country';

	wholeMenu["● Photos/Images"] = {};
	wholeMenu["● Photos/Images"].id = "1_10";
	wholeMenu["● Photos/Images"].color = "red";
	wholeMenu["● Photos/Images"].hasSub = 1;
	wholeMenu["● Photos/Images"].alternativeCaption = "&#9679; Photos/Images, Sort by";
	wholeMenu["● Photos/Images"].link = "";
	wholeMenu["● Photos/Images"].html = '&#9679; Photos/Images';

	wholeMenu["101SortBy"] = {};
	wholeMenu["101SortBy"].id = "1_10_1";
	wholeMenu["101SortBy"].color = "red";
	wholeMenu["101SortBy"].hasSub = 0;
	wholeMenu["101SortBy"].link = "index_eng.html?type=photos&sortby=name";
	wholeMenu["101SortBy"].html = '<img src="scripts/contents/icons/sortby_name_red.svg" height="18"  style="vertical-align:middle; padding-right: 5px;"/>Name';

	wholeMenu["102SortBy"] = {};
	wholeMenu["102SortBy"].id = "1_10_2";
	wholeMenu["102SortBy"].color = "red";
	wholeMenu["102SortBy"].hasSub = 0;
	wholeMenu["102SortBy"].link = "index_eng.html?type=photos&sortby=date";
	wholeMenu["102SortBy"].html = '<img src="scripts/contents/icons/sortby_date_red.svg" height="18"  style="vertical-align:middle; padding-right: 5px;"/>Date';

	wholeMenu["● AMV"] = {};
	wholeMenu["● AMV"].id = "1_11";
	wholeMenu["● AMV"].color = "black";
	wholeMenu["● AMV"].hasSub = 1;
	wholeMenu["● AMV"].alternativeCaption = "&#9679; AMV, Sort by";
	wholeMenu["● AMV"].link = "";
	wholeMenu["● AMV"].html = '&#9679; AMV';

	wholeMenu["111SortBy"] = {};
	wholeMenu["111SortBy"].id = "1_11_1";
	wholeMenu["111SortBy"].color = "black";
	wholeMenu["111SortBy"].hasSub = 0;
	wholeMenu["111SortBy"].link = "index_eng.html?type=amv&sortby=name";
	wholeMenu["111SortBy"].html = '<img src="scripts/contents/icons/sortby_name_black.svg" height="18"  style="vertical-align:middle; padding-right: 5px;"/>Name';

	wholeMenu["112SortBy"] = {};
	wholeMenu["112SortBy"].id = "1_11_2";
	wholeMenu["112SortBy"].color = "black";
	wholeMenu["112SortBy"].hasSub = 0;
	wholeMenu["112SortBy"].link = "index_eng.html?type=amv&sortby=date";
	wholeMenu["112SortBy"].html = '<img src="scripts/contents/icons/sortby_date_black.svg" height="18"  style="vertical-align:middle; padding-right: 5px;"/>Date';

	wholeMenu["● Junk"] = {};
	wholeMenu["● Junk"].id = "1_12";
	wholeMenu["● Junk"].color = "black";
	wholeMenu["● Junk"].hasSub = 1;
	wholeMenu["● Junk"].alternativeCaption = "&#9679; Junk, Sort by";
	wholeMenu["● Junk"].link = "";
	wholeMenu["● Junk"].html = '&#9679; Junk';

	wholeMenu["121SortBy"] = {};
	wholeMenu["121SortBy"].id = "1_12_1";
	wholeMenu["121SortBy"].color = "black";
	wholeMenu["121SortBy"].hasSub = 0;
	wholeMenu["121SortBy"].link = "index_eng.html?type=junk&sortby=name";
	wholeMenu["121SortBy"].html = '<img src="scripts/contents/icons/sortby_name_black.svg" height="18"  style="vertical-align:middle; padding-right: 5px;"/>Name';

	wholeMenu["122SortBy"] = {};
	wholeMenu["122SortBy"].id = "1_12_2";
	wholeMenu["122SortBy"].color = "black";
	wholeMenu["122SortBy"].hasSub = 0;
	wholeMenu["122SortBy"].link = "index_eng.html?type=junk&sortby=date";
	wholeMenu["122SortBy"].html = '<img src="scripts/contents/icons/sortby_date_black.svg" height="18"  style="vertical-align:middle; padding-right: 5px;"/>Date';

	wholeMenu["123SortBy"] = {};
	wholeMenu["123SortBy"].id = "1_12_3";
	wholeMenu["123SortBy"].color = "black";
	wholeMenu["123SortBy"].hasSub = 0;
	wholeMenu["123SortBy"].link = "index_eng.html?type=junk&sortby=flag";
	wholeMenu["123SortBy"].html = '<img src="scripts/contents/icons/sortby_flag_black.svg" height="18"  style="vertical-align:middle; padding-right: 5px;"/>Country';

	wholeMenu["● Stuff ⚡ Evil ⚡"] = {};
	wholeMenu["● Stuff ⚡ Evil ⚡"].id = "1_13";
	wholeMenu["● Stuff ⚡ Evil ⚡"].color = "black";
	wholeMenu["● Stuff ⚡ Evil ⚡"].hasSub = 1;
	wholeMenu["● Stuff ⚡ Evil ⚡"].alternativeCaption = '&#9679; Stuff <font color="red"><sup>&#9889; Evil &#9889;</sup></font>, Sort by';
	wholeMenu["● Stuff ⚡ Evil ⚡"].link = "";
	wholeMenu["● Stuff ⚡ Evil ⚡"].html = '&#9679; Stuff <font color="red"><sup>&#9889; Evil &#9889;</sup></font>';

	wholeMenu["131SortBy"] = {};
	wholeMenu["131SortBy"].id = "1_13_1";
	wholeMenu["131SortBy"].color = "black";
	wholeMenu["131SortBy"].hasSub = 0;
	wholeMenu["131SortBy"].link = "index_eng.html?type=stuff&sortby=name";
	wholeMenu["131SortBy"].html = '<img src="scripts/contents/icons/sortby_name_black.svg" height="18"  style="vertical-align:middle; padding-right: 5px;"/>Name';

	wholeMenu["132SortBy"] = {};
	wholeMenu["132SortBy"].id = "1_13_2";
	wholeMenu["132SortBy"].color = "black";
	wholeMenu["132SortBy"].hasSub = 0;
	wholeMenu["132SortBy"].link = "index_eng.html?type=stuff&sortby=date";
	wholeMenu["132SortBy"].html = '<img src="scripts/contents/icons/sortby_date_black.svg" height="18"  style="vertical-align:middle; padding-right: 5px;"/>Date';

	wholeMenu["● Anecdotes"] = {};
	wholeMenu["● Anecdotes"].id = "1_14";
	wholeMenu["● Anecdotes"].color = "red";
	wholeMenu["● Anecdotes"].hasSub = 1;
	wholeMenu["● Anecdotes"].alternativeCaption = "&#9679; Anecdotes, Sort by";
	wholeMenu["● Anecdotes"].link = "";
	wholeMenu["● Anecdotes"].html = '&#9679; Anecdotes';

	wholeMenu["141SortBy"] = {};
	wholeMenu["141SortBy"].id = "1_14_1";
	wholeMenu["141SortBy"].color = "red";
	wholeMenu["141SortBy"].hasSub = 0;
	wholeMenu["141SortBy"].link = "index_eng.html?type=anecdotes&sortby=name";
	wholeMenu["141SortBy"].html = '<img src="scripts/contents/icons/sortby_name_red.svg" height="18"  style="vertical-align:middle; padding-right: 5px;"/>Name';

	wholeMenu["142SortBy"] = {};
	wholeMenu["142SortBy"].id = "1_14_2";
	wholeMenu["142SortBy"].color = "red";
	wholeMenu["142SortBy"].hasSub = 0;
	wholeMenu["142SortBy"].link = "index_eng.html?type=anecdotes&sortby=date";
	wholeMenu["142SortBy"].html = '<img src="scripts/contents/icons/sortby_date_red.svg" height="18"  style="vertical-align:middle; padding-right: 5px;"/>Date';

	wholeMenu["● Heffalump ☠ Criminal ☠"] = {};
	wholeMenu["● Heffalump ☠ Criminal ☠"].id = "1_15";
	wholeMenu["● Heffalump ☠ Criminal ☠"].color = "red";
	wholeMenu["● Heffalump ☠ Criminal ☠"].hasSub = 1;
	wholeMenu["● Heffalump ☠ Criminal ☠"].alternativeCaption = '&#9679; Heffalump <font color="lightcoral"><sup>&#9760; Criminal &#9760;</sup></font>, Sort by';
	wholeMenu["● Heffalump ☠ Criminal ☠"].link = "";
	wholeMenu["● Heffalump ☠ Criminal ☠"].html = '&#9679; Heffalump <font color="lightcoral"><sup>&#9760; Criminal &#9760;</sup></font>';

	wholeMenu["151SortBy"] = {};
	wholeMenu["151SortBy"].id = "1_15_1";
	wholeMenu["151SortBy"].color = "red";
	wholeMenu["151SortBy"].hasSub = 0;
	wholeMenu["151SortBy"].link = "index_eng.html?type=heffalump&sortby=name";
	wholeMenu["151SortBy"].html = '<img src="scripts/contents/icons/sortby_name_red.svg" height="18"  style="vertical-align:middle; padding-right: 5px;"/>Name';

	wholeMenu["152SortBy"] = {};
	wholeMenu["152SortBy"].id = "1_15_2";
	wholeMenu["152SortBy"].color = "red";
	wholeMenu["152SortBy"].hasSub = 0;
	wholeMenu["152SortBy"].link = "index_eng.html?type=heffalump&sortby=date";
	wholeMenu["152SortBy"].html = '<img src="scripts/contents/icons/sortby_date_red.svg" height="18"  style="vertical-align:middle; padding-right: 5px;"/>Date';

	wholeMenu["● Substances For Relaxation"] = {};
	wholeMenu["● Substances For Relaxation"].id = "1_16";
	wholeMenu["● Substances For Relaxation"].color = "white";
	wholeMenu["● Substances For Relaxation"].hasSub = 1;
	wholeMenu["● Substances For Relaxation"].alternativeCaption = "&#9679; Substances For Relaxation, Sort by";
	wholeMenu["● Substances For Relaxation"].link = "";
	wholeMenu["● Substances For Relaxation"].html = '&#9679; Substances For Relaxation';

	wholeMenu["161SortBy"] = {};
	wholeMenu["161SortBy"].id = "1_16_1";
	wholeMenu["161SortBy"].color = "white";
	wholeMenu["161SortBy"].hasSub = 0;
	wholeMenu["161SortBy"].link = "index_eng.html?type=relaxation&sortby=name";
	wholeMenu["161SortBy"].html = '<img src="scripts/contents/icons/sortby_name_white.svg" height="18"  style="vertical-align:middle; padding-right: 5px;"/>Name';

	wholeMenu["162SortBy"] = {};
	wholeMenu["162SortBy"].id = "1_16_2";
	wholeMenu["162SortBy"].color = "white";
	wholeMenu["162SortBy"].hasSub = 0;
	wholeMenu["162SortBy"].link = "index_eng.html?type=relaxation&sortby=date";
	wholeMenu["162SortBy"].html = '<img src="scripts/contents/icons/sortby_date_white.svg" height="18"  style="vertical-align:middle; padding-right: 5px;"/>Date';

	wholeMenu["● Software Development"] = {};
	wholeMenu["● Software Development"].id = "1_17";
	wholeMenu["● Software Development"].color = "white";
	wholeMenu["● Software Development"].hasSub = 1;
	wholeMenu["● Software Development"].alternativeCaption = "&#9679; Software Development, Sort by";
	wholeMenu["● Software Development"].link = "";
	wholeMenu["● Software Development"].html = '&#9679; Software Development';

	wholeMenu["171SortBy"] = {};
	wholeMenu["171SortBy"].id = "1_17_1";
	wholeMenu["171SortBy"].color = "white";
	wholeMenu["171SortBy"].hasSub = 0;
	wholeMenu["171SortBy"].link = "index_eng.html?type=software&sortby=name";
	wholeMenu["171SortBy"].html = '<img src="scripts/contents/icons/sortby_name_white.svg" height="18"  style="vertical-align:middle; padding-right: 5px;"/>Name';

	wholeMenu["172SortBy"] = {};
	wholeMenu["172SortBy"].id = "1_17_2";
	wholeMenu["172SortBy"].color = "white";
	wholeMenu["172SortBy"].hasSub = 0;
	wholeMenu["172SortBy"].link = "index_eng.html?type=software&sortby=date";
	wholeMenu["172SortBy"].html = '<img src="scripts/contents/icons/sortby_date_white.svg" height="18"  style="vertical-align:middle; padding-right: 5px;"/>Date';

	wholeMenu["● Satanism"] = {};
	wholeMenu["● Satanism"].id = "1_18";
	wholeMenu["● Satanism"].color = "green";
	wholeMenu["● Satanism"].hasSub = 1;
	wholeMenu["● Satanism"].alternativeCaption = "&#9679; Satanism, Sort by";
	wholeMenu["● Satanism"].link = "";
	wholeMenu["● Satanism"].html = '&#9679; Satanism';

	wholeMenu["181SortBy"] = {};
	wholeMenu["181SortBy"].id = "1_18_1";
	wholeMenu["181SortBy"].color = "green";
	wholeMenu["181SortBy"].hasSub = 0;
	wholeMenu["181SortBy"].link = "index_eng.html?type=satanism&sortby=name";
	wholeMenu["181SortBy"].html = '<img src="scripts/contents/icons/sortby_name_green.svg" height="18"  style="vertical-align:middle; padding-right: 5px;"/>Name';

	wholeMenu["182SortBy"] = {};
	wholeMenu["182SortBy"].id = "1_18_2";
	wholeMenu["182SortBy"].color = "green";
	wholeMenu["182SortBy"].hasSub = 0;
	wholeMenu["182SortBy"].link = "index_eng.html?type=satanism&sortby=date";
	wholeMenu["182SortBy"].html = '<img src="scripts/contents/icons/sortby_date_green.svg" height="18"  style="vertical-align:middle; padding-right: 5px;"/>Date';

	wholeMenu["● Wicca"] = {};
	wholeMenu["● Wicca"].id = "1_19";
	wholeMenu["● Wicca"].color = "green";
	wholeMenu["● Wicca"].hasSub = 1;
	wholeMenu["● Wicca"].alternativeCaption = "&#9679; Wicca, Sort by";
	wholeMenu["● Wicca"].link = "";
	wholeMenu["● Wicca"].html = '&#9679; Wicca';

	wholeMenu["191SortBy"] = {};
	wholeMenu["191SortBy"].id = "1_19_1";
	wholeMenu["191SortBy"].color = "green";
	wholeMenu["191SortBy"].hasSub = 0;
	wholeMenu["191SortBy"].link = "index_eng.html?type=wicca&sortby=name";
	wholeMenu["191SortBy"].html = '<img src="scripts/contents/icons/sortby_name_green.svg" height="18"  style="vertical-align:middle; padding-right: 5px;"/>Name';

	wholeMenu["192SortBy"] = {};
	wholeMenu["192SortBy"].id = "1_19_2";
	wholeMenu["192SortBy"].color = "green";
	wholeMenu["192SortBy"].hasSub = 0;
	wholeMenu["192SortBy"].link = "index_eng.html?type=wicca&sortby=date";
	wholeMenu["192SortBy"].html = '<img src="scripts/contents/icons/sortby_date_green.svg" height="18"  style="vertical-align:middle; padding-right: 5px;"/>Date';

	wholeMenu["● Falsifiability"] = {};
	wholeMenu["● Falsifiability"].id = "1_20";
	wholeMenu["● Falsifiability"].color = "green";
	wholeMenu["● Falsifiability"].hasSub = 1;
	wholeMenu["● Falsifiability"].alternativeCaption = "&#9679; Falsifiability, Sort by";
	wholeMenu["● Falsifiability"].link = "";
	wholeMenu["● Falsifiability"].html = '&#9679; Falsifiability';

	wholeMenu["201SortBy"] = {};
	wholeMenu["201SortBy"].id = "1_20_1";
	wholeMenu["201SortBy"].color = "green";
	wholeMenu["201SortBy"].hasSub = 0;
	wholeMenu["201SortBy"].link = "index_eng.html?type=falsifiability&sortby=name";
	wholeMenu["201SortBy"].html = '<img src="scripts/contents/icons/sortby_name_green.svg" height="18"  style="vertical-align:middle; padding-right: 5px;"/>Name';

	wholeMenu["202SortBy"] = {};
	wholeMenu["202SortBy"].id = "1_20_2";
	wholeMenu["202SortBy"].color = "green";
	wholeMenu["202SortBy"].hasSub = 0;
	wholeMenu["202SortBy"].link = "index_eng.html?type=falsifiability&sortby=date";
	wholeMenu["202SortBy"].html = '<img src="scripts/contents/icons/sortby_date_green.svg" height="18"  style="vertical-align:middle; padding-right: 5px;"/>Date';

	wholeMenu["● Psychology"] = {};
	wholeMenu["● Psychology"].id = "1_21";
	wholeMenu["● Psychology"].color = "green";
	wholeMenu["● Psychology"].hasSub = 1;
	wholeMenu["● Psychology"].alternativeCaption = "&#9679; Psychology, Sort by";
	wholeMenu["● Psychology"].link = "";
	wholeMenu["● Psychology"].html = '&#9679; Psychology';

	wholeMenu["211SortBy"] = {};
	wholeMenu["211SortBy"].id = "1_21_1";
	wholeMenu["211SortBy"].color = "green";
	wholeMenu["211SortBy"].hasSub = 0;
	wholeMenu["211SortBy"].link = "index_eng.html?type=psychology&sortby=name";
	wholeMenu["211SortBy"].html = '<img src="scripts/contents/icons/sortby_name_green.svg" height="18"  style="vertical-align:middle; padding-right: 5px;"/>Name';

	wholeMenu["212SortBy"] = {};
	wholeMenu["212SortBy"].id = "1_21_2";
	wholeMenu["212SortBy"].color = "green";
	wholeMenu["212SortBy"].hasSub = 0;
	wholeMenu["212SortBy"].link = "index_eng.html?type=psychology&sortby=date";
	wholeMenu["212SortBy"].html = '<img src="scripts/contents/icons/sortby_date_green.svg" height="18"  style="vertical-align:middle; padding-right: 5px;"/>Date';

	wholeMenu["● Countries"] = {};
	wholeMenu["● Countries"].id = "1_22";
	wholeMenu["● Countries"].color = "green";
	wholeMenu["● Countries"].hasSub = 1;
	wholeMenu["● Countries"].alternativeCaption = "&#9679; Countries, Sort by";
	wholeMenu["● Countries"].link = "";
	wholeMenu["● Countries"].html = '&#9679; Countries';

	wholeMenu["221SortBy"] = {};
	wholeMenu["221SortBy"].id = "1_22_1";
	wholeMenu["221SortBy"].color = "green";
	wholeMenu["221SortBy"].hasSub = 0;
	wholeMenu["221SortBy"].link = "index_eng.html?type=countries&sortby=name";
	wholeMenu["221SortBy"].html = '<img src="scripts/contents/icons/sortby_name_green.svg" height="18"  style="vertical-align:middle; padding-right: 5px;"/>Name';

	wholeMenu["222SortBy"] = {};
	wholeMenu["222SortBy"].id = "1_22_2";
	wholeMenu["222SortBy"].color = "green";
	wholeMenu["222SortBy"].hasSub = 0;
	wholeMenu["222SortBy"].link = "index_eng.html?type=countries&sortby=date";
	wholeMenu["222SortBy"].html = '<img src="scripts/contents/icons/sortby_date_green.svg" height="18"  style="vertical-align:middle; padding-right: 5px;"/>Date';

	wholeMenu["● Totalitarianism"] = {};
	wholeMenu["● Totalitarianism"].id = "1_23";
	wholeMenu["● Totalitarianism"].color = "green";
	wholeMenu["● Totalitarianism"].hasSub = 1;
	wholeMenu["● Totalitarianism"].alternativeCaption = "&#9679; Totalitarianism, Sort by";
	wholeMenu["● Totalitarianism"].link = "";
	wholeMenu["● Totalitarianism"].html = '&#9679; Totalitarianism';

	wholeMenu["231SortBy"] = {};
	wholeMenu["231SortBy"].id = "1_23_1";
	wholeMenu["231SortBy"].color = "green";
	wholeMenu["231SortBy"].hasSub = 0;
	wholeMenu["231SortBy"].link = "index_eng.html?type=totalitarianism&sortby=name";
	wholeMenu["231SortBy"].html = '<img src="scripts/contents/icons/sortby_name_green.svg" height="18"  style="vertical-align:middle; padding-right: 5px;"/>Name';

	wholeMenu["232SortBy"] = {};
	wholeMenu["232SortBy"].id = "1_23_2";
	wholeMenu["232SortBy"].color = "green";
	wholeMenu["232SortBy"].hasSub = 0;
	wholeMenu["232SortBy"].link = "index_eng.html?type=totalitarianism&sortby=date";
	wholeMenu["232SortBy"].html = '<img src="scripts/contents/icons/sortby_date_green.svg" height="18"  style="vertical-align:middle; padding-right: 5px;"/>Date';

	wholeMenu["● Personalities"] = {};
	wholeMenu["● Personalities"].id = "1_24";
	wholeMenu["● Personalities"].color = "green";
	wholeMenu["● Personalities"].hasSub = 1;
	wholeMenu["● Personalities"].alternativeCaption = "&#9679; Personalities, Sort by";
	wholeMenu["● Personalities"].link = "";
	wholeMenu["● Personalities"].html = '&#9679; Personalities';

	wholeMenu["241SortBy"] = {};
	wholeMenu["241SortBy"].id = "1_24_1";
	wholeMenu["241SortBy"].color = "green";
	wholeMenu["241SortBy"].hasSub = 0;
	wholeMenu["241SortBy"].link = "index_eng.html?type=personalities&sortby=name";
	wholeMenu["241SortBy"].html = '<img src="scripts/contents/icons/sortby_name_green.svg" height="18"  style="vertical-align:middle; padding-right: 5px;"/>Name';

	wholeMenu["242SortBy"] = {};
	wholeMenu["242SortBy"].id = "1_24_2";
	wholeMenu["242SortBy"].color = "green";
	wholeMenu["242SortBy"].hasSub = 0;
	wholeMenu["242SortBy"].link = "index_eng.html?type=personalities&sortby=date";
	wholeMenu["242SortBy"].html = '<img src="scripts/contents/icons/sortby_date_green.svg" height="18"  style="vertical-align:middle; padding-right: 5px;"/>Date';

	wholeMenu["● News"] = {};
	wholeMenu["● News"].id = "1_25";
	wholeMenu["● News"].color = "red";
	wholeMenu["● News"].hasSub = 1;
	wholeMenu["● News"].alternativeCaption = "&#9679; News, Sort by";
	wholeMenu["● News"].link = "";
	wholeMenu["● News"].html = '&#9679; News';

	wholeMenu["251SortBy"] = {};
	wholeMenu["251SortBy"].id = "1_25_1";
	wholeMenu["251SortBy"].color = "red";
	wholeMenu["251SortBy"].hasSub = 0;
	wholeMenu["251SortBy"].link = "index_eng.html?type=news&sortby=name";
	wholeMenu["251SortBy"].html = '<img src="scripts/contents/icons/sortby_name_red.svg" height="18"  style="vertical-align:middle; padding-right: 5px;"/>Name';

	wholeMenu["252SortBy"] = {};
	wholeMenu["252SortBy"].id = "1_25_2";
	wholeMenu["252SortBy"].color = "red";
	wholeMenu["252SortBy"].hasSub = 0;
	wholeMenu["252SortBy"].link = "index_eng.html?type=news&sortby=date";
	wholeMenu["252SortBy"].html = '<img src="scripts/contents/icons/sortby_date_red.svg" height="18"  style="vertical-align:middle; padding-right: 5px;"/>Date';

	wholeMenu["253SortBy"] = {};
	wholeMenu["253SortBy"].id = "1_25_3";
	wholeMenu["253SortBy"].color = "red";
	wholeMenu["253SortBy"].hasSub = 0;
	wholeMenu["253SortBy"].link = "index_eng.html?type=news&sortby=flag";
	wholeMenu["253SortBy"].html = '<img src="scripts/contents/icons/sortby_flag_red.svg" height="18"  style="vertical-align:middle; padding-right: 5px;"/>Country';

}




if (lang=="rus") {


	wholeMenu["● Карта Сайта"] = {};
	wholeMenu["● Карта Сайта"].id = "1";
	wholeMenu["● Карта Сайта"].color = "blue";
	wholeMenu["● Карта Сайта"].hasSub = 1;
	wholeMenu["● Карта Сайта"].link = "";
	wholeMenu["● Карта Сайта"].html = '&#9679; Карта Сайта';

	wholeMenu["● Обо мне"] = {};
	wholeMenu["● Обо мне"].id = "1_1";
	wholeMenu["● Обо мне"].color = "blue";
	wholeMenu["● Обо мне"].hasSub = 1;
	wholeMenu["● Обо мне"].alternativeCaption = "&#9679; Обо мне, Сортировать по";
	wholeMenu["● Обо мне"].link = "";
	wholeMenu["● Обо мне"].html = '&#9679; Обо мне';

	wholeMenu["11СортироватьПо"] = {};
	wholeMenu["11СортироватьПо"].id = "1_1_1";
	wholeMenu["11СортироватьПо"].color = "blue";
	wholeMenu["11СортироватьПо"].hasSub = 0;
	wholeMenu["11СортироватьПо"].link = "index_rus.html?type=aboutme&sortby=name";
	wholeMenu["11СортироватьПо"].html = '<img src="scripts/contents/icons/sortby_name_blue.svg" height="18"  style="vertical-align:middle; padding-right: 5px;"/>Имени';

	wholeMenu["12СортироватьПо"] = {};
	wholeMenu["12СортироватьПо"].id = "1_1_2";
	wholeMenu["12СортироватьПо"].color = "blue";
	wholeMenu["12СортироватьПо"].hasSub = 0;
	wholeMenu["12СортироватьПо"].link = "index_rus.html?type=aboutme&sortby=date";
	wholeMenu["12СортироватьПо"].html = '<img src="scripts/contents/icons/sortby_date_blue.svg" height="18"  style="vertical-align:middle; padding-right: 5px;"/>Дате';

	wholeMenu["● О моей работе"] = {};
	wholeMenu["● О моей работе"].id = "1_2";
	wholeMenu["● О моей работе"].color = "blue";
	wholeMenu["● О моей работе"].hasSub = 1;
	wholeMenu["● О моей работе"].alternativeCaption = "&#9679; О моей работе, Сортировать по";
	wholeMenu["● О моей работе"].link = "";
	wholeMenu["● О моей работе"].html = '&#9679; О моей работе';

	wholeMenu["21СортироватьПо"] = {};
	wholeMenu["21СортироватьПо"].id = "1_2_1";
	wholeMenu["21СортироватьПо"].color = "blue";
	wholeMenu["21СортироватьПо"].hasSub = 0;
	wholeMenu["21СортироватьПо"].link = "index_rus.html?type=aboutwork&sortby=name";
	wholeMenu["21СортироватьПо"].html = '<img src="scripts/contents/icons/sortby_name_blue.svg" height="18"  style="vertical-align:middle; padding-right: 5px;"/>Имени';

	wholeMenu["22СортироватьПо"] = {};
	wholeMenu["22СортироватьПо"].id = "1_2_2";
	wholeMenu["22СортироватьПо"].color = "blue";
	wholeMenu["22СортироватьПо"].hasSub = 0;
	wholeMenu["22СортироватьПо"].link = "index_rus.html?type=aboutwork&sortby=date";
	wholeMenu["22СортироватьПо"].html = '<img src="scripts/contents/icons/sortby_date_blue.svg" height="18"  style="vertical-align:middle; padding-right: 5px;"/>Дате';

	wholeMenu["● О моём PhD"] = {};
	wholeMenu["● О моём PhD"].id = "1_3";
	wholeMenu["● О моём PhD"].color = "blue";
	wholeMenu["● О моём PhD"].hasSub = 1;
	wholeMenu["● О моём PhD"].alternativeCaption = "&#9679; О моём PhD, Сортировать по";
	wholeMenu["● О моём PhD"].link = "";
	wholeMenu["● О моём PhD"].html = '&#9679; О моём PhD';

	wholeMenu["31СортироватьПо"] = {};
	wholeMenu["31СортироватьПо"].id = "1_3_1";
	wholeMenu["31СортироватьПо"].color = "blue";
	wholeMenu["31СортироватьПо"].hasSub = 0;
	wholeMenu["31СортироватьПо"].link = "index_rus.html?type=aboutphd&sortby=name";
	wholeMenu["31СортироватьПо"].html = '<img src="scripts/contents/icons/sortby_name_blue.svg" height="18"  style="vertical-align:middle; padding-right: 5px;"/>Имени';

	wholeMenu["32СортироватьПо"] = {};
	wholeMenu["32СортироватьПо"].id = "1_3_2";
	wholeMenu["32СортироватьПо"].color = "blue";
	wholeMenu["32СортироватьПо"].hasSub = 0;
	wholeMenu["32СортироватьПо"].link = "index_rus.html?type=aboutphd&sortby=date";
	wholeMenu["32СортироватьПо"].html = '<img src="scripts/contents/icons/sortby_date_blue.svg" height="18"  style="vertical-align:middle; padding-right: 5px;"/>Дате';

	wholeMenu["● Ссылки"] = {};
	wholeMenu["● Ссылки"].id = "1_4";
	wholeMenu["● Ссылки"].color = "blue";
	wholeMenu["● Ссылки"].hasSub = 1;
	wholeMenu["● Ссылки"].alternativeCaption = "&#9679; Ссылки, Сортировать по";
	wholeMenu["● Ссылки"].link = "";
	wholeMenu["● Ссылки"].html = '&#9679; Ссылки';

	wholeMenu["41СортироватьПо"] = {};
	wholeMenu["41СортироватьПо"].id = "1_4_1";
	wholeMenu["41СортироватьПо"].color = "blue";
	wholeMenu["41СортироватьПо"].hasSub = 0;
	wholeMenu["41СортироватьПо"].link = "index_rus.html?type=links&sortby=name";
	wholeMenu["41СортироватьПо"].html = '<img src="scripts/contents/icons/sortby_name_blue.svg" height="18"  style="vertical-align:middle; padding-right: 5px;"/>Имени';

	wholeMenu["42СортироватьПо"] = {};
	wholeMenu["42СортироватьПо"].id = "1_4_2";
	wholeMenu["42СортироватьПо"].color = "blue";
	wholeMenu["42СортироватьПо"].hasSub = 0;
	wholeMenu["42СортироватьПо"].link = "index_rus.html?type=links&sortby=date";
	wholeMenu["42СортироватьПо"].html = '<img src="scripts/contents/icons/sortby_date_blue.svg" height="18"  style="vertical-align:middle; padding-right: 5px;"/>Дате';

	wholeMenu["● HTML Редактор"] = {};
	wholeMenu["● HTML Редактор"].id = "1_5";
	wholeMenu["● HTML Редактор"].color = "blue";
	wholeMenu["● HTML Редактор"].hasSub = 1;
	wholeMenu["● HTML Редактор"].alternativeCaption = '&#9679; HTML Редактор, Сортировать по';
	wholeMenu["● HTML Редактор"].link = "";
	wholeMenu["● HTML Редактор"].html = '&#9679; HTML Редактор';

	wholeMenu["51СортироватьПо"] = {};
	wholeMenu["51СортироватьПо"].id = "1_5_1";
	wholeMenu["51СортироватьПо"].color = "blue";
	wholeMenu["51СортироватьПо"].hasSub = 0;
	wholeMenu["51СортироватьПо"].link = "index_rus.html?type=htmleditor&sortby=name";
	wholeMenu["51СортироватьПо"].html = '<img src="scripts/contents/icons/sortby_name_blue.svg" height="18"  style="vertical-align:middle; padding-right: 5px;"/>Имени';

	wholeMenu["52СортироватьПо"] = {};
	wholeMenu["52СортироватьПо"].id = "1_5_2";
	wholeMenu["52СортироватьПо"].color = "blue";
	wholeMenu["52СортироватьПо"].hasSub = 0;
	wholeMenu["52СортироватьПо"].link = "index_rus.html?type=htmleditor&sortby=date";
	wholeMenu["52СортироватьПо"].html = '<img src="scripts/contents/icons/sortby_date_blue.svg" height="18"  style="vertical-align:middle; padding-right: 5px;"/>Дате';

	wholeMenu["● Музыка ☥ Vampiric ☥"] = {};
	wholeMenu["● Музыка ☥ Vampiric ☥"].id = "1_6";
	wholeMenu["● Музыка ☥ Vampiric ☥"].color = "black";
	wholeMenu["● Музыка ☥ Vampiric ☥"].hasSub = 1;
	wholeMenu["● Музыка ☥ Vampiric ☥"].alternativeCaption = '&#9679; Музыка <font color="purple"><sup>&#9765; Vampiric &#9765;</sup></font>, Сортировать по';
	wholeMenu["● Музыка ☥ Vampiric ☥"].link = "";
	wholeMenu["● Музыка ☥ Vampiric ☥"].html = '&#9679; Музыка <font color="purple"><sup>&#9765; Vampiric &#9765;</sup></font>';

	wholeMenu["61СортироватьПо"] = {};
	wholeMenu["61СортироватьПо"].id = "1_6_1";
	wholeMenu["61СортироватьПо"].color = "black";
	wholeMenu["61СортироватьПо"].hasSub = 0;
	wholeMenu["61СортироватьПо"].link = "index_rus.html?type=music&sortby=name";
	wholeMenu["61СортироватьПо"].html = '<img src="scripts/contents/icons/sortby_name_black.svg" height="18"  style="vertical-align:middle; padding-right: 5px;"/>Имени';

	wholeMenu["62СортироватьПо"] = {};
	wholeMenu["62СортироватьПо"].id = "1_6_2";
	wholeMenu["62СортироватьПо"].color = "black";
	wholeMenu["62СортироватьПо"].hasSub = 0;
	wholeMenu["62СортироватьПо"].link = "index_rus.html?type=music&sortby=date";
	wholeMenu["62СортироватьПо"].html = '<img src="scripts/contents/icons/sortby_date_black.svg" height="18"  style="vertical-align:middle; padding-right: 5px;"/>Дате';

	wholeMenu["63СортироватьПо"] = {};
	wholeMenu["63СортироватьПо"].id = "1_6_3";
	wholeMenu["63СортироватьПо"].color = "black";
	wholeMenu["63СортироватьПо"].hasSub = 0;
	wholeMenu["63СортироватьПо"].link = "index_rus.html?type=music&sortby=flag";
	wholeMenu["63СортироватьПо"].html = '<img src="scripts/contents/icons/sortby_flag_black.svg" height="18"  style="vertical-align:middle; padding-right: 5px;"/>Стране';

	wholeMenu["● Фильмы 💎 Unique 💎"] = {};
	wholeMenu["● Фильмы 💎 Unique 💎"].id = "1_7";
	wholeMenu["● Фильмы 💎 Unique 💎"].color = "black";
	wholeMenu["● Фильмы 💎 Unique 💎"].hasSub = 1;
	wholeMenu["● Фильмы 💎 Unique 💎"].alternativeCaption = "&#9679; Фильмы <font color='DodgerBlue'><sup>&#128142; Unique &#128142;</sup></font>, Сортировать по";
	wholeMenu["● Фильмы 💎 Unique 💎"].link = "";
	wholeMenu["● Фильмы 💎 Unique 💎"].html = '&#9679; Фильмы <font color="DodgerBlue"><sup>&#128142; Unique &#128142;</sup></font>';

	wholeMenu["71СортироватьПо"] = {};
	wholeMenu["71СортироватьПо"].id = "1_7_1";
	wholeMenu["71СортироватьПо"].color = "black";
	wholeMenu["71СортироватьПо"].hasSub = 0;
	wholeMenu["71СортироватьПо"].link = "index_rus.html?type=movies&sortby=name";
	wholeMenu["71СортироватьПо"].html = '<img src="scripts/contents/icons/sortby_name_black.svg" height="18"  style="vertical-align:middle; padding-right: 5px;"/>Имени';

	wholeMenu["72СортироватьПо"] = {};
	wholeMenu["72СортироватьПо"].id = "1_7_2";
	wholeMenu["72СортироватьПо"].color = "black";
	wholeMenu["72СортироватьПо"].hasSub = 0;
	wholeMenu["72СортироватьПо"].link = "index_rus.html?type=movies&sortby=date";
	wholeMenu["72СортироватьПо"].html = '<img src="scripts/contents/icons/sortby_date_black.svg" height="18"  style="vertical-align:middle; padding-right: 5px;"/>Дате';

	wholeMenu["73СортироватьПо"] = {};
	wholeMenu["73СортироватьПо"].id = "1_7_3";
	wholeMenu["73СортироватьПо"].color = "black";
	wholeMenu["73СортироватьПо"].hasSub = 0;
	wholeMenu["73СортироватьПо"].link = "index_rus.html?type=movies&sortby=flag";
	wholeMenu["73СортироватьПо"].html = '<img src="scripts/contents/icons/sortby_flag_black.svg" height="18"  style="vertical-align:middle; padding-right: 5px;"/>Стране';

	wholeMenu["● Сериалы ⚘ Forbidden ⚘"] = {};
	wholeMenu["● Сериалы ⚘ Forbidden ⚘"].id = "1_27";
	wholeMenu["● Сериалы ⚘ Forbidden ⚘"].color = "black";
	wholeMenu["● Сериалы ⚘ Forbidden ⚘"].hasSub = 1;
	wholeMenu["● Сериалы ⚘ Forbidden ⚘"].alternativeCaption = "&#9679; Сериалы <font color='MediumSlateBlue'><sup>&#9880; Forbidden &#9880;</sup></font>, Сортировать по";
	wholeMenu["● Сериалы ⚘ Forbidden ⚘"].link = "";
	wholeMenu["● Сериалы ⚘ Forbidden ⚘"].html = "&#9679; Сериалы <font color='MediumSlateBlue'><sup>&#9880; Forbidden &#9880;</sup></font>";

	wholeMenu["271СортироватьПо"] = {};
	wholeMenu["271СортироватьПо"].id = "1_27_1";
	wholeMenu["271СортироватьПо"].color = "black";
	wholeMenu["271СортироватьПо"].hasSub = 0;
	wholeMenu["271СортироватьПо"].link = "index_rus.html?type=series&sortby=name";
	wholeMenu["271СортироватьПо"].html = '<img src="scripts/contents/icons/sortby_name_black.svg" height="18"  style="vertical-align:middle; padding-right: 5px;"/>Имени';

	wholeMenu["272СортироватьПо"] = {};
	wholeMenu["272СортироватьПо"].id = "1_27_2";
	wholeMenu["272СортироватьПо"].color = "black";
	wholeMenu["272СортироватьПо"].hasSub = 0;
	wholeMenu["272СортироватьПо"].link = "index_rus.html?type=series&sortby=date";
	wholeMenu["272СортироватьПо"].html = '<img src="scripts/contents/icons/sortby_date_black.svg" height="18"  style="vertical-align:middle; padding-right: 5px;"/>Дате';

	wholeMenu["273СортироватьПо"] = {};
	wholeMenu["273СортироватьПо"].id = "1_27_3";
	wholeMenu["273СортироватьПо"].color = "black";
	wholeMenu["273СортироватьПо"].hasSub = 0;
	wholeMenu["273СортироватьПо"].link = "index_rus.html?type=series&sortby=flag";
	wholeMenu["273СортироватьПо"].html = '<img src="scripts/contents/icons/sortby_flag_black.svg" height="18"  style="vertical-align:middle; padding-right: 5px;"/>Стране';

	wholeMenu["● Игры"] = {};
	wholeMenu["● Игры"].id = "1_8";
	wholeMenu["● Игры"].color = "black";
	wholeMenu["● Игры"].hasSub = 1;
	wholeMenu["● Игры"].alternativeCaption = "&#9679; Игры, Сортировать по";
	wholeMenu["● Игры"].link = "";
	wholeMenu["● Игры"].html = '&#9679; Игры';

	wholeMenu["81СортироватьПо"] = {};
	wholeMenu["81СортироватьПо"].id = "1_8_1";
	wholeMenu["81СортироватьПо"].color = "black";
	wholeMenu["81СортироватьПо"].hasSub = 0;
	wholeMenu["81СортироватьПо"].link = "index_rus.html?type=games&sortby=name";
	wholeMenu["81СортироватьПо"].html = '<img src="scripts/contents/icons/sortby_name_black.svg" height="18"  style="vertical-align:middle; padding-right: 5px;"/>Имени';

	wholeMenu["82СортироватьПо"] = {};
	wholeMenu["82СортироватьПо"].id = "1_8_2";
	wholeMenu["82СортироватьПо"].color = "black";
	wholeMenu["82СортироватьПо"].hasSub = 0;
	wholeMenu["82СортироватьПо"].link = "index_rus.html?type=games&sortby=date";
	wholeMenu["82СортироватьПо"].html = '<img src="scripts/contents/icons/sortby_date_black.svg" height="18"  style="vertical-align:middle; padding-right: 5px;"/>Дате';

	wholeMenu["● Книги"] = {};
	wholeMenu["● Книги"].id = "1_9";
	wholeMenu["● Книги"].color = "red";
	wholeMenu["● Книги"].hasSub = 1;
	wholeMenu["● Книги"].alternativeCaption = "&#9679; Книги, Сортировать по";
	wholeMenu["● Книги"].link = "";
	wholeMenu["● Книги"].html = '&#9679; Книги';

	wholeMenu["91СортироватьПо"] = {};
	wholeMenu["91СортироватьПо"].id = "1_9_1";
	wholeMenu["91СортироватьПо"].color = "red";
	wholeMenu["91СортироватьПо"].hasSub = 0;
	wholeMenu["91СортироватьПо"].link = "index_rus.html?type=books&sortby=name";
	wholeMenu["91СортироватьПо"].html = '<img src="scripts/contents/icons/sortby_name_red.svg" height="18"  style="vertical-align:middle; padding-right: 5px;"/>Имени';

	wholeMenu["92СортироватьПо"] = {};
	wholeMenu["92СортироватьПо"].id = "1_9_2";
	wholeMenu["92СортироватьПо"].color = "red";
	wholeMenu["92СортироватьПо"].hasSub = 0;
	wholeMenu["92СортироватьПо"].link = "index_rus.html?type=books&sortby=date";
	wholeMenu["92СортироватьПо"].html = '<img src="scripts/contents/icons/sortby_date_red.svg" height="18"  style="vertical-align:middle; padding-right: 5px;"/>Дате';

	wholeMenu["93SortBy"] = {};
	wholeMenu["93SortBy"].id = "1_9_3";
	wholeMenu["93SortBy"].color = "red";
	wholeMenu["93SortBy"].hasSub = 0;
	wholeMenu["93SortBy"].link = "index_rus.html?type=books&sortby=flag";
	wholeMenu["93SortBy"].html = '<img src="scripts/contents/icons/sortby_flag_red.svg" height="18"  style="vertical-align:middle; padding-right: 5px;"/>Стране';

	wholeMenu["● Фото/Картинки"] = {};
	wholeMenu["● Фото/Картинки"].id = "1_10";
	wholeMenu["● Фото/Картинки"].color = "red";
	wholeMenu["● Фото/Картинки"].hasSub = 1;
	wholeMenu["● Фото/Картинки"].alternativeCaption = "&#9679; Фото/Картинки, Сортировать по";
	wholeMenu["● Фото/Картинки"].link = "";
	wholeMenu["● Фото/Картинки"].html = '&#9679; Фото/Картинки';

	wholeMenu["101СортироватьПо"] = {};
	wholeMenu["101СортироватьПо"].id = "1_10_1";
	wholeMenu["101СортироватьПо"].color = "red";
	wholeMenu["101СортироватьПо"].hasSub = 0;
	wholeMenu["101СортироватьПо"].link = "index_rus.html?type=photos&sortby=name";
	wholeMenu["101СортироватьПо"].html = '<img src="scripts/contents/icons/sortby_name_red.svg" height="18"  style="vertical-align:middle; padding-right: 5px;"/>Имени';

	wholeMenu["102СортироватьПо"] = {};
	wholeMenu["102СортироватьПо"].id = "1_10_2";
	wholeMenu["102СортироватьПо"].color = "red";
	wholeMenu["102СортироватьПо"].hasSub = 0;
	wholeMenu["102СортироватьПо"].link = "index_rus.html?type=photos&sortby=date";
	wholeMenu["102СортироватьПо"].html = '<img src="scripts/contents/icons/sortby_date_red.svg" height="18"  style="vertical-align:middle; padding-right: 5px;"/>Дате';

	wholeMenu["● AMV"] = {};
	wholeMenu["● AMV"].id = "1_11";
	wholeMenu["● AMV"].color = "black";
	wholeMenu["● AMV"].hasSub = 1;
	wholeMenu["● AMV"].alternativeCaption = "&#9679; AMV, Сортировать по";
	wholeMenu["● AMV"].link = "";
	wholeMenu["● AMV"].html = '&#9679; AMV';

	wholeMenu["111СортироватьПо"] = {};
	wholeMenu["111СортироватьПо"].id = "1_11_1";
	wholeMenu["111СортироватьПо"].color = "black";
	wholeMenu["111СортироватьПо"].hasSub = 0;
	wholeMenu["111СортироватьПо"].link = "index_rus.html?type=amv&sortby=name";
	wholeMenu["111СортироватьПо"].html = '<img src="scripts/contents/icons/sortby_name_black.svg" height="18"  style="vertical-align:middle; padding-right: 5px;"/>Имени';

	wholeMenu["112СортироватьПо"] = {};
	wholeMenu["112СортироватьПо"].id = "1_11_2";
	wholeMenu["112СортироватьПо"].color = "black";
	wholeMenu["112СортироватьПо"].hasSub = 0;
	wholeMenu["112СортироватьПо"].link = "index_rus.html?type=amv&sortby=date";
	wholeMenu["112СортироватьПо"].html = '<img src="scripts/contents/icons/sortby_date_black.svg" height="18"  style="vertical-align:middle; padding-right: 5px;"/>Дате';

	wholeMenu["● Мусор"] = {};
	wholeMenu["● Мусор"].id = "1_12";
	wholeMenu["● Мусор"].color = "black";
	wholeMenu["● Мусор"].hasSub = 1;
	wholeMenu["● Мусор"].alternativeCaption = "&#9679; Мусор, Сортировать по";
	wholeMenu["● Мусор"].link = "";
	wholeMenu["● Мусор"].html = '&#9679; Мусор';

	wholeMenu["121СортироватьПо"] = {};
	wholeMenu["121СортироватьПо"].id = "1_12_1";
	wholeMenu["121СортироватьПо"].color = "black";
	wholeMenu["121СортироватьПо"].hasSub = 0;
	wholeMenu["121СортироватьПо"].link = "index_rus.html?type=junk&sortby=name";
	wholeMenu["121СортироватьПо"].html = '<img src="scripts/contents/icons/sortby_name_black.svg" height="18"  style="vertical-align:middle; padding-right: 5px;"/>Имени';

	wholeMenu["122СортироватьПо"] = {};
	wholeMenu["122СортироватьПо"].id = "1_12_2";
	wholeMenu["122СортироватьПо"].color = "black";
	wholeMenu["122СортироватьПо"].hasSub = 0;
	wholeMenu["122СортироватьПо"].link = "index_rus.html?type=junk&sortby=date";
	wholeMenu["122СортироватьПо"].html = '<img src="scripts/contents/icons/sortby_date_black.svg" height="18"  style="vertical-align:middle; padding-right: 5px;"/>Дате';

	wholeMenu["123СортироватьПо"] = {};
	wholeMenu["123СортироватьПо"].id = "1_12_3";
	wholeMenu["123СортироватьПо"].color = "black";
	wholeMenu["123СортироватьПо"].hasSub = 0;
	wholeMenu["123СортироватьПо"].link = "index_rus.html?type=junk&sortby=flag";
	wholeMenu["123СортироватьПо"].html = '<img src="scripts/contents/icons/sortby_flag_black.svg" height="18"  style="vertical-align:middle; padding-right: 5px;"/>Стране';

	wholeMenu["● Барахло ⚡ Evil ⚡"] = {};
	wholeMenu["● Барахло ⚡ Evil ⚡"].id = "1_13";
	wholeMenu["● Барахло ⚡ Evil ⚡"].color = "black";
	wholeMenu["● Барахло ⚡ Evil ⚡"].hasSub = 1;
	wholeMenu["● Барахло ⚡ Evil ⚡"].alternativeCaption = '&#9679; Барахло <font color="red"><sup>&#9889; Evil &#9889;</sup></font>, Сортировать по';
	wholeMenu["● Барахло ⚡ Evil ⚡"].link = "";
	wholeMenu["● Барахло ⚡ Evil ⚡"].html = '&#9679; Барахло <font color="red"><sup>&#9889; Evil &#9889;</sup></font>';

	wholeMenu["131СортироватьПо"] = {};
	wholeMenu["131СортироватьПо"].id = "1_13_1";
	wholeMenu["131СортироватьПо"].color = "black";
	wholeMenu["131СортироватьПо"].hasSub = 0;
	wholeMenu["131СортироватьПо"].link = "index_rus.html?type=stuff&sortby=name";
	wholeMenu["131СортироватьПо"].html = '<img src="scripts/contents/icons/sortby_name_black.svg" height="18"  style="vertical-align:middle; padding-right: 5px;"/>Имени';

	wholeMenu["132СортироватьПо"] = {};
	wholeMenu["132СортироватьПо"].id = "1_13_2";
	wholeMenu["132СортироватьПо"].color = "black";
	wholeMenu["132СортироватьПо"].hasSub = 0;
	wholeMenu["132СортироватьПо"].link = "index_rus.html?type=stuff&sortby=date";
	wholeMenu["132СортироватьПо"].html = '<img src="scripts/contents/icons/sortby_date_black.svg" height="18"  style="vertical-align:middle; padding-right: 5px;"/>Дате';

	wholeMenu["● Анекдоты"] = {};
	wholeMenu["● Анекдоты"].id = "1_14";
	wholeMenu["● Анекдоты"].color = "red";
	wholeMenu["● Анекдоты"].hasSub = 1;
	wholeMenu["● Анекдоты"].alternativeCaption = "&#9679; Анекдоты, Сортировать по";
	wholeMenu["● Анекдоты"].link = "";
	wholeMenu["● Анекдоты"].html = '&#9679; Анекдоты';

	wholeMenu["141СортироватьПо"] = {};
	wholeMenu["141СортироватьПо"].id = "1_14_1";
	wholeMenu["141СортироватьПо"].color = "red";
	wholeMenu["141СортироватьПо"].hasSub = 0;
	wholeMenu["141СортироватьПо"].link = "index_rus.html?type=anecdotes&sortby=name";
	wholeMenu["141СортироватьПо"].html = '<img src="scripts/contents/icons/sortby_name_red.svg" height="18"  style="vertical-align:middle; padding-right: 5px;"/>Имени';

	wholeMenu["142СортироватьПо"] = {};
	wholeMenu["142СортироватьПо"].id = "1_14_2";
	wholeMenu["142СортироватьПо"].color = "red";
	wholeMenu["142СортироватьПо"].hasSub = 0;
	wholeMenu["142СортироватьПо"].link = "index_rus.html?type=anecdotes&sortby=date";
	wholeMenu["142СортироватьПо"].html = '<img src="scripts/contents/icons/sortby_date_red.svg" height="18"  style="vertical-align:middle; padding-right: 5px;"/>Дате';

	wholeMenu["● Слонопотам ☠ Criminal ☠"] = {};
	wholeMenu["● Слонопотам ☠ Criminal ☠"].id = "1_15";
	wholeMenu["● Слонопотам ☠ Criminal ☠"].color = "red";
	wholeMenu["● Слонопотам ☠ Criminal ☠"].hasSub = 1;
	wholeMenu["● Слонопотам ☠ Criminal ☠"].alternativeCaption = '&#9679; Слонопотам <font color="lightcoral"><sup>&#9760; Criminal &#9760;</sup></font>, Сортировать по';
	wholeMenu["● Слонопотам ☠ Criminal ☠"].link = "";
	wholeMenu["● Слонопотам ☠ Criminal ☠"].html = '&#9679; Слонопотам <font color="lightcoral"><sup>&#9760; Criminal &#9760;</sup></font>';

	wholeMenu["151СортироватьПо"] = {};
	wholeMenu["151СортироватьПо"].id = "1_15_1";
	wholeMenu["151СортироватьПо"].color = "red";
	wholeMenu["151СортироватьПо"].hasSub = 0;
	wholeMenu["151СортироватьПо"].link = "index_rus.html?type=heffalump&sortby=name";
	wholeMenu["151СортироватьПо"].html = '<img src="scripts/contents/icons/sortby_name_red.svg" height="18"  style="vertical-align:middle; padding-right: 5px;"/>Имени';

	wholeMenu["152СортироватьПо"] = {};
	wholeMenu["152СортироватьПо"].id = "1_15_2";
	wholeMenu["152СортироватьПо"].color = "red";
	wholeMenu["152СортироватьПо"].hasSub = 0;
	wholeMenu["152СортироватьПо"].link = "index_rus.html?type=heffalump&sortby=date";
	wholeMenu["152СортироватьПо"].html = '<img src="scripts/contents/icons/sortby_date_red.svg" height="18"  style="vertical-align:middle; padding-right: 5px;"/>Дате';

	wholeMenu["● Вещества Для Расслабления"] = {};
	wholeMenu["● Вещества Для Расслабления"].id = "1_16";
	wholeMenu["● Вещества Для Расслабления"].color = "white";
	wholeMenu["● Вещества Для Расслабления"].hasSub = 1;
	wholeMenu["● Вещества Для Расслабления"].alternativeCaption = "&#9679; Вещества Для Расслабления, Сортировать по";
	wholeMenu["● Вещества Для Расслабления"].link = "";
	wholeMenu["● Вещества Для Расслабления"].html = '&#9679; Вещества Для Расслабления';

	wholeMenu["161СортироватьПо"] = {};
	wholeMenu["161СортироватьПо"].id = "1_16_1";
	wholeMenu["161СортироватьПо"].color = "white";
	wholeMenu["161СортироватьПо"].hasSub = 0;
	wholeMenu["161СортироватьПо"].link = "index_rus.html?type=relaxation&sortby=name";
	wholeMenu["161СортироватьПо"].html = '<img src="scripts/contents/icons/sortby_name_white.svg" height="18"  style="vertical-align:middle; padding-right: 5px;"/>Имени';

	wholeMenu["162СортироватьПо"] = {};
	wholeMenu["162СортироватьПо"].id = "1_16_2";
	wholeMenu["162СортироватьПо"].color = "white";
	wholeMenu["162СортироватьПо"].hasSub = 0;
	wholeMenu["162СортироватьПо"].link = "index_rus.html?type=relaxation&sortby=date";
	wholeMenu["162СортироватьПо"].html = '<img src="scripts/contents/icons/sortby_date_white.svg" height="18"  style="vertical-align:middle; padding-right: 5px;"/>Дате';

	wholeMenu["● Разработка Программного Обеспечения"] = {};
	wholeMenu["● Разработка Программного Обеспечения"].id = "1_17";
	wholeMenu["● Разработка Программного Обеспечения"].color = "white";
	wholeMenu["● Разработка Программного Обеспечения"].hasSub = 1;
	wholeMenu["● Разработка Программного Обеспечения"].alternativeCaption = "&#9679; Разработка Программного Обеспечения, Сортировать по";
	wholeMenu["● Разработка Программного Обеспечения"].link = "";
	wholeMenu["● Разработка Программного Обеспечения"].html = '&#9679; Разработка Программного Обеспечения';

	wholeMenu["171СортироватьПо"] = {};
	wholeMenu["171СортироватьПо"].id = "1_17_1";
	wholeMenu["171СортироватьПо"].color = "white";
	wholeMenu["171СортироватьПо"].hasSub = 0;
	wholeMenu["171СортироватьПо"].link = "index_rus.html?type=software&sortby=name";
	wholeMenu["171СортироватьПо"].html = '<img src="scripts/contents/icons/sortby_name_white.svg" height="18"  style="vertical-align:middle; padding-right: 5px;"/>Имени';

	wholeMenu["172СортироватьПо"] = {};
	wholeMenu["172СортироватьПо"].id = "1_17_2";
	wholeMenu["172СортироватьПо"].color = "white";
	wholeMenu["172СортироватьПо"].hasSub = 0;
	wholeMenu["172СортироватьПо"].link = "index_rus.html?type=software&sortby=date";
	wholeMenu["172СортироватьПо"].html = '<img src="scripts/contents/icons/sortby_date_white.svg" height="18"  style="vertical-align:middle; padding-right: 5px;"/>Дате';

	wholeMenu["● Сатанизм"] = {};
	wholeMenu["● Сатанизм"].id = "1_18";
	wholeMenu["● Сатанизм"].color = "green";
	wholeMenu["● Сатанизм"].hasSub = 1;
	wholeMenu["● Сатанизм"].alternativeCaption = "&#9679; Сатанизм, Сортировать по";
	wholeMenu["● Сатанизм"].link = "";
	wholeMenu["● Сатанизм"].html = '&#9679; Сатанизм';

	wholeMenu["181СортироватьПо"] = {};
	wholeMenu["181СортироватьПо"].id = "1_18_1";
	wholeMenu["181СортироватьПо"].color = "green";
	wholeMenu["181СортироватьПо"].hasSub = 0;
	wholeMenu["181СортироватьПо"].link = "index_rus.html?type=satanism&sortby=name";
	wholeMenu["181СортироватьПо"].html = '<img src="scripts/contents/icons/sortby_name_green.svg" height="18"  style="vertical-align:middle; padding-right: 5px;"/>Имени';

	wholeMenu["182СортироватьПо"] = {};
	wholeMenu["182СортироватьПо"].id = "1_18_2";
	wholeMenu["182СортироватьПо"].color = "green";
	wholeMenu["182СортироватьПо"].hasSub = 0;
	wholeMenu["182СортироватьПо"].link = "index_rus.html?type=satanism&sortby=date";
	wholeMenu["182СортироватьПо"].html = '<img src="scripts/contents/icons/sortby_date_green.svg" height="18"  style="vertical-align:middle; padding-right: 5px;"/>Дате';

	wholeMenu["● Викка"] = {};
	wholeMenu["● Викка"].id = "1_19";
	wholeMenu["● Викка"].color = "green";
	wholeMenu["● Викка"].hasSub = 1;
	wholeMenu["● Викка"].alternativeCaption = "&#9679; Викка, Сортировать по";
	wholeMenu["● Викка"].link = "";
	wholeMenu["● Викка"].html = '&#9679; Викка';

	wholeMenu["191СортироватьПо"] = {};
	wholeMenu["191СортироватьПо"].id = "1_19_1";
	wholeMenu["191СортироватьПо"].color = "green";
	wholeMenu["191СортироватьПо"].hasSub = 0;
	wholeMenu["191СортироватьПо"].link = "index_rus.html?type=wicca&sortby=name";
	wholeMenu["191СортироватьПо"].html = '<img src="scripts/contents/icons/sortby_name_green.svg" height="18"  style="vertical-align:middle; padding-right: 5px;"/>Имени';

	wholeMenu["192СортироватьПо"] = {};
	wholeMenu["192СортироватьПо"].id = "1_19_2";
	wholeMenu["192СортироватьПо"].color = "green";
	wholeMenu["192СортироватьПо"].hasSub = 0;
	wholeMenu["192СортироватьПо"].link = "index_rus.html?type=wicca&sortby=date";
	wholeMenu["192СортироватьПо"].html = '<img src="scripts/contents/icons/sortby_date_green.svg" height="18"  style="vertical-align:middle; padding-right: 5px;"/>Дате';

	wholeMenu["● Фальсифицируемость"] = {};
	wholeMenu["● Фальсифицируемость"].id = "1_20";
	wholeMenu["● Фальсифицируемость"].color = "green";
	wholeMenu["● Фальсифицируемость"].hasSub = 1;
	wholeMenu["● Фальсифицируемость"].alternativeCaption = "&#9679; Фальсифицируемость, Сортировать по";
	wholeMenu["● Фальсифицируемость"].link = "";
	wholeMenu["● Фальсифицируемость"].html = '&#9679; Фальсифицируемость';

	wholeMenu["201СортироватьПо"] = {};
	wholeMenu["201СортироватьПо"].id = "1_20_1";
	wholeMenu["201СортироватьПо"].color = "green";
	wholeMenu["201СортироватьПо"].hasSub = 0;
	wholeMenu["201СортироватьПо"].link = "index_rus.html?type=falsifiability&sortby=name";
	wholeMenu["201СортироватьПо"].html = '<img src="scripts/contents/icons/sortby_name_green.svg" height="18"  style="vertical-align:middle; padding-right: 5px;"/>Имени';

	wholeMenu["202СортироватьПо"] = {};
	wholeMenu["202СортироватьПо"].id = "1_20_2";
	wholeMenu["202СортироватьПо"].color = "green";
	wholeMenu["202СортироватьПо"].hasSub = 0;
	wholeMenu["202СортироватьПо"].link = "index_rus.html?type=falsifiability&sortby=date";
	wholeMenu["202СортироватьПо"].html = '<img src="scripts/contents/icons/sortby_date_green.svg" height="18"  style="vertical-align:middle; padding-right: 5px;"/>Дате';

	wholeMenu["● Психология"] = {};
	wholeMenu["● Психология"].id = "1_21";
	wholeMenu["● Психология"].color = "green";
	wholeMenu["● Психология"].hasSub = 1;
	wholeMenu["● Психология"].alternativeCaption = "&#9679; Психология, Сортировать по";
	wholeMenu["● Психология"].link = "";
	wholeMenu["● Психология"].html = '&#9679; Психология';

	wholeMenu["211СортироватьПо"] = {};
	wholeMenu["211СортироватьПо"].id = "1_21_1";
	wholeMenu["211СортироватьПо"].color = "green";
	wholeMenu["211СортироватьПо"].hasSub = 0;
	wholeMenu["211СортироватьПо"].link = "index_rus.html?type=psychology&sortby=name";
	wholeMenu["211СортироватьПо"].html = '<img src="scripts/contents/icons/sortby_name_green.svg" height="18"  style="vertical-align:middle; padding-right: 5px;"/>Имени';

	wholeMenu["212СортироватьПо"] = {};
	wholeMenu["212СортироватьПо"].id = "1_21_2";
	wholeMenu["212СортироватьПо"].color = "green";
	wholeMenu["212СортироватьПо"].hasSub = 0;
	wholeMenu["212СортироватьПо"].link = "index_rus.html?type=psychology&sortby=date";
	wholeMenu["212СортироватьПо"].html = '<img src="scripts/contents/icons/sortby_date_green.svg" height="18"  style="vertical-align:middle; padding-right: 5px;"/>Дате';

	wholeMenu["● Страны"] = {};
	wholeMenu["● Страны"].id = "1_22";
	wholeMenu["● Страны"].color = "green";
	wholeMenu["● Страны"].hasSub = 1;
	wholeMenu["● Страны"].alternativeCaption = "&#9679; Страны, Сортировать по";
	wholeMenu["● Страны"].link = "";
	wholeMenu["● Страны"].html = '&#9679; Страны';

	wholeMenu["221СортироватьПо"] = {};
	wholeMenu["221СортироватьПо"].id = "1_22_1";
	wholeMenu["221СортироватьПо"].color = "green";
	wholeMenu["221СортироватьПо"].hasSub = 0;
	wholeMenu["221СортироватьПо"].link = "index_rus.html?type=countries&sortby=name";
	wholeMenu["221СортироватьПо"].html = '<img src="scripts/contents/icons/sortby_name_green.svg" height="18"  style="vertical-align:middle; padding-right: 5px;"/>Имени';

	wholeMenu["222СортироватьПо"] = {};
	wholeMenu["222СортироватьПо"].id = "1_22_2";
	wholeMenu["222СортироватьПо"].color = "green";
	wholeMenu["222СортироватьПо"].hasSub = 0;
	wholeMenu["222СортироватьПо"].link = "index_rus.html?type=countries&sortby=date";
	wholeMenu["222СортироватьПо"].html = '<img src="scripts/contents/icons/sortby_date_green.svg" height="18"  style="vertical-align:middle; padding-right: 5px;"/>Дате';

	wholeMenu["● Тоталитаризм"] = {};
	wholeMenu["● Тоталитаризм"].id = "1_23";
	wholeMenu["● Тоталитаризм"].color = "green";
	wholeMenu["● Тоталитаризм"].hasSub = 1;
	wholeMenu["● Тоталитаризм"].alternativeCaption = "&#9679; Тоталитаризм, Сортировать по";
	wholeMenu["● Тоталитаризм"].link = "";
	wholeMenu["● Тоталитаризм"].html = '&#9679; Тоталитаризм';

	wholeMenu["231СортироватьПо"] = {};
	wholeMenu["231СортироватьПо"].id = "1_23_1";
	wholeMenu["231СортироватьПо"].color = "green";
	wholeMenu["231СортироватьПо"].hasSub = 0;
	wholeMenu["231СортироватьПо"].link = "index_rus.html?type=totalitarianism&sortby=name";
	wholeMenu["231СортироватьПо"].html = '<img src="scripts/contents/icons/sortby_name_green.svg" height="18"  style="vertical-align:middle; padding-right: 5px;"/>Имени';

	wholeMenu["232СортироватьПо"] = {};
	wholeMenu["232СортироватьПо"].id = "1_23_2";
	wholeMenu["232СортироватьПо"].color = "green";
	wholeMenu["232СортироватьПо"].hasSub = 0;
	wholeMenu["232СортироватьПо"].link = "index_rus.html?type=totalitarianism&sortby=date";
	wholeMenu["232СортироватьПо"].html = '<img src="scripts/contents/icons/sortby_date_green.svg" height="18"  style="vertical-align:middle; padding-right: 5px;"/>Дате';

	wholeMenu["● Деятели"] = {};
	wholeMenu["● Деятели"].id = "1_24";
	wholeMenu["● Деятели"].color = "green";
	wholeMenu["● Деятели"].hasSub = 1;
	wholeMenu["● Деятели"].alternativeCaption = "&#9679; Деятели, Сортировать по";
	wholeMenu["● Деятели"].link = "";
	wholeMenu["● Деятели"].html = '&#9679; Деятели';

	wholeMenu["241СортироватьПо"] = {};
	wholeMenu["241СортироватьПо"].id = "1_24_1";
	wholeMenu["241СортироватьПо"].color = "green";
	wholeMenu["241СортироватьПо"].hasSub = 0;
	wholeMenu["241СортироватьПо"].link = "index_rus.html?type=personalities&sortby=name";
	wholeMenu["241СортироватьПо"].html = '<img src="scripts/contents/icons/sortby_name_green.svg" height="18"  style="vertical-align:middle; padding-right: 5px;"/>Имени';

	wholeMenu["242СортироватьПо"] = {};
	wholeMenu["242СортироватьПо"].id = "1_24_2";
	wholeMenu["242СортироватьПо"].color = "green";
	wholeMenu["242СортироватьПо"].hasSub = 0;
	wholeMenu["242СортироватьПо"].link = "index_rus.html?type=personalities&sortby=date";
	wholeMenu["242СортироватьПо"].html = '<img src="scripts/contents/icons/sortby_date_green.svg" height="18"  style="vertical-align:middle; padding-right: 5px;"/>Дате';

	wholeMenu["● Новости"] = {};
	wholeMenu["● Новости"].id = "1_25";
	wholeMenu["● Новости"].color = "red";
	wholeMenu["● Новости"].hasSub = 1;
	wholeMenu["● Новости"].alternativeCaption = "&#9679; Новости, Сортировать по";
	wholeMenu["● Новости"].link = "";
	wholeMenu["● Новости"].html = '&#9679; Новости';

	wholeMenu["251СортироватьПо"] = {};
	wholeMenu["251СортироватьПо"].id = "1_25_1";
	wholeMenu["251СортироватьПо"].color = "red";
	wholeMenu["251СортироватьПо"].hasSub = 0;
	wholeMenu["251СортироватьПо"].link = "index_rus.html?type=news&sortby=name";
	wholeMenu["251СортироватьПо"].html = '<img src="scripts/contents/icons/sortby_name_red.svg" height="18"  style="vertical-align:middle; padding-right: 5px;"/>Имени';

	wholeMenu["252СортироватьПо"] = {};
	wholeMenu["252СортироватьПо"].id = "1_25_2";
	wholeMenu["252СортироватьПо"].color = "red";
	wholeMenu["252СортироватьПо"].hasSub = 0;
	wholeMenu["252СортироватьПо"].link = "index_rus.html?type=news&sortby=date";
	wholeMenu["252СортироватьПо"].html = '<img src="scripts/contents/icons/sortby_date_red.svg" height="18"  style="vertical-align:middle; padding-right: 5px;"/>Дате';

	wholeMenu["253СортироватьПо"] = {};
	wholeMenu["253СортироватьПо"].id = "1_25_3";
	wholeMenu["253СортироватьПо"].color = "red";
	wholeMenu["253СортироватьПо"].hasSub = 0;
	wholeMenu["253СортироватьПо"].link = "index_rus.html?type=news&sortby=flag";
	wholeMenu["253СортироватьПо"].html = '<img src="scripts/contents/icons/sortby_flag_red.svg" height="18"  style="vertical-align:middle; padding-right: 5px;"/>Стране';
}


if (lang=="lat") {

	wholeMenu["● Pagina Tabula"] = {};
	wholeMenu["● Pagina Tabula"].id = "1";
	wholeMenu["● Pagina Tabula"].color = "blue";
	wholeMenu["● Pagina Tabula"].hasSub = 1;
	wholeMenu["● Pagina Tabula"].link = "";
	wholeMenu["● Pagina Tabula"].html = '&#9679; Pagina Tabula';


	wholeMenu["● Circa Mihi"] = {};
	wholeMenu["● Circa Mihi"].id = "1_1";
	wholeMenu["● Circa Mihi"].color = "blue";
	wholeMenu["● Circa Mihi"].hasSub = 1;
	wholeMenu["● Circa Mihi"].alternativeCaption = "&#9679; Circa Mihi, Digerere";
	wholeMenu["● Circa Mihi"].link = "";
	wholeMenu["● Circa Mihi"].html = '&#9679; Circa Mihi';

	wholeMenu["11Digerere"] = {};
	wholeMenu["11Digerere"].id = "1_1_1";
	wholeMenu["11Digerere"].color = "blue";
	wholeMenu["11Digerere"].hasSub = 0;
	wholeMenu["11Digerere"].link = "index_lat.html?type=aboutme&sortby=name";
	wholeMenu["11Digerere"].html = '<img src="scripts/contents/icons/sortby_name_blue.svg" alt="Nomine" title="Nomine" width="18" height="18"  style="vertical-align:middle; padding-right: 5px;"/>Nomine';

	wholeMenu["12Digerere"] = {};
	wholeMenu["12Digerere"].id = "1_1_2";
	wholeMenu["12Digerere"].color = "blue";
	wholeMenu["12Digerere"].hasSub = 0;
	wholeMenu["12Digerere"].link = "index_lat.html?type=aboutme&sortby=date";
	wholeMenu["12Digerere"].html = '<img src="scripts/contents/icons/sortby_date_blue.svg" alt="Diem" title="Diem" width="18" height="18"  style="vertical-align:middle; padding-right: 5px;"/>Diem';

	wholeMenu["● Circa Opus Meum"] = {};
	wholeMenu["● Circa Opus Meum"].id = "1_2";
	wholeMenu["● Circa Opus Meum"].color = "blue";
	wholeMenu["● Circa Opus Meum"].hasSub = 1;
	wholeMenu["● Circa Opus Meum"].alternativeCaption = "&#9679; Circa Opus Meum, Digerere";
	wholeMenu["● Circa Opus Meum"].link = "";
	wholeMenu["● Circa Opus Meum"].html = '&#9679; Circa Opus Meum';

	wholeMenu["21Digerere"] = {};
	wholeMenu["21Digerere"].id = "1_2_1";
	wholeMenu["21Digerere"].color = "blue";
	wholeMenu["21Digerere"].hasSub = 0;
	wholeMenu["21Digerere"].link = "index_lat.html?type=aboutwork&sortby=name";
	wholeMenu["21Digerere"].html = '<img src="scripts/contents/icons/sortby_name_blue.svg" alt="Nomine" title="Nomine" width="18" height="18"  style="vertical-align:middle; padding-right: 5px;"/>Nomine';

	wholeMenu["22Digerere"] = {};
	wholeMenu["22Digerere"].id = "1_2_2";
	wholeMenu["22Digerere"].color = "blue";
	wholeMenu["22Digerere"].hasSub = 0;
	wholeMenu["22Digerere"].link = "index_lat.html?type=aboutwork&sortby=date";
	wholeMenu["22Digerere"].html = '<img src="scripts/contents/icons/sortby_date_blue.svg" alt="Diem" title="Diem" width="18" height="18"  style="vertical-align:middle; padding-right: 5px;"/>Diem';

	wholeMenu["● Circa Mei PhD"] = {};
	wholeMenu["● Circa Mei PhD"].id = "1_3";
	wholeMenu["● Circa Mei PhD"].color = "blue";
	wholeMenu["● Circa Mei PhD"].hasSub = 1;
	wholeMenu["● Circa Mei PhD"].alternativeCaption = "&#9679; Circa Mei PhD, Digerere";
	wholeMenu["● Circa Mei PhD"].link = "";
	wholeMenu["● Circa Mei PhD"].html = '&#9679; Circa Mei PhD';

	wholeMenu["31Digerere"] = {};
	wholeMenu["31Digerere"].id = "1_3_1";
	wholeMenu["31Digerere"].color = "blue";
	wholeMenu["31Digerere"].hasSub = 0;
	wholeMenu["31Digerere"].link = "index_lat.html?type=aboutphd&sortby=name";
	wholeMenu["31Digerere"].html = '<img src="scripts/contents/icons/sortby_name_blue.svg" alt="Nomine" title="Nomine" width="18" height="18"  style="vertical-align:middle; padding-right: 5px;"/>Nomine';

	wholeMenu["32Digerere"] = {};
	wholeMenu["32Digerere"].id = "1_3_2";
	wholeMenu["32Digerere"].color = "blue";
	wholeMenu["32Digerere"].hasSub = 0;
	wholeMenu["32Digerere"].link = "index_lat.html?type=aboutphd&sortby=date";
	wholeMenu["32Digerere"].html = '<img src="scripts/contents/icons/sortby_date_blue.svg" alt="Diem" title="Diem" width="18" height="18"  style="vertical-align:middle; padding-right: 5px;"/>Diem';

	wholeMenu["● Relatio"] = {};
	wholeMenu["● Relatio"].id = "1_4";
	wholeMenu["● Relatio"].color = "blue";
	wholeMenu["● Relatio"].hasSub = 1;
	wholeMenu["● Relatio"].alternativeCaption = "&#9679; Relatio, Digerere";
	wholeMenu["● Relatio"].link = "";
	wholeMenu["● Relatio"].html = '&#9679; Relatio';

	wholeMenu["41Digerere"] = {};
	wholeMenu["41Digerere"].id = "1_4_1";
	wholeMenu["41Digerere"].color = "blue";
	wholeMenu["41Digerere"].hasSub = 0;
	wholeMenu["41Digerere"].link = "index_lat.html?type=links&sortby=name";
	wholeMenu["41Digerere"].html = '<img src="scripts/contents/icons/sortby_name_blue.svg" alt="Nomine" title="Nomine" width="18" height="18"  style="vertical-align:middle; padding-right: 5px;"/>Nomine';

	wholeMenu["42Digerere"] = {};
	wholeMenu["42Digerere"].id = "1_4_2";
	wholeMenu["42Digerere"].color = "blue";
	wholeMenu["42Digerere"].hasSub = 0;
	wholeMenu["42Digerere"].link = "index_lat.html?type=links&sortby=date";
	wholeMenu["42Digerere"].html = '<img src="scripts/contents/icons/sortby_date_blue.svg" alt="Diem" title="Diem" width="18" height="18"  style="vertical-align:middle; padding-right: 5px;"/>Diem';

	wholeMenu["● Photo/Imaginibus"] = {};
	wholeMenu["● Photo/Imaginibus"].id = "1_10";
	wholeMenu["● Photo/Imaginibus"].color = "red";
	wholeMenu["● Photo/Imaginibus"].hasSub = 1;
	wholeMenu["● Photo/Imaginibus"].alternativeCaption = "&#9679; Photo/Imaginibus, Digerere";
	wholeMenu["● Photo/Imaginibus"].link = "";
	wholeMenu["● Photo/Imaginibus"].html = '&#9679; Photo/Imaginibus';

	wholeMenu["101Digerere"] = {};
	wholeMenu["101Digerere"].id = "1_10_1";
	wholeMenu["101Digerere"].color = "red";
	wholeMenu["101Digerere"].hasSub = 0;
	wholeMenu["101Digerere"].link = "index_lat.html?type=photos&sortby=name";
	wholeMenu["101Digerere"].html = '<img src="scripts/contents/icons/sortby_name_red.svg" alt="Nomine" title="Nomine" width="18" height="18"  style="vertical-align:middle; padding-right: 5px;"/>Nomine';

	wholeMenu["102Digerere"] = {};
	wholeMenu["102Digerere"].id = "1_10_2";
	wholeMenu["102Digerere"].color = "red";
	wholeMenu["102Digerere"].hasSub = 0;
	wholeMenu["102Digerere"].link = "index_lat.html?type=photos&sortby=date";
	wholeMenu["102Digerere"].html = '<img src="scripts/contents/icons/sortby_date_red.svg" alt="Diem" title="Diem" width="18" height="18"  style="vertical-align:middle; padding-right: 5px;"/>Diem';

	wholeMenu["● AMV"] = {};
	wholeMenu["● AMV"].id = "1_11";
	wholeMenu["● AMV"].color = "black";
	wholeMenu["● AMV"].hasSub = 1;
	wholeMenu["● AMV"].alternativeCaption = "&#9679; AMV, Digerere";
	wholeMenu["● AMV"].link = "";
	wholeMenu["● AMV"].html = '&#9679; AMV';

	wholeMenu["111Digerere"] = {};
	wholeMenu["111Digerere"].id = "1_11_1";
	wholeMenu["111Digerere"].color = "black";
	wholeMenu["111Digerere"].hasSub = 0;
	wholeMenu["111Digerere"].link = "index_lat.html?type=amv&sortby=name";
	wholeMenu["111Digerere"].html = '<img src="scripts/contents/icons/sortby_name_black.svg" alt="Nomine" title="Nomine" width="18" height="18"  style="vertical-align:middle; padding-right: 5px;"/>Nomine';

	wholeMenu["112Digerere"] = {};
	wholeMenu["112Digerere"].id = "1_11_2";
	wholeMenu["112Digerere"].color = "black";
	wholeMenu["112Digerere"].hasSub = 0;
	wholeMenu["112Digerere"].link = "index_lat.html?type=amv&sortby=date";
	wholeMenu["112Digerere"].html = '<img src="scripts/contents/icons/sortby_date_black.svg" alt="Diem" title="Diem" width="18" height="18"  style="vertical-align:middle; padding-right: 5px;"/>Diem';

	wholeMenu["● Quisquiliae"] = {};
	wholeMenu["● Quisquiliae"].id = "1_12";
	wholeMenu["● Quisquiliae"].color = "black";
	wholeMenu["● Quisquiliae"].hasSub = 1;
	wholeMenu["● Quisquiliae"].alternativeCaption = "&#9679; Quisquiliae, Digerere";
	wholeMenu["● Quisquiliae"].link = "";
	wholeMenu["● Quisquiliae"].html = '&#9679; Quisquiliae';

	wholeMenu["121Digerere"] = {};
	wholeMenu["121Digerere"].id = "1_12_1";
	wholeMenu["121Digerere"].color = "black";
	wholeMenu["121Digerere"].hasSub = 0;
	wholeMenu["121Digerere"].link = "index_lat.html?type=junk&sortby=name";
	wholeMenu["121Digerere"].html = '<img src="scripts/contents/icons/sortby_name_black.svg" alt="Nomine" title="Nomine" width="18" height="18"  style="vertical-align:middle; padding-right: 5px;"/>Nomine';

	wholeMenu["122Digerere"] = {};
	wholeMenu["122Digerere"].id = "1_12_2";
	wholeMenu["122Digerere"].color = "black";
	wholeMenu["122Digerere"].hasSub = 0;
	wholeMenu["122Digerere"].link = "index_lat.html?type=junk&sortby=date";
	wholeMenu["122Digerere"].html = '<img src="scripts/contents/icons/sortby_date_black.svg" alt="Diem" title="Diem" width="18" height="18"  style="vertical-align:middle; padding-right: 5px;"/>Diem';

	wholeMenu["123Digerere"] = {};
	wholeMenu["123Digerere"].id = "1_12_3";
	wholeMenu["123Digerere"].color = "black";
	wholeMenu["123Digerere"].hasSub = 0;
	wholeMenu["123Digerere"].link = "index_lat.html?type=junk&sortby=flag";
	wholeMenu["123Digerere"].html = '<img src="scripts/contents/icons/sortby_flag_black.svg" height="18"  style="vertical-align:middle; padding-right: 5px;"/>Patriam';

	wholeMenu["● Res ⚡ Evil ⚡"] = {};
	wholeMenu["● Res ⚡ Evil ⚡"].id = "1_13";
	wholeMenu["● Res ⚡ Evil ⚡"].color = "black";
	wholeMenu["● Res ⚡ Evil ⚡"].hasSub = 1;
	wholeMenu["● Res ⚡ Evil ⚡"].alternativeCaption = '&#9679; Res <font color="red"><sup>&#9889; Evil &#9889;</sup></font>, Digerere';
	wholeMenu["● Res ⚡ Evil ⚡"].link = "";
	wholeMenu["● Res ⚡ Evil ⚡"].html = '&#9679; Res <font color="red"><sup>&#9889; Evil &#9889;</sup></font>';

	wholeMenu["131Digerere"] = {};
	wholeMenu["131Digerere"].id = "1_13_1";
	wholeMenu["131Digerere"].color = "black";
	wholeMenu["131Digerere"].hasSub = 0;
	wholeMenu["131Digerere"].link = "index_lat.html?type=stuff&sortby=name";
	wholeMenu["131Digerere"].html = '<img src="scripts/contents/icons/sortby_name_black.svg" alt="Nomine" title="Nomine" width="18" height="18"  style="vertical-align:middle; padding-right: 5px;"/>Nomine';

	wholeMenu["132Digerere"] = {};
	wholeMenu["132Digerere"].id = "1_13_2";
	wholeMenu["132Digerere"].color = "black";
	wholeMenu["132Digerere"].hasSub = 0;
	wholeMenu["132Digerere"].link = "index_lat.html?type=stuff&sortby=date";
	wholeMenu["132Digerere"].html = '<img src="scripts/contents/icons/sortby_date_black.svg" alt="Diem" title="Diem" width="18" height="18"  style="vertical-align:middle; padding-right: 5px;"/>Diem';

	wholeMenu["● Nuntium"] = {};
	wholeMenu["● Nuntium"].id = "1_25";
	wholeMenu["● Nuntium"].color = "red";
	wholeMenu["● Nuntium"].hasSub = 1;
	wholeMenu["● Nuntium"].alternativeCaption = "&#9679; Nuntium, Digerere";
	wholeMenu["● Nuntium"].link = "";
	wholeMenu["● Nuntium"].html = '&#9679; Nuntium';

	wholeMenu["251Digerere"] = {};
	wholeMenu["251Digerere"].id = "1_25_1";
	wholeMenu["251Digerere"].color = "red";
	wholeMenu["251Digerere"].hasSub = 0;
	wholeMenu["251Digerere"].link = "index_lat.html?type=news&sortby=name";
	wholeMenu["251Digerere"].html = '<img src="scripts/contents/icons/sortby_name_red.svg" alt="Nomine" title="Nomine" width="18" height="18"  style="vertical-align:middle; padding-right: 5px;"/>Nomine';

	wholeMenu["252Digerere"] = {};
	wholeMenu["252Digerere"].id = "1_25_2";
	wholeMenu["252Digerere"].color = "red";
	wholeMenu["252Digerere"].hasSub = 0;
	wholeMenu["252Digerere"].link = "index_lat.html?type=news&sortby=date";
	wholeMenu["252Digerere"].html = '<img src="scripts/contents/icons/sortby_date_red.svg" alt="Diem" title="Diem" width="18" height="18"  style="vertical-align:middle; padding-right: 5px;"/>Diem';

	wholeMenu["253Digerere"] = {};
	wholeMenu["253Digerere"].id = "1_25_3";
	wholeMenu["253Digerere"].color = "red";
	wholeMenu["253Digerere"].hasSub = 0;
	wholeMenu["253Digerere"].link = "index_lat.html?type=news&sortby=flag";
	wholeMenu["253Digerere"].html = '<img src="scripts/contents/icons/sortby_flag_red.svg" height="18"  style="vertical-align:middle; padding-right: 5px;"/>Patriam';

}

return wholeMenu;
}



function  loadMenuMusic(lang) {


var wholeMenu = {};

if (lang=="eng") {

	wholeMenu["● Music ☥ Vampiric ☥"] = {};
	wholeMenu["● Music ☥ Vampiric ☥"].id = "7";
	wholeMenu["● Music ☥ Vampiric ☥"].color = "black";
	wholeMenu["● Music ☥ Vampiric ☥"].hasSub = 1;
	wholeMenu["● Music ☥ Vampiric ☥"].link = "";
	wholeMenu["● Music ☥ Vampiric ☥"].html = '&#9679; Music <font color="purple"><sup>&#9765; Vampiric &#9765;</sup></font>';

	wholeMenu["Chanson"] = {};
	wholeMenu["Chanson"].id = "7_1";
	wholeMenu["Chanson"].color = "black";
	wholeMenu["Chanson"].hasSub = 0;
	wholeMenu["Chanson"].link = "music_chanson_eng.html";
	wholeMenu["Chanson"].html = 'Chanson <font color="purple"><sup>&#9765; Vampiric &#9765;</sup></font>';


	wholeMenu["Country"] = {};
	wholeMenu["Country"].id = "7_3";
	wholeMenu["Country"].color = "black";
	wholeMenu["Country"].hasSub = 0;
	wholeMenu["Country"].link = "music_country_eng.html";
	wholeMenu["Country"].html = 'Country <font color="mediumseagreen"><sup>&circlearrowright; Minimalistic &circlearrowleft;</sup></font>';

	wholeMenu["Disco"] = {};
	wholeMenu["Disco"].id = "7_4";
	wholeMenu["Disco"].color = "black";
	wholeMenu["Disco"].hasSub = 0;
	wholeMenu["Disco"].link = "music_disco_eng.html";
	wholeMenu["Disco"].html = 'Disco';

	wholeMenu["● Electronic"] = {};
	wholeMenu["● Electronic"].id = "7_5";
	wholeMenu["● Electronic"].color = "black";
	wholeMenu["● Electronic"].hasSub = 1;
	wholeMenu["● Electronic"].link = "";
	wholeMenu["● Electronic"].html = '&#9679; Electronic';

	wholeMenu["Body (EBM)"] = {};
	wholeMenu["Body (EBM)"].id = "7_5_1";
	wholeMenu["Body (EBM)"].color = "black";
	wholeMenu["Body (EBM)"].hasSub = 0;
	wholeMenu["Body (EBM)"].link = "music_electronic_body_eng.html";
	wholeMenu["Body (EBM)"].html = 'Body (EBM)';

	wholeMenu["Dance (EDM)"] = {};
	wholeMenu["Dance (EDM)"].id = "7_5_2";
	wholeMenu["Dance (EDM)"].color = "black";
	wholeMenu["Dance (EDM)"].hasSub = 0;
	wholeMenu["Dance (EDM)"].link = "music_electronic_dance_eng.html";
	wholeMenu["Dance (EDM)"].html = 'Dance (EDM)';

	wholeMenu["eRock"] = {};
	wholeMenu["eRock"].id = "7_5_3";
	wholeMenu["eRock"].color = "black";
	wholeMenu["eRock"].hasSub = 0;
	wholeMenu["eRock"].link = "music_electronic_rock_eng.html";
	wholeMenu["eRock"].html = 'Rock';

	wholeMenu["Synthwave"] = {};
	wholeMenu["Synthwave"].id = "7_5_4";
	wholeMenu["Synthwave"].color = "black";
	wholeMenu["Synthwave"].hasSub = 0;
	wholeMenu["Synthwave"].link = "music_electronic_synthwave_eng.html";
	wholeMenu["Synthwave"].html = 'Synthwave';

	wholeMenu["● Industrial"] = {};
	wholeMenu["● Industrial"].id = "7_6";
	wholeMenu["● Industrial"].color = "black";
	wholeMenu["● Industrial"].hasSub = 1;
	wholeMenu["● Industrial"].link = "";
	wholeMenu["● Industrial"].html = '&#9679; Industrial';

	wholeMenu["Electro-"] = {};
	wholeMenu["Electro-"].id = "7_6_1";
	wholeMenu["Electro-"].color = "black";
	wholeMenu["Electro-"].hasSub = 0;
	wholeMenu["Electro-"].link = "music_industrial_electro_eng.html";
	wholeMenu["Electro-"].html = 'Electro-';

	wholeMenu["iMetal"] = {};
	wholeMenu["iMetal"].id = "7_6_2";
	wholeMenu["iMetal"].color = "black";
	wholeMenu["iMetal"].hasSub = 0;
	wholeMenu["iMetal"].link = "music_industrial_metal_eng.html";
	wholeMenu["iMetal"].html = 'Metal';

	wholeMenu["iRock"] = {};
	wholeMenu["iRock"].id = "7_6_3";
	wholeMenu["iRock"].color = "black";
	wholeMenu["iRock"].hasSub = 0;
	wholeMenu["iRock"].link = "music_industrial_rock_eng.html";
	wholeMenu["iRock"].html = 'Rock';

	wholeMenu["● Metal ⤧ Real ⤧"] = {};
	wholeMenu["● Metal ⤧ Real ⤧"].id = "7_7";
	wholeMenu["● Metal ⤧ Real ⤧"].color = "black";
	wholeMenu["● Metal ⤧ Real ⤧"].hasSub = 1;
	wholeMenu["● Metal ⤧ Real ⤧"].link = "";
	wholeMenu["● Metal ⤧ Real ⤧"].html = '&#9679; Metal <font color="orangered"><sup>&nwnear; Real &nwnear;</sup>';

	wholeMenu["Alternative"] = {};
	wholeMenu["Alternative"].id = "7_7_1";
	wholeMenu["Alternative"].color = "black";
	wholeMenu["Alternative"].hasSub = 0;
	wholeMenu["Alternative"].link = "music_metal_alternative_eng.html";
	wholeMenu["Alternative"].html = 'Alternative <font color="crimson"><sup>&#191; Inadequate &#191;</sup></font>';

	wholeMenu["Black"] = {};
	wholeMenu["Black"].id = "7_7_2";
	wholeMenu["Black"].color = "black";
	wholeMenu["Black"].hasSub = 0;
	wholeMenu["Black"].link = "music_metal_black_eng.html";
	wholeMenu["Black"].html = 'Black';

	wholeMenu["Death"] = {};
	wholeMenu["Death"].id = "7_7_3";
	wholeMenu["Death"].color = "black";
	wholeMenu["Death"].hasSub = 0;
	wholeMenu["Death"].link = "music_metal_death_eng.html";
	wholeMenu["Death"].html = 'Death <font color="blueviolet"><sup>&#9996; Fresh &#9996;</sup></font>';

	wholeMenu["Gothic"] = {};
	wholeMenu["Gothic"].id = "7_7_4";
	wholeMenu["Gothic"].color = "black";
	wholeMenu["Gothic"].hasSub = 0;
	wholeMenu["Gothic"].link = "music_metal_gothic_eng.html";
	wholeMenu["Gothic"].html = 'Gothic <font color="orangered"><sup>&nwnear; Real &nwnear;</sup></font>';

	wholeMenu["Power"] = {};
	wholeMenu["Power"].id = "7_7_5";
	wholeMenu["Power"].color = "black";
	wholeMenu["Power"].hasSub = 0;
	wholeMenu["Power"].link = "music_metal_power_eng.html";
	wholeMenu["Power"].html = 'Power';

	wholeMenu["Symphonic"] = {};
	wholeMenu["Symphonic"].id = "7_7_6";
	wholeMenu["Symphonic"].color = "black";
	wholeMenu["Symphonic"].hasSub = 0;
	wholeMenu["Symphonic"].link = "music_metal_symphonic_eng.html";
	wholeMenu["Symphonic"].html = 'Symphonic';

	wholeMenu["Pop"] = {};
	wholeMenu["Pop"].id = "7_9";
	wholeMenu["Pop"].color = "black";
	wholeMenu["Pop"].hasSub = 0;
	wholeMenu["Pop"].link = "music_pop_eng.html";
	wholeMenu["Pop"].html = 'Pop';

	wholeMenu["● Psychedelic"] = {};
	wholeMenu["● Psychedelic"].id = "7_10";
	wholeMenu["● Psychedelic"].color = "black";
	wholeMenu["● Psychedelic"].hasSub = 1;
	wholeMenu["● Psychedelic"].link = "";
	wholeMenu["● Psychedelic"].html = '&#9679; Psychedelic';

	wholeMenu["pRock"] = {};
	wholeMenu["pRock"].id = "7_10_1";
	wholeMenu["pRock"].color = "black";
	wholeMenu["pRock"].hasSub = 0;
	wholeMenu["pRock"].link = "music_psychedelic_rock_eng.html";
	wholeMenu["pRock"].html = 'Rock';

	wholeMenu["Trance"] = {};
	wholeMenu["Trance"].id = "7_10_2";
	wholeMenu["Trance"].color = "black";
	wholeMenu["Trance"].hasSub = 0;
	wholeMenu["Trance"].link = "music_psychedelic_trance_eng.html";
	wholeMenu["Trance"].html = 'Trance';

	wholeMenu["● Punk ☥ Vampiric ☥"] = {};
	wholeMenu["● Punk ☥ Vampiric ☥"].id = "7_11";
	wholeMenu["● Punk ☥ Vampiric ☥"].color = "black";
	wholeMenu["● Punk ☥ Vampiric ☥"].hasSub = 1;
	wholeMenu["● Punk ☥ Vampiric ☥"].link = "";
	wholeMenu["● Punk ☥ Vampiric ☥"].html = '&#9679; Punk <font color="purple"><sup>&#9765; Vampiric &#9765;</sup></font>';

	wholeMenu["Horror Punk"] = {};
	wholeMenu["Horror Punk"].id = "7_11_4";
	wholeMenu["Horror Punk"].color = "black";
	wholeMenu["Horror Punk"].hasSub = 0;
	wholeMenu["Horror Punk"].link = "music_punk_horror_eng.html";
	wholeMenu["Horror Punk"].html = 'Horror Punk';

	wholeMenu["Pop Punk"] = {};
	wholeMenu["Pop Punk"].id = "7_11_1";
	wholeMenu["Pop Punk"].color = "black";
	wholeMenu["Pop Punk"].hasSub = 0;
	wholeMenu["Pop Punk"].link = "music_punk_pop_eng.html";
	wholeMenu["Pop Punk"].html = 'Pop Punk';

	wholeMenu["Punk Rock"] = {};
	wholeMenu["Punk Rock"].id = "7_11_2";
	wholeMenu["Punk Rock"].color = "black";
	wholeMenu["Punk Rock"].hasSub = 0;
	wholeMenu["Punk Rock"].link = "music_punk_rock_eng.html";
	wholeMenu["Punk Rock"].html = 'Punk Rock';

	wholeMenu["Ska Punk"] = {};
	wholeMenu["Ska Punk"].id = "7_11_3";
	wholeMenu["Ska Punk"].color = "black";
	wholeMenu["Ska Punk"].hasSub = 0;
	wholeMenu["Ska Punk"].link = "music_punk_ska_eng.html";
	wholeMenu["Ska Punk"].html = 'Ska Punk <font color="purple"><sup>&#9765; Vampiric &#9765;</sup></font>';

	wholeMenu["Rap"] = {};
	wholeMenu["Rap"].id = "7_12";
	wholeMenu["Rap"].color = "black";
	wholeMenu["Rap"].hasSub = 0;
	wholeMenu["Rap"].link = "music_rap_eng.html";
	wholeMenu["Rap"].html = 'Rap <font color="dodgerblue"><sup>&sung; Simple &sung;</sup></font>';

	wholeMenu["Reggae"] = {};
	wholeMenu["Reggae"].id = "7_13";
	wholeMenu["Reggae"].color = "black";
	wholeMenu["Reggae"].hasSub = 0;
	wholeMenu["Reggae"].link = "music_reggae_eng.html";
	wholeMenu["Reggae"].html = 'Reggae';

	wholeMenu["Rock"] = {};
	wholeMenu["Rock"].id = "7_14";
	wholeMenu["Rock"].color = "black";
	wholeMenu["Rock"].hasSub = 0;
	wholeMenu["Rock"].link = "music_rock_eng.html";
	wholeMenu["Rock"].html = 'Rock <font color="cornflowerblue"><sup>&#9925; Cool &#9925;</sup></font>';

}

if (lang=="rus") {

	wholeMenu["● Музыка ☥ Vampiric ☥"] = {};
	wholeMenu["● Музыка ☥ Vampiric ☥"].id = "7";
	wholeMenu["● Музыка ☥ Vampiric ☥"].color = "black";
	wholeMenu["● Музыка ☥ Vampiric ☥"].hasSub = 1;
	wholeMenu["● Музыка ☥ Vampiric ☥"].link = "";
	wholeMenu["● Музыка ☥ Vampiric ☥"].html = '&#9679; Музыка <font color="purple"><sup>&#9765; Vampiric &#9765;</sup></font>';

	wholeMenu["Шансон"] = {};
	wholeMenu["Шансон"].id = "7_1";
	wholeMenu["Шансон"].color = "black";
	wholeMenu["Шансон"].hasSub = 0;
	wholeMenu["Шансон"].link = "music_chanson_rus.html";
	wholeMenu["Шансон"].html = 'Шансон <font color="purple"><sup>&#9765; Vampiric &#9765;</sup></font>';


	wholeMenu["Кантри"] = {};
	wholeMenu["Кантри"].id = "7_3";
	wholeMenu["Кантри"].color = "black";
	wholeMenu["Кантри"].hasSub = 0;
	wholeMenu["Кантри"].link = "music_country_rus.html";
	wholeMenu["Кантри"].html = 'Кантри <font color="mediumseagreen"><sup>&circlearrowright; Minimalistic &circlearrowleft;</sup></font>';


	wholeMenu["Диско"] = {};
	wholeMenu["Диско"].id = "7_4";
	wholeMenu["Диско"].color = "black";
	wholeMenu["Диско"].hasSub = 0;
	wholeMenu["Диско"].link = "music_disco_rus.html";
	wholeMenu["Диско"].html = 'Диско';

	wholeMenu["● Электронная"] = {};
	wholeMenu["● Электронная"].id = "7_5";
	wholeMenu["● Электронная"].color = "black";
	wholeMenu["● Электронная"].hasSub = 1;
	wholeMenu["● Электронная"].link = "";
	wholeMenu["● Электронная"].html = '&#9679; Электронная';

	wholeMenu["● Электронная/ый"] = {};
	wholeMenu["● Электронная/ый"].id = "7_5";
	wholeMenu["● Электронная/ый"].color = "black";
	wholeMenu["● Электронная/ый"].hasSub = 1;
	wholeMenu["● Электронная/ый"].link = "";
	wholeMenu["● Электронная/ый"].html = '&#9679; Электронная/ый';

	wholeMenu["Body (EBM)"] = {};
	wholeMenu["Body (EBM)"].id = "7_5_1";
	wholeMenu["Body (EBM)"].color = "black";
	wholeMenu["Body (EBM)"].hasSub = 0;
	wholeMenu["Body (EBM)"].link = "music_electronic_body_rus.html";
	wholeMenu["Body (EBM)"].html = 'Body (EBM)';

	wholeMenu["Танцевальная (EDM)"] = {};
	wholeMenu["Танцевальная (EDM)"].id = "7_5_2";
	wholeMenu["Танцевальная (EDM)"].color = "black";
	wholeMenu["Танцевальная (EDM)"].hasSub = 0;
	wholeMenu["Танцевальная (EDM)"].link = "music_electronic_dance_rus.html";
	wholeMenu["Танцевальная (EDM)"].html = 'Танцевальная (EDM)';

	wholeMenu["эРок"] = {};
	wholeMenu["эРок"].id = "7_5_3";
	wholeMenu["эРок"].color = "black";
	wholeMenu["эРок"].hasSub = 0;
	wholeMenu["эРок"].link = "music_electronic_rock_rus.html";
	wholeMenu["эРок"].html = 'Рок';

	wholeMenu["Синтвейв"] = {};
	wholeMenu["Синтвейв"].id = "7_5_4";
	wholeMenu["Синтвейв"].color = "black";
	wholeMenu["Синтвейв"].hasSub = 0;
	wholeMenu["Синтвейв"].link = "music_electronic_synthwave_rus.html";
	wholeMenu["Синтвейв"].html = 'Синтвейв';


	wholeMenu["● Индастриал"] = {};
	wholeMenu["● Индастриал"].id = "7_6";
	wholeMenu["● Индастриал"].color = "black";
	wholeMenu["● Индастриал"].hasSub = 1;
	wholeMenu["● Индастриал"].link = "";
	wholeMenu["● Индастриал"].html = '&#9679; Индастриал';

	wholeMenu["Электро-"] = {};
	wholeMenu["Электро-"].id = "7_6_1";
	wholeMenu["Электро-"].color = "black";
	wholeMenu["Электро-"].hasSub = 0;
	wholeMenu["Электро-"].link = "music_industrial_electro_rus.html";
	wholeMenu["Электро-"].html = 'Электро-';

	wholeMenu["иМетал"] = {};
	wholeMenu["иМетал"].id = "7_6_2";
	wholeMenu["иМетал"].color = "black";
	wholeMenu["иМетал"].hasSub = 0;
	wholeMenu["иМетал"].link = "music_industrial_metal_rus.html";
	wholeMenu["иМетал"].html = 'Метал';

	wholeMenu["иРок"] = {};
	wholeMenu["иРок"].id = "7_6_3";
	wholeMenu["иРок"].color = "black";
	wholeMenu["иРок"].hasSub = 0;
	wholeMenu["иРок"].link = "music_industrial_rock_rus.html";
	wholeMenu["иРок"].html = 'Рок';

	wholeMenu["● Метал ⤧ Real ⤧"] = {};
	wholeMenu["● Метал ⤧ Real ⤧"].id = "7_7";
	wholeMenu["● Метал ⤧ Real ⤧"].color = "black";
	wholeMenu["● Метал ⤧ Real ⤧"].hasSub = 1;
	wholeMenu["● Метал ⤧ Real ⤧"].link = "";
	wholeMenu["● Метал ⤧ Real ⤧"].html = '&#9679; Метал <font color="orangered"><sup>&nwnear; Real &nwnear;</sup>';

	wholeMenu["Альтернативный"] = {};
	wholeMenu["Альтернативный"].id = "7_7_1";
	wholeMenu["Альтернативный"].color = "black";
	wholeMenu["Альтернативный"].hasSub = 0;
	wholeMenu["Альтернативный"].link = "music_metal_alternative_rus.html";
	wholeMenu["Альтернативный"].html = 'Альтернативный <font color="crimson"><sup>&#191; Inadequate &#191;</sup></font>';

	wholeMenu["Блэк-"] = {};
	wholeMenu["Блэк-"].id = "7_7_2";
	wholeMenu["Блэк-"].color = "black";
	wholeMenu["Блэк-"].hasSub = 0;
	wholeMenu["Блэк-"].link = "music_metal_black_rus.html";
	wholeMenu["Блэк-"].html = 'Блэк-';

	wholeMenu["Дэт-"] = {};
	wholeMenu["Дэт-"].id = "7_7_3";
	wholeMenu["Дэт-"].color = "black";
	wholeMenu["Дэт-"].hasSub = 0;
	wholeMenu["Дэт-"].link = "music_metal_death_rus.html";
	wholeMenu["Дэт-"].html = 'Дэт- <font color="blueviolet"><sup>&#9996; Fresh &#9996;</sup></font>';

	wholeMenu["Готик-"] = {};
	wholeMenu["Готик-"].id = "7_7_4";
	wholeMenu["Готик-"].color = "black";
	wholeMenu["Готик-"].hasSub = 0;
	wholeMenu["Готик-"].link = "music_metal_gothic_rus.html";
	wholeMenu["Готик-"].html = 'Готик- <font color="orangered"><sup>&nwnear; Real &nwnear;</sup></font>';

	wholeMenu["Пауэр-"] = {};
	wholeMenu["Пауэр-"].id = "7_7_5";
	wholeMenu["Пауэр-"].color = "black";
	wholeMenu["Пауэр-"].hasSub = 0;
	wholeMenu["Пауэр-"].link = "music_metal_power_rus.html";
	wholeMenu["Пауэр-"].html = 'Пауэр-';

	wholeMenu["Симфоник-"] = {};
	wholeMenu["Симфоник-"].id = "7_7_6";
	wholeMenu["Симфоник-"].color = "black";
	wholeMenu["Симфоник-"].hasSub = 0;
	wholeMenu["Симфоник-"].link = "music_metal_symphonic_rus.html";
	wholeMenu["Симфоник-"].html = 'Симфоник-';

	wholeMenu["Поп"] = {};
	wholeMenu["Поп"].id = "7_9";
	wholeMenu["Поп"].color = "black";
	wholeMenu["Поп"].hasSub = 0;
	wholeMenu["Поп"].link = "music_pop_rus.html";
	wholeMenu["Поп"].html = 'Поп';

	wholeMenu["● Психоделическая"] = {};
	wholeMenu["● Психоделическая"].id = "7_10";
	wholeMenu["● Психоделическая"].color = "black";
	wholeMenu["● Психоделическая"].hasSub = 1;
	wholeMenu["● Психоделическая"].link = "";
	wholeMenu["● Психоделическая"].html = '&#9679; Психоделическая';

	wholeMenu["● Психоделическая/ий"] = {};
	wholeMenu["● Психоделическая/ий"].id = "7_10";
	wholeMenu["● Психоделическая/ий"].color = "black";
	wholeMenu["● Психоделическая/ий"].hasSub = 1;
	wholeMenu["● Психоделическая/ий"].link = "";
	wholeMenu["● Психоделическая/ий"].html = '&#9679; Психоделическая/ий';

	wholeMenu["пРок"] = {};
	wholeMenu["пРок"].id = "7_10_1";
	wholeMenu["пРок"].color = "black";
	wholeMenu["пРок"].hasSub = 0;
	wholeMenu["пРок"].link = "music_psychedelic_rock_rus.html";
	wholeMenu["пРок"].html = 'Рок';

	wholeMenu["Транс"] = {};
	wholeMenu["Транс"].id = "7_10_2";
	wholeMenu["Транс"].color = "black";
	wholeMenu["Транс"].hasSub = 0;
	wholeMenu["Транс"].link = "music_psychedelic_trance_rus.html";
	wholeMenu["Транс"].html = 'Транс';

	wholeMenu["● Панк ☥ Vampiric ☥"] = {};
	wholeMenu["● Панк ☥ Vampiric ☥"].id = "7_11";
	wholeMenu["● Панк ☥ Vampiric ☥"].color = "black";
	wholeMenu["● Панк ☥ Vampiric ☥"].hasSub = 1;
	wholeMenu["● Панк ☥ Vampiric ☥"].link = "";
	wholeMenu["● Панк ☥ Vampiric ☥"].html = '&#9679; Панк <font color="purple"><sup>&#9765; Vampiric &#9765;</sup></font>';

	wholeMenu["Хоррор-Панк"] = {};
	wholeMenu["Хоррор-Панк"].id = "7_11_4";
	wholeMenu["Хоррор-Панк"].color = "black";
	wholeMenu["Хоррор-Панк"].hasSub = 0;
	wholeMenu["Хоррор-Панк"].link = "music_punk_horror_rus.html";
	wholeMenu["Хоррор-Панк"].html = 'Хоррор-Панк';

	wholeMenu["Поп-Панк"] = {};
	wholeMenu["Поп-Панк"].id = "7_11_1";
	wholeMenu["Поп-Панк"].color = "black";
	wholeMenu["Поп-Панк"].hasSub = 0;
	wholeMenu["Поп-Панк"].link = "music_punk_pop_rus.html";
	wholeMenu["Поп-Панк"].html = 'Поп-Панк';

	wholeMenu["Панк-Рок"] = {};
	wholeMenu["Панк-Рок"].id = "7_11_2";
	wholeMenu["Панк-Рок"].color = "black";
	wholeMenu["Панк-Рок"].hasSub = 0;
	wholeMenu["Панк-Рок"].link = "music_punk_rock_rus.html";
	wholeMenu["Панк-Рок"].html = 'Панк-Рок';

	wholeMenu["Ска-Панк"] = {};
	wholeMenu["Ска-Панк"].id = "7_11_3";
	wholeMenu["Ска-Панк"].color = "black";
	wholeMenu["Ска-Панк"].hasSub = 0;
	wholeMenu["Ска-Панк"].link = "music_punk_ska_rus.html";
	wholeMenu["Ска-Панк"].html = 'Ска-Панк <font color="purple"><sup>&#9765; Vampiric &#9765;</sup></font>';

	wholeMenu["Рэп"] = {};
	wholeMenu["Рэп"].id = "7_12";
	wholeMenu["Рэп"].color = "black";
	wholeMenu["Рэп"].hasSub = 0;
	wholeMenu["Рэп"].link = "music_rap_rus.html";
	wholeMenu["Рэп"].html = 'Рэп <font color="dodgerblue"><sup>&sung; Simple &sung;</sup></font>';

	wholeMenu["Регги"] = {};
	wholeMenu["Регги"].id = "7_13";
	wholeMenu["Регги"].color = "black";
	wholeMenu["Регги"].hasSub = 0;
	wholeMenu["Регги"].link = "music_reggae_rus.html";
	wholeMenu["Регги"].html = 'Регги';

	wholeMenu["Рок-музыка"] = {};
	wholeMenu["Рок-музыка"].id = "7_14";
	wholeMenu["Рок-музыка"].color = "black";
	wholeMenu["Рок-музыка"].hasSub = 0;
	wholeMenu["Рок-музыка"].link = "music_rock_rus.html";
	wholeMenu["Рок-музыка"].html = 'Рок-музыка <font color="cornflowerblue"><sup>&#9925; Cool &#9925;</sup></font>';


}


return wholeMenu;
}


function  loadMenuMovies(lang) {


var wholeMenu = {};

if (lang=="eng") {

	wholeMenu["● Movies 💎 Unique 💎"] = {};
	wholeMenu["● Movies 💎 Unique 💎"].id = "8";
	wholeMenu["● Movies 💎 Unique 💎"].color = "black";
	wholeMenu["● Movies 💎 Unique 💎"].hasSub = 1;
	wholeMenu["● Movies 💎 Unique 💎"].link = "";
	wholeMenu["● Movies 💎 Unique 💎"].html = '&#9679; Movies <font color="DodgerBlue"><sup>&#128142; Unique &#128142;</sup></font>';

	wholeMenu["● By Actors 💎 Unique 💎"] = {};
	wholeMenu["● By Actors 💎 Unique 💎"].id = "8_1";
	wholeMenu["● By Actors 💎 Unique 💎"].color = "black";
	wholeMenu["● By Actors 💎 Unique 💎"].hasSub = 1;
	wholeMenu["● By Actors 💎 Unique 💎"].link = "";
	wholeMenu["● By Actors 💎 Unique 💎"].html = '&#9679; By Actors <font color="DodgerBlue"><sup>&#128142; Unique &#128142;</sup></font>';

	wholeMenu["Dave Bautista"] = {};
	wholeMenu["Dave Bautista"].id = "8_1_4";
	wholeMenu["Dave Bautista"].color = "black";
	wholeMenu["Dave Bautista"].hasSub = 0;
	wholeMenu["Dave Bautista"].link = "movies_actor_bautista_eng.html";
	wholeMenu["Dave Bautista"].html = 'Dave Bautista';

	wholeMenu["Vin Diesel"] = {};
	wholeMenu["Vin Diesel"].id = "8_1_4";
	wholeMenu["Vin Diesel"].color = "black";
	wholeMenu["Vin Diesel"].hasSub = 0;
	wholeMenu["Vin Diesel"].link = "movies_actor_diesel_eng.html";
	wholeMenu["Vin Diesel"].html = 'Vin Diesel';

	wholeMenu["Michael Douglas"] = {};
	wholeMenu["Michael Douglas"].id = "8_1_5";
	wholeMenu["Michael Douglas"].color = "black";
	wholeMenu["Michael Douglas"].hasSub = 0;
	wholeMenu["Michael Douglas"].link = "movies_actor_douglas_eng.html";
	wholeMenu["Michael Douglas"].html = 'Michael Douglas';

	wholeMenu["Milla Jovovich"] = {};
	wholeMenu["Milla Jovovich"].id = "8_1_9";
	wholeMenu["Milla Jovovich"].color = "black";
	wholeMenu["Milla Jovovich"].hasSub = 0;
	wholeMenu["Milla Jovovich"].link = "movies_actor_jovovich_eng.html";
	wholeMenu["Milla Jovovich"].html = 'Milla Jovovich';

	wholeMenu["Arnold Schwarzenegger"] = {};
	wholeMenu["Arnold Schwarzenegger"].id = "8_1_14";
	wholeMenu["Arnold Schwarzenegger"].color = "black";
	wholeMenu["Arnold Schwarzenegger"].hasSub = 0;
	wholeMenu["Arnold Schwarzenegger"].link = "movies_actor_schwarzenegger_eng.html";
	wholeMenu["Arnold Schwarzenegger"].html = 'Arnold Schwarzenegger';

	wholeMenu["Sylvester Stallone"] = {};
	wholeMenu["Sylvester Stallone"].id = "8_1_15";
	wholeMenu["Sylvester Stallone"].color = "black";
	wholeMenu["Sylvester Stallone"].hasSub = 0;
	wholeMenu["Sylvester Stallone"].link = "movies_actor_stallone_eng.html";
	wholeMenu["Sylvester Stallone"].html = 'Sylvester Stallone';

	wholeMenu["Jason Statham 💎 Unique 💎"] = {};
	wholeMenu["Jason Statham 💎 Unique 💎"].id = "8_1_16";
	wholeMenu["Jason Statham 💎 Unique 💎"].color = "black";
	wholeMenu["Jason Statham 💎 Unique 💎"].hasSub = 0;
	wholeMenu["Jason Statham 💎 Unique 💎"].link = "movies_actor_statham_eng.html";
	wholeMenu["Jason Statham 💎 Unique 💎"].html = 'Jason Statham <font color="DodgerBlue"><sup>&#128142; Unique &#128142;</sup></font>';

	wholeMenu["Bruce Willis"] = {};
	wholeMenu["Bruce Willis"].id = "8_1_18";
	wholeMenu["Bruce Willis"].color = "black";
	wholeMenu["Bruce Willis"].hasSub = 0;
	wholeMenu["Bruce Willis"].link = "movies_actor_willis_eng.html";
	wholeMenu["Bruce Willis"].html = 'Bruce Willis';

	wholeMenu["● By Genre"] = {};
	wholeMenu["● By Genre"].id = "8_2";
	wholeMenu["● By Genre"].color = "black";
	wholeMenu["● By Genre"].hasSub = 1;
	wholeMenu["● By Genre"].link = "";
	wholeMenu["● By Genre"].html = '&#9679; By Genre';

	wholeMenu["Action Horror"] = {};
	wholeMenu["Action Horror"].id = "8_2_1";
	wholeMenu["Action Horror"].color = "black";
	wholeMenu["Action Horror"].hasSub = 0;
	wholeMenu["Action Horror"].link = "movies_genre_action_horror_eng.html";
	wholeMenu["Action Horror"].html = 'Action Horror';

	wholeMenu["Body Horror"] = {};
	wholeMenu["Body Horror"].id = "8_2_3";
	wholeMenu["Body Horror"].color = "black";
	wholeMenu["Body Horror"].hasSub = 0;
	wholeMenu["Body Horror"].link = "movies_genre_body_horror_eng.html";
	wholeMenu["Body Horror"].html = 'Body Horror';

	wholeMenu["Dystopia"] = {};
	wholeMenu["Dystopia"].id = "8_2_4";
	wholeMenu["Dystopia"].color = "black";
	wholeMenu["Dystopia"].hasSub = 0;
	wholeMenu["Dystopia"].link = "movies_genre_dystopia_eng.html";
	wholeMenu["Dystopia"].html = 'Dystopia';

	wholeMenu["Post-Apocalyptic"] = {};
	wholeMenu["Post-Apocalyptic"].id = "8_2_7";
	wholeMenu["Post-Apocalyptic"].color = "black";
	wholeMenu["Post-Apocalyptic"].hasSub = 0;
	wholeMenu["Post-Apocalyptic"].link = "movies_genre_post_apocalyptic_eng.html";
	wholeMenu["Post-Apocalyptic"].html = 'Post-Apocalyptic';

	wholeMenu["Short"] = {};
	wholeMenu["Short"].id = "8_2_9";
	wholeMenu["Short"].color = "black";
	wholeMenu["Short"].hasSub = 0;
	wholeMenu["Short"].link = "movies_genre_short_eng.html";
	wholeMenu["Short"].html = 'Short';

	wholeMenu["Situation Comedy"] = {};
	wholeMenu["Situation Comedy"].id = "8_2_10";
	wholeMenu["Situation Comedy"].color = "black";
	wholeMenu["Situation Comedy"].hasSub = 0;
	wholeMenu["Situation Comedy"].link = "movies_genre_sitcom_eng.html";
	wholeMenu["Situation Comedy"].html = 'Situation Comedy';

	wholeMenu["Space Opera"] = {};
	wholeMenu["Space Opera"].id = "8_2_11";
	wholeMenu["Space Opera"].color = "black";
	wholeMenu["Space Opera"].hasSub = 0;
	wholeMenu["Space Opera"].link = "movies_genre_space_opera_eng.html";
	wholeMenu["Space Opera"].html = 'Space Opera';

	wholeMenu["● Animation"] = {};
	wholeMenu["● Animation"].id = "8_3";
	wholeMenu["● Animation"].color = "black";
	wholeMenu["● Animation"].hasSub = 1;
	wholeMenu["● Animation"].link = "";
	wholeMenu["● Animation"].html = '&#9679; Animation';

	wholeMenu["For Adults"] = {};
	wholeMenu["For Adults"].id = "8_3_1";
	wholeMenu["For Adults"].color = "black";
	wholeMenu["For Adults"].hasSub = 0;
	wholeMenu["For Adults"].link = "movies_animation_for_adults_eng.html";
	wholeMenu["For Adults"].html = 'For Adults';

	wholeMenu["For Children"] = {};
	wholeMenu["For Children"].id = "8_3_2";
	wholeMenu["For Children"].color = "black";
	wholeMenu["For Children"].hasSub = 0;
	wholeMenu["For Children"].link = "movies_animation_for_children_eng.html";
	wholeMenu["For Children"].html = 'For Children';


	wholeMenu["DC Universe Animated Movies"] = {};
	wholeMenu["DC Universe Animated Movies"].id = "8_3_4";
	wholeMenu["DC Universe Animated Movies"].color = "black";
	wholeMenu["DC Universe Animated Movies"].hasSub = 0;
	wholeMenu["DC Universe Animated Movies"].link = "movies_animation_dc_animated_movies_eng.html";
	wholeMenu["DC Universe Animated Movies"].html = 'DC Universe Animated Original Movies';

	wholeMenu["● Superhero"] = {};
	wholeMenu["● Superhero"].id = "8_5";
	wholeMenu["● Superhero"].color = "black";
	wholeMenu["● Superhero"].hasSub = 1;
	wholeMenu["● Superhero"].link = "";
	wholeMenu["● Superhero"].html = '&#9679; Superhero';

	wholeMenu["DC Extended Universe"] = {};
	wholeMenu["DC Extended Universe"].id = "8_5_1";
	wholeMenu["DC Extended Universe"].color = "black";
	wholeMenu["DC Extended Universe"].hasSub = 0;
	wholeMenu["DC Extended Universe"].link = "movies_superhero_dc_eng.html";
	wholeMenu["DC Extended Universe"].html = 'DC Extended Universe';

	wholeMenu["Marvel Cinematic Universe"] = {};
	wholeMenu["Marvel Cinematic Universe"].id = "8_5_2";
	wholeMenu["Marvel Cinematic Universe"].color = "black";
	wholeMenu["Marvel Cinematic Universe"].hasSub = 0;
	wholeMenu["Marvel Cinematic Universe"].link = "movies_superhero_marvel_eng.html";
	wholeMenu["Marvel Cinematic Universe"].html = 'Marvel Cinematic Universe';

	wholeMenu["Other"] = {};
	wholeMenu["Other"].id = "8_5_3";
	wholeMenu["Other"].color = "black";
	wholeMenu["Other"].hasSub = 0;
	wholeMenu["Other"].link = "movies_superhero_other_eng.html";
	wholeMenu["Other"].html = 'Other';

}


if (lang=="rus") {
	wholeMenu["● Фильмы 💎 Unique 💎"] = {};
	wholeMenu["● Фильмы 💎 Unique 💎"].id = "8";
	wholeMenu["● Фильмы 💎 Unique 💎"].color = "black";
	wholeMenu["● Фильмы 💎 Unique 💎"].hasSub = 1;
	wholeMenu["● Фильмы 💎 Unique 💎"].link = "";
	wholeMenu["● Фильмы 💎 Unique 💎"].html = '&#9679; Фильмы <font color="DodgerBlue"><sup>&#128142; Unique &#128142;</sup></font>';

	wholeMenu["● По Актёрам 💎 Unique 💎"] = {};
	wholeMenu["● По Актёрам 💎 Unique 💎"].id = "8_1";
	wholeMenu["● По Актёрам 💎 Unique 💎"].color = "black";
	wholeMenu["● По Актёрам 💎 Unique 💎"].hasSub = 1;
	wholeMenu["● По Актёрам 💎 Unique 💎"].link = "";
	wholeMenu["● По Актёрам 💎 Unique 💎"].html = '&#9679; По Актёрам <font color="DodgerBlue"><sup>&#128142; Unique &#128142;</sup></font>';

	wholeMenu["Дейв Батиста"] = {};
	wholeMenu["Дейв Батиста"].id = "8_1_4";
	wholeMenu["Дейв Батиста"].color = "black";
	wholeMenu["Дейв Батиста"].hasSub = 0;
	wholeMenu["Дейв Батиста"].link = "movies_actor_bautista_rus.html";
	wholeMenu["Дейв Батиста"].html = 'Дейв Батиста';

	wholeMenu["Вин Дизель"] = {};
	wholeMenu["Вин Дизель"].id = "8_1_4";
	wholeMenu["Вин Дизель"].color = "black";
	wholeMenu["Вин Дизель"].hasSub = 0;
	wholeMenu["Вин Дизель"].link = "movies_actor_diesel_rus.html";
	wholeMenu["Вин Дизель"].html = 'Вин Дизель';

	wholeMenu["Майкл Дуглас"] = {};
	wholeMenu["Майкл Дуглас"].id = "8_1_5";
	wholeMenu["Майкл Дуглас"].color = "black";
	wholeMenu["Майкл Дуглас"].hasSub = 0;
	wholeMenu["Майкл Дуглас"].link = "movies_actor_douglas_rus.html";
	wholeMenu["Майкл Дуглас"].html = 'Майкл Дуглас';

	wholeMenu["Милла Йовович"] = {};
	wholeMenu["Милла Йовович"].id = "8_1_9";
	wholeMenu["Милла Йовович"].color = "black";
	wholeMenu["Милла Йовович"].hasSub = 0;
	wholeMenu["Милла Йовович"].link = "movies_actor_jovovich_rus.html";
	wholeMenu["Милла Йовович"].html = 'Милла Йовович';

	wholeMenu["Арнольд Шварценеггер"] = {};
	wholeMenu["Арнольд Шварценеггер"].id = "8_1_14";
	wholeMenu["Арнольд Шварценеггер"].color = "black";
	wholeMenu["Арнольд Шварценеггер"].hasSub = 0;
	wholeMenu["Арнольд Шварценеггер"].link = "movies_actor_schwarzenegger_rus.html";
	wholeMenu["Арнольд Шварценеггер"].html = 'Арнольд Шварценеггер';

	wholeMenu["Сильвестер Сталлоне"] = {};
	wholeMenu["Сильвестер Сталлоне"].id = "8_1_15";
	wholeMenu["Сильвестер Сталлоне"].color = "black";
	wholeMenu["Сильвестер Сталлоне"].hasSub = 0;
	wholeMenu["Сильвестер Сталлоне"].link = "movies_actor_stallone_rus.html";
	wholeMenu["Сильвестер Сталлоне"].html = 'Сильвестер Сталлоне';

	wholeMenu["Джейсон Стейтем 💎 Unique 💎"] = {};
	wholeMenu["Джейсон Стейтем 💎 Unique 💎"].id = "8_1_16";
	wholeMenu["Джейсон Стейтем 💎 Unique 💎"].color = "black";
	wholeMenu["Джейсон Стейтем 💎 Unique 💎"].hasSub = 0;
	wholeMenu["Джейсон Стейтем 💎 Unique 💎"].link = "movies_actor_statham_rus.html";
	wholeMenu["Джейсон Стейтем 💎 Unique 💎"].html = 'Джейсон Стейтем <font color="DodgerBlue"><sup>&#128142; Unique &#128142;</sup></font>';

	wholeMenu["Брюс Уиллис"] = {};
	wholeMenu["Брюс Уиллис"].id = "8_1_18";
	wholeMenu["Брюс Уиллис"].color = "black";
	wholeMenu["Брюс Уиллис"].hasSub = 0;
	wholeMenu["Брюс Уиллис"].link = "movies_actor_willis_rus.html";
	wholeMenu["Брюс Уиллис"].html = 'Брюс Уиллис';

	wholeMenu["● По Жанрам"] = {};
	wholeMenu["● По Жанрам"].id = "8_2";
	wholeMenu["● По Жанрам"].color = "black";
	wholeMenu["● По Жанрам"].hasSub = 1;
	wholeMenu["● По Жанрам"].link = "";
	wholeMenu["● По Жанрам"].html = '&#9679; По Жанрам';

	wholeMenu["Экшн-Хоррор"] = {};
	wholeMenu["Экшн-Хоррор"].id = "8_2_1";
	wholeMenu["Экшн-Хоррор"].color = "black";
	wholeMenu["Экшн-Хоррор"].hasSub = 0;
	wholeMenu["Экшн-Хоррор"].link = "movies_genre_action_horror_rus.html";
	wholeMenu["Экшн-Хоррор"].html = 'Экшн-Хоррор';

	wholeMenu["Боди-Хоррор"] = {};
	wholeMenu["Боди-Хоррор"].id = "8_2_3";
	wholeMenu["Боди-Хоррор"].color = "black";
	wholeMenu["Боди-Хоррор"].hasSub = 0;
	wholeMenu["Боди-Хоррор"].link = "movies_genre_body_horror_rus.html";
	wholeMenu["Боди-Хоррор"].html = 'Боди-Хоррор';

	wholeMenu["Антиутопия"] = {};
	wholeMenu["Антиутопия"].id = "8_2_4";
	wholeMenu["Антиутопия"].color = "black";
	wholeMenu["Антиутопия"].hasSub = 0;
	wholeMenu["Антиутопия"].link = "movies_genre_dystopia_rus.html";
	wholeMenu["Антиутопия"].html = 'Антиутопия';

	wholeMenu["Постапокалиптика"] = {};
	wholeMenu["Постапокалиптика"].id = "8_2_7";
	wholeMenu["Постапокалиптика"].color = "black";
	wholeMenu["Постапокалиптика"].hasSub = 0;
	wholeMenu["Постапокалиптика"].link = "movies_genre_post_apocalyptic_rus.html";
	wholeMenu["Постапокалиптика"].html = 'Постапокалиптика';

	wholeMenu["Короткометражные"] = {};
	wholeMenu["Короткометражные"].id = "8_2_9";
	wholeMenu["Короткометражные"].color = "black";
	wholeMenu["Короткометражные"].hasSub = 0;
	wholeMenu["Короткометражные"].link = "movies_genre_short_rus.html";
	wholeMenu["Короткометражные"].html = 'Короткометражные';

	wholeMenu["Ситуационная Комедия"] = {};
	wholeMenu["Ситуационная Комедия"].id = "8_2_10";
	wholeMenu["Ситуационная Комедия"].color = "black";
	wholeMenu["Ситуационная Комедия"].hasSub = 0;
	wholeMenu["Ситуационная Комедия"].link = "movies_genre_sitcom_rus.html";
	wholeMenu["Ситуационная Комедия"].html = 'Ситуационная Комедия';

	wholeMenu["Космическая Опера"] = {};
	wholeMenu["Космическая Опера"].id = "8_2_11";
	wholeMenu["Космическая Опера"].color = "black";
	wholeMenu["Космическая Опера"].hasSub = 0;
	wholeMenu["Космическая Опера"].link = "movies_genre_space_opera_rus.html";
	wholeMenu["Космическая Опера"].html = 'Космическая Опера';

	wholeMenu["● Мультипликация"] = {};
	wholeMenu["● Мультипликация"].id = "8_3";
	wholeMenu["● Мультипликация"].color = "black";
	wholeMenu["● Мультипликация"].hasSub = 1;
	wholeMenu["● Мультипликация"].link = "";
	wholeMenu["● Мультипликация"].html = '&#9679; Мультипликация';

	wholeMenu["Для Взрослых"] = {};
	wholeMenu["Для Взрослых"].id = "8_3_1";
	wholeMenu["Для Взрослых"].color = "black";
	wholeMenu["Для Взрослых"].hasSub = 0;
	wholeMenu["Для Взрослых"].link = "movies_animation_for_adults_rus.html";
	wholeMenu["Для Взрослых"].html = 'Для Взрослых';

	wholeMenu["Для Детей"] = {};
	wholeMenu["Для Детей"].id = "8_3_2";
	wholeMenu["Для Детей"].color = "black";
	wholeMenu["Для Детей"].hasSub = 0;
	wholeMenu["Для Детей"].link = "movies_animation_for_children_rus.html";
	wholeMenu["Для Детей"].html = 'For Детей';

	wholeMenu["Анимационные Фильмы DC"] = {};
	wholeMenu["Анимационные Фильмы DC"].id = "8_3_4";
	wholeMenu["Анимационные Фильмы DC"].color = "black";
	wholeMenu["Анимационные Фильмы DC"].hasSub = 0;
	wholeMenu["Анимационные Фильмы DC"].link = "movies_animation_dc_animated_movies_rus.html";
	wholeMenu["Анимационные Фильмы DC"].html = 'Оригинальные Анимационные Фильмы Вселенной DC';

	wholeMenu["● Супергеройские"] = {};
	wholeMenu["● Супергеройские"].id = "8_5";
	wholeMenu["● Супергеройские"].color = "black";
	wholeMenu["● Супергеройские"].hasSub = 1;
	wholeMenu["● Супергеройские"].link = "";
	wholeMenu["● Супергеройские"].html = '&#9679; Супергеройские';

	wholeMenu["Расширенная Вселенная DC'"] = {};
	wholeMenu["Расширенная Вселенная DC'"].id = "8_5_1";
	wholeMenu["Расширенная Вселенная DC'"].color = "black";
	wholeMenu["Расширенная Вселенная DC'"].hasSub = 0;
	wholeMenu["Расширенная Вселенная DC'"].link = "movies_superhero_dc_rus.html";
	wholeMenu["Расширенная Вселенная DC'"].html = 'Расширенная Вселенная DC';

	wholeMenu["Кинематографическая Вселенная Marvel"] = {};
	wholeMenu["Кинематографическая Вселенная Marvel"].id = "8_5_2";
	wholeMenu["Кинематографическая Вселенная Marvel"].color = "black";
	wholeMenu["Кинематографическая Вселенная Marvel"].hasSub = 0;
	wholeMenu["Кинематографическая Вселенная Marvel"].link = "movies_superhero_marvel_rus.html";
	wholeMenu["Кинематографическая Вселенная Marvel"].html = 'Кинематографическая Вселенная Marvel';

	wholeMenu["Другие"] = {};
	wholeMenu["Другие"].id = "8_5_3";
	wholeMenu["Другие"].color = "black";
	wholeMenu["Другие"].hasSub = 0;
	wholeMenu["Другие"].link = "movies_superhero_other_rus.html";
	wholeMenu["Другие"].html = 'Другие';



}

return wholeMenu;
}




function  loadMenuSeries(lang) {


var wholeMenu = {};

if (lang=="eng") {

	wholeMenu["● Series ⚘ Forbidden ⚘"] = {};
	wholeMenu["● Series ⚘ Forbidden ⚘"].id = "27";
	wholeMenu["● Series ⚘ Forbidden ⚘"].color = "black";
	wholeMenu["● Series ⚘ Forbidden ⚘"].hasSub = 1;
	wholeMenu["● Series ⚘ Forbidden ⚘"].link = "";
	wholeMenu["● Series ⚘ Forbidden ⚘"].html = "&#9679; Series <font color='MediumSlateBlue'><sup>&#9880; Forbidden &#9880;</sup></font>";


	wholeMenu["● By Genre ☢ Essential ☢"] = {};
	wholeMenu["● By Genre ☢ Essential ☢"].id = "27_1";
	wholeMenu["● By Genre ☢ Essential ☢"].color = "black";
	wholeMenu["● By Genre ☢ Essential ☢"].hasSub = 1;
	wholeMenu["● By Genre ☢ Essential ☢"].link = "";
	wholeMenu["● By Genre ☢ Essential ☢"].html = '&#9679; By Genre <font color="OrangeRed"><sup>&#9762; Essential &#9762;</sup></font>';


	wholeMenu["Body Horror"] = {};
	wholeMenu["Body Horror"].id = "27_1_1";
	wholeMenu["Body Horror"].color = "black";
	wholeMenu["Body Horror"].hasSub = 0;
	wholeMenu["Body Horror"].link = "series_body_horror_eng.html";
	wholeMenu["Body Horror"].html = 'Body Horror';

	wholeMenu["Fantasy"] = {};
	wholeMenu["Fantasy"].id = "27_1_2";
	wholeMenu["Fantasy"].color = "black";
	wholeMenu["Fantasy"].hasSub = 0;
	wholeMenu["Fantasy"].link = "series_fantasy_eng.html";
	wholeMenu["Fantasy"].html = 'Fantasy';

	wholeMenu["Historical Fiction"] = {};
	wholeMenu["Historical Fiction"].id = "27_1_3";
	wholeMenu["Historical Fiction"].color = "black";
	wholeMenu["Historical Fiction"].hasSub = 0;
	wholeMenu["Historical Fiction"].link = "series_historical_fiction_eng.html";
	wholeMenu["Historical Fiction"].html = 'Historical Fiction <font color="OrangeRed"><sup>&#9762; Essential &#9762;</sup></font>';

	wholeMenu["Space Opera"] = {};
	wholeMenu["Space Opera"].id = "27_1_4";
	wholeMenu["Space Opera"].color = "black";
	wholeMenu["Space Opera"].hasSub = 0;
	wholeMenu["Space Opera"].link = "series_space_opera_eng.html";
	wholeMenu["Space Opera"].html = 'Space Opera';

	wholeMenu["Supernatural"] = {};
	wholeMenu["Supernatural"].id = "27_1_5";
	wholeMenu["Supernatural"].color = "black";
	wholeMenu["Supernatural"].hasSub = 0;
	wholeMenu["Supernatural"].link = "series_supernatural_eng.html";
	wholeMenu["Supernatural"].html = 'Supernatural';

	wholeMenu["● Animation"] = {};
	wholeMenu["● Animation"].id = "27_2";
	wholeMenu["● Animation"].color = "black";
	wholeMenu["● Animation"].hasSub = 1;
	wholeMenu["● Animation"].link = "";
	wholeMenu["● Animation"].html = '&#9679; Animation';

	wholeMenu["For Adults"] = {};
	wholeMenu["For Adults"].id = "27_2_1";
	wholeMenu["For Adults"].color = "black";
	wholeMenu["For Adults"].hasSub = 0;
	wholeMenu["For Adults"].link = "series_animation_for_adults_eng.html";
	wholeMenu["For Adults"].html = 'For Adults';

	wholeMenu["For Children"] = {};
	wholeMenu["For Children"].id = "27_2_2";
	wholeMenu["For Children"].color = "black";
	wholeMenu["For Children"].hasSub = 0;
	wholeMenu["For Children"].link = "series_animation_for_children_eng.html";
	wholeMenu["For Children"].html = 'For Children';

	wholeMenu["● Superhero"] = {};
	wholeMenu["● Superhero"].id = "27_4";
	wholeMenu["● Superhero"].color = "black";
	wholeMenu["● Superhero"].hasSub = 1;
	wholeMenu["● Superhero"].link = "";
	wholeMenu["● Superhero"].html = '&#9679; Superhero';

	wholeMenu["DC Comics"] = {};
	wholeMenu["DC Comics"].id = "27_4_1";
	wholeMenu["DC Comics"].color = "black";
	wholeMenu["DC Comics"].hasSub = 0;
	wholeMenu["DC Comics"].link = "series_superhero_dc_eng.html";
	wholeMenu["DC Comics"].html = 'DC Comics';

	wholeMenu["Marvel Comics"] = {};
	wholeMenu["Marvel Comics"].id = "27_4_2";
	wholeMenu["Marvel Comics"].color = "black";
	wholeMenu["Marvel Comics"].hasSub = 0;
	wholeMenu["Marvel Comics"].link = "series_superhero_marvel_eng.html";
	wholeMenu["Marvel Comics"].html = 'Marvel Comics';

	wholeMenu["Other"] = {};
	wholeMenu["Other"].id = "27_4_3";
	wholeMenu["Other"].color = "black";
	wholeMenu["Other"].hasSub = 0;
	wholeMenu["Other"].link = "series_superhero_other_eng.html";
	wholeMenu["Other"].html = 'Other';

	wholeMenu["Gotham City"] = {};
	wholeMenu["Gotham City"].id = "27_6";
	wholeMenu["Gotham City"].color = "black";
	wholeMenu["Gotham City"].hasSub = 0;
	wholeMenu["Gotham City"].link = "series_gotham_eng.html";
	wholeMenu["Gotham City"].html = 'Gotham City';

	wholeMenu["Star Wars"] = {};
	wholeMenu["Star Wars"].id = "27_3";
	wholeMenu["Star Wars"].color = "black";
	wholeMenu["Star Wars"].hasSub = 0;
	wholeMenu["Star Wars"].link = "series_star_wars_eng.html";
	wholeMenu["Star Wars"].html = 'Star Wars <font color="MediumSlateBlue"><sup>&#9880; Forbidden &#9880;</sup></font>';

}

if (lang=="rus") {

	wholeMenu["● Сериалы ⚘ Forbidden ⚘"] = {};
	wholeMenu["● Сериалы ⚘ Forbidden ⚘"].id = "27";
	wholeMenu["● Сериалы ⚘ Forbidden ⚘"].color = "black";
	wholeMenu["● Сериалы ⚘ Forbidden ⚘"].hasSub = 1;
	wholeMenu["● Сериалы ⚘ Forbidden ⚘"].link = "";
	wholeMenu["● Сериалы ⚘ Forbidden ⚘"].html = "&#9679; Сериалы <font color='MediumSlateBlue'><sup>&#9880; Forbidden &#9880;</sup></font>";

	wholeMenu["● По Жанрам ☢ Essential ☢"] = {};
	wholeMenu["● По Жанрам ☢ Essential ☢"].id = "27_1";
	wholeMenu["● По Жанрам ☢ Essential ☢"].color = "black";
	wholeMenu["● По Жанрам ☢ Essential ☢"].hasSub = 1;
	wholeMenu["● По Жанрам ☢ Essential ☢"].link = "";
	wholeMenu["● По Жанрам ☢ Essential ☢"].html = '&#9679; По Жанрам <font color="OrangeRed"><sup>&#9762; Essential &#9762;</sup></font>';

	wholeMenu["Боди-Хоррор"] = {};
	wholeMenu["Боди-Хоррор"].id = "27_1_1";
	wholeMenu["Боди-Хоррор"].color = "black";
	wholeMenu["Боди-Хоррор"].hasSub = 0;
	wholeMenu["Боди-Хоррор"].link = "series_body_horror_rus.html";
	wholeMenu["Боди-Хоррор"].html = 'Боди-Хоррор';

	wholeMenu["Фэнтези"] = {};
	wholeMenu["Фэнтези"].id = "27_1_2";
	wholeMenu["Фэнтези"].color = "black";
	wholeMenu["Фэнтези"].hasSub = 0;
	wholeMenu["Фэнтези"].link = "series_fantasy_rus.html";
	wholeMenu["Фэнтези"].html = 'Фэнтези';

	wholeMenu["Историческая Фантастика"] = {};
	wholeMenu["Историческая Фантастика"].id = "27_1_3";
	wholeMenu["Историческая Фантастика"].color = "black";
	wholeMenu["Историческая Фантастика"].hasSub = 0;
	wholeMenu["Историческая Фантастика"].link = "series_historical_fiction_rus.html";
	wholeMenu["Историческая Фантастика"].html = 'Историческая Фантастика <font color="OrangeRed"><sup>&#9762; Essential &#9762;</sup></font>';

	wholeMenu["Космическая Опера"] = {};
	wholeMenu["Космическая Опера"].id = "27_1_4";
	wholeMenu["Космическая Опера"].color = "black";
	wholeMenu["Космическая Опера"].hasSub = 0;
	wholeMenu["Космическая Опера"].link = "series_space_opera_rus.html";
	wholeMenu["Космическая Опера"].html = 'Космическая Опера';

	wholeMenu["Сверхъестественное"] = {};
	wholeMenu["Сверхъестественное"].id = "27_1_5";
	wholeMenu["Сверхъестественное"].color = "black";
	wholeMenu["Сверхъестественное"].hasSub = 0;
	wholeMenu["Сверхъестественное"].link = "series_supernatural_rus.html";
	wholeMenu["Сверхъестественное"].html = 'Сверхъестественное';

	wholeMenu["● Мультипликация"] = {};
	wholeMenu["● Мультипликация"].id = "27_2";
	wholeMenu["● Мультипликация"].color = "black";
	wholeMenu["● Мультипликация"].hasSub = 1;
	wholeMenu["● Мультипликация"].link = "";
	wholeMenu["● Мультипликация"].html = '&#9679; Мультипликация';

	wholeMenu["Для Взрослых"] = {};
	wholeMenu["Для Взрослых"].id = "27_2_1";
	wholeMenu["Для Взрослых"].color = "black";
	wholeMenu["Для Взрослых"].hasSub = 0;
	wholeMenu["Для Взрослых"].link = "series_animation_for_adults_rus.html";
	wholeMenu["Для Взрослых"].html = 'Для Взрослых';

	wholeMenu["Для Детей"] = {};
	wholeMenu["Для Детей"].id = "27_2_2";
	wholeMenu["Для Детей"].color = "black";
	wholeMenu["Для Детей"].hasSub = 0;
	wholeMenu["Для Детей"].link = "series_animation_for_children_rus.html";
	wholeMenu["Для Детей"].html = 'For Детей';

	wholeMenu["● Супергеройские"] = {};
	wholeMenu["● Супергеройские"].id = "27_4";
	wholeMenu["● Супергеройские"].color = "black";
	wholeMenu["● Супергеройские"].hasSub = 1;
	wholeMenu["● Супергеройские"].link = "";
	wholeMenu["● Супергеройские"].html = '&#9679; Супергеройские';

	wholeMenu["DC Комиксы"] = {};
	wholeMenu["DC Комиксы"].id = "27_4_1";
	wholeMenu["DC Комиксы"].color = "black";
	wholeMenu["DC Комиксы"].hasSub = 0;
	wholeMenu["DC Комиксы"].link = "series_superhero_dc_rus.html";
	wholeMenu["DC Комиксы"].html = 'DC Комиксы';

	wholeMenu["Marvel Комиксы"] = {};
	wholeMenu["Marvel Комиксы"].id = "27_4_2";
	wholeMenu["Marvel Комиксы"].color = "black";
	wholeMenu["Marvel Комиксы"].hasSub = 0;
	wholeMenu["Marvel Комиксы"].link = "series_superhero_marvel_rus.html";
	wholeMenu["Marvel Комиксы"].html = 'Marvel Комиксы';

	wholeMenu["Другие"] = {};
	wholeMenu["Другие"].id = "27_4_3";
	wholeMenu["Другие"].color = "black";
	wholeMenu["Другие"].hasSub = 0;
	wholeMenu["Другие"].link = "series_superhero_other_rus.html";
	wholeMenu["Другие"].html = 'Другие';

	wholeMenu["Готэм-Сити"] = {};
	wholeMenu["Готэм-Сити"].id = "27_6";
	wholeMenu["Готэм-Сити"].color = "black";
	wholeMenu["Готэм-Сити"].hasSub = 0;
	wholeMenu["Готэм-Сити"].link = "series_gotham_rus.html";
	wholeMenu["Готэм-Сити"].html = 'Готэм-Сити';

	wholeMenu["Звёздные Войны"] = {};
	wholeMenu["Звёздные Войны"].id = "27_3";
	wholeMenu["Звёздные Войны"].color = "black";
	wholeMenu["Звёздные Войны"].hasSub = 0;
	wholeMenu["Звёздные Войны"].link = "series_star_wars_rus.html";
	wholeMenu["Звёздные Войны"].html = 'Звёздные Войны <font color="MediumSlateBlue"><sup>&#9880; Forbidden &#9880;</sup></font>';

}

return wholeMenu;
}

function  loadMenuGames(lang) {


var wholeMenu = {};

if (lang=="eng") {

	wholeMenu["● Games"] = {};
	wholeMenu["● Games"].id = "9";
	wholeMenu["● Games"].color = "black";
	wholeMenu["● Games"].hasSub = 1;
	wholeMenu["● Games"].link = "";
	wholeMenu["● Games"].html = '&#9679; Games';


	wholeMenu["Action-Adventure"] = {};
	wholeMenu["Action-Adventure"].id = "9_1";
	wholeMenu["Action-Adventure"].color = "black";
	wholeMenu["Action-Adventure"].hasSub = 0;
	wholeMenu["Action-Adventure"].link = "games_action_adventure_eng.html";
	wholeMenu["Action-Adventure"].html = 'Action-Adventure';

	wholeMenu["Card"] = {};
	wholeMenu["Card"].id = "9_2";
	wholeMenu["Card"].color = "black";
	wholeMenu["Card"].hasSub = 0;
	wholeMenu["Card"].link = "games_card_eng.html";
	wholeMenu["Card"].html = 'Card';

	wholeMenu["Puzzle"] = {};
	wholeMenu["Puzzle"].id = "9_3";
	wholeMenu["Puzzle"].color = "black";
	wholeMenu["Puzzle"].hasSub = 0;
	wholeMenu["Puzzle"].link = "games_puzzle_eng.html";
	wholeMenu["Puzzle"].html = 'Puzzle';

	wholeMenu["Racing"] = {};
	wholeMenu["Racing"].id = "9_4";
	wholeMenu["Racing"].color = "black";
	wholeMenu["Racing"].hasSub = 0;
	wholeMenu["Racing"].link = "games_racing_eng.html";
	wholeMenu["Racing"].html = 'Racing';


	wholeMenu["● Role-Playing (RPG)"] = {};
	wholeMenu["● Role-Playing (RPG)"].id = "9_5";
	wholeMenu["● Role-Playing (RPG)"].color = "black";
	wholeMenu["● Role-Playing (RPG)"].hasSub = 1;
	wholeMenu["● Role-Playing (RPG)"].link = "";
	wholeMenu["● Role-Playing (RPG)"].html = '&#9679; Role-Playing (RPG)';

	wholeMenu["Action-"] = {};
	wholeMenu["Action-"].id = "9_5_1";
	wholeMenu["Action-"].color = "black";
	wholeMenu["Action-"].hasSub = 0;
	wholeMenu["Action-"].link = "games_rpg_action_eng.html";
	wholeMenu["Action-"].html = 'Action-';

	wholeMenu["Breakout-"] = {};
	wholeMenu["Breakout-"].id = "9_5_2";
	wholeMenu["Breakout-"].color = "black";
	wholeMenu["Breakout-"].hasSub = 0;
	wholeMenu["Breakout-"].link = "games_rpg_breakout_eng.html";
	wholeMenu["Breakout-"].html = 'Breakout-';

	wholeMenu["MMORPG"] = {};
	wholeMenu["MMORPG"].id = "9_5_3";
	wholeMenu["MMORPG"].color = "black";
	wholeMenu["MMORPG"].hasSub = 0;
	wholeMenu["MMORPG"].link = "games_rpg_mmorpg_eng.html";
	wholeMenu["MMORPG"].html = 'MMORPG';

	wholeMenu["RPG"] = {};
	wholeMenu["RPG"].id = "9_5_4";
	wholeMenu["RPG"].color = "black";
	wholeMenu["RPG"].hasSub = 0;
	wholeMenu["RPG"].link = "games_rpg_eng.html";
	wholeMenu["RPG"].html = 'RPG';

	wholeMenu["● Simulation"] = {};
	wholeMenu["● Simulation"].id = "9_6";
	wholeMenu["● Simulation"].color = "black";
	wholeMenu["● Simulation"].hasSub = 1;
	wholeMenu["● Simulation"].link = "";
	wholeMenu["● Simulation"].html = '&#9679; Simulation';

	wholeMenu["Business"] = {};
	wholeMenu["Business"].id = "9_6_1";
	wholeMenu["Business"].color = "black";
	wholeMenu["Business"].hasSub = 0;
	wholeMenu["Business"].link = "games_simulation_business_eng.html";
	wholeMenu["Business"].html = 'Business';

	wholeMenu["Simulation"] = {};
	wholeMenu["Simulation"].id = "9_6_2";
	wholeMenu["Simulation"].color = "black";
	wholeMenu["Simulation"].hasSub = 0;
	wholeMenu["Simulation"].link = "games_simulation_eng.html";
	wholeMenu["Simulation"].html = 'Simulation';

	wholeMenu["Space Flight"] = {};
	wholeMenu["Space Flight"].id = "9_6_3";
	wholeMenu["Space Flight"].color = "black";
	wholeMenu["Space Flight"].hasSub = 0;
	wholeMenu["Space Flight"].link = "games_simulation_space_flight_eng.html";
	wholeMenu["Space Flight"].html = 'Space Flight';

	wholeMenu["● Strategy"] = {};
	wholeMenu["● Strategy"].id = "9_7";
	wholeMenu["● Strategy"].color = "black";
	wholeMenu["● Strategy"].hasSub = 1;
	wholeMenu["● Strategy"].link = "";
	wholeMenu["● Strategy"].html = '&#9679; Strategy';

	wholeMenu["Real-Time"] = {};
	wholeMenu["Real-Time"].id = "9_7_1";
	wholeMenu["Real-Time"].color = "black";
	wholeMenu["Real-Time"].hasSub = 0;
	wholeMenu["Real-Time"].link = "games_strategy_real_time_eng.html";
	wholeMenu["Real-Time"].html = 'Real-Time';

	wholeMenu["Tower Defense"] = {};
	wholeMenu["Tower Defense"].id = "9_7_2";
	wholeMenu["Tower Defense"].color = "black";
	wholeMenu["Tower Defense"].hasSub = 0;
	wholeMenu["Tower Defense"].link = "games_strategy_tower_defense_eng.html";
	wholeMenu["Tower Defense"].html = 'Tower Defense';

	wholeMenu["Turn-Based"] = {};
	wholeMenu["Turn-Based"].id = "9_7_3";
	wholeMenu["Turn-Based"].color = "black";
	wholeMenu["Turn-Based"].hasSub = 0;
	wholeMenu["Turn-Based"].link = "games_strategy_turn_based_eng.html";
	wholeMenu["Turn-Based"].html = 'Turn-Based';

	wholeMenu["Not Video"] = {};
	wholeMenu["Not Video"].id = "9_8";
	wholeMenu["Not Video"].color = "black";
	wholeMenu["Not Video"].hasSub = 0;
	wholeMenu["Not Video"].link = "games_not_video_eng.html";
	wholeMenu["Not Video"].html = 'Not Video';
}


if (lang=="rus") {
	wholeMenu["● Игры"] = {};
	wholeMenu["● Игры"].id = "9";
	wholeMenu["● Игры"].color = "black";
	wholeMenu["● Игры"].hasSub = 1;
	wholeMenu["● Игры"].link = "";
	wholeMenu["● Игры"].html = '&#9679; Игры';

	wholeMenu["Action-Adventure"] = {};
	wholeMenu["Action-Adventure"].id = "9_1";
	wholeMenu["Action-Adventure"].color = "black";
	wholeMenu["Action-Adventure"].hasSub = 0;
	wholeMenu["Action-Adventure"].link = "games_action_adventure_rus.html";
	wholeMenu["Action-Adventure"].html = 'Action-Adventure';

	wholeMenu["Карточные"] = {};
	wholeMenu["Карточные"].id = "9_2";
	wholeMenu["Карточные"].color = "black";
	wholeMenu["Карточные"].hasSub = 0;
	wholeMenu["Карточные"].link = "games_card_rus.html";
	wholeMenu["Карточные"].html = 'Карточные';

	wholeMenu["Головоломка"] = {};
	wholeMenu["Головоломка"].id = "9_3";
	wholeMenu["Головоломка"].color = "black";
	wholeMenu["Головоломка"].hasSub = 0;
	wholeMenu["Головоломка"].link = "games_puzzle_rus.html";
	wholeMenu["Головоломка"].html = 'Головоломка';

	wholeMenu["Автосимулятор"] = {};
	wholeMenu["Автосимулятор"].id = "9_4";
	wholeMenu["Автосимулятор"].color = "black";
	wholeMenu["Автосимулятор"].hasSub = 0;
	wholeMenu["Автосимулятор"].link = "games_racing_rus.html";
	wholeMenu["Автосимулятор"].html = 'Автосимулятор';


	wholeMenu["● Ролевая Игра (РПГ)"] = {};
	wholeMenu["● Ролевая Игра (РПГ)"].id = "9_5";
	wholeMenu["● Ролевая Игра (РПГ)"].color = "black";
	wholeMenu["● Ролевая Игра (РПГ)"].hasSub = 1;
	wholeMenu["● Ролевая Игра (РПГ)"].link = "";
	wholeMenu["● Ролевая Игра (РПГ)"].html = '&#9679; Ролевая Игра (РПГ)';

	wholeMenu["Action-"] = {};
	wholeMenu["Action-"].id = "9_5_1";
	wholeMenu["Action-"].color = "black";
	wholeMenu["Action-"].hasSub = 0;
	wholeMenu["Action-"].link = "games_rpg_action_rus.html";
	wholeMenu["Action-"].html = 'Action-';

	wholeMenu["Breakout-"] = {};
	wholeMenu["Breakout-"].id = "9_5_2";
	wholeMenu["Breakout-"].color = "black";
	wholeMenu["Breakout-"].hasSub = 0;
	wholeMenu["Breakout-"].link = "games_rpg_breakout_rus.html";
	wholeMenu["Breakout-"].html = 'Breakout-';

	wholeMenu["ММОРПГ"] = {};
	wholeMenu["ММОРПГ"].id = "9_5_3";
	wholeMenu["ММОРПГ"].color = "black";
	wholeMenu["ММОРПГ"].hasSub = 0;
	wholeMenu["ММОРПГ"].link = "games_rpg_mmorpg_rus.html";
	wholeMenu["ММОРПГ"].html = 'ММОРПГ';

	wholeMenu["РПГ"] = {};
	wholeMenu["РПГ"].id = "9_5_4";
	wholeMenu["РПГ"].color = "black";
	wholeMenu["РПГ"].hasSub = 0;
	wholeMenu["РПГ"].link = "games_rpg_rus.html";
	wholeMenu["РПГ"].html = 'РПГ';

	wholeMenu["● Симулятор"] = {};
	wholeMenu["● Симулятор"].id = "9_6";
	wholeMenu["● Симулятор"].color = "black";
	wholeMenu["● Симулятор"].hasSub = 1;
	wholeMenu["● Симулятор"].link = "";
	wholeMenu["● Симулятор"].html = '&#9679; Симулятор';

	wholeMenu["Экономический"] = {};
	wholeMenu["Экономический"].id = "9_6_1";
	wholeMenu["Экономический"].color = "black";
	wholeMenu["Экономический"].hasSub = 0;
	wholeMenu["Экономический"].link = "games_simulation_business_rus.html";
	wholeMenu["Экономический"].html = 'Экономический';

	wholeMenu["Симулятор"] = {};
	wholeMenu["Симулятор"].id = "9_6_2";
	wholeMenu["Симулятор"].color = "black";
	wholeMenu["Симулятор"].hasSub = 0;
	wholeMenu["Симулятор"].link = "games_simulation_rus.html";
	wholeMenu["Симулятор"].html = 'Симулятор';

	wholeMenu["Космический"] = {};
	wholeMenu["Космический"].id = "9_6_3";
	wholeMenu["Космический"].color = "black";
	wholeMenu["Космический"].hasSub = 0;
	wholeMenu["Космический"].link = "games_simulation_space_flight_rus.html";
	wholeMenu["Космический"].html = 'Космический';

	wholeMenu["● Стратегия"] = {};
	wholeMenu["● Стратегия"].id = "9_7";
	wholeMenu["● Стратегия"].color = "black";
	wholeMenu["● Стратегия"].hasSub = 1;
	wholeMenu["● Стратегия"].link = "";
	wholeMenu["● Стратегия"].html = '&#9679; Стратегия';

	wholeMenu["В реальном времени"] = {};
	wholeMenu["В реальном времени"].id = "9_7_1";
	wholeMenu["В реальном времени"].color = "black";
	wholeMenu["В реальном времени"].hasSub = 0;
	wholeMenu["В реальном времени"].link = "games_strategy_real_time_rus.html";
	wholeMenu["В реальном времени"].html = 'В реальном времени';

	wholeMenu["Tower Defense"] = {};
	wholeMenu["Tower Defense"].id = "9_7_2";
	wholeMenu["Tower Defense"].color = "black";
	wholeMenu["Tower Defense"].hasSub = 0;
	wholeMenu["Tower Defense"].link = "games_strategy_tower_defense_rus.html";
	wholeMenu["Tower Defense"].html = 'Tower Defense';

	wholeMenu["Пошаговая"] = {};
	wholeMenu["Пошаговая"].id = "9_7_3";
	wholeMenu["Пошаговая"].color = "black";
	wholeMenu["Пошаговая"].hasSub = 0;
	wholeMenu["Пошаговая"].link = "games_strategy_turn_based_rus.html";
	wholeMenu["Пошаговая"].html = 'Пошаговая';

	wholeMenu["Не Видео"] = {};
	wholeMenu["Не Видео"].id = "9_8";
	wholeMenu["Не Видео"].color = "black";
	wholeMenu["Не Видео"].hasSub = 0;
	wholeMenu["Не Видео"].link = "games_not_video_rus.html";
	wholeMenu["Не Видео"].html = 'Не Видео';

}

return wholeMenu;
}



function  loadMenuBooks(lang) {



var wholeMenu = {};

if (lang=="eng") {

	wholeMenu["● Books"] = {};
	wholeMenu["● Books"].id = "10";
	wholeMenu["● Books"].color = "red";
	wholeMenu["● Books"].hasSub = 1;
	wholeMenu["● Books"].link = "";
	wholeMenu["● Books"].html = '&#9679; Books';

	wholeMenu["● USSR"] = {};
	wholeMenu["● USSR"].id = "10_3";
	wholeMenu["● USSR"].color = "red";
	wholeMenu["● USSR"].hasSub = 1;
	wholeMenu["● USSR"].link = "";
	wholeMenu["● USSR"].html = '&#9679; USSR';

	wholeMenu["Kir Bulychev"] = {};
	wholeMenu["Kir Bulychev"].id = "10_3_1";
	wholeMenu["Kir Bulychev"].color = "red";
	wholeMenu["Kir Bulychev"].hasSub = 0;
	wholeMenu["Kir Bulychev"].link = "books_bulychev_eng.html";
	wholeMenu["Kir Bulychev"].html = 'Kir Bulychev';

	wholeMenu["Alexander Grin"] = {};
	wholeMenu["Alexander Grin"].id = "10_3_2";
	wholeMenu["Alexander Grin"].color = "red";
	wholeMenu["Alexander Grin"].hasSub = 0;
	wholeMenu["Alexander Grin"].link = "books_grin_eng.html";
	wholeMenu["Alexander Grin"].html = 'Alexander Grin';

	wholeMenu["Alexander Kazantsev"] = {};
	wholeMenu["Alexander Kazantsev"].id = "10_3_3";
	wholeMenu["Alexander Kazantsev"].color = "red";
	wholeMenu["Alexander Kazantsev"].hasSub = 0;
	wholeMenu["Alexander Kazantsev"].link = "books_kazancev_eng.html";
	wholeMenu["Alexander Kazantsev"].html = 'Alexander Kazantsev';

	wholeMenu["Sergey Pavlov"] = {};
	wholeMenu["Sergey Pavlov"].id = "10_3_4";
	wholeMenu["Sergey Pavlov"].color = "red";
	wholeMenu["Sergey Pavlov"].hasSub = 0;
	wholeMenu["Sergey Pavlov"].link = "books_pavlov_eng.html";
	wholeMenu["Sergey Pavlov"].html = 'Sergey Pavlov';

	wholeMenu["Ivan Yefremov"] = {};
	wholeMenu["Ivan Yefremov"].id = "10_3_4";
	wholeMenu["Ivan Yefremov"].color = "red";
	wholeMenu["Ivan Yefremov"].hasSub = 0;
	wholeMenu["Ivan Yefremov"].link = "books_yefremov_eng.html";
	wholeMenu["Ivan Yefremov"].html = 'Ivan Yefremov';

	wholeMenu["● United Kingdom"] = {};
	wholeMenu["● United Kingdom"].id = "10_4";
	wholeMenu["● United Kingdom"].color = "red";
	wholeMenu["● United Kingdom"].hasSub = 1;
	wholeMenu["● United Kingdom"].link = "";
	wholeMenu["● United Kingdom"].html = '&#9679; United Kingdom';

	wholeMenu["Sir Arthur Charles Clarke"] = {};
	wholeMenu["Sir Arthur Charles Clarke"].id = "10_4_1";
	wholeMenu["Sir Arthur Charles Clarke"].color = "red";
	wholeMenu["Sir Arthur Charles Clarke"].hasSub = 0;
	wholeMenu["Sir Arthur Charles Clarke"].link = "books_clarke_eng.html";
	wholeMenu["Sir Arthur Charles Clarke"].html = 'Sir Arthur Charles Clarke';

	wholeMenu["Herbert George Wells"] = {};
	wholeMenu["Herbert George Wells"].id = "10_4_2";
	wholeMenu["Herbert George Wells"].color = "red";
	wholeMenu["Herbert George Wells"].hasSub = 0;
	wholeMenu["Herbert George Wells"].link = "books_wells_eng.html";
	wholeMenu["Herbert George Wells"].html = 'Herbert George Wells';

	wholeMenu["John Wyndham"] = {};
	wholeMenu["John Wyndham"].id = "10_4_3";
	wholeMenu["John Wyndham"].color = "red";
	wholeMenu["John Wyndham"].hasSub = 0;
	wholeMenu["John Wyndham"].link = "books_wyndham_eng.html";
	wholeMenu["John Wyndham"].html = 'John Wyndham';

	wholeMenu["● United States of America"] = {};
	wholeMenu["● United States of America"].id = "10_5";
	wholeMenu["● United States of America"].color = "red";
	wholeMenu["● United States of America"].hasSub = 1;
	wholeMenu["● United States of America"].link = "";
	wholeMenu["● United States of America"].html = '&#9679; United States of America';

	wholeMenu["Poul William Anderson"] = {};
	wholeMenu["Poul William Anderson"].id = "10_5_1";
	wholeMenu["Poul William Anderson"].color = "red";
	wholeMenu["Poul William Anderson"].hasSub = 0;
	wholeMenu["Poul William Anderson"].link = "books_anderson_eng.html";
	wholeMenu["Poul William Anderson"].html = 'Poul William Anderson';

	wholeMenu["Isaac Asimov"] = {};
	wholeMenu["Isaac Asimov"].id = "10_5_2";
	wholeMenu["Isaac Asimov"].color = "red";
	wholeMenu["Isaac Asimov"].hasSub = 0;
	wholeMenu["Isaac Asimov"].link = "books_azimov_eng.html";
	wholeMenu["Isaac Asimov"].html = 'Isaac Asimov';

	wholeMenu["Robert Anson Heinlein"] = {};
	wholeMenu["Robert Anson Heinlein"].id = "10_5_3";
	wholeMenu["Robert Anson Heinlein"].color = "red";
	wholeMenu["Robert Anson Heinlein"].hasSub = 0;
	wholeMenu["Robert Anson Heinlein"].link = "books_heinlein_eng.html";
	wholeMenu["Robert Anson Heinlein"].html = 'Robert Anson Heinlein';

	wholeMenu["Daniel Keyes"] = {};
	wholeMenu["Daniel Keyes"].id = "10_5_4";
	wholeMenu["Daniel Keyes"].color = "red";
	wholeMenu["Daniel Keyes"].hasSub = 0;
	wholeMenu["Daniel Keyes"].link = "books_keyes_eng.html";
	wholeMenu["Daniel Keyes"].html = 'Daniel Keyes';

	wholeMenu["Jack London"] = {};
	wholeMenu["Jack London"].id = "10_5_5";
	wholeMenu["Jack London"].color = "red";
	wholeMenu["Jack London"].hasSub = 0;
	wholeMenu["Jack London"].link = "books_london_eng.html";
	wholeMenu["Jack London"].html = 'Jack London';

	wholeMenu["Robert Sheckley"] = {};
	wholeMenu["Robert Sheckley"].id = "10_5_6";
	wholeMenu["Robert Sheckley"].color = "red";
	wholeMenu["Robert Sheckley"].hasSub = 0;
	wholeMenu["Robert Sheckley"].link = "books_sheckley_eng.html";
	wholeMenu["Robert Sheckley"].html = 'Robert Sheckley';

	wholeMenu["Clifford Donald Simak"] = {};
	wholeMenu["Clifford Donald Simak"].id = "10_5_7";
	wholeMenu["Clifford Donald Simak"].color = "red";
	wholeMenu["Clifford Donald Simak"].hasSub = 0;
	wholeMenu["Clifford Donald Simak"].link = "books_simak_eng.html";
	wholeMenu["Clifford Donald Simak"].html = 'Clifford Donald Simak';
}


if (lang=="rus") {

	wholeMenu["● Книги"] = {};
	wholeMenu["● Книги"].id = "10";
	wholeMenu["● Книги"].color = "red";
	wholeMenu["● Книги"].hasSub = 1;
	wholeMenu["● Книги"].link = "";
	wholeMenu["● Книги"].html = '&#9679; Книги';

	wholeMenu["● СССР"] = {};
	wholeMenu["● СССР"].id = "10_3";
	wholeMenu["● СССР"].color = "red";
	wholeMenu["● СССР"].hasSub = 1;
	wholeMenu["● СССР"].link = "";
	wholeMenu["● СССР"].html = '&#9679; СССР';

	wholeMenu["Кир Булычёв"] = {};
	wholeMenu["Кир Булычёв"].id = "10_3_1";
	wholeMenu["Кир Булычёв"].color = "red";
	wholeMenu["Кир Булычёв"].hasSub = 0;
	wholeMenu["Кир Булычёв"].link = "books_bulychev_rus.html";
	wholeMenu["Кир Булычёв"].html = 'Кир Булычёв';

	wholeMenu["Александр Грин"] = {};
	wholeMenu["Александр Грин"].id = "10_3_2";
	wholeMenu["Александр Грин"].color = "red";
	wholeMenu["Александр Грин"].hasSub = 0;
	wholeMenu["Александр Грин"].link = "books_grin_rus.html";
	wholeMenu["Александр Грин"].html = 'Александр Грин';

	wholeMenu["Александр Казанцев"] = {};
	wholeMenu["Александр Казанцев"].id = "10_3_3";
	wholeMenu["Александр Казанцев"].color = "red";
	wholeMenu["Александр Казанцев"].hasSub = 0;
	wholeMenu["Александр Казанцев"].link = "books_kazancev_rus.html";
	wholeMenu["Александр Казанцев"].html = 'Александр Казанцев';

	wholeMenu["Сергей Павлов"] = {};
	wholeMenu["Сергей Павлов"].id = "10_3_4";
	wholeMenu["Сергей Павлов"].color = "red";
	wholeMenu["Сергей Павлов"].hasSub = 0;
	wholeMenu["Сергей Павлов"].link = "books_pavlov_rus.html";
	wholeMenu["Сергей Павлов"].html = 'Сергей Павлов';

	wholeMenu["Иван Ефремов"] = {};
	wholeMenu["Иван Ефремов"].id = "10_3_4";
	wholeMenu["Иван Ефремов"].color = "red";
	wholeMenu["Иван Ефремов"].hasSub = 0;
	wholeMenu["Иван Ефремов"].link = "books_yefremov_rus.html";
	wholeMenu["Иван Ефремов"].html = 'Иван Ефремов';

	wholeMenu["● Великобритания"] = {};
	wholeMenu["● Великобритания"].id = "10_4";
	wholeMenu["● Великобритания"].color = "red";
	wholeMenu["● Великобритания"].hasSub = 1;
	wholeMenu["● Великобритания"].link = "";
	wholeMenu["● Великобритания"].html = '&#9679; Великобритания';

	wholeMenu["Сэр Артур Чарльз Кларк"] = {};
	wholeMenu["Сэр Артур Чарльз Кларк"].id = "10_4_1";
	wholeMenu["Сэр Артур Чарльз Кларк"].color = "red";
	wholeMenu["Сэр Артур Чарльз Кларк"].hasSub = 0;
	wholeMenu["Сэр Артур Чарльз Кларк"].link = "books_clarke_rus.html";
	wholeMenu["Сэр Артур Чарльз Кларк"].html = 'Сэр Артур Чарльз Кларк';

	wholeMenu["Герберт Уэллс"] = {};
	wholeMenu["Герберт Уэллс"].id = "10_4_2";
	wholeMenu["Герберт Уэллс"].color = "red";
	wholeMenu["Герберт Уэллс"].hasSub = 0;
	wholeMenu["Герберт Уэллс"].link = "books_wells_rus.html";
	wholeMenu["Герберт Уэллс"].html = 'Герберт Уэллс';

	wholeMenu["Джон Уиндем"] = {};
	wholeMenu["Джон Уиндем"].id = "10_4_3";
	wholeMenu["Джон Уиндем"].color = "red";
	wholeMenu["Джон Уиндем"].hasSub = 0;
	wholeMenu["Джон Уиндем"].link = "books_wyndham_rus.html";
	wholeMenu["Джон Уиндем"].html = 'Джон Уиндем';

	wholeMenu["● Соединённые Штаты Америки"] = {};
	wholeMenu["● Соединённые Штаты Америки"].id = "10_5";
	wholeMenu["● Соединённые Штаты Америки"].color = "red";
	wholeMenu["● Соединённые Штаты Америки"].hasSub = 1;
	wholeMenu["● Соединённые Штаты Америки"].link = "";
	wholeMenu["● Соединённые Штаты Америки"].html = '&#9679; Соединённые Штаты Америки';

	wholeMenu["Пол Уильям Андерсон"] = {};
	wholeMenu["Пол Уильям Андерсон"].id = "10_5_1";
	wholeMenu["Пол Уильям Андерсон"].color = "red";
	wholeMenu["Пол Уильям Андерсон"].hasSub = 0;
	wholeMenu["Пол Уильям Андерсон"].link = "books_anderson_rus.html";
	wholeMenu["Пол Уильям Андерсон"].html = 'Пол Уильям Андерсон';

	wholeMenu["Айзек Азимов"] = {};
	wholeMenu["Айзек Азимов"].id = "10_5_2";
	wholeMenu["Айзек Азимов"].color = "red";
	wholeMenu["Айзек Азимов"].hasSub = 0;
	wholeMenu["Айзек Азимов"].link = "books_azimov_rus.html";
	wholeMenu["Айзек Азимов"].html = 'Айзек Азимов';

	wholeMenu["Роберт Хайнлайн"] = {};
	wholeMenu["Роберт Хайнлайн"].id = "10_5_3";
	wholeMenu["Роберт Хайнлайн"].color = "red";
	wholeMenu["Роберт Хайнлайн"].hasSub = 0;
	wholeMenu["Роберт Хайнлайн"].link = "books_heinlein_rus.html";
	wholeMenu["Роберт Хайнлайн"].html = 'Роберт Хайнлайн';

	wholeMenu["Дэниел Киз"] = {};
	wholeMenu["Дэниел Киз"].id = "10_5_4";
	wholeMenu["Дэниел Киз"].color = "red";
	wholeMenu["Дэниел Киз"].hasSub = 0;
	wholeMenu["Дэниел Киз"].link = "books_keyes_rus.html";
	wholeMenu["Дэниел Киз"].html = 'Дэниел Киз';

	wholeMenu["Джек Лондон"] = {};
	wholeMenu["Джек Лондон"].id = "10_5_5";
	wholeMenu["Джек Лондон"].color = "red";
	wholeMenu["Джек Лондон"].hasSub = 0;
	wholeMenu["Джек Лондон"].link = "books_london_rus.html";
	wholeMenu["Джек Лондон"].html = 'Джек Лондон';

	wholeMenu["Роберт Шекли"] = {};
	wholeMenu["Роберт Шекли"].id = "10_5_6";
	wholeMenu["Роберт Шекли"].color = "red";
	wholeMenu["Роберт Шекли"].hasSub = 0;
	wholeMenu["Роберт Шекли"].link = "books_sheckley_rus.html";
	wholeMenu["Роберт Шекли"].html = 'Роберт Шекли';

	wholeMenu["Клиффорд Саймак"] = {};
	wholeMenu["Клиффорд Саймак"].id = "10_5_7";
	wholeMenu["Клиффорд Саймак"].color = "red";
	wholeMenu["Клиффорд Саймак"].hasSub = 0;
	wholeMenu["Клиффорд Саймак"].link = "books_simak_rus.html";
	wholeMenu["Клиффорд Саймак"].html = 'Клиффорд Саймак';
}

return wholeMenu;
}



function  loadMenuPhotos(lang) {


var wholeMenu = {};

if (lang=="eng") {

	wholeMenu["● Photos/Images"] = {};
	wholeMenu["● Photos/Images"].id = "11";
	wholeMenu["● Photos/Images"].color = "red";
	wholeMenu["● Photos/Images"].hasSub = 1;
	wholeMenu["● Photos/Images"].link = "";
	wholeMenu["● Photos/Images"].html = '&#9679; Photos/Images';

	wholeMenu["● My Photos"] = {};
	wholeMenu["● My Photos"].id = "11_1";
	wholeMenu["● My Photos"].color = "red";
	wholeMenu["● My Photos"].hasSub = 1;
	wholeMenu["● My Photos"].link = "";
	wholeMenu["● My Photos"].html = '&#9679; My Photos';

	wholeMenu["Me"] = {};
	wholeMenu["Me"].id = "11_1_1";
	wholeMenu["Me"].color = "red";
	wholeMenu["Me"].hasSub = 0;
	wholeMenu["Me"].link = "fotos_me_eng.html";
	wholeMenu["Me"].html = 'Me';

	wholeMenu["Summer 2012"] = {};
	wholeMenu["Summer 2012"].id = "11_1_2";
	wholeMenu["Summer 2012"].color = "red";
	wholeMenu["Summer 2012"].hasSub = 0;
	wholeMenu["Summer 2012"].link = "fotos_summer_2012_eng.html";
	wholeMenu["Summer 2012"].html = 'Summer 2012';

	wholeMenu["Zveri (rus. Звери) 2012"] = {};
	wholeMenu["Zveri (rus. Звери) 2012"].id = "11_1_3";
	wholeMenu["Zveri (rus. Звери) 2012"].color = "red";
	wholeMenu["Zveri (rus. Звери) 2012"].hasSub = 0;
	wholeMenu["Zveri (rus. Звери) 2012"].link = "fotos_zveri_2012_eng.html";
	wholeMenu["Zveri (rus. Звери) 2012"].html = 'Zveri (rus. Звери) 2012';

	wholeMenu["● Images - Nicoletta Ceccoli"] = {};
	wholeMenu["● Images - Nicoletta Ceccoli"].id = "11_2";
	wholeMenu["● Images - Nicoletta Ceccoli"].color = "red";
	wholeMenu["● Images - Nicoletta Ceccoli"].hasSub = 1;
	wholeMenu["● Images - Nicoletta Ceccoli"].link = "";
	wholeMenu["● Images - Nicoletta Ceccoli"].html = '&#9679; Images - Nicoletta Ceccoli';

	wholeMenu["About Nicoletta Ceccoli"] = {};
	wholeMenu["About Nicoletta Ceccoli"].id = "11_2_1";
	wholeMenu["About Nicoletta Ceccoli"].color = "red";
	wholeMenu["About Nicoletta Ceccoli"].hasSub = 0;
	wholeMenu["About Nicoletta Ceccoli"].link = "fotos_images_about_ceccoli_eng.html";
	wholeMenu["About Nicoletta Ceccoli"].html = 'About Nicoletta Ceccoli';

	wholeMenu["Works"] = {};
	wholeMenu["Works"].id = "11_2_2";
	wholeMenu["Works"].color = "red";
	wholeMenu["Works"].hasSub = 0;
	wholeMenu["Works"].link = "fotos_images_ceccoli_works_eng.html";
	wholeMenu["Works"].html = 'Works';

	wholeMenu["● Images - KuKuLa"] = {};
	wholeMenu["● Images - KuKuLa"].id = "11_3";
	wholeMenu["● Images - KuKuLa"].color = "red";
	wholeMenu["● Images - KuKuLa"].hasSub = 1;
	wholeMenu["● Images - KuKuLa"].link = "";
	wholeMenu["● Images - KuKuLa"].html = '&#9679; Images - KuKuLa';

	wholeMenu["About KuKuLa"] = {};
	wholeMenu["About KuKuLa"].id = "11_3_1";
	wholeMenu["About KuKuLa"].color = "red";
	wholeMenu["About KuKuLa"].hasSub = 0;
	wholeMenu["About KuKuLa"].link = "fotos_images_about_kukula_eng.html";
	wholeMenu["About KuKuLa"].html = 'About KuKuLa';

	wholeMenu["Pop Royale"] = {};
	wholeMenu["Pop Royale"].id = "11_3_2";
	wholeMenu["Pop Royale"].color = "red";
	wholeMenu["Pop Royale"].hasSub = 0;
	wholeMenu["Pop Royale"].link = "fotos_images_kukula_pop_royale_eng.html";
	wholeMenu["Pop Royale"].html = 'Pop Royale';

	wholeMenu["The Huntington Epidemic"] = {};
	wholeMenu["The Huntington Epidemic"].id = "11_3_3";
	wholeMenu["The Huntington Epidemic"].color = "red";
	wholeMenu["The Huntington Epidemic"].hasSub = 0;
	wholeMenu["The Huntington Epidemic"].link = "fotos_images_kukula_the_huntington_epidemic_eng.html";
	wholeMenu["The Huntington Epidemic"].html = 'The Huntington Epidemic';

	wholeMenu["Haute Debutant"] = {};
	wholeMenu["Haute Debutant"].id = "11_3_4";
	wholeMenu["Haute Debutant"].color = "red";
	wholeMenu["Haute Debutant"].hasSub = 0;
	wholeMenu["Haute Debutant"].link = "fotos_images_kukula_haute_debutant_eng.html";
	wholeMenu["Haute Debutant"].html = 'Haute Debutant';

	wholeMenu["Selected Paintings"] = {};
	wholeMenu["Selected Paintings"].id = "11_3_6";
	wholeMenu["Selected Paintings"].color = "red";
	wholeMenu["Selected Paintings"].hasSub = 0;
	wholeMenu["Selected Paintings"].link = "fotos_images_kukula_selected_paintings_eng.html";
	wholeMenu["Selected Paintings"].html = 'Selected Paintings';

	wholeMenu["● Images - Mai Ja"] = {};
	wholeMenu["● Images - Mai Ja"].id = "11_4";
	wholeMenu["● Images - Mai Ja"].color = "red";
	wholeMenu["● Images - Mai Ja"].hasSub = 1;
	wholeMenu["● Images - Mai Ja"].link = "";
	wholeMenu["● Images - Mai Ja"].html = '&#9679; Images - Mai Ja';

	wholeMenu["About Mai Ja"] = {};
	wholeMenu["About Mai Ja"].id = "11_4_1";
	wholeMenu["About Mai Ja"].color = "red";
	wholeMenu["About Mai Ja"].hasSub = 0;
	wholeMenu["About Mai Ja"].link = "fotos_images_about_mai_ja_eng.html";
	wholeMenu["About Mai Ja"].html = 'About Mai Ja';

	wholeMenu["Traditional Paintings"] = {};
	wholeMenu["Traditional Paintings"].id = "11_4_2";
	wholeMenu["Traditional Paintings"].color = "red";
	wholeMenu["Traditional Paintings"].hasSub = 0;
	wholeMenu["Traditional Paintings"].link = "fotos_images_mai_ja_traditional_paintings_eng.html";
	wholeMenu["Traditional Paintings"].html = 'Traditional Paintings';

	wholeMenu["Digital Paintings"] = {};
	wholeMenu["Digital Paintings"].id = "11_4_3";
	wholeMenu["Digital Paintings"].color = "red";
	wholeMenu["Digital Paintings"].hasSub = 0;
	wholeMenu["Digital Paintings"].link = "fotos_images_mai_ja_digital_paintings_eng.html";
	wholeMenu["Digital Paintings"].html = 'Digital Paintings';

	wholeMenu["Video"] = {};
	wholeMenu["Video"].id = "11_4_4";
	wholeMenu["Video"].color = "red";
	wholeMenu["Video"].hasSub = 0;
	wholeMenu["Video"].link = "fotos_images_mai_ja_video_eng.html";
	wholeMenu["Video"].html = 'Video';

	wholeMenu["● Images - Minjae Lee"] = {};
	wholeMenu["● Images - Minjae Lee"].id = "11_5";
	wholeMenu["● Images - Minjae Lee"].color = "red";
	wholeMenu["● Images - Minjae Lee"].hasSub = 1;
	wholeMenu["● Images - Minjae Lee"].link = "";
	wholeMenu["● Images - Minjae Lee"].html = '&#9679; Images - Minjae Lee';

	wholeMenu["About Minjae Lee"] = {};
	wholeMenu["About Minjae Lee"].id = "11_5_1";
	wholeMenu["About Minjae Lee"].color = "red";
	wholeMenu["About Minjae Lee"].hasSub = 0;
	wholeMenu["About Minjae Lee"].link = "fotos_images_about_minjae_lee_eng.html";
	wholeMenu["About Minjae Lee"].html = 'About Minjae Lee';

	wholeMenu["y2007"] = {};
	wholeMenu["y2007"].id = "11_5_2";
	wholeMenu["y2007"].color = "red";
	wholeMenu["y2007"].hasSub = 0;
	wholeMenu["y2007"].link = "fotos_images_minjae_lee_2007_eng.html";
	wholeMenu["y2007"].html = '2007';

	wholeMenu["y2008"] = {};
	wholeMenu["y2008"].id = "11_5_3";
	wholeMenu["y2008"].color = "red";
	wholeMenu["y2008"].hasSub = 0;
	wholeMenu["y2008"].link = "fotos_images_minjae_lee_2008_eng.html";
	wholeMenu["y2008"].html = '2008';

	wholeMenu["y2009"] = {};
	wholeMenu["y2009"].id = "11_5_4";
	wholeMenu["y2009"].color = "red";
	wholeMenu["y2009"].hasSub = 0;
	wholeMenu["y2009"].link = "fotos_images_minjae_lee_2009_eng.html";
	wholeMenu["y2009"].html = '2009';

	wholeMenu["y2010"] = {};
	wholeMenu["y2010"].id = "11_5_5";
	wholeMenu["y2010"].color = "red";
	wholeMenu["y2010"].hasSub = 0;
	wholeMenu["y2010"].link = "fotos_images_minjae_lee_2010_eng.html";
	wholeMenu["y2010"].html = '2010';

	wholeMenu["y2011"] = {};
	wholeMenu["y2011"].id = "11_5_6";
	wholeMenu["y2011"].color = "red";
	wholeMenu["y2011"].hasSub = 0;
	wholeMenu["y2011"].link = "fotos_images_minjae_lee_2011_eng.html";
	wholeMenu["y2011"].html = '2007';

	wholeMenu["y2012"] = {};
	wholeMenu["y2012"].id = "11_5_7";
	wholeMenu["y2012"].color = "red";
	wholeMenu["y2012"].hasSub = 0;
	wholeMenu["y2012"].link = "fotos_images_minjae_lee_2012_eng.html";
	wholeMenu["y2012"].html = '2012';

	wholeMenu["y2013"] = {};
	wholeMenu["y2013"].id = "11_5_8";
	wholeMenu["y2013"].color = "red";
	wholeMenu["y2013"].hasSub = 0;
	wholeMenu["y2013"].link = "fotos_images_minjae_lee_2013_eng.html";
	wholeMenu["y2013"].html = '2013';

	wholeMenu["y2014"] = {};
	wholeMenu["y2014"].id = "11_5_9";
	wholeMenu["y2014"].color = "red";
	wholeMenu["y2014"].hasSub = 0;
	wholeMenu["y2014"].link = "fotos_images_minjae_lee_2014_eng.html";
	wholeMenu["y2014"].html = '2014';

	wholeMenu["y2015"] = {};
	wholeMenu["y2015"].id = "11_5_10";
	wholeMenu["y2015"].color = "red";
	wholeMenu["y2015"].hasSub = 0;
	wholeMenu["y2015"].link = "fotos_images_minjae_lee_2015_eng.html";
	wholeMenu["y2015"].html = '2015';

	wholeMenu["y2016"] = {};
	wholeMenu["y2016"].id = "11_5_11";
	wholeMenu["y2016"].color = "red";
	wholeMenu["y2016"].hasSub = 0;
	wholeMenu["y2016"].link = "fotos_images_minjae_lee_2016_eng.html";
	wholeMenu["y2016"].html = '2016';

	wholeMenu["y2017"] = {};
	wholeMenu["y2017"].id = "11_5_12";
	wholeMenu["y2017"].color = "red";
	wholeMenu["y2017"].hasSub = 0;
	wholeMenu["y2017"].link = "fotos_images_minjae_lee_2017_eng.html";
	wholeMenu["y2017"].html = '2017';

	wholeMenu["● Images - Anne Stokes"] = {};
	wholeMenu["● Images - Anne Stokes"].id = "11_6";
	wholeMenu["● Images - Anne Stokes"].color = "red";
	wholeMenu["● Images - Anne Stokes"].hasSub = 1;
	wholeMenu["● Images - Anne Stokes"].link = "";
	wholeMenu["● Images - Anne Stokes"].html = '&#9679; Images - Anne Stokes';

	wholeMenu["About Anne Stokes"] = {};
	wholeMenu["About Anne Stokes"].id = "11_6_1";
	wholeMenu["About Anne Stokes"].color = "red";
	wholeMenu["About Anne Stokes"].hasSub = 0;
	wholeMenu["About Anne Stokes"].link = "fotos_images_about_stokes_eng.html";
	wholeMenu["About Anne Stokes"].html = 'About Anne Stokes';

	wholeMenu["Dragons"] = {};
	wholeMenu["Dragons"].id = "11_6_2";
	wholeMenu["Dragons"].color = "red";
	wholeMenu["Dragons"].hasSub = 0;
	wholeMenu["Dragons"].link = "fotos_images_stokes_dragons_eng.html";
	wholeMenu["Dragons"].html = 'Dragons';

	wholeMenu["Gothic"] = {};
	wholeMenu["Gothic"].id = "11_6_3";
	wholeMenu["Gothic"].color = "red";
	wholeMenu["Gothic"].hasSub = 0;
	wholeMenu["Gothic"].link = "fotos_images_stokes_gothic_eng.html";
	wholeMenu["Gothic"].html = 'Gothic';

	wholeMenu["Fae"] = {};
	wholeMenu["Fae"].id = "11_6_4";
	wholeMenu["Fae"].color = "red";
	wholeMenu["Fae"].hasSub = 0;
	wholeMenu["Fae"].link = "fotos_images_stokes_fae_eng.html";
	wholeMenu["Fae"].html = 'Fae';

	wholeMenu["Tribal"] = {};
	wholeMenu["Tribal"].id = "11_6_5";
	wholeMenu["Tribal"].color = "red";
	wholeMenu["Tribal"].hasSub = 0;
	wholeMenu["Tribal"].link = "fotos_images_stokes_tribal_eng.html";
	wholeMenu["Tribal"].html = 'Tribal';

	wholeMenu["Steampunk"] = {};
	wholeMenu["Steampunk"].id = "11_6_6";
	wholeMenu["Steampunk"].color = "red";
	wholeMenu["Steampunk"].hasSub = 0;
	wholeMenu["Steampunk"].link = "fotos_images_stokes_steampunk_eng.html";
	wholeMenu["Steampunk"].html = 'Steampunk';

	wholeMenu["Age of Dragons"] = {};
	wholeMenu["Age of Dragons"].id = "11_6_7";
	wholeMenu["Age of Dragons"].color = "red";
	wholeMenu["Age of Dragons"].hasSub = 0;
	wholeMenu["Age of Dragons"].link = "fotos_images_stokes_age_of_dragons_eng.html";
	wholeMenu["Age of Dragons"].html = 'Age of Dragons';

	wholeMenu["Soviet Ads"] = {};
	wholeMenu["Soviet Ads"].id = "11_7";
	wholeMenu["Soviet Ads"].color = "red";
	wholeMenu["Soviet Ads"].hasSub = 0;
	wholeMenu["Soviet Ads"].link = "fotos_soviet_ads_eng.html";
	wholeMenu["Soviet Ads"].html = 'Soviet Ads';
}


if (lang=="rus") {

	wholeMenu["● Фото/Картинки"] = {};
	wholeMenu["● Фото/Картинки"].id = "11";
	wholeMenu["● Фото/Картинки"].color = "red";
	wholeMenu["● Фото/Картинки"].hasSub = 1;
	wholeMenu["● Фото/Картинки"].link = "";
	wholeMenu["● Фото/Картинки"].html = '&#9679; Фото/Картинки';

	wholeMenu["● Мои Фото"] = {};
	wholeMenu["● Мои Фото"].id = "11_1";
	wholeMenu["● Мои Фото"].color = "red";
	wholeMenu["● Мои Фото"].hasSub = 1;
	wholeMenu["● Мои Фото"].link = "";
	wholeMenu["● Мои Фото"].html = '&#9679; Мои Фото';

	wholeMenu["Я"] = {};
	wholeMenu["Я"].id = "11_1_1";
	wholeMenu["Я"].color = "red";
	wholeMenu["Я"].hasSub = 0;
	wholeMenu["Я"].link = "fotos_me_rus.html";
	wholeMenu["Я"].html = 'Я';

	wholeMenu["Лето 2012"] = {};
	wholeMenu["Лето 2012"].id = "11_1_2";
	wholeMenu["Лето 2012"].color = "red";
	wholeMenu["Лето 2012"].hasSub = 0;
	wholeMenu["Лето 2012"].link = "fotos_summer_2012_rus.html";
	wholeMenu["Лето 2012"].html = 'Лето 2012';

	wholeMenu["Звери 2012"] = {};
	wholeMenu["Звери 2012"].id = "11_1_3";
	wholeMenu["Звери 2012"].color = "red";
	wholeMenu["Звери 2012"].hasSub = 0;
	wholeMenu["Звери 2012"].link = "fotos_zveri_2012_rus.html";
	wholeMenu["Звери 2012"].html = 'Звери 2012';

	wholeMenu["● Картинки - Николетта Чекколи"] = {};
	wholeMenu["● Картинки - Николетта Чекколи"].id = "11_2";
	wholeMenu["● Картинки - Николетта Чекколи"].color = "red";
	wholeMenu["● Картинки - Николетта Чекколи"].hasSub = 1;
	wholeMenu["● Картинки - Николетта Чекколи"].link = "";
	wholeMenu["● Картинки - Николетта Чекколи"].html = '&#9679; Картинки - Николетта Чекколи';

	wholeMenu["О Николетта Чекколи"] = {};
	wholeMenu["О Николетта Чекколи"].id = "11_2_1";
	wholeMenu["О Николетта Чекколи"].color = "red";
	wholeMenu["О Николетта Чекколи"].hasSub = 0;
	wholeMenu["О Николетта Чекколи"].link = "fotos_images_about_ceccoli_rus.html";
	wholeMenu["О Николетта Чекколи"].html = 'О Николетта Чекколи';

	wholeMenu["Работы"] = {};
	wholeMenu["Работы"].id = "11_2_2";
	wholeMenu["Работы"].color = "red";
	wholeMenu["Работы"].hasSub = 0;
	wholeMenu["Работы"].link = "fotos_images_ceccoli_works_rus.html";
	wholeMenu["Работы"].html = 'Работы';

	wholeMenu["● Картинки - KuKuLa"] = {};
	wholeMenu["● Картинки - KuKuLa"].id = "11_3";
	wholeMenu["● Картинки - KuKuLa"].color = "red";
	wholeMenu["● Картинки - KuKuLa"].hasSub = 1;
	wholeMenu["● Картинки - KuKuLa"].link = "";
	wholeMenu["● Картинки - KuKuLa"].html = '&#9679; Картинки - KuKuLa';

	wholeMenu["О KuKuLa"] = {};
	wholeMenu["О KuKuLa"].id = "11_3_1";
	wholeMenu["О KuKuLa"].color = "red";
	wholeMenu["О KuKuLa"].hasSub = 0;
	wholeMenu["О KuKuLa"].link = "fotos_images_about_kukula_rus.html";
	wholeMenu["О KuKuLa"].html = 'О KuKuLa';

	wholeMenu["Поп-Рояль"] = {};
	wholeMenu["Поп-Рояль"].id = "11_3_2";
	wholeMenu["Поп-Рояль"].color = "red";
	wholeMenu["Поп-Рояль"].hasSub = 0;
	wholeMenu["Поп-Рояль"].link = "fotos_images_kukula_pop_royale_rus.html";
	wholeMenu["Поп-Рояль"].html = 'Поп-Рояль';


	wholeMenu["Хантингтонская Эпидемия"] = {};
	wholeMenu["Хантингтонская Эпидемия"].id = "11_3_3";
	wholeMenu["Хантингтонская Эпидемия"].color = "red";
	wholeMenu["Хантингтонская Эпидемия"].hasSub = 0;
	wholeMenu["Хантингтонская Эпидемия"].link = "fotos_images_kukula_the_huntington_epidemic_rus.html";
	wholeMenu["Хантингтонская Эпидемия"].html = 'Хантингтонская Эпидемия';

	wholeMenu["Дебютант Высокого Класса"] = {};
	wholeMenu["Дебютант Высокого Класса"].id = "11_3_4";
	wholeMenu["Дебютант Высокого Класса"].color = "red";
	wholeMenu["Дебютант Высокого Класса"].hasSub = 0;
	wholeMenu["Дебютант Высокого Класса"].link = "fotos_images_kukula_haute_debutant_rus.html";
	wholeMenu["Дебютант Высокого Класса"].html = 'Дебютант Высокого Класса';

	wholeMenu["Избранные Картины"] = {};
	wholeMenu["Избранные Картины"].id = "11_3_6";
	wholeMenu["Избранные Картины"].color = "red";
	wholeMenu["Избранные Картины"].hasSub = 0;
	wholeMenu["Избранные Картины"].link = "fotos_images_kukula_selected_paintings_rus.html";
	wholeMenu["Избранные Картины"].html = 'Избранные Картины';

	wholeMenu["● Картинки - Mai Ja"] = {};
	wholeMenu["● Картинки - Mai Ja"].id = "11_4";
	wholeMenu["● Картинки - Mai Ja"].color = "red";
	wholeMenu["● Картинки - Mai Ja"].hasSub = 1;
	wholeMenu["● Картинки - Mai Ja"].link = "";
	wholeMenu["● Картинки - Mai Ja"].html = '&#9679; Картинки - Mai Ja';

	wholeMenu["О Mai Ja"] = {};
	wholeMenu["О Mai Ja"].id = "11_4_1";
	wholeMenu["О Mai Ja"].color = "red";
	wholeMenu["О Mai Ja"].hasSub = 0;
	wholeMenu["О Mai Ja"].link = "fotos_images_about_mai_ja_rus.html";
	wholeMenu["О Mai Ja"].html = 'О Mai Ja';

	wholeMenu["Обычные Картины"] = {};
	wholeMenu["Обычные Картины"].id = "11_4_2";
	wholeMenu["Обычные Картины"].color = "red";
	wholeMenu["Обычные Картины"].hasSub = 0;
	wholeMenu["Обычные Картины"].link = "fotos_images_mai_ja_traditional_paintings_rus.html";
	wholeMenu["Обычные Картины"].html = 'Обычные Картины';

	wholeMenu["Цифровые Картины"] = {};
	wholeMenu["Цифровые Картины"].id = "11_4_3";
	wholeMenu["Цифровые Картины"].color = "red";
	wholeMenu["Цифровые Картины"].hasSub = 0;
	wholeMenu["Цифровые Картины"].link = "fotos_images_mai_ja_digital_paintings_rus.html";
	wholeMenu["Цифровые Картины"].html = 'Цифровые Картины';

	wholeMenu["Видео"] = {};
	wholeMenu["Видео"].id = "11_4_4";
	wholeMenu["Видео"].color = "red";
	wholeMenu["Видео"].hasSub = 0;
	wholeMenu["Видео"].link = "fotos_images_mai_ja_video_rus.html";
	wholeMenu["Видео"].html = 'Видео';

	wholeMenu["● Картинки - Minjae Lee"] = {};
	wholeMenu["● Картинки - Minjae Lee"].id = "11_5";
	wholeMenu["● Картинки - Minjae Lee"].color = "red";
	wholeMenu["● Картинки - Minjae Lee"].hasSub = 1;
	wholeMenu["● Картинки - Minjae Lee"].link = "";
	wholeMenu["● Картинки - Minjae Lee"].html = '&#9679; Картинки - Minjae Lee';

	wholeMenu["О Minjae Lee"] = {};
	wholeMenu["О Minjae Lee"].id = "11_5_1";
	wholeMenu["О Minjae Lee"].color = "red";
	wholeMenu["О Minjae Lee"].hasSub = 0;
	wholeMenu["О Minjae Lee"].link = "fotos_images_about_minjae_lee_rus.html";
	wholeMenu["О Minjae Lee"].html = 'О Minjae Lee';

	wholeMenu["y2007"] = {};
	wholeMenu["y2007"].id = "11_5_2";
	wholeMenu["y2007"].color = "red";
	wholeMenu["y2007"].hasSub = 0;
	wholeMenu["y2007"].link = "fotos_images_minjae_lee_2007_rus.html";
	wholeMenu["y2007"].html = '2007';

	wholeMenu["y2008"] = {};
	wholeMenu["y2008"].id = "11_5_3";
	wholeMenu["y2008"].color = "red";
	wholeMenu["y2008"].hasSub = 0;
	wholeMenu["y2008"].link = "fotos_images_minjae_lee_2008_rus.html";
	wholeMenu["y2008"].html = '2008';

	wholeMenu["y2009"] = {};
	wholeMenu["y2009"].id = "11_5_4";
	wholeMenu["y2009"].color = "red";
	wholeMenu["y2009"].hasSub = 0;
	wholeMenu["y2009"].link = "fotos_images_minjae_lee_2009_rus.html";
	wholeMenu["y2009"].html = '2009';

	wholeMenu["y2010"] = {};
	wholeMenu["y2010"].id = "11_5_5";
	wholeMenu["y2010"].color = "red";
	wholeMenu["y2010"].hasSub = 0;
	wholeMenu["y2010"].link = "fotos_images_minjae_lee_2010_rus.html";
	wholeMenu["y2010"].html = '2010';

	wholeMenu["y2011"] = {};
	wholeMenu["y2011"].id = "11_5_6";
	wholeMenu["y2011"].color = "red";
	wholeMenu["y2011"].hasSub = 0;
	wholeMenu["y2011"].link = "fotos_images_minjae_lee_2011_rus.html";
	wholeMenu["y2011"].html = '2007';

	wholeMenu["y2012"] = {};
	wholeMenu["y2012"].id = "11_5_7";
	wholeMenu["y2012"].color = "red";
	wholeMenu["y2012"].hasSub = 0;
	wholeMenu["y2012"].link = "fotos_images_minjae_lee_2012_rus.html";
	wholeMenu["y2012"].html = '2012';

	wholeMenu["y2013"] = {};
	wholeMenu["y2013"].id = "11_5_8";
	wholeMenu["y2013"].color = "red";
	wholeMenu["y2013"].hasSub = 0;
	wholeMenu["y2013"].link = "fotos_images_minjae_lee_2013_rus.html";
	wholeMenu["y2013"].html = '2013';

	wholeMenu["y2014"] = {};
	wholeMenu["y2014"].id = "11_5_9";
	wholeMenu["y2014"].color = "red";
	wholeMenu["y2014"].hasSub = 0;
	wholeMenu["y2014"].link = "fotos_images_minjae_lee_2014_rus.html";
	wholeMenu["y2014"].html = '2014';

	wholeMenu["y2015"] = {};
	wholeMenu["y2015"].id = "11_5_10";
	wholeMenu["y2015"].color = "red";
	wholeMenu["y2015"].hasSub = 0;
	wholeMenu["y2015"].link = "fotos_images_minjae_lee_2015_rus.html";
	wholeMenu["y2015"].html = '2015';

	wholeMenu["y2016"] = {};
	wholeMenu["y2016"].id = "11_5_11";
	wholeMenu["y2016"].color = "red";
	wholeMenu["y2016"].hasSub = 0;
	wholeMenu["y2016"].link = "fotos_images_minjae_lee_2016_rus.html";
	wholeMenu["y2016"].html = '2016';

	wholeMenu["y2017"] = {};
	wholeMenu["y2017"].id = "11_5_12";
	wholeMenu["y2017"].color = "red";
	wholeMenu["y2017"].hasSub = 0;
	wholeMenu["y2017"].link = "fotos_images_minjae_lee_2017_rus.html";
	wholeMenu["y2017"].html = '2017';

	wholeMenu["● Картинки - Энн Стоукс"] = {};
	wholeMenu["● Картинки - Энн Стоукс"].id = "11_6";
	wholeMenu["● Картинки - Энн Стоукс"].color = "red";
	wholeMenu["● Картинки - Энн Стоукс"].hasSub = 1;
	wholeMenu["● Картинки - Энн Стоукс"].link = "";
	wholeMenu["● Картинки - Энн Стоукс"].html = '&#9679; Картинки - Энн Стоукс';

	wholeMenu["О Энн Стоукс"] = {};
	wholeMenu["О Энн Стоукс"].id = "11_6_1";
	wholeMenu["О Энн Стоукс"].color = "red";
	wholeMenu["О Энн Стоукс"].hasSub = 0;
	wholeMenu["О Энн Стоукс"].link = "fotos_images_about_stokes_rus.html";
	wholeMenu["О Энн Стоукс"].html = 'О Энн Стоукс';

	wholeMenu["Драконы"] = {};
	wholeMenu["Драконы"].id = "11_6_2";
	wholeMenu["Драконы"].color = "red";
	wholeMenu["Драконы"].hasSub = 0;
	wholeMenu["Драконы"].link = "fotos_images_stokes_dragons_rus.html";
	wholeMenu["Драконы"].html = 'Драконы';

	wholeMenu["Готические"] = {};
	wholeMenu["Готические"].id = "11_6_3";
	wholeMenu["Готические"].color = "red";
	wholeMenu["Готические"].hasSub = 0;
	wholeMenu["Готические"].link = "fotos_images_stokes_gothic_rus.html";
	wholeMenu["Готические"].html = 'Готические';

	wholeMenu["Феерические"] = {};
	wholeMenu["Феерические"].id = "11_6_4";
	wholeMenu["Феерические"].color = "red";
	wholeMenu["Феерические"].hasSub = 0;
	wholeMenu["Феерические"].link = "fotos_images_stokes_fae_rus.html";
	wholeMenu["Феерические"].html = 'Феерические';

	wholeMenu["Трайбл"] = {};
	wholeMenu["Трайбл"].id = "11_6_5";
	wholeMenu["Трайбл"].color = "red";
	wholeMenu["Трайбл"].hasSub = 0;
	wholeMenu["Трайбл"].link = "fotos_images_stokes_tribal_rus.html";
	wholeMenu["Трайбл"].html = 'Трайбл';

	wholeMenu["Стимпанк"] = {};
	wholeMenu["Стимпанк"].id = "11_6_6";
	wholeMenu["Стимпанк"].color = "red";
	wholeMenu["Стимпанк"].hasSub = 0;
	wholeMenu["Стимпанк"].link = "fotos_images_stokes_steampunk_rus.html";
	wholeMenu["Стимпанк"].html = 'Стимпанк';

	wholeMenu["Эра Драконов"] = {};
	wholeMenu["Эра Драконов"].id = "11_6_7";
	wholeMenu["Эра Драконов"].color = "red";
	wholeMenu["Эра Драконов"].hasSub = 0;
	wholeMenu["Эра Драконов"].link = "fotos_images_stokes_age_of_dragons_rus.html";
	wholeMenu["Эра Драконов"].html = 'Эра Драконов';

	wholeMenu["Советские Плакаты"] = {};
	wholeMenu["Советские Плакаты"].id = "11_7";
	wholeMenu["Советские Плакаты"].color = "red";
	wholeMenu["Советские Плакаты"].hasSub = 0;
	wholeMenu["Советские Плакаты"].link = "fotos_soviet_ads_rus.html";
	wholeMenu["Советские Плакаты"].html = 'Советские Плакаты';
}



if (lang=="lat") {

	wholeMenu["● Photo/Imaginibus"] = {};
	wholeMenu["● Photo/Imaginibus"].id = "11";
	wholeMenu["● Photo/Imaginibus"].color = "red";
	wholeMenu["● Photo/Imaginibus"].hasSub = 1;
	wholeMenu["● Photo/Imaginibus"].link = "";
	wholeMenu["● Photo/Imaginibus"].html = '&#9679; Photo/Imaginibus';

	wholeMenu["● Photographia Mihi"] = {};
	wholeMenu["● Photographia Mihi"].id = "11_1";
	wholeMenu["● Photographia Mihi"].color = "red";
	wholeMenu["● Photographia Mihi"].hasSub = 1;
	wholeMenu["● Photographia Mihi"].link = "";
	wholeMenu["● Photographia Mihi"].html = '&#9679; Photographia Mihi';

	wholeMenu["Ego"] = {};
	wholeMenu["Ego"].id = "11_1_1";
	wholeMenu["Ego"].color = "red";
	wholeMenu["Ego"].hasSub = 0;
	wholeMenu["Ego"].link = "fotos_me_lat.html";
	wholeMenu["Ego"].html = 'Ego';

	wholeMenu["Aestas 2012"] = {};
	wholeMenu["Aestas 2012"].id = "11_1_2";
	wholeMenu["Aestas 2012"].color = "red";
	wholeMenu["Aestas 2012"].hasSub = 0;
	wholeMenu["Aestas 2012"].link = "fotos_summer_2012_lat.html";
	wholeMenu["Aestas 2012"].html = 'Aestas 2012';

	wholeMenu["Zveri (rus. Звери) 2012"] = {};
	wholeMenu["Zveri (rus. Звери) 2012"].id = "11_1_3";
	wholeMenu["Zveri (rus. Звери) 2012"].color = "red";
	wholeMenu["Zveri (rus. Звери) 2012"].hasSub = 0;
	wholeMenu["Zveri (rus. Звери) 2012"].link = "fotos_zveri_2012_lat.html";
	wholeMenu["Zveri (rus. Звери) 2012"].html = 'Zveri (rus. Звери) 2012';

	wholeMenu["● Imaginibus - Nicoletta Ceccoli"] = {};
	wholeMenu["● Imaginibus - Nicoletta Ceccoli"].id = "11_2";
	wholeMenu["● Imaginibus - Nicoletta Ceccoli"].color = "red";
	wholeMenu["● Imaginibus - Nicoletta Ceccoli"].hasSub = 1;
	wholeMenu["● Imaginibus - Nicoletta Ceccoli"].link = "";
	wholeMenu["● Imaginibus - Nicoletta Ceccoli"].html = '&#9679; Imaginibus - Nicoletta Ceccoli';

	wholeMenu["Circa Nicoletta Ceccoli"] = {};
	wholeMenu["Circa Nicoletta Ceccoli"].id = "11_2_1";
	wholeMenu["Circa Nicoletta Ceccoli"].color = "red";
	wholeMenu["Circa Nicoletta Ceccoli"].hasSub = 0;
	wholeMenu["Circa Nicoletta Ceccoli"].link = "fotos_images_about_ceccoli_lat.html";
	wholeMenu["Circa Nicoletta Ceccoli"].html = 'Circa Nicoletta Ceccoli';

	wholeMenu["Opera"] = {};
	wholeMenu["Opera"].id = "11_2_2";
	wholeMenu["Opera"].color = "red";
	wholeMenu["Opera"].hasSub = 0;
	wholeMenu["Opera"].link = "fotos_images_ceccoli_works_lat.html";
	wholeMenu["Opera"].html = 'Opera';

	wholeMenu["● Imaginibus - KuKuLa"] = {};
	wholeMenu["● Imaginibus - KuKuLa"].id = "11_3";
	wholeMenu["● Imaginibus - KuKuLa"].color = "red";
	wholeMenu["● Imaginibus - KuKuLa"].hasSub = 1;
	wholeMenu["● Imaginibus - KuKuLa"].link = "";
	wholeMenu["● Imaginibus - KuKuLa"].html = '&#9679; Imaginibus - KuKuLa';

	wholeMenu["Circa KuKuLa"] = {};
	wholeMenu["Circa KuKuLa"].id = "11_3_1";
	wholeMenu["Circa KuKuLa"].color = "red";
	wholeMenu["Circa KuKuLa"].hasSub = 0;
	wholeMenu["Circa KuKuLa"].link = "fotos_images_about_kukula_lat.html";
	wholeMenu["Circa KuKuLa"].html = 'Circa KuKuLa';

	wholeMenu["Pop Royale"] = {};
	wholeMenu["Pop Royale"].id = "11_3_2";
	wholeMenu["Pop Royale"].color = "red";
	wholeMenu["Pop Royale"].hasSub = 0;
	wholeMenu["Pop Royale"].link = "fotos_images_kukula_pop_royale_lat.html";
	wholeMenu["Pop Royale"].html = 'Pop Royale';

	wholeMenu["The Huntington Epidemic"] = {};
	wholeMenu["The Huntington Epidemic"].id = "11_3_3";
	wholeMenu["The Huntington Epidemic"].color = "red";
	wholeMenu["The Huntington Epidemic"].hasSub = 0;
	wholeMenu["The Huntington Epidemic"].link = "fotos_images_kukula_the_huntington_epidemic_lat.html";
	wholeMenu["The Huntington Epidemic"].html = 'The Huntington Epidemic';

	wholeMenu["Haute Debutant"] = {};
	wholeMenu["Haute Debutant"].id = "11_3_4";
	wholeMenu["Haute Debutant"].color = "red";
	wholeMenu["Haute Debutant"].hasSub = 0;
	wholeMenu["Haute Debutant"].link = "fotos_images_kukula_haute_debutant_lat.html";
	wholeMenu["Haute Debutant"].html = 'Haute Debutant';

	wholeMenu["Selected Paintings"] = {};
	wholeMenu["Selected Paintings"].id = "11_3_6";
	wholeMenu["Selected Paintings"].color = "red";
	wholeMenu["Selected Paintings"].hasSub = 0;
	wholeMenu["Selected Paintings"].link = "fotos_images_kukula_selected_paintings_lat.html";
	wholeMenu["Selected Paintings"].html = 'Selected Paintings';

	wholeMenu["● Imaginibus - Mai Ja"] = {};
	wholeMenu["● Imaginibus - Mai Ja"].id = "11_4";
	wholeMenu["● Imaginibus - Mai Ja"].color = "red";
	wholeMenu["● Imaginibus - Mai Ja"].hasSub = 1;
	wholeMenu["● Imaginibus - Mai Ja"].link = "";
	wholeMenu["● Imaginibus - Mai Ja"].html = '&#9679; Imaginibus - Mai Ja';

	wholeMenu["Circa Mai Ja"] = {};
	wholeMenu["Circa Mai Ja"].id = "11_4_1";
	wholeMenu["Circa Mai Ja"].color = "red";
	wholeMenu["Circa Mai Ja"].hasSub = 0;
	wholeMenu["Circa Mai Ja"].link = "fotos_images_about_mai_ja_lat.html";
	wholeMenu["Circa Mai Ja"].html = 'Circa Mai Ja';

	wholeMenu["Sollemnis Picturae"] = {};
	wholeMenu["Sollemnis Picturae"].id = "11_4_2";
	wholeMenu["Sollemnis Picturae"].color = "red";
	wholeMenu["Sollemnis Picturae"].hasSub = 0;
	wholeMenu["Sollemnis Picturae"].link = "fotos_images_mai_ja_traditional_paintings_lat.html";
	wholeMenu["Sollemnis Picturae"].html = 'Sollemnis Picturae';

	wholeMenu["Digital Picturae"] = {};
	wholeMenu["Digital Picturae"].id = "11_4_3";
	wholeMenu["Digital Picturae"].color = "red";
	wholeMenu["Digital Picturae"].hasSub = 0;
	wholeMenu["Digital Picturae"].link = "fotos_images_mai_ja_digital_paintings_lat.html";
	wholeMenu["Digital Picturae"].html = 'Digital Picturae';

	wholeMenu["Video"] = {};
	wholeMenu["Video"].id = "11_4_4";
	wholeMenu["Video"].color = "red";
	wholeMenu["Video"].hasSub = 0;
	wholeMenu["Video"].link = "fotos_images_mai_ja_video_lat.html";
	wholeMenu["Video"].html = 'Video';

	wholeMenu["● Imaginibus - Minjae Lee"] = {};
	wholeMenu["● Imaginibus - Minjae Lee"].id = "11_5";
	wholeMenu["● Imaginibus - Minjae Lee"].color = "red";
	wholeMenu["● Imaginibus - Minjae Lee"].hasSub = 1;
	wholeMenu["● Imaginibus - Minjae Lee"].link = "";
	wholeMenu["● Imaginibus - Minjae Lee"].html = '&#9679; Imaginibus - Minjae Lee';

	wholeMenu["Circa Minjae Lee"] = {};
	wholeMenu["Circa Minjae Lee"].id = "11_5_1";
	wholeMenu["Circa Minjae Lee"].color = "red";
	wholeMenu["Circa Minjae Lee"].hasSub = 0;
	wholeMenu["Circa Minjae Lee"].link = "fotos_images_about_minjae_lee_lat.html";
	wholeMenu["Circa Minjae Lee"].html = 'Circa Minjae Lee';

	wholeMenu["y2007"] = {};
	wholeMenu["y2007"].id = "11_5_2";
	wholeMenu["y2007"].color = "red";
	wholeMenu["y2007"].hasSub = 0;
	wholeMenu["y2007"].link = "fotos_images_minjae_lee_2007_lat.html";
	wholeMenu["y2007"].html = '2007';

	wholeMenu["y2008"] = {};
	wholeMenu["y2008"].id = "11_5_3";
	wholeMenu["y2008"].color = "red";
	wholeMenu["y2008"].hasSub = 0;
	wholeMenu["y2008"].link = "fotos_images_minjae_lee_2008_lat.html";
	wholeMenu["y2008"].html = '2008';

	wholeMenu["y2009"] = {};
	wholeMenu["y2009"].id = "11_5_4";
	wholeMenu["y2009"].color = "red";
	wholeMenu["y2009"].hasSub = 0;
	wholeMenu["y2009"].link = "fotos_images_minjae_lee_2009_lat.html";
	wholeMenu["y2009"].html = '2009';

	wholeMenu["y2010"] = {};
	wholeMenu["y2010"].id = "11_5_5";
	wholeMenu["y2010"].color = "red";
	wholeMenu["y2010"].hasSub = 0;
	wholeMenu["y2010"].link = "fotos_images_minjae_lee_2010_lat.html";
	wholeMenu["y2010"].html = '2010';

	wholeMenu["y2011"] = {};
	wholeMenu["y2011"].id = "11_5_6";
	wholeMenu["y2011"].color = "red";
	wholeMenu["y2011"].hasSub = 0;
	wholeMenu["y2011"].link = "fotos_images_minjae_lee_2011_lat.html";
	wholeMenu["y2011"].html = '2007';

	wholeMenu["y2012"] = {};
	wholeMenu["y2012"].id = "11_5_7";
	wholeMenu["y2012"].color = "red";
	wholeMenu["y2012"].hasSub = 0;
	wholeMenu["y2012"].link = "fotos_images_minjae_lee_2012_lat.html";
	wholeMenu["y2012"].html = '2012';

	wholeMenu["y2013"] = {};
	wholeMenu["y2013"].id = "11_5_8";
	wholeMenu["y2013"].color = "red";
	wholeMenu["y2013"].hasSub = 0;
	wholeMenu["y2013"].link = "fotos_images_minjae_lee_2013_lat.html";
	wholeMenu["y2013"].html = '2013';

	wholeMenu["y2014"] = {};
	wholeMenu["y2014"].id = "11_5_9";
	wholeMenu["y2014"].color = "red";
	wholeMenu["y2014"].hasSub = 0;
	wholeMenu["y2014"].link = "fotos_images_minjae_lee_2014_lat.html";
	wholeMenu["y2014"].html = '2014';

	wholeMenu["y2015"] = {};
	wholeMenu["y2015"].id = "11_5_10";
	wholeMenu["y2015"].color = "red";
	wholeMenu["y2015"].hasSub = 0;
	wholeMenu["y2015"].link = "fotos_images_minjae_lee_2015_lat.html";
	wholeMenu["y2015"].html = '2015';

	wholeMenu["y2016"] = {};
	wholeMenu["y2016"].id = "11_5_11";
	wholeMenu["y2016"].color = "red";
	wholeMenu["y2016"].hasSub = 0;
	wholeMenu["y2016"].link = "fotos_images_minjae_lee_2016_lat.html";
	wholeMenu["y2016"].html = '2016';

	wholeMenu["y2017"] = {};
	wholeMenu["y2017"].id = "11_5_12";
	wholeMenu["y2017"].color = "red";
	wholeMenu["y2017"].hasSub = 0;
	wholeMenu["y2017"].link = "fotos_images_minjae_lee_2017_lat.html";
	wholeMenu["y2017"].html = '2017';

	wholeMenu["● Imaginibus - Anne Stokes"] = {};
	wholeMenu["● Imaginibus - Anne Stokes"].id = "11_6";
	wholeMenu["● Imaginibus - Anne Stokes"].color = "red";
	wholeMenu["● Imaginibus - Anne Stokes"].hasSub = 1;
	wholeMenu["● Imaginibus - Anne Stokes"].link = "";
	wholeMenu["● Imaginibus - Anne Stokes"].html = '&#9679; Imaginibus - Anne Stokes';

	wholeMenu["Circa Anne Stokes"] = {};
	wholeMenu["Circa Anne Stokes"].id = "11_6_1";
	wholeMenu["Circa Anne Stokes"].color = "red";
	wholeMenu["Circa Anne Stokes"].hasSub = 0;
	wholeMenu["Circa Anne Stokes"].link = "fotos_images_about_stokes_lat.html";
	wholeMenu["Circa Anne Stokes"].html = 'Circa Anne Stokes';

	wholeMenu["Dracones"] = {};
	wholeMenu["Dracones"].id = "11_6_2";
	wholeMenu["Dracones"].color = "red";
	wholeMenu["Dracones"].hasSub = 0;
	wholeMenu["Dracones"].link = "fotos_images_stokes_dragons_lat.html";
	wholeMenu["Dracones"].html = 'Dracones';

	wholeMenu["Antiqua"] = {};
	wholeMenu["Antiqua"].id = "11_6_3";
	wholeMenu["Antiqua"].color = "red";
	wholeMenu["Antiqua"].hasSub = 0;
	wholeMenu["Antiqua"].link = "fotos_images_stokes_gothic_lat.html";
	wholeMenu["Antiqua"].html = 'Antiqua';

	wholeMenu["Fae"] = {};
	wholeMenu["Fae"].id = "11_6_4";
	wholeMenu["Fae"].color = "red";
	wholeMenu["Fae"].hasSub = 0;
	wholeMenu["Fae"].link = "fotos_images_stokes_fae_lat.html";
	wholeMenu["Fae"].html = 'Fae';

	wholeMenu["Tribal"] = {};
	wholeMenu["Tribal"].id = "11_6_5";
	wholeMenu["Tribal"].color = "red";
	wholeMenu["Tribal"].hasSub = 0;
	wholeMenu["Tribal"].link = "fotos_images_stokes_tribal_lat.html";
	wholeMenu["Tribal"].html = 'Tribal';

	wholeMenu["Steampunk"] = {};
	wholeMenu["Steampunk"].id = "11_6_6";
	wholeMenu["Steampunk"].color = "red";
	wholeMenu["Steampunk"].hasSub = 0;
	wholeMenu["Steampunk"].link = "fotos_images_stokes_steampunk_lat.html";
	wholeMenu["Steampunk"].html = 'Steampunk';

	wholeMenu["Aetas Dragonum"] = {};
	wholeMenu["Aetas Dragonum"].id = "11_6_7";
	wholeMenu["Aetas Dragonum"].color = "red";
	wholeMenu["Aetas Dragonum"].hasSub = 0;
	wholeMenu["Aetas Dragonum"].link = "fotos_images_stokes_age_of_dragons_lat.html";
	wholeMenu["Aetas Dragonum"].html = 'Aetas Dragonum';

	wholeMenu["Soviet Ads"] = {};
	wholeMenu["Soviet Ads"].id = "11_7";
	wholeMenu["Soviet Ads"].color = "red";
	wholeMenu["Soviet Ads"].hasSub = 0;
	wholeMenu["Soviet Ads"].link = "fotos_soviet_ads_lat.html";
	wholeMenu["Soviet Ads"].html = 'Soviet Ads';
}


return wholeMenu;
}



function  loadMenuAmv(lang) {


var wholeMenu = {};

if (lang=="eng") {

	wholeMenu["● AMV"] = {};
	wholeMenu["● AMV"].id = "12";
	wholeMenu["● AMV"].color = "black";
	wholeMenu["● AMV"].hasSub = 1;
	wholeMenu["● AMV"].link = "";
	wholeMenu["● AMV"].html = '&#9679; AMV';

	wholeMenu["y2012"] = {};
	wholeMenu["y2012"].id = "12_1";
	wholeMenu["y2012"].color = "black";
	wholeMenu["y2012"].hasSub = 0;
	wholeMenu["y2012"].link = "amv_2012_eng.html";
	wholeMenu["y2012"].html = '2012';

	wholeMenu["2013 &amp; 2014"] = {};
	wholeMenu["2013 &amp; 2014"].id = "12_2";
	wholeMenu["2013 &amp; 2014"].color = "black";
	wholeMenu["2013 &amp; 2014"].hasSub = 0;
	wholeMenu["2013 &amp; 2014"].link = "amv_2013_2014_eng.html";
	wholeMenu["2013 &amp; 2014"].html = '2013 &amp; 2014';

	wholeMenu["y2021"] = {};
	wholeMenu["y2021"].id = "12_4";
	wholeMenu["y2021"].color = "black";
	wholeMenu["y2021"].hasSub = 0;
	wholeMenu["y2021"].link = "amv_2021_eng.html";
	wholeMenu["y2021"].html = '2021';

	wholeMenu["y2022"] = {};
	wholeMenu["y2022"].id = "12_5";
	wholeMenu["y2022"].color = "black";
	wholeMenu["y2022"].hasSub = 0;
	wholeMenu["y2022"].link = "amv_2022_eng.html";
	wholeMenu["y2022"].html = '2022';

	wholeMenu["y2023"] = {};
	wholeMenu["y2023"].id = "12_6";
	wholeMenu["y2023"].color = "black";
	wholeMenu["y2023"].hasSub = 0;
	wholeMenu["y2023"].link = "amv_2023_eng.html";
	wholeMenu["y2023"].html = '2023';

	wholeMenu["y2024"] = {};
	wholeMenu["y2024"].id = "12_7";
	wholeMenu["y2024"].color = "black";
	wholeMenu["y2024"].hasSub = 0;
	wholeMenu["y2024"].link = "amv_2024_eng.html";
	wholeMenu["y2024"].html = '2024';

	wholeMenu["y2025"] = {};
	wholeMenu["y2025"].id = "12_8";
	wholeMenu["y2025"].color = "black";
	wholeMenu["y2025"].hasSub = 0;
	wholeMenu["y2025"].link = "amv_2025_eng.html";
	wholeMenu["y2025"].html = '2025';

}

if (lang=="rus") {

	wholeMenu["● AMV"] = {};
	wholeMenu["● AMV"].id = "12";
	wholeMenu["● AMV"].color = "black";
	wholeMenu["● AMV"].hasSub = 1;
	wholeMenu["● AMV"].link = "";
	wholeMenu["● AMV"].html = '&#9679; AMV';

	wholeMenu["y2012"] = {};
	wholeMenu["y2012"].id = "12_1";
	wholeMenu["y2012"].color = "black";
	wholeMenu["y2012"].hasSub = 0;
	wholeMenu["y2012"].link = "amv_2012_rus.html";
	wholeMenu["y2012"].html = '2012';

	wholeMenu["2013 &amp; 2014"] = {};
	wholeMenu["2013 &amp; 2014"].id = "12_2";
	wholeMenu["2013 &amp; 2014"].color = "black";
	wholeMenu["2013 &amp; 2014"].hasSub = 0;
	wholeMenu["2013 &amp; 2014"].link = "amv_2013_2014_rus.html";
	wholeMenu["2013 &amp; 2014"].html = '2013 &amp; 2014';

	wholeMenu["y2021"] = {};
	wholeMenu["y2021"].id = "12_4";
	wholeMenu["y2021"].color = "black";
	wholeMenu["y2021"].hasSub = 0;
	wholeMenu["y2021"].link = "amv_2021_rus.html";
	wholeMenu["y2021"].html = '2021';

	wholeMenu["y2022"] = {};
	wholeMenu["y2022"].id = "12_5";
	wholeMenu["y2022"].color = "black";
	wholeMenu["y2022"].hasSub = 0;
	wholeMenu["y2022"].link = "amv_2022_rus.html";
	wholeMenu["y2022"].html = '2022';

	wholeMenu["y2023"] = {};
	wholeMenu["y2023"].id = "12_6";
	wholeMenu["y2023"].color = "black";
	wholeMenu["y2023"].hasSub = 0;
	wholeMenu["y2023"].link = "amv_2023_rus.html";
	wholeMenu["y2023"].html = '2023';

	wholeMenu["y2024"] = {};
	wholeMenu["y2024"].id = "12_7";
	wholeMenu["y2024"].color = "black";
	wholeMenu["y2024"].hasSub = 0;
	wholeMenu["y2024"].link = "amv_2024_rus.html";
	wholeMenu["y2024"].html = '2024';

	wholeMenu["y2025"] = {};
	wholeMenu["y2025"].id = "12_8";
	wholeMenu["y2025"].color = "black";
	wholeMenu["y2025"].hasSub = 0;
	wholeMenu["y2025"].link = "amv_2025_rus.html";
	wholeMenu["y2025"].html = '2025';

}


if (lang=="lat") {

	wholeMenu["● AMV"] = {};
	wholeMenu["● AMV"].id = "12";
	wholeMenu["● AMV"].color = "black";
	wholeMenu["● AMV"].hasSub = 1;
	wholeMenu["● AMV"].link = "";
	wholeMenu["● AMV"].html = '&#9679; AMV';

	wholeMenu["y2012"] = {};
	wholeMenu["y2012"].id = "12_1";
	wholeMenu["y2012"].color = "black";
	wholeMenu["y2012"].hasSub = 0;
	wholeMenu["y2012"].link = "amv_2012_lat.html";
	wholeMenu["y2012"].html = '2012';

	wholeMenu["2013 &amp; 2014"] = {};
	wholeMenu["2013 &amp; 2014"].id = "12_2";
	wholeMenu["2013 &amp; 2014"].color = "black";
	wholeMenu["2013 &amp; 2014"].hasSub = 0;
	wholeMenu["2013 &amp; 2014"].link = "amv_2013_2014_lat.html";
	wholeMenu["2013 &amp; 2014"].html = '2013 &amp; 2014';

	wholeMenu["y2021"] = {};
	wholeMenu["y2021"].id = "12_4";
	wholeMenu["y2021"].color = "black";
	wholeMenu["y2021"].hasSub = 0;
	wholeMenu["y2021"].link = "amv_2021_lat.html";
	wholeMenu["y2021"].html = '2021';

	wholeMenu["y2022"] = {};
	wholeMenu["y2022"].id = "12_5";
	wholeMenu["y2022"].color = "black";
	wholeMenu["y2022"].hasSub = 0;
	wholeMenu["y2022"].link = "amv_2022_lat.html";
	wholeMenu["y2022"].html = '2022';

	wholeMenu["y2023"] = {};
	wholeMenu["y2023"].id = "12_6";
	wholeMenu["y2023"].color = "black";
	wholeMenu["y2023"].hasSub = 0;
	wholeMenu["y2023"].link = "amv_2023_lat.html";
	wholeMenu["y2023"].html = '2023';

	wholeMenu["y2024"] = {};
	wholeMenu["y2024"].id = "12_7";
	wholeMenu["y2024"].color = "black";
	wholeMenu["y2024"].hasSub = 0;
	wholeMenu["y2024"].link = "amv_2024_lat.html";
	wholeMenu["y2024"].html = '2024';

	wholeMenu["y2025"] = {};
	wholeMenu["y2025"].id = "12_8";
	wholeMenu["y2025"].color = "black";
	wholeMenu["y2025"].hasSub = 0;
	wholeMenu["y2025"].link = "amv_2025_lat.html";
	wholeMenu["y2025"].html = '2025';

}

return wholeMenu;
}



function  loadMenuStuff(lang) {


var wholeMenu = {};

if (lang=="eng") {

	wholeMenu["● Stuff ⚡ Evil ⚡"] = {};
	wholeMenu["● Stuff ⚡ Evil ⚡"].id = "14";
	wholeMenu["● Stuff ⚡ Evil ⚡"].color = "black";
	wholeMenu["● Stuff ⚡ Evil ⚡"].hasSub = 1;
	wholeMenu["● Stuff ⚡ Evil ⚡"].link = "";
	wholeMenu["● Stuff ⚡ Evil ⚡"].html = '&#9679; Stuff <font color="red"><sup>&#9889; Evil &#9889;</sup></font>';

	wholeMenu["Different"] = {};
	wholeMenu["Different"].id = "14_1";
	wholeMenu["Different"].color = "black";
	wholeMenu["Different"].hasSub = 0;
	wholeMenu["Different"].link = "stuff_different_eng.html";
	wholeMenu["Different"].html = 'Different';


	wholeMenu["Chupacabra"] = {};
	wholeMenu["Chupacabra"].id = "14_2";
	wholeMenu["Chupacabra"].color = "black";
	wholeMenu["Chupacabra"].hasSub = 0;
	wholeMenu["Chupacabra"].link = "stuff_chupacabra_eng.html";
	wholeMenu["Chupacabra"].html = 'Chupacabra';

	wholeMenu["Hyperspace"] = {};
	wholeMenu["Hyperspace"].id = "14_4";
	wholeMenu["Hyperspace"].color = "black";
	wholeMenu["Hyperspace"].hasSub = 0;
	wholeMenu["Hyperspace"].link = "stuff_hyperspace_eng.html";
	wholeMenu["Hyperspace"].html = 'Hyperspace';

	wholeMenu["Images"] = {};
	wholeMenu["Images"].id = "14_5";
	wholeMenu["Images"].color = "black";
	wholeMenu["Images"].hasSub = 0;
	wholeMenu["Images"].link = "stuff_images_general_eng.html";
	wholeMenu["Images"].html = 'Images';

	wholeMenu["Matrix ⚡ Evil ⚡"] = {};
	wholeMenu["Matrix ⚡ Evil ⚡"].id = "14_3";
	wholeMenu["Matrix ⚡ Evil ⚡"].color = "black";
	wholeMenu["Matrix ⚡ Evil ⚡"].hasSub = 0;
	wholeMenu["Matrix ⚡ Evil ⚡"].link = "stuff_matrix_eng.html";
	wholeMenu["Matrix ⚡ Evil ⚡"].html = 'Matrix <font color="red"><sup>&#9889; Evil &#9889;</sup></font>';

	wholeMenu["Star Trek: Discovery"] = {};
	wholeMenu["Star Trek: Discovery"].id = "14_6";
	wholeMenu["Star Trek: Discovery"].color = "black";
	wholeMenu["Star Trek: Discovery"].hasSub = 0;
	wholeMenu["Star Trek: Discovery"].link = "stuff_star_trek_discovery_eng.html";
	wholeMenu["Star Trek: Discovery"].html = 'Star Trek: Discovery';
}

if (lang=="rus") {

	wholeMenu["● Барахло ⚡ Evil ⚡"] = {};
	wholeMenu["● Барахло ⚡ Evil ⚡"].id = "14";
	wholeMenu["● Барахло ⚡ Evil ⚡"].color = "black";
	wholeMenu["● Барахло ⚡ Evil ⚡"].hasSub = 1;
	wholeMenu["● Барахло ⚡ Evil ⚡"].link = "";
	wholeMenu["● Барахло ⚡ Evil ⚡"].html = '&#9679; Барахло <font color="red"><sup>&#9889; Evil &#9889;</sup></font>';

	wholeMenu["Разное"] = {};
	wholeMenu["Разное"].id = "14_1";
	wholeMenu["Разное"].color = "black";
	wholeMenu["Разное"].hasSub = 0;
	wholeMenu["Разное"].link = "stuff_different_rus.html";
	wholeMenu["Разное"].html = 'Разное';

	wholeMenu["Чупакабра"] = {};
	wholeMenu["Чупакабра"].id = "14_2";
	wholeMenu["Чупакабра"].color = "black";
	wholeMenu["Чупакабра"].hasSub = 0;
	wholeMenu["Чупакабра"].link = "stuff_chupacabra_rus.html";
	wholeMenu["Чупакабра"].html = 'Чупакабра';

	wholeMenu["Гиперпространство"] = {};
	wholeMenu["Гиперпространство"].id = "14_4";
	wholeMenu["Гиперпространство"].color = "black";
	wholeMenu["Гиперпространство"].hasSub = 0;
	wholeMenu["Гиперпространство"].link = "stuff_hyperspace_rus.html";
	wholeMenu["Гиперпространство"].html = 'Гиперпространство';

	wholeMenu["Картинки"] = {};
	wholeMenu["Картинки"].id = "14_5";
	wholeMenu["Картинки"].color = "black";
	wholeMenu["Картинки"].hasSub = 0;
	wholeMenu["Картинки"].link = "stuff_images_general_rus.html";
	wholeMenu["Картинки"].html = 'Картинки';

	wholeMenu["Матрица ⚡ Evil ⚡"] = {};
	wholeMenu["Матрица ⚡ Evil ⚡"].id = "14_3";
	wholeMenu["Матрица ⚡ Evil ⚡"].color = "black";
	wholeMenu["Матрица ⚡ Evil ⚡"].hasSub = 0;
	wholeMenu["Матрица ⚡ Evil ⚡"].link = "stuff_matrix_rus.html";
	wholeMenu["Матрица ⚡ Evil ⚡"].html = 'Матрица <font color="red"><sup>&#9889; Evil &#9889;</sup></font>';

	wholeMenu["Звёздный Путь: Дискавери"] = {};
	wholeMenu["Звёздный Путь: Дискавери"].id = "14_6";
	wholeMenu["Звёздный Путь: Дискавери"].color = "black";
	wholeMenu["Звёздный Путь: Дискавери"].hasSub = 0;
	wholeMenu["Звёздный Путь: Дискавери"].link = "stuff_star_trek_discovery_rus.html";
	wholeMenu["Звёздный Путь: Дискавери"].html = 'Звёздный Путь: Дискавери';

}


if (lang=="lat") {

	wholeMenu["● Res ⚡ Evil ⚡"] = {};
	wholeMenu["● Res ⚡ Evil ⚡"].id = "14";
	wholeMenu["● Res ⚡ Evil ⚡"].color = "black";
	wholeMenu["● Res ⚡ Evil ⚡"].hasSub = 1;
	wholeMenu["● Res ⚡ Evil ⚡"].link = "";
	wholeMenu["● Res ⚡ Evil ⚡"].html = '&#9679; Res <font color="red"><sup>&#9889; Evil &#9889;</sup></font>';

	wholeMenu["Miscellanea"] = {};
	wholeMenu["Miscellanea"].id = "14_1";
	wholeMenu["Miscellanea"].color = "black";
	wholeMenu["Miscellanea"].hasSub = 0;
	wholeMenu["Miscellanea"].link = "stuff_different_lat.html";
	wholeMenu["Miscellanea"].html = 'Miscellanea';

	wholeMenu["Chupacabra"] = {};
	wholeMenu["Chupacabra"].id = "14_2";
	wholeMenu["Chupacabra"].color = "black";
	wholeMenu["Chupacabra"].hasSub = 0;
	wholeMenu["Chupacabra"].link = "stuff_chupacabra_lat.html";
	wholeMenu["Chupacabra"].html = 'Chupacabra';

	wholeMenu["Hyperspace"] = {};
	wholeMenu["Hyperspace"].id = "14_4";
	wholeMenu["Hyperspace"].color = "black";
	wholeMenu["Hyperspace"].hasSub = 0;
	wholeMenu["Hyperspace"].link = "stuff_hyperspace_lat.html";
	wholeMenu["Hyperspace"].html = 'Hyperspace';

	wholeMenu["Imaginibus"] = {};
	wholeMenu["Imaginibus"].id = "14_5";
	wholeMenu["Imaginibus"].color = "black";
	wholeMenu["Imaginibus"].hasSub = 0;
	wholeMenu["Imaginibus"].link = "stuff_images_general_lat.html";
	wholeMenu["Imaginibus"].html = 'Imaginibus';

	wholeMenu["Matrix ⚡ Evil ⚡"] = {};
	wholeMenu["Matrix ⚡ Evil ⚡"].id = "14_3";
	wholeMenu["Matrix ⚡ Evil ⚡"].color = "black";
	wholeMenu["Matrix ⚡ Evil ⚡"].hasSub = 0;
	wholeMenu["Matrix ⚡ Evil ⚡"].link = "stuff_matrix_lat.html";
	wholeMenu["Matrix ⚡ Evil ⚡"].html = 'Matrix <font color="red"><sup>&#9889; Evil &#9889;</sup></font>';

	wholeMenu["Star Trek: Discovery"] = {};
	wholeMenu["Star Trek: Discovery"].id = "14_6";
	wholeMenu["Star Trek: Discovery"].color = "black";
	wholeMenu["Star Trek: Discovery"].hasSub = 0;
	wholeMenu["Star Trek: Discovery"].link = "stuff_star_trek_discovery_lat.html";
	wholeMenu["Star Trek: Discovery"].html = 'Star Trek: Discovery';
}


return wholeMenu;
}




function  loadMenuAnecdotes(lang) {


var wholeMenu = {};


if (lang=="eng") {

	wholeMenu["● Anecdotes"] = {};
	wholeMenu["● Anecdotes"].id = "15";
	wholeMenu["● Anecdotes"].color = "red";
	wholeMenu["● Anecdotes"].hasSub = 1;
	wholeMenu["● Anecdotes"].link = "";
	wholeMenu["● Anecdotes"].html = '&#9679; Anecdotes';

	wholeMenu["General"] = {};
	wholeMenu["General"].id = "15_1";
	wholeMenu["General"].color = "red";
	wholeMenu["General"].hasSub = 0;
	wholeMenu["General"].link = "anekdots_general_eng.html";
	wholeMenu["General"].html = 'General';

	wholeMenu["Lieutenant Rzhevskiy"] = {};
	wholeMenu["Lieutenant Rzhevskiy"].id = "15_2";
	wholeMenu["Lieutenant Rzhevskiy"].color = "red";
	wholeMenu["Lieutenant Rzhevskiy"].hasSub = 0;
	wholeMenu["Lieutenant Rzhevskiy"].link = "anekdots_lieutenant_rzhevskiy_eng.html";
	wholeMenu["Lieutenant Rzhevskiy"].html = 'Lieutenant Rzhevskiy';

	wholeMenu["Nuthouse"] = {};
	wholeMenu["Nuthouse"].id = "15_3";
	wholeMenu["Nuthouse"].color = "red";
	wholeMenu["Nuthouse"].hasSub = 0;
	wholeMenu["Nuthouse"].link = "anekdots_nuthouse_eng.html";
	wholeMenu["Nuthouse"].html = 'Nuthouse';

	wholeMenu["Politics"] = {};
	wholeMenu["Politics"].id = "15_4";
	wholeMenu["Politics"].color = "red";
	wholeMenu["Politics"].hasSub = 0;
	wholeMenu["Politics"].link = "anekdots_politics_eng.html";
	wholeMenu["Politics"].html = 'Politics';

	wholeMenu["Students"] = {};
	wholeMenu["Students"].id = "15_5";
	wholeMenu["Students"].color = "red";
	wholeMenu["Students"].hasSub = 0;
	wholeMenu["Students"].link = "anekdots_students_eng.html";
	wholeMenu["Students"].html = 'Students';

	wholeMenu["Vovochka"] = {};
	wholeMenu["Vovochka"].id = "15_6";
	wholeMenu["Vovochka"].color = "red";
	wholeMenu["Vovochka"].hasSub = 0;
	wholeMenu["Vovochka"].link = "anekdots_vovochka_eng.html";
	wholeMenu["Vovochka"].html = 'Vovochka';
}




if (lang=="rus") {

	wholeMenu["● Анекдоты"] = {};
	wholeMenu["● Анекдоты"].id = "15";
	wholeMenu["● Анекдоты"].color = "red";
	wholeMenu["● Анекдоты"].hasSub = 1;
	wholeMenu["● Анекдоты"].link = "";
	wholeMenu["● Анекдоты"].html = '&#9679; Анекдоты';

	wholeMenu["Общие"] = {};
	wholeMenu["Общие"].id = "15_1";
	wholeMenu["Общие"].color = "red";
	wholeMenu["Общие"].hasSub = 0;
	wholeMenu["Общие"].link = "anekdots_general_rus.html";
	wholeMenu["Общие"].html = 'Общие';

	wholeMenu["Поручик Ржевский"] = {};
	wholeMenu["Поручик Ржевский"].id = "15_2";
	wholeMenu["Поручик Ржевский"].color = "red";
	wholeMenu["Поручик Ржевский"].hasSub = 0;
	wholeMenu["Поручик Ржевский"].link = "anekdots_lieutenant_rzhevskiy_rus.html";
	wholeMenu["Поручик Ржевский"].html = 'Поручик Ржевский';

	wholeMenu["Психушка"] = {};
	wholeMenu["Психушка"].id = "15_3";
	wholeMenu["Психушка"].color = "red";
	wholeMenu["Психушка"].hasSub = 0;
	wholeMenu["Психушка"].link = "anekdots_nuthouse_rus.html";
	wholeMenu["Психушка"].html = 'Психушка';

	wholeMenu["Политика"] = {};
	wholeMenu["Политика"].id = "15_4";
	wholeMenu["Политика"].color = "red";
	wholeMenu["Политика"].hasSub = 0;
	wholeMenu["Политика"].link = "anekdots_politics_rus.html";
	wholeMenu["Политика"].html = 'Политика';

	wholeMenu["Студенты"] = {};
	wholeMenu["Студенты"].id = "15_5";
	wholeMenu["Студенты"].color = "red";
	wholeMenu["Студенты"].hasSub = 0;
	wholeMenu["Студенты"].link = "anekdots_students_rus.html";
	wholeMenu["Студенты"].html = 'Студенты';

	wholeMenu["Вовочка"] = {};
	wholeMenu["Вовочка"].id = "15_6";
	wholeMenu["Вовочка"].color = "red";
	wholeMenu["Вовочка"].hasSub = 0;
	wholeMenu["Вовочка"].link = "anekdots_vovochka_rus.html";
	wholeMenu["Вовочка"].html = 'Вовочка';
}


return wholeMenu;
}



function  loadMenuRelaxation(lang) {


var wholeMenu = {};


if (lang=="eng") {

	wholeMenu["● Substances For Relaxation"] = {};
	wholeMenu["● Substances For Relaxation"].id = "17";
	wholeMenu["● Substances For Relaxation"].color = "white";
	wholeMenu["● Substances For Relaxation"].hasSub = 1;
	wholeMenu["● Substances For Relaxation"].link = "";
	wholeMenu["● Substances For Relaxation"].html = '&#9679; Substances For Relaxation';

	wholeMenu["Cacao"] = {};
	wholeMenu["Cacao"].id = "17_1";
	wholeMenu["Cacao"].color = "white";
	wholeMenu["Cacao"].hasSub = 0;
	wholeMenu["Cacao"].link = "substances_for_relaxation_cacao_eng.html";
	wholeMenu["Cacao"].html = 'Cacao';

	wholeMenu["Cannabis"] = {};
	wholeMenu["Cannabis"].id = "17_2";
	wholeMenu["Cannabis"].color = "white";
	wholeMenu["Cannabis"].hasSub = 0;
	wholeMenu["Cannabis"].link = "substances_for_relaxation_cannabis_eng.html";
	wholeMenu["Cannabis"].html = 'Cannabis';

	wholeMenu["Cigarettes"] = {};
	wholeMenu["Cigarettes"].id = "17_3";
	wholeMenu["Cigarettes"].color = "white";
	wholeMenu["Cigarettes"].hasSub = 0;
	wholeMenu["Cigarettes"].link = "substances_for_relaxation_cigarettes_eng.html";
	wholeMenu["Cigarettes"].html = 'Cigarettes';

	wholeMenu["Coffee"] = {};
	wholeMenu["Coffee"].id = "17_4";
	wholeMenu["Coffee"].color = "white";
	wholeMenu["Coffee"].hasSub = 0;
	wholeMenu["Coffee"].link = "substances_for_relaxation_coffee_eng.html";
	wholeMenu["Coffee"].html = 'Coffee';

	wholeMenu["Energy Drinks"] = {};
	wholeMenu["Energy Drinks"].id = "17_5";
	wholeMenu["Energy Drinks"].color = "white";
	wholeMenu["Energy Drinks"].hasSub = 0;
	wholeMenu["Energy Drinks"].link = "substances_for_relaxation_energy_drinks_eng.html";
	wholeMenu["Energy Drinks"].html = 'Energy Drinks';

	wholeMenu["Psilocybin Mushrooms"] = {};
	wholeMenu["Psilocybin Mushrooms"].id = "17_6";
	wholeMenu["Psilocybin Mushrooms"].color = "white";
	wholeMenu["Psilocybin Mushrooms"].hasSub = 0;
	wholeMenu["Psilocybin Mushrooms"].link = "substances_for_relaxation_psilocybin_mushrooms_eng.html";
	wholeMenu["Psilocybin Mushrooms"].html = 'Psilocybin Mushrooms';

	wholeMenu["Tea"] = {};
	wholeMenu["Tea"].id = "17_7";
	wholeMenu["Tea"].color = "white";
	wholeMenu["Tea"].hasSub = 0;
	wholeMenu["Tea"].link = "substances_for_relaxation_tea_eng.html";
	wholeMenu["Tea"].html = 'Tea';

	wholeMenu["Tobacco"] = {};
	wholeMenu["Tobacco"].id = "17_7";
	wholeMenu["Tobacco"].color = "white";
	wholeMenu["Tobacco"].hasSub = 0;
	wholeMenu["Tobacco"].link = "substances_for_relaxation_tobacco_eng.html";
	wholeMenu["Tobacco"].html = 'Tobacco';
}




if (lang=="rus") {

	wholeMenu["● Вещества Для Расслабления"] = {};
	wholeMenu["● Вещества Для Расслабления"].id = "17";
	wholeMenu["● Вещества Для Расслабления"].color = "white";
	wholeMenu["● Вещества Для Расслабления"].hasSub = 1;
	wholeMenu["● Вещества Для Расслабления"].link = "";
	wholeMenu["● Вещества Для Расслабления"].html = '&#9679; Вещества Для Расслабления';

	wholeMenu["Какао"] = {};
	wholeMenu["Какао"].id = "17_1";
	wholeMenu["Какао"].color = "white";
	wholeMenu["Какао"].hasSub = 0;
	wholeMenu["Какао"].link = "substances_for_relaxation_cacao_rus.html";
	wholeMenu["Какао"].html = 'Какао';

	wholeMenu["Конопля"] = {};
	wholeMenu["Конопля"].id = "17_2";
	wholeMenu["Конопля"].color = "white";
	wholeMenu["Конопля"].hasSub = 0;
	wholeMenu["Конопля"].link = "substances_for_relaxation_cannabis_rus.html";
	wholeMenu["Конопля"].html = 'Конопля';

	wholeMenu["Сигареты"] = {};
	wholeMenu["Сигареты"].id = "17_3";
	wholeMenu["Сигареты"].color = "white";
	wholeMenu["Сигареты"].hasSub = 0;
	wholeMenu["Сигареты"].link = "substances_for_relaxation_cigarettes_rus.html";
	wholeMenu["Сигареты"].html = 'Сигареты';

	wholeMenu["Кофе"] = {};
	wholeMenu["Кофе"].id = "17_4";
	wholeMenu["Кофе"].color = "white";
	wholeMenu["Кофе"].hasSub = 0;
	wholeMenu["Кофе"].link = "substances_for_relaxation_coffee_rus.html";
	wholeMenu["Кофе"].html = 'Кофе';

	wholeMenu["Энергетические Напитки"] = {};
	wholeMenu["Энергетические Напитки"].id = "17_5";
	wholeMenu["Энергетические Напитки"].color = "white";
	wholeMenu["Энергетические Напитки"].hasSub = 0;
	wholeMenu["Энергетические Напитки"].link = "substances_for_relaxation_energy_drinks_rus.html";
	wholeMenu["Энергетические Напитки"].html = 'Энергетические Напитки';

	wholeMenu["Галлюциногенные Грибы"] = {};
	wholeMenu["Галлюциногенные Грибы"].id = "17_6";
	wholeMenu["Галлюциногенные Грибы"].color = "white";
	wholeMenu["Галлюциногенные Грибы"].hasSub = 0;
	wholeMenu["Галлюциногенные Грибы"].link = "substances_for_relaxation_psilocybin_mushrooms_rus.html";
	wholeMenu["Галлюциногенные Грибы"].html = 'Галлюциногенные Грибы';

	wholeMenu["Чай"] = {};
	wholeMenu["Чай"].id = "17_7";
	wholeMenu["Чай"].color = "white";
	wholeMenu["Чай"].hasSub = 0;
	wholeMenu["Чай"].link = "substances_for_relaxation_tea_rus.html";
	wholeMenu["Чай"].html = 'Чай';

	wholeMenu["Табак"] = {};
	wholeMenu["Табак"].id = "17_7";
	wholeMenu["Табак"].color = "white";
	wholeMenu["Табак"].hasSub = 0;
	wholeMenu["Табак"].link = "substances_for_relaxation_tobacco_rus.html";
	wholeMenu["Табак"].html = 'Табак';
}


return wholeMenu;
}


function  loadMenuSoftware(lang) {


var wholeMenu = {};


if (lang=="eng") {

	wholeMenu["● Software Development"] = {};
	wholeMenu["● Software Development"].id = "18";
	wholeMenu["● Software Development"].color = "white";
	wholeMenu["● Software Development"].hasSub = 1;
	wholeMenu["● Software Development"].link = "";
	wholeMenu["● Software Development"].html = '&#9679; Software Development';


	wholeMenu["Audio/Video Processing"] = {};
	wholeMenu["Audio/Video Processing"].id = "18_1";
	wholeMenu["Audio/Video Processing"].color = "white";
	wholeMenu["Audio/Video Processing"].hasSub = 0;
	wholeMenu["Audio/Video Processing"].link = "software_development_audiovideo_eng.html";
	wholeMenu["Audio/Video Processing"].html = 'Audio/Video Processing';

	wholeMenu["Data Processing"] = {};
	wholeMenu["Data Processing"].id = "18_2";
	wholeMenu["Data Processing"].color = "white";
	wholeMenu["Data Processing"].hasSub = 0;
	wholeMenu["Data Processing"].link = "software_development_data_eng.html";
	wholeMenu["Data Processing"].html = 'Data Processing';

	wholeMenu["Drawing"] = {};
	wholeMenu["Drawing"].id = "18_3";
	wholeMenu["Drawing"].color = "white";
	wholeMenu["Drawing"].hasSub = 0;
	wholeMenu["Drawing"].link = "software_development_drawing_eng.html";
	wholeMenu["Drawing"].html = 'Drawing';

	wholeMenu["IDE"] = {};
	wholeMenu["IDE"].id = "18_4";
	wholeMenu["IDE"].color = "white";
	wholeMenu["IDE"].hasSub = 0;
	wholeMenu["IDE"].link = "software_development_ide_eng.html";
	wholeMenu["IDE"].html = 'IDE';

	wholeMenu["Programming Languages"] = {};
	wholeMenu["Programming Languages"].id = "18_5";
	wholeMenu["Programming Languages"].color = "white";
	wholeMenu["Programming Languages"].hasSub = 0;
	wholeMenu["Programming Languages"].link = "software_development_programming_languages_eng.html";
	wholeMenu["Programming Languages"].html = 'Programming Languages';

	wholeMenu["Text Processing"] = {};
	wholeMenu["Text Processing"].id = "18_6";
	wholeMenu["Text Processing"].color = "white";
	wholeMenu["Text Processing"].hasSub = 0;
	wholeMenu["Text Processing"].link = "software_development_text_eng.html";
	wholeMenu["Text Processing"].html = 'Text Processing';

}




if (lang=="rus") {


	wholeMenu["● Разработка Программ"] = {};
	wholeMenu["● Разработка Программ"].id = "18";
	wholeMenu["● Разработка Программ"].color = "white";
	wholeMenu["● Разработка Программ"].hasSub = 1;
	wholeMenu["● Разработка Программ"].alternativeCaption = "&#9679; Разработка Программного Обеспечения";
	wholeMenu["● Разработка Программ"].link = "";
	wholeMenu["● Разработка Программ"].html = '&#9679; Разработка Программ';

	wholeMenu["Обработка Аудио/Видео"] = {};
	wholeMenu["Обработка Аудио/Видео"].id = "18_1";
	wholeMenu["Обработка Аудио/Видео"].color = "white";
	wholeMenu["Обработка Аудио/Видео"].hasSub = 0;
	wholeMenu["Обработка Аудио/Видео"].link = "software_development_audiovideo_rus.html";
	wholeMenu["Обработка Аудио/Видео"].html = 'Обработка Аудио/Видео';

	wholeMenu["Обработка Данных"] = {};
	wholeMenu["Обработка Данных"].id = "18_2";
	wholeMenu["Обработка Данных"].color = "white";
	wholeMenu["Обработка Данных"].hasSub = 0;
	wholeMenu["Обработка Данных"].link = "software_development_data_rus.html";
	wholeMenu["Обработка Данных"].html = 'Обработка Данных';

	wholeMenu["Рисование"] = {};
	wholeMenu["Рисование"].id = "18_3";
	wholeMenu["Рисование"].color = "white";
	wholeMenu["Рисование"].hasSub = 0;
	wholeMenu["Рисование"].link = "software_development_drawing_rus.html";
	wholeMenu["Рисование"].html = 'Рисование';

	wholeMenu["IDE"] = {};
	wholeMenu["IDE"].id = "18_4";
	wholeMenu["IDE"].color = "white";
	wholeMenu["IDE"].hasSub = 0;
	wholeMenu["IDE"].link = "software_development_ide_rus.html";
	wholeMenu["IDE"].html = 'IDE';

	wholeMenu["Языки Программирования"] = {};
	wholeMenu["Языки Программирования"].id = "18_5";
	wholeMenu["Языки Программирования"].color = "white";
	wholeMenu["Языки Программирования"].hasSub = 0;
	wholeMenu["Языки Программирования"].link = "software_development_programming_languages_rus.html";
	wholeMenu["Языки Программирования"].html = 'Языки Программирования';

	wholeMenu["Обработка Текста"] = {};
	wholeMenu["Обработка Текста"].id = "18_6";
	wholeMenu["Обработка Текста"].color = "white";
	wholeMenu["Обработка Текста"].hasSub = 0;
	wholeMenu["Обработка Текста"].link = "software_development_text_rus.html";
	wholeMenu["Обработка Текста"].html = 'Обработка Текста';

}


return wholeMenu;
}


function  loadMenuSatanism(lang) {


var wholeMenu = {};


if (lang=="eng") {

	wholeMenu["● Satanism"] = {};
	wholeMenu["● Satanism"].id = "19";
	wholeMenu["● Satanism"].color = "green";
	wholeMenu["● Satanism"].hasSub = 1;
	wholeMenu["● Satanism"].link = "";
	wholeMenu["● Satanism"].html = '&#9679; Satanism';

	wholeMenu["✘ Atheistic"] = {};
	wholeMenu["✘ Atheistic"].id = "19_1";
	wholeMenu["✘ Atheistic"].color = "green";
	wholeMenu["✘ Atheistic"].hasSub = 0;
	wholeMenu["✘ Atheistic"].link = "satanism_atheistic_eng.html";
	wholeMenu["✘ Atheistic"].html = '✘ Atheistic';

	wholeMenu["✔ Theistic"] = {};
	wholeMenu["✔ Theistic"].id = "19_2";
	wholeMenu["✔ Theistic"].color = "green";
	wholeMenu["✔ Theistic"].hasSub = 0;
	wholeMenu["✔ Theistic"].link = "satanism_theistic_eng.html";
	wholeMenu["✔ Theistic"].html = '✔ Theistic';


	wholeMenu["Symbolics"] = {};
	wholeMenu["Symbolics"].id = "19_5";
	wholeMenu["Symbolics"].color = "green";
	wholeMenu["Symbolics"].hasSub = 0;
	wholeMenu["Symbolics"].link = "satanism_simvoly_eng.html";
	wholeMenu["Symbolics"].html = 'Symbolics';

}




if (lang=="rus") {

	wholeMenu["● Сатанизм"] = {};
	wholeMenu["● Сатанизм"].id = "19";
	wholeMenu["● Сатанизм"].color = "green";
	wholeMenu["● Сатанизм"].hasSub = 1;
	wholeMenu["● Сатанизм"].link = "";
	wholeMenu["● Сатанизм"].html = '&#9679; Сатанизм';

	wholeMenu["✘ Атеистический"] = {};
	wholeMenu["✘ Атеистический"].id = "19_1";
	wholeMenu["✘ Атеистический"].color = "green";
	wholeMenu["✘ Атеистический"].hasSub = 0;
	wholeMenu["✘ Атеистический"].link = "satanism_atheistic_rus.html";
	wholeMenu["✘ Атеистический"].html = '✘ Атеистический';

	wholeMenu["✔ Теистический"] = {};
	wholeMenu["✔ Теистический"].id = "19_2";
	wholeMenu["✔ Теистический"].color = "green";
	wholeMenu["✔ Теистический"].hasSub = 0;
	wholeMenu["✔ Теистический"].link = "satanism_theistic_rus.html";
	wholeMenu["✔ Теистический"].html = '✔ Теистический';


	wholeMenu["Символика"] = {};
	wholeMenu["Символика"].id = "19_5";
	wholeMenu["Символика"].color = "green";
	wholeMenu["Символика"].hasSub = 0;
	wholeMenu["Символика"].link = "satanism_simvoly_rus.html";
	wholeMenu["Символика"].html = 'Символика';

}



return wholeMenu;
}



function  loadMenuPsychology(lang) {


var wholeMenu = {};


if (lang=="eng") {

	wholeMenu["● Psychology"] = {};
	wholeMenu["● Psychology"].id = "22";
	wholeMenu["● Psychology"].color = "green";
	wholeMenu["● Psychology"].hasSub = 1;
	wholeMenu["● Psychology"].link = "";
	wholeMenu["● Psychology"].html = '&#9679; Psychology';

	wholeMenu["✔ True"] = {};
	wholeMenu["✔ True"].id = "22_1";
	wholeMenu["✔ True"].color = "green";
	wholeMenu["✔ True"].hasSub = 0;
	wholeMenu["✔ True"].link = "psychology_true_eng.html";
	wholeMenu["✔ True"].html = '✔ True';

	wholeMenu["✘ Pseudo-"] = {};
	wholeMenu["✘ Pseudo-"].id = "22_2";
	wholeMenu["✘ Pseudo-"].color = "green";
	wholeMenu["✘ Pseudo-"].hasSub = 0;
	wholeMenu["✘ Pseudo-"].link = "psychology_pseudo_eng.html";
	wholeMenu["✘ Pseudo-"].html = '✘ Pseudo-';

	wholeMenu["Movies"] = {};
	wholeMenu["Movies"].id = "22_3";
	wholeMenu["Movies"].color = "green";
	wholeMenu["Movies"].hasSub = 0;
	wholeMenu["Movies"].link = "psychology_movies_eng.html";
	wholeMenu["Movies"].html = 'Movies';

}




if (lang=="rus") {

	wholeMenu["● Психология"] = {};
	wholeMenu["● Психология"].id = "22";
	wholeMenu["● Психология"].color = "green";
	wholeMenu["● Психология"].hasSub = 1;
	wholeMenu["● Психология"].link = "";
	wholeMenu["● Психология"].html = '&#9679; Психология';

	wholeMenu["✔ Труъ"] = {};
	wholeMenu["✔ Труъ"].id = "22_1";
	wholeMenu["✔ Труъ"].color = "green";
	wholeMenu["✔ Труъ"].hasSub = 0;
	wholeMenu["✔ Труъ"].link = "psychology_true_rus.html";
	wholeMenu["✔ Труъ"].html = '✔ Труъ';

	wholeMenu["✘ Псевдо-"] = {};
	wholeMenu["✘ Псевдо-"].id = "22_2";
	wholeMenu["✘ Псевдо-"].color = "green";
	wholeMenu["✘ Псевдо-"].hasSub = 0;
	wholeMenu["✘ Псевдо-"].link = "psychology_pseudo_rus.html";
	wholeMenu["✘ Псевдо-"].html = '✘ Псевдо-';

	wholeMenu["Фильмы"] = {};
	wholeMenu["Фильмы"].id = "22_3";
	wholeMenu["Фильмы"].color = "green";
	wholeMenu["Фильмы"].hasSub = 0;
	wholeMenu["Фильмы"].link = "psychology_movies_rus.html";
	wholeMenu["Фильмы"].html = 'Фильмы';

}

return wholeMenu;
}



function  loadMenuCountries(lang) {


var wholeMenu = {};


if (lang=="eng") {

	wholeMenu["● Countries"] = {};
	wholeMenu["● Countries"].id = "23";
	wholeMenu["● Countries"].color = "green";
	wholeMenu["● Countries"].hasSub = 1;
	wholeMenu["● Countries"].link = "";
	wholeMenu["● Countries"].html = '&#9679; Countries';

	wholeMenu["USSR"] = {};
	wholeMenu["USSR"].id = "23_1";
	wholeMenu["USSR"].color = "green";
	wholeMenu["USSR"].hasSub = 0;
	wholeMenu["USSR"].link = "countries_ussr_eng.html";
	wholeMenu["USSR"].html = 'USSR';


	wholeMenu["Ireland"] = {};
	wholeMenu["Ireland"].id = "23_2";
	wholeMenu["Ireland"].color = "green";
	wholeMenu["Ireland"].hasSub = 0;
	wholeMenu["Ireland"].link = "countries_ireland_eng.html";
	wholeMenu["Ireland"].html = 'Ireland';

}




if (lang=="rus") {

	wholeMenu["● Страны"] = {};
	wholeMenu["● Страны"].id = "23";
	wholeMenu["● Страны"].color = "green";
	wholeMenu["● Страны"].hasSub = 1;
	wholeMenu["● Страны"].link = "";
	wholeMenu["● Страны"].html = '&#9679; Страны';

	wholeMenu["СССР"] = {};
	wholeMenu["СССР"].id = "23_1";
	wholeMenu["СССР"].color = "green";
	wholeMenu["СССР"].hasSub = 0;
	wholeMenu["СССР"].link = "countries_ussr_rus.html";
	wholeMenu["СССР"].html = 'СССР';


	wholeMenu["Ирландия"] = {};
	wholeMenu["Ирландия"].id = "23_2";
	wholeMenu["Ирландия"].color = "green";
	wholeMenu["Ирландия"].hasSub = 0;
	wholeMenu["Ирландия"].link = "countries_ireland_rus.html";
	wholeMenu["Ирландия"].html = 'Ирландия';

}

return wholeMenu;
}



function  loadMenuPersonalities(lang) {


var wholeMenu = {};


if (lang=="eng") {

	wholeMenu["● Personalities"] = {};
	wholeMenu["● Personalities"].id = "25";
	wholeMenu["● Personalities"].color = "green";
	wholeMenu["● Personalities"].hasSub = 1;
	wholeMenu["● Personalities"].link = "";
	wholeMenu["● Personalities"].html = '&#9679; Personalities';

	wholeMenu["Ancient Rome"] = {};
	wholeMenu["Ancient Rome"].id = "25_1";
	wholeMenu["Ancient Rome"].color = "green";
	wholeMenu["Ancient Rome"].hasSub = 0;
	wholeMenu["Ancient Rome"].link = "personalities_ancient_rome_eng.html";
	wholeMenu["Ancient Rome"].html = 'Ancient Rome';

	wholeMenu["Middle Ages"] = {};
	wholeMenu["Middle Ages"].id = "25_2";
	wholeMenu["Middle Ages"].color = "green";
	wholeMenu["Middle Ages"].hasSub = 0;
	wholeMenu["Middle Ages"].link = "personalities_middle_ages_eng.html";
	wholeMenu["Middle Ages"].html = 'Middle Ages';

	wholeMenu["USSR"] = {};
	wholeMenu["USSR"].id = "25_3";
	wholeMenu["USSR"].color = "green";
	wholeMenu["USSR"].hasSub = 0;
	wholeMenu["USSR"].link = "personalities_ussr_eng.html";
	wholeMenu["USSR"].html = 'USSR';


}




if (lang=="rus") {

	wholeMenu["● Деятели"] = {};
	wholeMenu["● Деятели"].id = "25";
	wholeMenu["● Деятели"].color = "green";
	wholeMenu["● Деятели"].hasSub = 1;
	wholeMenu["● Деятели"].link = "";
	wholeMenu["● Деятели"].html = '&#9679; Деятели';

	wholeMenu["Древний Рим"] = {};
	wholeMenu["Древний Рим"].id = "25_1";
	wholeMenu["Древний Рим"].color = "green";
	wholeMenu["Древний Рим"].hasSub = 0;
	wholeMenu["Древний Рим"].link = "personalities_ancient_rome_rus.html";
	wholeMenu["Древний Рим"].html = 'Древний Рим';

	wholeMenu["Средние Века"] = {};
	wholeMenu["Средние Века"].id = "25_2";
	wholeMenu["Средние Века"].color = "green";
	wholeMenu["Средние Века"].hasSub = 0;
	wholeMenu["Средние Века"].link = "personalities_middle_ages_rus.html";
	wholeMenu["Средние Века"].html = 'Средние Века';

	wholeMenu["СССР"] = {};
	wholeMenu["СССР"].id = "25_3";
	wholeMenu["СССР"].color = "green";
	wholeMenu["СССР"].hasSub = 0;
	wholeMenu["СССР"].link = "personalities_ussr_rus.html";
	wholeMenu["СССР"].html = 'СССР';

}

return wholeMenu;
}



function  loadMenuNews(lang) {


var wholeMenu = {};


if (lang=="eng") {

	wholeMenu["● News"] = {};
	wholeMenu["● News"].id = "26";
	wholeMenu["● News"].color = "red";
	wholeMenu["● News"].hasSub = 1;
	wholeMenu["● News"].link = "";
	wholeMenu["● News"].html = '&#9679; News';

	wholeMenu["● CBS RSS Feed"] = {};
	wholeMenu["● CBS RSS Feed"].id = "26_3";
	wholeMenu["● CBS RSS Feed"].color = "red";
	wholeMenu["● CBS RSS Feed"].hasSub = 1;
	wholeMenu["● CBS RSS Feed"].link = "";
	wholeMenu["● CBS RSS Feed"].html = '&#9679; CBS RSS Feed';

	wholeMenu["CBS RSS Feed Top Stories"] = {};
	wholeMenu["CBS RSS Feed Top Stories"].id = "26_3_1";
	wholeMenu["CBS RSS Feed Top Stories"].color = "red";
	wholeMenu["CBS RSS Feed Top Stories"].hasSub = 0;
	wholeMenu["CBS RSS Feed Top Stories"].link = "news_eng.html?source=cbs&type=top";
	wholeMenu["CBS RSS Feed Top Stories"].html = 'Top Stories';

	wholeMenu["CBS RSS Feed U.S."] = {};
	wholeMenu["CBS RSS Feed U.S."].id = "26_3_2";
	wholeMenu["CBS RSS Feed U.S."].color = "red";
	wholeMenu["CBS RSS Feed U.S."].hasSub = 0;
	wholeMenu["CBS RSS Feed U.S."].link = "news_eng.html?source=cbs&type=us";
	wholeMenu["CBS RSS Feed U.S."].html = 'U.S.';

	wholeMenu["CBS RSS Feed Politics"] = {};
	wholeMenu["CBS RSS Feed Politics"].id = "26_3_3";
	wholeMenu["CBS RSS Feed Politics"].color = "red";
	wholeMenu["CBS RSS Feed Politics"].hasSub = 0;
	wholeMenu["CBS RSS Feed Politics"].link = "news_eng.html?source=cbs&type=politics";
	wholeMenu["CBS RSS Feed Politics"].html = 'Politics';

	wholeMenu["CBS RSS Feed World"] = {};
	wholeMenu["CBS RSS Feed World"].id = "26_3_4";
	wholeMenu["CBS RSS Feed World"].color = "red";
	wholeMenu["CBS RSS Feed World"].hasSub = 0;
	wholeMenu["CBS RSS Feed World"].link = "news_eng.html?source=cbs&type=world";
	wholeMenu["CBS RSS Feed World"].html = 'World';

	wholeMenu["CBS RSS Feed Health"] = {};
	wholeMenu["CBS RSS Feed Health"].id = "26_3_5";
	wholeMenu["CBS RSS Feed Health"].color = "red";
	wholeMenu["CBS RSS Feed Health"].hasSub = 0;
	wholeMenu["CBS RSS Feed Health"].link = "news_eng.html?source=cbs&type=health";
	wholeMenu["CBS RSS Feed Health"].html = 'Health';

	wholeMenu["CBS RSS Feed MoneyWatch"] = {};
	wholeMenu["CBS RSS Feed MoneyWatch"].id = "26_3_6";
	wholeMenu["CBS RSS Feed MoneyWatch"].color = "red";
	wholeMenu["CBS RSS Feed MoneyWatch"].hasSub = 0;
	wholeMenu["CBS RSS Feed MoneyWatch"].link = "news_eng.html?source=cbs&type=moneywatch";
	wholeMenu["CBS RSS Feed MoneyWatch"].html = 'MoneyWatch';

	wholeMenu["CBS RSS Feed Science"] = {};
	wholeMenu["CBS RSS Feed Science"].id = "26_3_7";
	wholeMenu["CBS RSS Feed Science"].color = "red";
	wholeMenu["CBS RSS Feed Science"].hasSub = 0;
	wholeMenu["CBS RSS Feed Science"].link = "news_eng.html?source=cbs&type=science";
	wholeMenu["CBS RSS Feed Science"].html = 'Science';

	wholeMenu["CBS RSS Feed Technology"] = {};
	wholeMenu["CBS RSS Feed Technology"].id = "26_3_8";
	wholeMenu["CBS RSS Feed Technology"].color = "red";
	wholeMenu["CBS RSS Feed Technology"].hasSub = 0;
	wholeMenu["CBS RSS Feed Technology"].link = "news_eng.html?source=cbs&type=technology";
	wholeMenu["CBS RSS Feed Technology"].html = 'Technology';

	wholeMenu["CBS RSS Feed Entertainment"] = {};
	wholeMenu["CBS RSS Feed Entertainment"].id = "26_3_9";
	wholeMenu["CBS RSS Feed Entertainment"].color = "red";
	wholeMenu["CBS RSS Feed Entertainment"].hasSub = 0;
	wholeMenu["CBS RSS Feed Entertainment"].link = "news_eng.html?source=cbs&type=entertainment";
	wholeMenu["CBS RSS Feed Entertainment"].html = 'Entertainment';

	wholeMenu["CBS RSS Feed Space"] = {};
	wholeMenu["CBS RSS Feed Space"].id = "26_3_10";
	wholeMenu["CBS RSS Feed Space"].color = "red";
	wholeMenu["CBS RSS Feed Space"].hasSub = 0;
	wholeMenu["CBS RSS Feed Space"].link = "news_eng.html?source=cbs&type=space";
	wholeMenu["CBS RSS Feed Space"].html = 'Space';

	wholeMenu["● NASA RSS Feed"] = {};
	wholeMenu["● NASA RSS Feed"].id = "26_2";
	wholeMenu["● NASA RSS Feed"].color = "red";
	wholeMenu["● NASA RSS Feed"].hasSub = 1;
	wholeMenu["● NASA RSS Feed"].link = "";
	wholeMenu["● NASA RSS Feed"].html = '&#9679; NASA RSS Feed';

	wholeMenu["NASA RSS Feed Releases"] = {};
	wholeMenu["NASA RSS Feed Releases"].id = "26_2_1";
	wholeMenu["NASA RSS Feed Releases"].color = "red";
	wholeMenu["NASA RSS Feed Releases"].hasSub = 0;
	wholeMenu["NASA RSS Feed Releases"].link = "news_eng.html?source=nasa&type=releases";
	wholeMenu["NASA RSS Feed Releases"].html = 'Releases';

	wholeMenu["NASA RSS Feed Recent"] = {};
	wholeMenu["NASA RSS Feed Recent"].id = "26_2_2";
	wholeMenu["NASA RSS Feed Recent"].color = "red";
	wholeMenu["NASA RSS Feed Recent"].hasSub = 0;
	wholeMenu["NASA RSS Feed Recent"].link = "news_eng.html?source=nasa&type=recent";
	wholeMenu["NASA RSS Feed Recent"].html = 'Recently Published Content';

	wholeMenu["NASA RSS Feed Image"] = {};
	wholeMenu["NASA RSS Feed Image"].id = "26_2_3";
	wholeMenu["NASA RSS Feed Image"].color = "red";
	wholeMenu["NASA RSS Feed Image"].hasSub = 0;
	wholeMenu["NASA RSS Feed Image"].link = "news_eng.html?source=nasa&type=image";
	wholeMenu["NASA RSS Feed Image"].html = 'Image of the Day';

	wholeMenu["NASA RSS Feed Technology"] = {};
	wholeMenu["NASA RSS Feed Technology"].id = "26_2_4";
	wholeMenu["NASA RSS Feed Technology"].color = "red";
	wholeMenu["NASA RSS Feed Technology"].hasSub = 0;
	wholeMenu["NASA RSS Feed Technology"].link = "news_eng.html?source=nasa&type=technology";
	wholeMenu["NASA RSS Feed Technology"].html = 'Technology';

	wholeMenu["NASA RSS Feed Aeronautics"] = {};
	wholeMenu["NASA RSS Feed Aeronautics"].id = "26_2_5";
	wholeMenu["NASA RSS Feed Aeronautics"].color = "red";
	wholeMenu["NASA RSS Feed Aeronautics"].hasSub = 0;
	wholeMenu["NASA RSS Feed Aeronautics"].link = "news_eng.html?source=nasa&type=aeronautics";
	wholeMenu["NASA RSS Feed Aeronautics"].html = 'Aeronautics';

	wholeMenu["NASA RSS Feed ISS"] = {};
	wholeMenu["NASA RSS Feed ISS"].id = "26_2_6";
	wholeMenu["NASA RSS Feed ISS"].color = "red";
	wholeMenu["NASA RSS Feed ISS"].hasSub = 0;
	wholeMenu["NASA RSS Feed ISS"].link = "news_eng.html?source=nasa&type=iss";
	wholeMenu["NASA RSS Feed ISS"].html = 'Space Station';

	wholeMenu["NASA RSS Feed Artemis"] = {};
	wholeMenu["NASA RSS Feed Artemis"].id = "26_2_7";
	wholeMenu["NASA RSS Feed Artemis"].color = "red";
	wholeMenu["NASA RSS Feed Artemis"].hasSub = 0;
	wholeMenu["NASA RSS Feed Artemis"].link = "news_eng.html?source=nasa&type=artemis";
	wholeMenu["NASA RSS Feed Artemis"].html = 'Artemis';

	wholeMenu["● Phys.org RSS Feed"] = {};
	wholeMenu["● Phys.org RSS Feed"].id = "26_1";
	wholeMenu["● Phys.org RSS Feed"].color = "red";
	wholeMenu["● Phys.org RSS Feed"].hasSub = 1;
	wholeMenu["● Phys.org RSS Feed"].link = "";
	wholeMenu["● Phys.org RSS Feed"].html = '&#9679; Phys.org RSS Feed';

	wholeMenu["Phys.org RSS Feed All Stories"] = {};
	wholeMenu["Phys.org RSS Feed All Stories"].id = "26_1_1";
	wholeMenu["Phys.org RSS Feed All Stories"].color = "red";
	wholeMenu["Phys.org RSS Feed All Stories"].hasSub = 0;
	wholeMenu["Phys.org RSS Feed All Stories"].link = "news_eng.html?source=phys.org&type=all";
	wholeMenu["Phys.org RSS Feed All Stories"].html = 'All Stories';

	wholeMenu["● Earth"] = {};
	wholeMenu["● Earth"].id = "26_1_2";
	wholeMenu["● Earth"].color = "red";
	wholeMenu["● Earth"].hasSub = 1;
	wholeMenu["● Earth"].link = "";
	wholeMenu["● Earth"].html = '&#9679; Earth';

	wholeMenu["Phys.org RSS Feed Earth Sciences"] = {};
	wholeMenu["Phys.org RSS Feed Earth Sciences"].id = "26_1_2_1";
	wholeMenu["Phys.org RSS Feed Earth Sciences"].color = "red";
	wholeMenu["Phys.org RSS Feed Earth Sciences"].hasSub = 0;
	wholeMenu["Phys.org RSS Feed Earth Sciences"].link = "news_eng.html?source=phys.org&type=earth";
	wholeMenu["Phys.org RSS Feed Earth Sciences"].html = 'Earth Sciences';

	wholeMenu["Phys.org RSS Feed Environment"] = {};
	wholeMenu["Phys.org RSS Feed Environment"].id = "26_1_2_2";
	wholeMenu["Phys.org RSS Feed Environment"].color = "red";
	wholeMenu["Phys.org RSS Feed Environment"].hasSub = 0;
	wholeMenu["Phys.org RSS Feed Environment"].link = "news_eng.html?source=phys.org&type=environment";
	wholeMenu["Phys.org RSS Feed Environment"].html = 'Environment';

	wholeMenu["● Other Sciences"] = {};
	wholeMenu["● Other Sciences"].id = "26_1_3";
	wholeMenu["● Other Sciences"].color = "red";
	wholeMenu["● Other Sciences"].hasSub = 1;
	wholeMenu["● Other Sciences"].link = "";
	wholeMenu["● Other Sciences"].html = '&#9679; Other Sciences';

	wholeMenu["Phys.org RSS Feed Archaeology"] = {};
	wholeMenu["Phys.org RSS Feed Archaeology"].id = "26_1_3_1";
	wholeMenu["Phys.org RSS Feed Archaeology"].color = "red";
	wholeMenu["Phys.org RSS Feed Archaeology"].hasSub = 0;
	wholeMenu["Phys.org RSS Feed Archaeology"].link = "news_eng.html?source=phys.org&type=archaeology";
	wholeMenu["Phys.org RSS Feed Archaeology"].html = 'Archaeology';

	wholeMenu["Phys.org RSS Feed Economics & Business"] = {};
	wholeMenu["Phys.org RSS Feed Economics & Business"].id = "26_1_3_2";
	wholeMenu["Phys.org RSS Feed Economics & Business"].color = "red";
	wholeMenu["Phys.org RSS Feed Economics & Business"].hasSub = 0;
	wholeMenu["Phys.org RSS Feed Economics & Business"].link = "news_eng.html?source=phys.org&type=economics";
	wholeMenu["Phys.org RSS Feed Economics & Business"].html = 'Economics & Business';

	wholeMenu["Phys.org RSS Feed Education"] = {};
	wholeMenu["Phys.org RSS Feed Education"].id = "26_1_3_3";
	wholeMenu["Phys.org RSS Feed Education"].color = "red";
	wholeMenu["Phys.org RSS Feed Education"].hasSub = 0;
	wholeMenu["Phys.org RSS Feed Education"].link = "news_eng.html?source=phys.org&type=education";
	wholeMenu["Phys.org RSS Feed Education"].html = 'Education';

	wholeMenu["Phys.org RSS Feed Mathematics"] = {};
	wholeMenu["Phys.org RSS Feed Mathematics"].id = "26_1_3_4";
	wholeMenu["Phys.org RSS Feed Mathematics"].color = "red";
	wholeMenu["Phys.org RSS Feed Mathematics"].hasSub = 0;
	wholeMenu["Phys.org RSS Feed Mathematics"].link = "news_eng.html?source=phys.org&type=mathematics";
	wholeMenu["Phys.org RSS Feed Mathematics"].html = 'Mathematics';

	wholeMenu["Phys.org RSS Feed Other"] = {};
	wholeMenu["Phys.org RSS Feed Other"].id = "26_1_3_5";
	wholeMenu["Phys.org RSS Feed Other"].color = "red";
	wholeMenu["Phys.org RSS Feed Other"].hasSub = 0;
	wholeMenu["Phys.org RSS Feed Other"].link = "news_eng.html?source=phys.org&type=other";
	wholeMenu["Phys.org RSS Feed Other"].html = 'Other';

	wholeMenu["Phys.org RSS Feed Political Science"] = {};
	wholeMenu["Phys.org RSS Feed Political Science"].id = "26_1_3_6";
	wholeMenu["Phys.org RSS Feed Political Science"].color = "red";
	wholeMenu["Phys.org RSS Feed Political Science"].hasSub = 0;
	wholeMenu["Phys.org RSS Feed Political Science"].link = "news_eng.html?source=phys.org&type=political";
	wholeMenu["Phys.org RSS Feed Political Science"].html = 'Political Science';

	wholeMenu["Phys.org RSS Feed Political Social Sciences"] = {};
	wholeMenu["Phys.org RSS Feed Political Social Sciences"].id = "26_1_3_7";
	wholeMenu["Phys.org RSS Feed Political Social Sciences"].color = "red";
	wholeMenu["Phys.org RSS Feed Political Social Sciences"].hasSub = 0;
	wholeMenu["Phys.org RSS Feed Political Social Sciences"].link = "news_eng.html?source=phys.org&type=social";
	wholeMenu["Phys.org RSS Feed Political Social Sciences"].html = 'Social Sciences';

	wholeMenu["● Nanotechnology"] = {};
	wholeMenu["● Nanotechnology"].id = "26_1_4";
	wholeMenu["● Nanotechnology"].color = "red";
	wholeMenu["● Nanotechnology"].hasSub = 1;
	wholeMenu["● Nanotechnology"].link = "";
	wholeMenu["● Nanotechnology"].html = '&#9679; Nanotechnology';

	wholeMenu["Phys.org RSS Feed Bio & Medicine"] = {};
	wholeMenu["Phys.org RSS Feed Bio & Medicine"].id = "26_1_4_1";
	wholeMenu["Phys.org RSS Feed Bio & Medicine"].color = "red";
	wholeMenu["Phys.org RSS Feed Bio & Medicine"].hasSub = 0;
	wholeMenu["Phys.org RSS Feed Bio & Medicine"].link = "news_eng.html?source=phys.org&type=bio";
	wholeMenu["Phys.org RSS Feed Bio & Medicine"].html = 'Bio & Medicine';

	wholeMenu["Phys.org RSS Feed Nanomaterials"] = {};
	wholeMenu["Phys.org RSS Feed Nanomaterials"].id = "26_1_4_2";
	wholeMenu["Phys.org RSS Feed Nanomaterials"].color = "red";
	wholeMenu["Phys.org RSS Feed Nanomaterials"].hasSub = 0;
	wholeMenu["Phys.org RSS Feed Nanomaterials"].link = "news_eng.html?source=phys.org&type=nanomaterials";
	wholeMenu["Phys.org RSS Feed Nanomaterials"].html = 'Nanomaterials';

	wholeMenu["Phys.org RSS Feed Nanophysics"] = {};
	wholeMenu["Phys.org RSS Feed Nanophysics"].id = "26_1_4_3";
	wholeMenu["Phys.org RSS Feed Nanophysics"].color = "red";
	wholeMenu["Phys.org RSS Feed Nanophysics"].hasSub = 0;
	wholeMenu["Phys.org RSS Feed Nanophysics"].link = "news_eng.html?source=phys.org&type=nanophysics";
	wholeMenu["Phys.org RSS Feed Nanophysics"].html = 'Nanophysics';

	wholeMenu["● Physics"] = {};
	wholeMenu["● Physics"].id = "26_1_5";
	wholeMenu["● Physics"].color = "red";
	wholeMenu["● Physics"].hasSub = 1;
	wholeMenu["● Physics"].link = "";
	wholeMenu["● Physics"].html = '&#9679; Physics';

	wholeMenu["Phys.org RSS Feed Condensed Matter"] = {};
	wholeMenu["Phys.org RSS Feed Condensed Matter"].id = "26_1_5_1";
	wholeMenu["Phys.org RSS Feed Condensed Matter"].color = "red";
	wholeMenu["Phys.org RSS Feed Condensed Matter"].hasSub = 0;
	wholeMenu["Phys.org RSS Feed Condensed Matter"].link = "news_eng.html?source=phys.org&type=condensed";
	wholeMenu["Phys.org RSS Feed Condensed Matter"].html = 'Condensed Matter';

	wholeMenu["Phys.org RSS Feed General Physics"] = {};
	wholeMenu["Phys.org RSS Feed General Physics"].id = "26_1_5_2";
	wholeMenu["Phys.org RSS Feed General Physics"].color = "red";
	wholeMenu["Phys.org RSS Feed General Physics"].hasSub = 0;
	wholeMenu["Phys.org RSS Feed General Physics"].link = "news_eng.html?source=phys.org&type=general";
	wholeMenu["Phys.org RSS Feed General Physics"].html = 'General Physics';

	wholeMenu["Phys.org RSS Feed Optics & Photonics"] = {};
	wholeMenu["Phys.org RSS Feed Optics & Photonics"].id = "26_1_5_3";
	wholeMenu["Phys.org RSS Feed Optics & Photonics"].color = "red";
	wholeMenu["Phys.org RSS Feed Optics & Photonics"].hasSub = 0;
	wholeMenu["Phys.org RSS Feed Optics & Photonics"].link = "news_eng.html?source=phys.org&type=optics";
	wholeMenu["Phys.org RSS Feed Optics & Photonics"].html = 'Optics & Photonics';

	wholeMenu["Phys.org RSS Feed Plasma Physics"] = {};
	wholeMenu["Phys.org RSS Feed Plasma Physics"].id = "26_1_5_4";
	wholeMenu["Phys.org RSS Feed Plasma Physics"].color = "red";
	wholeMenu["Phys.org RSS Feed Plasma Physics"].hasSub = 0;
	wholeMenu["Phys.org RSS Feed Plasma Physics"].link = "news_eng.html?source=phys.org&type=plasma";
	wholeMenu["Phys.org RSS Feed Plasma Physics"].html = 'Plasma Physics';

	wholeMenu["Phys.org RSS Feed Quantum Physics"] = {};
	wholeMenu["Phys.org RSS Feed Quantum Physics"].id = "26_1_5_5";
	wholeMenu["Phys.org RSS Feed Quantum Physics"].color = "red";
	wholeMenu["Phys.org RSS Feed Quantum Physics"].hasSub = 0;
	wholeMenu["Phys.org RSS Feed Quantum Physics"].link = "news_eng.html?source=phys.org&type=quantum";
	wholeMenu["Phys.org RSS Feed Quantum Physics"].html = 'Quantum Physics';

	wholeMenu["Phys.org RSS Feed Soft Matter"] = {};
	wholeMenu["Phys.org RSS Feed Soft Matter"].id = "26_1_5_6";
	wholeMenu["Phys.org RSS Feed Soft Matter"].color = "red";
	wholeMenu["Phys.org RSS Feed Soft Matter"].hasSub = 0;
	wholeMenu["Phys.org RSS Feed Soft Matter"].link = "news_eng.html?source=phys.org&type=soft";
	wholeMenu["Phys.org RSS Feed Soft Matter"].html = 'Soft Matter';

	wholeMenu["Phys.org RSS Feed Superconductivity"] = {};
	wholeMenu["Phys.org RSS Feed Superconductivity"].id = "26_1_5_7";
	wholeMenu["Phys.org RSS Feed Superconductivity"].color = "red";
	wholeMenu["Phys.org RSS Feed Superconductivity"].hasSub = 0;
	wholeMenu["Phys.org RSS Feed Superconductivity"].link = "news_eng.html?source=phys.org&type=superconductivity";
	wholeMenu["Phys.org RSS Feed Superconductivity"].html = 'Superconductivity';

	wholeMenu["● Astronomy & Space"] = {};
	wholeMenu["● Astronomy & Space"].id = "26_1_6";
	wholeMenu["● Astronomy & Space"].color = "red";
	wholeMenu["● Astronomy & Space"].hasSub = 1;
	wholeMenu["● Astronomy & Space"].link = "";
	wholeMenu["● Astronomy & Space"].html = '&#9679; Astronomy & Space';

	wholeMenu["Phys.org RSS Feed Astrobiology"] = {};
	wholeMenu["Phys.org RSS Feed Astrobiology"].id = "26_1_6_1";
	wholeMenu["Phys.org RSS Feed Astrobiology"].color = "red";
	wholeMenu["Phys.org RSS Feed Astrobiology"].hasSub = 0;
	wholeMenu["Phys.org RSS Feed Astrobiology"].link = "news_eng.html?source=phys.org&type=astrobiology";
	wholeMenu["Phys.org RSS Feed Astrobiology"].html = 'Astrobiology';

	wholeMenu["Phys.org RSS Feed Astronomy"] = {};
	wholeMenu["Phys.org RSS Feed Astronomy"].id = "26_1_6_2";
	wholeMenu["Phys.org RSS Feed Astronomy"].color = "red";
	wholeMenu["Phys.org RSS Feed Astronomy"].hasSub = 0;
	wholeMenu["Phys.org RSS Feed Astronomy"].link = "news_eng.html?source=phys.org&type=astronomy";
	wholeMenu["Phys.org RSS Feed Astronomy"].html = 'Astronomy';

	wholeMenu["Phys.org RSS Feed Planetary Sciences"] = {};
	wholeMenu["Phys.org RSS Feed Planetary Sciences"].id = "26_1_6_3";
	wholeMenu["Phys.org RSS Feed Planetary Sciences"].color = "red";
	wholeMenu["Phys.org RSS Feed Planetary Sciences"].hasSub = 0;
	wholeMenu["Phys.org RSS Feed Planetary Sciences"].link = "news_eng.html?source=phys.org&type=planetary";
	wholeMenu["Phys.org RSS Feed Planetary Sciences"].html = 'Planetary Sciences';

	wholeMenu["Phys.org RSS Feed Space Exploration"] = {};
	wholeMenu["Phys.org RSS Feed Space Exploration"].id = "26_1_6_4";
	wholeMenu["Phys.org RSS Feed Space Exploration"].color = "red";
	wholeMenu["Phys.org RSS Feed Space Exploration"].hasSub = 0;
	wholeMenu["Phys.org RSS Feed Space Exploration"].link = "news_eng.html?source=phys.org&type=space";
	wholeMenu["Phys.org RSS Feed Space Exploration"].html = 'Space Exploration';

	wholeMenu["● Biology"] = {};
	wholeMenu["● Biology"].id = "26_1_7";
	wholeMenu["● Biology"].color = "red";
	wholeMenu["● Biology"].hasSub = 1;
	wholeMenu["● Biology"].link = "";
	wholeMenu["● Biology"].html = '&#9679; Biology';

	wholeMenu["Phys.org RSS Feed Agriculture"] = {};
	wholeMenu["Phys.org RSS Feed Agriculture"].id = "26_1_7_1";
	wholeMenu["Phys.org RSS Feed Agriculture"].color = "red";
	wholeMenu["Phys.org RSS Feed Agriculture"].hasSub = 0;
	wholeMenu["Phys.org RSS Feed Agriculture"].link = "news_eng.html?source=phys.org&type=agriculture";
	wholeMenu["Phys.org RSS Feed Agriculture"].html = 'Agriculture';

	wholeMenu["Phys.org RSS Feed Biotechnology"] = {};
	wholeMenu["Phys.org RSS Feed Biotechnology"].id = "26_1_7_2";
	wholeMenu["Phys.org RSS Feed Biotechnology"].color = "red";
	wholeMenu["Phys.org RSS Feed Biotechnology"].hasSub = 0;
	wholeMenu["Phys.org RSS Feed Biotechnology"].link = "news_eng.html?source=phys.org&type=biotechnology";
	wholeMenu["Phys.org RSS Feed Biotechnology"].html = 'Biotechnology';

	wholeMenu["Phys.org RSS Feed Cell & Microbiology"] = {};
	wholeMenu["Phys.org RSS Feed Cell & Microbiology"].id = "26_1_7_3";
	wholeMenu["Phys.org RSS Feed Cell & Microbiology"].color = "red";
	wholeMenu["Phys.org RSS Feed Cell & Microbiology"].hasSub = 0;
	wholeMenu["Phys.org RSS Feed Cell & Microbiology"].link = "news_eng.html?source=phys.org&type=cell";
	wholeMenu["Phys.org RSS Feed Cell & Microbiology"].html = 'Cell & Microbiology';

	wholeMenu["Phys.org RSS Feed Ecology"] = {};
	wholeMenu["Phys.org RSS Feed Ecology"].id = "26_1_7_4";
	wholeMenu["Phys.org RSS Feed Ecology"].color = "red";
	wholeMenu["Phys.org RSS Feed Ecology"].hasSub = 0;
	wholeMenu["Phys.org RSS Feed Ecology"].link = "news_eng.html?source=phys.org&type=ecology";
	wholeMenu["Phys.org RSS Feed Ecology"].html = 'Ecology';

	wholeMenu["Phys.org RSS Feed Evolution"] = {};
	wholeMenu["Phys.org RSS Feed Evolution"].id = "26_1_7_5";
	wholeMenu["Phys.org RSS Feed Evolution"].color = "red";
	wholeMenu["Phys.org RSS Feed Evolution"].hasSub = 0;
	wholeMenu["Phys.org RSS Feed Evolution"].link = "news_eng.html?source=phys.org&type=evolution";
	wholeMenu["Phys.org RSS Feed Evolution"].html = 'Evolution';

	wholeMenu["Phys.org RSS Feed Molecular & Computational Biology"] = {};
	wholeMenu["Phys.org RSS Feed Molecular & Computational Biology"].id = "26_1_7_6";
	wholeMenu["Phys.org RSS Feed Molecular & Computational Biology"].color = "red";
	wholeMenu["Phys.org RSS Feed Molecular & Computational Biology"].hasSub = 0;
	wholeMenu["Phys.org RSS Feed Molecular & Computational Biology"].link = "news_eng.html?source=phys.org&type=molecular";
	wholeMenu["Phys.org RSS Feed Molecular & Computational Biology"].html = 'Molecular & Computational Biology';

	wholeMenu["Phys.org RSS Feed OtherB"] = {};
	wholeMenu["Phys.org RSS Feed OtherB"].id = "26_1_7_7";
	wholeMenu["Phys.org RSS Feed OtherB"].color = "red";
	wholeMenu["Phys.org RSS Feed OtherB"].hasSub = 0;
	wholeMenu["Phys.org RSS Feed OtherB"].link = "news_eng.html?source=phys.org&type=otherb";
	wholeMenu["Phys.org RSS Feed OtherB"].html = 'Other';

	wholeMenu["Phys.org RSS Feed Paleontology & Fossils"] = {};
	wholeMenu["Phys.org RSS Feed Paleontology & Fossils"].id = "26_1_7_8";
	wholeMenu["Phys.org RSS Feed Paleontology & Fossils"].color = "red";
	wholeMenu["Phys.org RSS Feed Paleontology & Fossils"].hasSub = 0;
	wholeMenu["Phys.org RSS Feed Paleontology & Fossils"].link = "news_eng.html?source=phys.org&type=paleontology";
	wholeMenu["Phys.org RSS Feed Paleontology & Fossils"].html = 'Paleontology & Fossils';

	wholeMenu["Phys.org RSS Feed Plants & Animals"] = {};
	wholeMenu["Phys.org RSS Feed Plants & Animals"].id = "26_1_7_9";
	wholeMenu["Phys.org RSS Feed Plants & Animals"].color = "red";
	wholeMenu["Phys.org RSS Feed Plants & Animals"].hasSub = 0;
	wholeMenu["Phys.org RSS Feed Plants & Animals"].link = "news_eng.html?source=phys.org&type=plants";
	wholeMenu["Phys.org RSS Feed Plants & Animals"].html = 'Plants & Animals';

	wholeMenu["Phys.org RSS Feed Veterinary Medicine"] = {};
	wholeMenu["Phys.org RSS Feed Veterinary Medicine"].id = "26_1_7_10";
	wholeMenu["Phys.org RSS Feed Veterinary Medicine"].color = "red";
	wholeMenu["Phys.org RSS Feed Veterinary Medicine"].hasSub = 0;
	wholeMenu["Phys.org RSS Feed Veterinary Medicine"].link = "news_eng.html?source=phys.org&type=veterinary";
	wholeMenu["Phys.org RSS Feed Veterinary Medicine"].html = 'Veterinary Medicine';

	wholeMenu["● Chemistry"] = {};
	wholeMenu["● Chemistry"].id = "26_1_8";
	wholeMenu["● Chemistry"].color = "red";
	wholeMenu["● Chemistry"].hasSub = 1;
	wholeMenu["● Chemistry"].link = "";
	wholeMenu["● Chemistry"].html = '&#9679; Chemistry';

	wholeMenu["Phys.org RSS Feed Analytical Chemistry"] = {};
	wholeMenu["Phys.org RSS Feed Analytical Chemistry"].id = "26_1_8_1";
	wholeMenu["Phys.org RSS Feed Analytical Chemistry"].color = "red";
	wholeMenu["Phys.org RSS Feed Analytical Chemistry"].hasSub = 0;
	wholeMenu["Phys.org RSS Feed Analytical Chemistry"].link = "news_eng.html?source=phys.org&type=analytical";
	wholeMenu["Phys.org RSS Feed Analytical Chemistry"].html = 'Analytical Chemistry';

	wholeMenu["Phys.org RSS Feed Biochemistry"] = {};
	wholeMenu["Phys.org RSS Feed Biochemistry"].id = "26_1_8_2";
	wholeMenu["Phys.org RSS Feed Biochemistry"].color = "red";
	wholeMenu["Phys.org RSS Feed Biochemistry"].hasSub = 0;
	wholeMenu["Phys.org RSS Feed Biochemistry"].link = "news_eng.html?source=phys.org&type=biochemistry";
	wholeMenu["Phys.org RSS Feed Biochemistry"].html = 'Biochemistry';

	wholeMenu["Phys.org RSS Feed Materials Science"] = {};
	wholeMenu["Phys.org RSS Feed Materials Science"].id = "26_1_8_3";
	wholeMenu["Phys.org RSS Feed Materials Science"].color = "red";
	wholeMenu["Phys.org RSS Feed Materials Science"].hasSub = 0;
	wholeMenu["Phys.org RSS Feed Materials Science"].link = "news_eng.html?source=phys.org&type=materials";
	wholeMenu["Phys.org RSS Feed Materials Science"].html = 'Materials Science';

	wholeMenu["Phys.org RSS Feed OtherC"] = {};
	wholeMenu["Phys.org RSS Feed OtherC"].id = "26_1_8_4";
	wholeMenu["Phys.org RSS Feed OtherC"].color = "red";
	wholeMenu["Phys.org RSS Feed OtherC"].hasSub = 0;
	wholeMenu["Phys.org RSS Feed OtherC"].link = "news_eng.html?source=phys.org&type=otherc";
	wholeMenu["Phys.org RSS Feed OtherC"].html = 'Other';

	wholeMenu["Phys.org RSS Feed Polymers"] = {};
	wholeMenu["Phys.org RSS Feed Polymers"].id = "26_1_8_5";
	wholeMenu["Phys.org RSS Feed Polymers"].color = "red";
	wholeMenu["Phys.org RSS Feed Polymers"].hasSub = 0;
	wholeMenu["Phys.org RSS Feed Polymers"].link = "news_eng.html?source=phys.org&type=polymers";
	wholeMenu["Phys.org RSS Feed Polymers"].html = 'Polymers';

	wholeMenu["Space.com RSS Feed"] = {};
	wholeMenu["Space.com RSS Feed"].id = "26_6";
	wholeMenu["Space.com RSS Feed"].color = "red";
	wholeMenu["Space.com RSS Feed"].hasSub = 0;
	wholeMenu["Space.com RSS Feed"].link = "news_eng.html?source=space.com&type=all";
	wholeMenu["Space.com RSS Feed"].html = 'Space.com RSS Feed';

	wholeMenu["● Wired RSS Feed"] = {};
	wholeMenu["● Wired RSS Feed"].id = "26_7";
	wholeMenu["● Wired RSS Feed"].color = "red";
	wholeMenu["● Wired RSS Feed"].hasSub = 1;
	wholeMenu["● Wired RSS Feed"].link = "";
	wholeMenu["● Wired RSS Feed"].html = '&#9679; Wired RSS Feed';

	wholeMenu["Wired RSS Feed Top"] = {};
	wholeMenu["Wired RSS Feed Top"].id = "26_7_1";
	wholeMenu["Wired RSS Feed Top"].color = "red";
	wholeMenu["Wired RSS Feed Top"].hasSub = 0;
	wholeMenu["Wired RSS Feed Top"].link = "news_eng.html?source=wired&type=top";
	wholeMenu["Wired RSS Feed Top"].html = 'Top';

	wholeMenu["Wired RSS Feed Business"] = {};
	wholeMenu["Wired RSS Feed Business"].id = "26_7_2";
	wholeMenu["Wired RSS Feed Business"].color = "red";
	wholeMenu["Wired RSS Feed Business"].hasSub = 0;
	wholeMenu["Wired RSS Feed Business"].link = "news_eng.html?source=wired&type=business";
	wholeMenu["Wired RSS Feed Business"].html = 'Business';

	wholeMenu["Wired RSS Feed Artificial Intelligence"] = {};
	wholeMenu["Wired RSS Feed Artificial Intelligence"].id = "26_7_3";
	wholeMenu["Wired RSS Feed Artificial Intelligence"].color = "red";
	wholeMenu["Wired RSS Feed Artificial Intelligence"].hasSub = 0;
	wholeMenu["Wired RSS Feed Artificial Intelligence"].link = "news_eng.html?source=wired&type=ai";
	wholeMenu["Wired RSS Feed Artificial Intelligence"].html = 'Artificial Intelligence';

	wholeMenu["Wired RSS Feed Culture"] = {};
	wholeMenu["Wired RSS Feed Culture"].id = "26_7_4";
	wholeMenu["Wired RSS Feed Culture"].color = "red";
	wholeMenu["Wired RSS Feed Culture"].hasSub = 0;
	wholeMenu["Wired RSS Feed Culture"].link = "news_eng.html?source=wired&type=culture";
	wholeMenu["Wired RSS Feed Culture"].html = 'Culture';

	wholeMenu["Wired RSS Feed Gear"] = {};
	wholeMenu["Wired RSS Feed Gear"].id = "26_7_5";
	wholeMenu["Wired RSS Feed Gear"].color = "red";
	wholeMenu["Wired RSS Feed Gear"].hasSub = 0;
	wholeMenu["Wired RSS Feed Gear"].link = "news_eng.html?source=wired&type=gear";
	wholeMenu["Wired RSS Feed Gear"].html = 'Gear';

	wholeMenu["Wired RSS Feed Ideas"] = {};
	wholeMenu["Wired RSS Feed Ideas"].id = "26_7_6";
	wholeMenu["Wired RSS Feed Ideas"].color = "red";
	wholeMenu["Wired RSS Feed Ideas"].hasSub = 0;
	wholeMenu["Wired RSS Feed Ideas"].link = "news_eng.html?source=wired&type=ideas";
	wholeMenu["Wired RSS Feed Ideas"].html = 'Ideas';

	wholeMenu["Wired RSS Feed Science"] = {};
	wholeMenu["Wired RSS Feed Science"].id = "26_7_7";
	wholeMenu["Wired RSS Feed Science"].color = "red";
	wholeMenu["Wired RSS Feed Science"].hasSub = 0;
	wholeMenu["Wired RSS Feed Science"].link = "news_eng.html?source=wired&type=science";
	wholeMenu["Wired RSS Feed Science"].html = 'Science';

	wholeMenu["Wired RSS Feed Security"] = {};
	wholeMenu["Wired RSS Feed Security"].id = "26_7_8";
	wholeMenu["Wired RSS Feed Security"].color = "red";
	wholeMenu["Wired RSS Feed Security"].hasSub = 0;
	wholeMenu["Wired RSS Feed Security"].link = "news_eng.html?source=wired&type=security";
	wholeMenu["Wired RSS Feed Security"].html = 'Security';

	wholeMenu["Wired RSS Feed Backchannel"] = {};
	wholeMenu["Wired RSS Feed Backchannel"].id = "26_7_9";
	wholeMenu["Wired RSS Feed Backchannel"].color = "red";
	wholeMenu["Wired RSS Feed Backchannel"].hasSub = 0;
	wholeMenu["Wired RSS Feed Backchannel"].link = "news_eng.html?source=wired&type=backchannel";
	wholeMenu["Wired RSS Feed Backchannel"].html = 'Backchannel';

	wholeMenu["Wired RSS Feed Guides"] = {};
	wholeMenu["Wired RSS Feed Guides"].id = "26_7_10";
	wholeMenu["Wired RSS Feed Guides"].color = "red";
	wholeMenu["Wired RSS Feed Guides"].hasSub = 0;
	wholeMenu["Wired RSS Feed Guides"].link = "news_eng.html?source=wired&type=guides";
	wholeMenu["Wired RSS Feed Guides"].html = 'Guides';

	wholeMenu["● Yahoo RSS Feed"] = {};
	wholeMenu["● Yahoo RSS Feed"].id = "26_5";
	wholeMenu["● Yahoo RSS Feed"].color = "red";
	wholeMenu["● Yahoo RSS Feed"].hasSub = 1;
	wholeMenu["● Yahoo RSS Feed"].link = "";
	wholeMenu["● Yahoo RSS Feed"].html = '&#9679; Yahoo RSS Feed';

	wholeMenu["Yahoo RSS Feed Top"] = {};
	wholeMenu["Yahoo RSS Feed Top"].id = "26_5_1";
	wholeMenu["Yahoo RSS Feed Top"].color = "red";
	wholeMenu["Yahoo RSS Feed Top"].hasSub = 0;
	wholeMenu["Yahoo RSS Feed Top"].link = "news_eng.html?source=yahoo&type=top";
	wholeMenu["Yahoo RSS Feed Top"].html = 'Top';

	wholeMenu["Yahoo RSS Feed World"] = {};
	wholeMenu["Yahoo RSS Feed World"].id = "26_5_2";
	wholeMenu["Yahoo RSS Feed World"].color = "red";
	wholeMenu["Yahoo RSS Feed World"].hasSub = 0;
	wholeMenu["Yahoo RSS Feed World"].link = "news_eng.html?source=yahoo&type=world";
	wholeMenu["Yahoo RSS Feed World"].html = 'World';

	wholeMenu["Yahoo RSS Feed US"] = {};
	wholeMenu["Yahoo RSS Feed US"].id = "26_5_3";
	wholeMenu["Yahoo RSS Feed US"].color = "red";
	wholeMenu["Yahoo RSS Feed US"].hasSub = 0;
	wholeMenu["Yahoo RSS Feed US"].link = "news_eng.html?source=yahoo&type=us";
	wholeMenu["Yahoo RSS Feed US"].html = 'US';

	wholeMenu["Yahoo RSS Feed Politics"] = {};
	wholeMenu["Yahoo RSS Feed Politics"].id = "26_5_4";
	wholeMenu["Yahoo RSS Feed Politics"].color = "red";
	wholeMenu["Yahoo RSS Feed Politics"].hasSub = 0;
	wholeMenu["Yahoo RSS Feed Politics"].link = "news_eng.html?source=yahoo&type=politics";
	wholeMenu["Yahoo RSS Feed Politics"].html = 'Politics';

	wholeMenu["Yahoo RSS Feed Health"] = {};
	wholeMenu["Yahoo RSS Feed Health"].id = "26_5_5";
	wholeMenu["Yahoo RSS Feed Health"].color = "red";
	wholeMenu["Yahoo RSS Feed Health"].hasSub = 0;
	wholeMenu["Yahoo RSS Feed Health"].link = "news_eng.html?source=yahoo&type=health";
	wholeMenu["Yahoo RSS Feed Health"].html = 'Health';

	wholeMenu["Yahoo RSS Feed Finance"] = {};
	wholeMenu["Yahoo RSS Feed Finance"].id = "26_5_6";
	wholeMenu["Yahoo RSS Feed Finance"].color = "red";
	wholeMenu["Yahoo RSS Feed Finance"].hasSub = 0;
	wholeMenu["Yahoo RSS Feed Finance"].link = "news_eng.html?source=yahoo&type=finance";
	wholeMenu["Yahoo RSS Feed Finance"].html = 'Finance';

	wholeMenu["Yahoo RSS Feed Science"] = {};
	wholeMenu["Yahoo RSS Feed Science"].id = "26_5_7";
	wholeMenu["Yahoo RSS Feed Science"].color = "red";
	wholeMenu["Yahoo RSS Feed Science"].hasSub = 0;
	wholeMenu["Yahoo RSS Feed Science"].link = "news_eng.html?source=yahoo&type=science";
	wholeMenu["Yahoo RSS Feed Science"].html = 'Science';

	wholeMenu["Yahoo RSS Feed Sports"] = {};
	wholeMenu["Yahoo RSS Feed Sports"].id = "26_5_8";
	wholeMenu["Yahoo RSS Feed Sports"].color = "red";
	wholeMenu["Yahoo RSS Feed Sports"].hasSub = 0;
	wholeMenu["Yahoo RSS Feed Sports"].link = "news_eng.html?source=yahoo&type=sports";
	wholeMenu["Yahoo RSS Feed Sports"].html = 'Sports';

	wholeMenu["Yahoo RSS Feed Entertainment"] = {};
	wholeMenu["Yahoo RSS Feed Entertainment"].id = "26_5_9";
	wholeMenu["Yahoo RSS Feed Entertainment"].color = "red";
	wholeMenu["Yahoo RSS Feed Entertainment"].hasSub = 0;
	wholeMenu["Yahoo RSS Feed Entertainment"].link = "news_eng.html?source=yahoo&type=entertainment";
	wholeMenu["Yahoo RSS Feed Entertainment"].html = 'Entertainment';

	wholeMenu["Yahoo RSS Feed Lifestyle"] = {};
	wholeMenu["Yahoo RSS Feed Lifestyle"].id = "26_5_10";
	wholeMenu["Yahoo RSS Feed Lifestyle"].color = "red";
	wholeMenu["Yahoo RSS Feed Lifestyle"].hasSub = 0;
	wholeMenu["Yahoo RSS Feed Lifestyle"].link = "news_eng.html?source=yahoo&type=lifestyle";
	wholeMenu["Yahoo RSS Feed Lifestyle"].html = 'Lifestyle';

	wholeMenu["● Yonhap RSS Feed"] = {};
	wholeMenu["● Yonhap RSS Feed"].id = "26_4";
	wholeMenu["● Yonhap RSS Feed"].color = "red";
	wholeMenu["● Yonhap RSS Feed"].hasSub = 1;
	wholeMenu["● Yonhap RSS Feed"].link = "";
	wholeMenu["● Yonhap RSS Feed"].html = '&#9679; Yonhap RSS Feed';

	wholeMenu["Yonhap RSS Feed All News"] = {};
	wholeMenu["Yonhap RSS Feed All News"].id = "26_4_1";
	wholeMenu["Yonhap RSS Feed All News"].color = "red";
	wholeMenu["Yonhap RSS Feed All News"].hasSub = 0;
	wholeMenu["Yonhap RSS Feed All News"].link = "news_eng.html?source=yonhap&type=all";
	wholeMenu["Yonhap RSS Feed All News"].html = 'All News';

	wholeMenu["Yonhap RSS Feed National"] = {};
	wholeMenu["Yonhap RSS Feed National"].id = "26_4_2";
	wholeMenu["Yonhap RSS Feed National"].color = "red";
	wholeMenu["Yonhap RSS Feed National"].hasSub = 0;
	wholeMenu["Yonhap RSS Feed National"].link = "news_eng.html?source=yonhap&type=national";
	wholeMenu["Yonhap RSS Feed National"].html = 'National';

	wholeMenu["Yonhap RSS Feed North Korea"] = {};
	wholeMenu["Yonhap RSS Feed North Korea"].id = "26_4_3";
	wholeMenu["Yonhap RSS Feed North Korea"].color = "red";
	wholeMenu["Yonhap RSS Feed North Korea"].hasSub = 0;
	wholeMenu["Yonhap RSS Feed North Korea"].link = "news_eng.html?source=yonhap&type=northkorea";
	wholeMenu["Yonhap RSS Feed North Korea"].html = 'North Korea';

	wholeMenu["Yonhap RSS Feed Economy/Finance"] = {};
	wholeMenu["Yonhap RSS Feed Economy/Finance"].id = "26_4_4";
	wholeMenu["Yonhap RSS Feed Economy/Finance"].color = "red";
	wholeMenu["Yonhap RSS Feed Economy/Finance"].hasSub = 0;
	wholeMenu["Yonhap RSS Feed Economy/Finance"].link = "news_eng.html?source=yonhap&type=economy";
	wholeMenu["Yonhap RSS Feed Economy/Finance"].html = 'Economy/Finance';

	wholeMenu["Yonhap RSS Feed BIZ"] = {};
	wholeMenu["Yonhap RSS Feed BIZ"].id = "26_4_5";
	wholeMenu["Yonhap RSS Feed BIZ"].color = "red";
	wholeMenu["Yonhap RSS Feed BIZ"].hasSub = 0;
	wholeMenu["Yonhap RSS Feed BIZ"].link = "news_eng.html?source=yonhap&type=biz";
	wholeMenu["Yonhap RSS Feed BIZ"].html = 'BIZ';

	wholeMenu["Yonhap RSS Feed Culture/K-pop"] = {};
	wholeMenu["Yonhap RSS Feed Culture/K-pop"].id = "26_4_6";
	wholeMenu["Yonhap RSS Feed Culture/K-pop"].color = "red";
	wholeMenu["Yonhap RSS Feed Culture/K-pop"].hasSub = 0;
	wholeMenu["Yonhap RSS Feed Culture/K-pop"].link = "news_eng.html?source=yonhap&type=culture";
	wholeMenu["Yonhap RSS Feed Culture/K-pop"].html = 'Culture/K-pop';

	wholeMenu["Yonhap RSS Feed Sports"] = {};
	wholeMenu["Yonhap RSS Feed Sports"].id = "26_4_7";
	wholeMenu["Yonhap RSS Feed Sports"].color = "red";
	wholeMenu["Yonhap RSS Feed Sports"].hasSub = 0;
	wholeMenu["Yonhap RSS Feed Sports"].link = "news_eng.html?source=yonhap&type=sports";
	wholeMenu["Yonhap RSS Feed Sports"].html = 'Sports';

}




if (lang=="rus") {


	wholeMenu["● Новости"] = {};
	wholeMenu["● Новости"].id = "26";
	wholeMenu["● Новости"].color = "red";
	wholeMenu["● Новости"].hasSub = 1;
	wholeMenu["● Новости"].link = "";
	wholeMenu["● Новости"].html = '&#9679; Новости';

	wholeMenu["● CBS RSS Строка"] = {};
	wholeMenu["● CBS RSS Строка"].id = "26_3";
	wholeMenu["● CBS RSS Строка"].color = "red";
	wholeMenu["● CBS RSS Строка"].hasSub = 1;
	wholeMenu["● CBS RSS Строка"].link = "";
	wholeMenu["● CBS RSS Строка"].html = '&#9679; CBS RSS Строка';

	wholeMenu["CBS RSS Строка Top Stories"] = {};
	wholeMenu["CBS RSS Строка Top Stories"].id = "26_3_1";
	wholeMenu["CBS RSS Строка Top Stories"].color = "red";
	wholeMenu["CBS RSS Строка Top Stories"].hasSub = 0;
	wholeMenu["CBS RSS Строка Top Stories"].link = "news_rus.html?source=cbs&type=top";
	wholeMenu["CBS RSS Строка Top Stories"].html = 'Top Stories';

	wholeMenu["CBS RSS Строка U.S."] = {};
	wholeMenu["CBS RSS Строка U.S."].id = "26_3_2";
	wholeMenu["CBS RSS Строка U.S."].color = "red";
	wholeMenu["CBS RSS Строка U.S."].hasSub = 0;
	wholeMenu["CBS RSS Строка U.S."].link = "news_rus.html?source=cbs&type=us";
	wholeMenu["CBS RSS Строка U.S."].html = 'U.S.';

	wholeMenu["CBS RSS Строка Politics"] = {};
	wholeMenu["CBS RSS Строка Politics"].id = "26_3_3";
	wholeMenu["CBS RSS Строка Politics"].color = "red";
	wholeMenu["CBS RSS Строка Politics"].hasSub = 0;
	wholeMenu["CBS RSS Строка Politics"].link = "news_rus.html?source=cbs&type=politics";
	wholeMenu["CBS RSS Строка Politics"].html = 'Politics';

	wholeMenu["CBS RSS Строка World"] = {};
	wholeMenu["CBS RSS Строка World"].id = "26_3_4";
	wholeMenu["CBS RSS Строка World"].color = "red";
	wholeMenu["CBS RSS Строка World"].hasSub = 0;
	wholeMenu["CBS RSS Строка World"].link = "news_rus.html?source=cbs&type=world";
	wholeMenu["CBS RSS Строка World"].html = 'World';

	wholeMenu["CBS RSS Строка Health"] = {};
	wholeMenu["CBS RSS Строка Health"].id = "26_3_5";
	wholeMenu["CBS RSS Строка Health"].color = "red";
	wholeMenu["CBS RSS Строка Health"].hasSub = 0;
	wholeMenu["CBS RSS Строка Health"].link = "news_rus.html?source=cbs&type=health";
	wholeMenu["CBS RSS Строка Health"].html = 'Health';

	wholeMenu["CBS RSS Строка MoneyWatch"] = {};
	wholeMenu["CBS RSS Строка MoneyWatch"].id = "26_3_6";
	wholeMenu["CBS RSS Строка MoneyWatch"].color = "red";
	wholeMenu["CBS RSS Строка MoneyWatch"].hasSub = 0;
	wholeMenu["CBS RSS Строка MoneyWatch"].link = "news_rus.html?source=cbs&type=moneywatch";
	wholeMenu["CBS RSS Строка MoneyWatch"].html = 'MoneyWatch';

	wholeMenu["CBS RSS Строка Science"] = {};
	wholeMenu["CBS RSS Строка Science"].id = "26_3_7";
	wholeMenu["CBS RSS Строка Science"].color = "red";
	wholeMenu["CBS RSS Строка Science"].hasSub = 0;
	wholeMenu["CBS RSS Строка Science"].link = "news_rus.html?source=cbs&type=science";
	wholeMenu["CBS RSS Строка Science"].html = 'Science';

	wholeMenu["CBS RSS Строка Technology"] = {};
	wholeMenu["CBS RSS Строка Technology"].id = "26_3_8";
	wholeMenu["CBS RSS Строка Technology"].color = "red";
	wholeMenu["CBS RSS Строка Technology"].hasSub = 0;
	wholeMenu["CBS RSS Строка Technology"].link = "news_rus.html?source=cbs&type=technology";
	wholeMenu["CBS RSS Строка Technology"].html = 'Technology';

	wholeMenu["CBS RSS Строка Entertainment"] = {};
	wholeMenu["CBS RSS Строка Entertainment"].id = "26_3_9";
	wholeMenu["CBS RSS Строка Entertainment"].color = "red";
	wholeMenu["CBS RSS Строка Entertainment"].hasSub = 0;
	wholeMenu["CBS RSS Строка Entertainment"].link = "news_rus.html?source=cbs&type=entertainment";
	wholeMenu["CBS RSS Строка Entertainment"].html = 'Entertainment';

	wholeMenu["CBS RSS Строка Space"] = {};
	wholeMenu["CBS RSS Строка Space"].id = "26_3_10";
	wholeMenu["CBS RSS Строка Space"].color = "red";
	wholeMenu["CBS RSS Строка Space"].hasSub = 0;
	wholeMenu["CBS RSS Строка Space"].link = "news_rus.html?source=cbs&type=space";
	wholeMenu["CBS RSS Строка Space"].html = 'Space';

	wholeMenu["● NASA RSS Строка"] = {};
	wholeMenu["● NASA RSS Строка"].id = "26_2";
	wholeMenu["● NASA RSS Строка"].color = "red";
	wholeMenu["● NASA RSS Строка"].hasSub = 1;
	wholeMenu["● NASA RSS Строка"].link = "";
	wholeMenu["● NASA RSS Строка"].html = '&#9679; NASA RSS Строка';

	wholeMenu["NASA RSS Строка Releases"] = {};
	wholeMenu["NASA RSS Строка Releases"].id = "26_2_1";
	wholeMenu["NASA RSS Строка Releases"].color = "red";
	wholeMenu["NASA RSS Строка Releases"].hasSub = 0;
	wholeMenu["NASA RSS Строка Releases"].link = "news_rus.html?source=nasa&type=releases";
	wholeMenu["NASA RSS Строка Releases"].html = 'Releases';

	wholeMenu["NASA RSS Строка Recent"] = {};
	wholeMenu["NASA RSS Строка Recent"].id = "26_2_2";
	wholeMenu["NASA RSS Строка Recent"].color = "red";
	wholeMenu["NASA RSS Строка Recent"].hasSub = 0;
	wholeMenu["NASA RSS Строка Recent"].link = "news_rus.html?source=nasa&type=recent";
	wholeMenu["NASA RSS Строка Recent"].html = 'Recently Published Content';

	wholeMenu["NASA RSS Строка Image"] = {};
	wholeMenu["NASA RSS Строка Image"].id = "26_2_3";
	wholeMenu["NASA RSS Строка Image"].color = "red";
	wholeMenu["NASA RSS Строка Image"].hasSub = 0;
	wholeMenu["NASA RSS Строка Image"].link = "news_rus.html?source=nasa&type=image";
	wholeMenu["NASA RSS Строка Image"].html = 'Image of the Day';

	wholeMenu["NASA RSS Строка Technology"] = {};
	wholeMenu["NASA RSS Строка Technology"].id = "26_2_4";
	wholeMenu["NASA RSS Строка Technology"].color = "red";
	wholeMenu["NASA RSS Строка Technology"].hasSub = 0;
	wholeMenu["NASA RSS Строка Technology"].link = "news_rus.html?source=nasa&type=technology";
	wholeMenu["NASA RSS Строка Technology"].html = 'Technology';

	wholeMenu["NASA RSS Строка Aeronautics"] = {};
	wholeMenu["NASA RSS Строка Aeronautics"].id = "26_2_5";
	wholeMenu["NASA RSS Строка Aeronautics"].color = "red";
	wholeMenu["NASA RSS Строка Aeronautics"].hasSub = 0;
	wholeMenu["NASA RSS Строка Aeronautics"].link = "news_rus.html?source=nasa&type=aeronautics";
	wholeMenu["NASA RSS Строка Aeronautics"].html = 'Aeronautics';

	wholeMenu["NASA RSS Строка ISS"] = {};
	wholeMenu["NASA RSS Строка ISS"].id = "26_2_6";
	wholeMenu["NASA RSS Строка ISS"].color = "red";
	wholeMenu["NASA RSS Строка ISS"].hasSub = 0;
	wholeMenu["NASA RSS Строка ISS"].link = "news_rus.html?source=nasa&type=iss";
	wholeMenu["NASA RSS Строка ISS"].html = 'Space Station';

	wholeMenu["NASA RSS Строка Artemis"] = {};
	wholeMenu["NASA RSS Строка Artemis"].id = "26_2_7";
	wholeMenu["NASA RSS Строка Artemis"].color = "red";
	wholeMenu["NASA RSS Строка Artemis"].hasSub = 0;
	wholeMenu["NASA RSS Строка Artemis"].link = "news_rus.html?source=nasa&type=artemis";
	wholeMenu["NASA RSS Строка Artemis"].html = 'Artemis';

	wholeMenu["● Phys.org RSS Строка"] = {};
	wholeMenu["● Phys.org RSS Строка"].id = "26_1";
	wholeMenu["● Phys.org RSS Строка"].color = "red";
	wholeMenu["● Phys.org RSS Строка"].hasSub = 1;
	wholeMenu["● Phys.org RSS Строка"].link = "";
	wholeMenu["● Phys.org RSS Строка"].html = '&#9679; Phys.org RSS Строка';

	wholeMenu["Phys.org RSS Строка All Stories"] = {};
	wholeMenu["Phys.org RSS Строка All Stories"].id = "26_1_1";
	wholeMenu["Phys.org RSS Строка All Stories"].color = "red";
	wholeMenu["Phys.org RSS Строка All Stories"].hasSub = 0;
	wholeMenu["Phys.org RSS Строка All Stories"].link = "news_rus.html?source=phys.org&type=all";
	wholeMenu["Phys.org RSS Строка All Stories"].html = 'All Stories';

	wholeMenu["● Earth"] = {};
	wholeMenu["● Earth"].id = "26_1_2";
	wholeMenu["● Earth"].color = "red";
	wholeMenu["● Earth"].hasSub = 1;
	wholeMenu["● Earth"].link = "";
	wholeMenu["● Earth"].html = '&#9679; Earth';

	wholeMenu["Phys.org RSS Строка Earth Sciences"] = {};
	wholeMenu["Phys.org RSS Строка Earth Sciences"].id = "26_1_2_1";
	wholeMenu["Phys.org RSS Строка Earth Sciences"].color = "red";
	wholeMenu["Phys.org RSS Строка Earth Sciences"].hasSub = 0;
	wholeMenu["Phys.org RSS Строка Earth Sciences"].link = "news_rus.html?source=phys.org&type=earth";
	wholeMenu["Phys.org RSS Строка Earth Sciences"].html = 'Earth Sciences';

	wholeMenu["Phys.org RSS Строка Environment"] = {};
	wholeMenu["Phys.org RSS Строка Environment"].id = "26_1_2_2";
	wholeMenu["Phys.org RSS Строка Environment"].color = "red";
	wholeMenu["Phys.org RSS Строка Environment"].hasSub = 0;
	wholeMenu["Phys.org RSS Строка Environment"].link = "news_rus.html?source=phys.org&type=environment";
	wholeMenu["Phys.org RSS Строка Environment"].html = 'Environment';

	wholeMenu["● Other Sciences"] = {};
	wholeMenu["● Other Sciences"].id = "26_1_3";
	wholeMenu["● Other Sciences"].color = "red";
	wholeMenu["● Other Sciences"].hasSub = 1;
	wholeMenu["● Other Sciences"].link = "";
	wholeMenu["● Other Sciences"].html = '&#9679; Other Sciences';

	wholeMenu["Phys.org RSS Строка Archaeology"] = {};
	wholeMenu["Phys.org RSS Строка Archaeology"].id = "26_1_3_1";
	wholeMenu["Phys.org RSS Строка Archaeology"].color = "red";
	wholeMenu["Phys.org RSS Строка Archaeology"].hasSub = 0;
	wholeMenu["Phys.org RSS Строка Archaeology"].link = "news_rus.html?source=phys.org&type=archaeology";
	wholeMenu["Phys.org RSS Строка Archaeology"].html = 'Archaeology';

	wholeMenu["Phys.org RSS Строка Economics & Business"] = {};
	wholeMenu["Phys.org RSS Строка Economics & Business"].id = "26_1_3_2";
	wholeMenu["Phys.org RSS Строка Economics & Business"].color = "red";
	wholeMenu["Phys.org RSS Строка Economics & Business"].hasSub = 0;
	wholeMenu["Phys.org RSS Строка Economics & Business"].link = "news_rus.html?source=phys.org&type=economics";
	wholeMenu["Phys.org RSS Строка Economics & Business"].html = 'Economics & Business';

	wholeMenu["Phys.org RSS Строка Education"] = {};
	wholeMenu["Phys.org RSS Строка Education"].id = "26_1_3_3";
	wholeMenu["Phys.org RSS Строка Education"].color = "red";
	wholeMenu["Phys.org RSS Строка Education"].hasSub = 0;
	wholeMenu["Phys.org RSS Строка Education"].link = "news_rus.html?source=phys.org&type=education";
	wholeMenu["Phys.org RSS Строка Education"].html = 'Education';

	wholeMenu["Phys.org RSS Строка Mathematics"] = {};
	wholeMenu["Phys.org RSS Строка Mathematics"].id = "26_1_3_4";
	wholeMenu["Phys.org RSS Строка Mathematics"].color = "red";
	wholeMenu["Phys.org RSS Строка Mathematics"].hasSub = 0;
	wholeMenu["Phys.org RSS Строка Mathematics"].link = "news_rus.html?source=phys.org&type=mathematics";
	wholeMenu["Phys.org RSS Строка Mathematics"].html = 'Mathematics';

	wholeMenu["Phys.org RSS Строка Other"] = {};
	wholeMenu["Phys.org RSS Строка Other"].id = "26_1_3_5";
	wholeMenu["Phys.org RSS Строка Other"].color = "red";
	wholeMenu["Phys.org RSS Строка Other"].hasSub = 0;
	wholeMenu["Phys.org RSS Строка Other"].link = "news_rus.html?source=phys.org&type=other";
	wholeMenu["Phys.org RSS Строка Other"].html = 'Other';

	wholeMenu["Phys.org RSS Строка Political Science"] = {};
	wholeMenu["Phys.org RSS Строка Political Science"].id = "26_1_3_6";
	wholeMenu["Phys.org RSS Строка Political Science"].color = "red";
	wholeMenu["Phys.org RSS Строка Political Science"].hasSub = 0;
	wholeMenu["Phys.org RSS Строка Political Science"].link = "news_rus.html?source=phys.org&type=political";
	wholeMenu["Phys.org RSS Строка Political Science"].html = 'Political Science';

	wholeMenu["Phys.org RSS Строка Political Social Sciences"] = {};
	wholeMenu["Phys.org RSS Строка Political Social Sciences"].id = "26_1_3_7";
	wholeMenu["Phys.org RSS Строка Political Social Sciences"].color = "red";
	wholeMenu["Phys.org RSS Строка Political Social Sciences"].hasSub = 0;
	wholeMenu["Phys.org RSS Строка Political Social Sciences"].link = "news_rus.html?source=phys.org&type=social";
	wholeMenu["Phys.org RSS Строка Political Social Sciences"].html = 'Social Sciences';

	wholeMenu["● Nanotechnology"] = {};
	wholeMenu["● Nanotechnology"].id = "26_1_4";
	wholeMenu["● Nanotechnology"].color = "red";
	wholeMenu["● Nanotechnology"].hasSub = 1;
	wholeMenu["● Nanotechnology"].link = "";
	wholeMenu["● Nanotechnology"].html = '&#9679; Nanotechnology';

	wholeMenu["Phys.org RSS Строка Bio & Medicine"] = {};
	wholeMenu["Phys.org RSS Строка Bio & Medicine"].id = "26_1_4_1";
	wholeMenu["Phys.org RSS Строка Bio & Medicine"].color = "red";
	wholeMenu["Phys.org RSS Строка Bio & Medicine"].hasSub = 0;
	wholeMenu["Phys.org RSS Строка Bio & Medicine"].link = "news_rus.html?source=phys.org&type=bio";
	wholeMenu["Phys.org RSS Строка Bio & Medicine"].html = 'Bio & Medicine';

	wholeMenu["Phys.org RSS Строка Nanomaterials"] = {};
	wholeMenu["Phys.org RSS Строка Nanomaterials"].id = "26_1_4_2";
	wholeMenu["Phys.org RSS Строка Nanomaterials"].color = "red";
	wholeMenu["Phys.org RSS Строка Nanomaterials"].hasSub = 0;
	wholeMenu["Phys.org RSS Строка Nanomaterials"].link = "news_rus.html?source=phys.org&type=nanomaterials";
	wholeMenu["Phys.org RSS Строка Nanomaterials"].html = 'Nanomaterials';

	wholeMenu["Phys.org RSS Строка Nanophysics"] = {};
	wholeMenu["Phys.org RSS Строка Nanophysics"].id = "26_1_4_3";
	wholeMenu["Phys.org RSS Строка Nanophysics"].color = "red";
	wholeMenu["Phys.org RSS Строка Nanophysics"].hasSub = 0;
	wholeMenu["Phys.org RSS Строка Nanophysics"].link = "news_rus.html?source=phys.org&type=nanophysics";
	wholeMenu["Phys.org RSS Строка Nanophysics"].html = 'Nanophysics';

	wholeMenu["● Physics"] = {};
	wholeMenu["● Physics"].id = "26_1_5";
	wholeMenu["● Physics"].color = "red";
	wholeMenu["● Physics"].hasSub = 1;
	wholeMenu["● Physics"].link = "";
	wholeMenu["● Physics"].html = '&#9679; Physics';

	wholeMenu["Phys.org RSS Строка Condensed Matter"] = {};
	wholeMenu["Phys.org RSS Строка Condensed Matter"].id = "26_1_5_1";
	wholeMenu["Phys.org RSS Строка Condensed Matter"].color = "red";
	wholeMenu["Phys.org RSS Строка Condensed Matter"].hasSub = 0;
	wholeMenu["Phys.org RSS Строка Condensed Matter"].link = "news_rus.html?source=phys.org&type=condensed";
	wholeMenu["Phys.org RSS Строка Condensed Matter"].html = 'Condensed Matter';

	wholeMenu["Phys.org RSS Строка General Physics"] = {};
	wholeMenu["Phys.org RSS Строка General Physics"].id = "26_1_5_2";
	wholeMenu["Phys.org RSS Строка General Physics"].color = "red";
	wholeMenu["Phys.org RSS Строка General Physics"].hasSub = 0;
	wholeMenu["Phys.org RSS Строка General Physics"].link = "news_rus.html?source=phys.org&type=general";
	wholeMenu["Phys.org RSS Строка General Physics"].html = 'General Physics';

	wholeMenu["Phys.org RSS Строка Optics & Photonics"] = {};
	wholeMenu["Phys.org RSS Строка Optics & Photonics"].id = "26_1_5_3";
	wholeMenu["Phys.org RSS Строка Optics & Photonics"].color = "red";
	wholeMenu["Phys.org RSS Строка Optics & Photonics"].hasSub = 0;
	wholeMenu["Phys.org RSS Строка Optics & Photonics"].link = "news_rus.html?source=phys.org&type=optics";
	wholeMenu["Phys.org RSS Строка Optics & Photonics"].html = 'Optics & Photonics';

	wholeMenu["Phys.org RSS Строка Plasma Physics"] = {};
	wholeMenu["Phys.org RSS Строка Plasma Physics"].id = "26_1_5_4";
	wholeMenu["Phys.org RSS Строка Plasma Physics"].color = "red";
	wholeMenu["Phys.org RSS Строка Plasma Physics"].hasSub = 0;
	wholeMenu["Phys.org RSS Строка Plasma Physics"].link = "news_rus.html?source=phys.org&type=plasma";
	wholeMenu["Phys.org RSS Строка Plasma Physics"].html = 'Plasma Physics';

	wholeMenu["Phys.org RSS Строка Quantum Physics"] = {};
	wholeMenu["Phys.org RSS Строка Quantum Physics"].id = "26_1_5_5";
	wholeMenu["Phys.org RSS Строка Quantum Physics"].color = "red";
	wholeMenu["Phys.org RSS Строка Quantum Physics"].hasSub = 0;
	wholeMenu["Phys.org RSS Строка Quantum Physics"].link = "news_rus.html?source=phys.org&type=quantum";
	wholeMenu["Phys.org RSS Строка Quantum Physics"].html = 'Quantum Physics';

	wholeMenu["Phys.org RSS Строка Soft Matter"] = {};
	wholeMenu["Phys.org RSS Строка Soft Matter"].id = "26_1_5_6";
	wholeMenu["Phys.org RSS Строка Soft Matter"].color = "red";
	wholeMenu["Phys.org RSS Строка Soft Matter"].hasSub = 0;
	wholeMenu["Phys.org RSS Строка Soft Matter"].link = "news_rus.html?source=phys.org&type=soft";
	wholeMenu["Phys.org RSS Строка Soft Matter"].html = 'Soft Matter';

	wholeMenu["Phys.org RSS Строка Superconductivity"] = {};
	wholeMenu["Phys.org RSS Строка Superconductivity"].id = "26_1_5_7";
	wholeMenu["Phys.org RSS Строка Superconductivity"].color = "red";
	wholeMenu["Phys.org RSS Строка Superconductivity"].hasSub = 0;
	wholeMenu["Phys.org RSS Строка Superconductivity"].link = "news_rus.html?source=phys.org&type=superconductivity";
	wholeMenu["Phys.org RSS Строка Superconductivity"].html = 'Superconductivity';

	wholeMenu["● Astronomy & Space"] = {};
	wholeMenu["● Astronomy & Space"].id = "26_1_6";
	wholeMenu["● Astronomy & Space"].color = "red";
	wholeMenu["● Astronomy & Space"].hasSub = 1;
	wholeMenu["● Astronomy & Space"].link = "";
	wholeMenu["● Astronomy & Space"].html = '&#9679; Astronomy & Space';

	wholeMenu["Phys.org RSS Строка Astrobiology"] = {};
	wholeMenu["Phys.org RSS Строка Astrobiology"].id = "26_1_6_1";
	wholeMenu["Phys.org RSS Строка Astrobiology"].color = "red";
	wholeMenu["Phys.org RSS Строка Astrobiology"].hasSub = 0;
	wholeMenu["Phys.org RSS Строка Astrobiology"].link = "news_rus.html?source=phys.org&type=astrobiology";
	wholeMenu["Phys.org RSS Строка Astrobiology"].html = 'Astrobiology';

	wholeMenu["Phys.org RSS Строка Astronomy"] = {};
	wholeMenu["Phys.org RSS Строка Astronomy"].id = "26_1_6_2";
	wholeMenu["Phys.org RSS Строка Astronomy"].color = "red";
	wholeMenu["Phys.org RSS Строка Astronomy"].hasSub = 0;
	wholeMenu["Phys.org RSS Строка Astronomy"].link = "news_rus.html?source=phys.org&type=astronomy";
	wholeMenu["Phys.org RSS Строка Astronomy"].html = 'Astronomy';

	wholeMenu["Phys.org RSS Строка Planetary Sciences"] = {};
	wholeMenu["Phys.org RSS Строка Planetary Sciences"].id = "26_1_6_3";
	wholeMenu["Phys.org RSS Строка Planetary Sciences"].color = "red";
	wholeMenu["Phys.org RSS Строка Planetary Sciences"].hasSub = 0;
	wholeMenu["Phys.org RSS Строка Planetary Sciences"].link = "news_rus.html?source=phys.org&type=planetary";
	wholeMenu["Phys.org RSS Строка Planetary Sciences"].html = 'Planetary Sciences';

	wholeMenu["Phys.org RSS Строка Space Exploration"] = {};
	wholeMenu["Phys.org RSS Строка Space Exploration"].id = "26_1_6_4";
	wholeMenu["Phys.org RSS Строка Space Exploration"].color = "red";
	wholeMenu["Phys.org RSS Строка Space Exploration"].hasSub = 0;
	wholeMenu["Phys.org RSS Строка Space Exploration"].link = "news_rus.html?source=phys.org&type=space";
	wholeMenu["Phys.org RSS Строка Space Exploration"].html = 'Space Exploration';

	wholeMenu["● Biology"] = {};
	wholeMenu["● Biology"].id = "26_1_7";
	wholeMenu["● Biology"].color = "red";
	wholeMenu["● Biology"].hasSub = 1;
	wholeMenu["● Biology"].link = "";
	wholeMenu["● Biology"].html = '&#9679; Biology';

	wholeMenu["Phys.org RSS Строка Agriculture"] = {};
	wholeMenu["Phys.org RSS Строка Agriculture"].id = "26_1_7_1";
	wholeMenu["Phys.org RSS Строка Agriculture"].color = "red";
	wholeMenu["Phys.org RSS Строка Agriculture"].hasSub = 0;
	wholeMenu["Phys.org RSS Строка Agriculture"].link = "news_rus.html?source=phys.org&type=agriculture";
	wholeMenu["Phys.org RSS Строка Agriculture"].html = 'Agriculture';

	wholeMenu["Phys.org RSS Строка Biotechnology"] = {};
	wholeMenu["Phys.org RSS Строка Biotechnology"].id = "26_1_7_2";
	wholeMenu["Phys.org RSS Строка Biotechnology"].color = "red";
	wholeMenu["Phys.org RSS Строка Biotechnology"].hasSub = 0;
	wholeMenu["Phys.org RSS Строка Biotechnology"].link = "news_rus.html?source=phys.org&type=biotechnology";
	wholeMenu["Phys.org RSS Строка Biotechnology"].html = 'Biotechnology';

	wholeMenu["Phys.org RSS Строка Cell & Microbiology"] = {};
	wholeMenu["Phys.org RSS Строка Cell & Microbiology"].id = "26_1_7_3";
	wholeMenu["Phys.org RSS Строка Cell & Microbiology"].color = "red";
	wholeMenu["Phys.org RSS Строка Cell & Microbiology"].hasSub = 0;
	wholeMenu["Phys.org RSS Строка Cell & Microbiology"].link = "news_rus.html?source=phys.org&type=cell";
	wholeMenu["Phys.org RSS Строка Cell & Microbiology"].html = 'Cell & Microbiology';

	wholeMenu["Phys.org RSS Строка Ecology"] = {};
	wholeMenu["Phys.org RSS Строка Ecology"].id = "26_1_7_4";
	wholeMenu["Phys.org RSS Строка Ecology"].color = "red";
	wholeMenu["Phys.org RSS Строка Ecology"].hasSub = 0;
	wholeMenu["Phys.org RSS Строка Ecology"].link = "news_rus.html?source=phys.org&type=ecology";
	wholeMenu["Phys.org RSS Строка Ecology"].html = 'Ecology';

	wholeMenu["Phys.org RSS Строка Evolution"] = {};
	wholeMenu["Phys.org RSS Строка Evolution"].id = "26_1_7_5";
	wholeMenu["Phys.org RSS Строка Evolution"].color = "red";
	wholeMenu["Phys.org RSS Строка Evolution"].hasSub = 0;
	wholeMenu["Phys.org RSS Строка Evolution"].link = "news_rus.html?source=phys.org&type=evolution";
	wholeMenu["Phys.org RSS Строка Evolution"].html = 'Evolution';

	wholeMenu["Phys.org RSS Строка Molecular & Computational Biology"] = {};
	wholeMenu["Phys.org RSS Строка Molecular & Computational Biology"].id = "26_1_7_6";
	wholeMenu["Phys.org RSS Строка Molecular & Computational Biology"].color = "red";
	wholeMenu["Phys.org RSS Строка Molecular & Computational Biology"].hasSub = 0;
	wholeMenu["Phys.org RSS Строка Molecular & Computational Biology"].link = "news_rus.html?source=phys.org&type=molecular";
	wholeMenu["Phys.org RSS Строка Molecular & Computational Biology"].html = 'Molecular & Computational Biology';

	wholeMenu["Phys.org RSS Строка OtherB"] = {};
	wholeMenu["Phys.org RSS Строка OtherB"].id = "26_1_7_7";
	wholeMenu["Phys.org RSS Строка OtherB"].color = "red";
	wholeMenu["Phys.org RSS Строка OtherB"].hasSub = 0;
	wholeMenu["Phys.org RSS Строка OtherB"].link = "news_rus.html?source=phys.org&type=otherb";
	wholeMenu["Phys.org RSS Строка OtherB"].html = 'Other';

	wholeMenu["Phys.org RSS Строка Paleontology & Fossils"] = {};
	wholeMenu["Phys.org RSS Строка Paleontology & Fossils"].id = "26_1_7_8";
	wholeMenu["Phys.org RSS Строка Paleontology & Fossils"].color = "red";
	wholeMenu["Phys.org RSS Строка Paleontology & Fossils"].hasSub = 0;
	wholeMenu["Phys.org RSS Строка Paleontology & Fossils"].link = "news_rus.html?source=phys.org&type=paleontology";
	wholeMenu["Phys.org RSS Строка Paleontology & Fossils"].html = 'Paleontology & Fossils';

	wholeMenu["Phys.org RSS Строка Plants & Animals"] = {};
	wholeMenu["Phys.org RSS Строка Plants & Animals"].id = "26_1_7_9";
	wholeMenu["Phys.org RSS Строка Plants & Animals"].color = "red";
	wholeMenu["Phys.org RSS Строка Plants & Animals"].hasSub = 0;
	wholeMenu["Phys.org RSS Строка Plants & Animals"].link = "news_rus.html?source=phys.org&type=plants";
	wholeMenu["Phys.org RSS Строка Plants & Animals"].html = 'Plants & Animals';

	wholeMenu["Phys.org RSS Строка Veterinary Medicine"] = {};
	wholeMenu["Phys.org RSS Строка Veterinary Medicine"].id = "26_1_7_10";
	wholeMenu["Phys.org RSS Строка Veterinary Medicine"].color = "red";
	wholeMenu["Phys.org RSS Строка Veterinary Medicine"].hasSub = 0;
	wholeMenu["Phys.org RSS Строка Veterinary Medicine"].link = "news_rus.html?source=phys.org&type=veterinary";
	wholeMenu["Phys.org RSS Строка Veterinary Medicine"].html = 'Veterinary Medicine';

	wholeMenu["● Chemistry"] = {};
	wholeMenu["● Chemistry"].id = "26_1_8";
	wholeMenu["● Chemistry"].color = "red";
	wholeMenu["● Chemistry"].hasSub = 1;
	wholeMenu["● Chemistry"].link = "";
	wholeMenu["● Chemistry"].html = '&#9679; Chemistry';

	wholeMenu["Phys.org RSS Строка Analytical Chemistry"] = {};
	wholeMenu["Phys.org RSS Строка Analytical Chemistry"].id = "26_1_8_1";
	wholeMenu["Phys.org RSS Строка Analytical Chemistry"].color = "red";
	wholeMenu["Phys.org RSS Строка Analytical Chemistry"].hasSub = 0;
	wholeMenu["Phys.org RSS Строка Analytical Chemistry"].link = "news_rus.html?source=phys.org&type=analytical";
	wholeMenu["Phys.org RSS Строка Analytical Chemistry"].html = 'Analytical Chemistry';

	wholeMenu["Phys.org RSS Строка Biochemistry"] = {};
	wholeMenu["Phys.org RSS Строка Biochemistry"].id = "26_1_8_2";
	wholeMenu["Phys.org RSS Строка Biochemistry"].color = "red";
	wholeMenu["Phys.org RSS Строка Biochemistry"].hasSub = 0;
	wholeMenu["Phys.org RSS Строка Biochemistry"].link = "news_rus.html?source=phys.org&type=biochemistry";
	wholeMenu["Phys.org RSS Строка Biochemistry"].html = 'Biochemistry';

	wholeMenu["Phys.org RSS Строка Materials Science"] = {};
	wholeMenu["Phys.org RSS Строка Materials Science"].id = "26_1_8_3";
	wholeMenu["Phys.org RSS Строка Materials Science"].color = "red";
	wholeMenu["Phys.org RSS Строка Materials Science"].hasSub = 0;
	wholeMenu["Phys.org RSS Строка Materials Science"].link = "news_rus.html?source=phys.org&type=materials";
	wholeMenu["Phys.org RSS Строка Materials Science"].html = 'Materials Science';

	wholeMenu["Phys.org RSS Строка OtherC"] = {};
	wholeMenu["Phys.org RSS Строка OtherC"].id = "26_1_8_4";
	wholeMenu["Phys.org RSS Строка OtherC"].color = "red";
	wholeMenu["Phys.org RSS Строка OtherC"].hasSub = 0;
	wholeMenu["Phys.org RSS Строка OtherC"].link = "news_rus.html?source=phys.org&type=otherc";
	wholeMenu["Phys.org RSS Строка OtherC"].html = 'Other';

	wholeMenu["Phys.org RSS Строка Polymers"] = {};
	wholeMenu["Phys.org RSS Строка Polymers"].id = "26_1_8_5";
	wholeMenu["Phys.org RSS Строка Polymers"].color = "red";
	wholeMenu["Phys.org RSS Строка Polymers"].hasSub = 0;
	wholeMenu["Phys.org RSS Строка Polymers"].link = "news_rus.html?source=phys.org&type=polymers";
	wholeMenu["Phys.org RSS Строка Polymers"].html = 'Polymers';

	wholeMenu["Space.com RSS Строка"] = {};
	wholeMenu["Space.com RSS Строка"].id = "26_6";
	wholeMenu["Space.com RSS Строка"].color = "red";
	wholeMenu["Space.com RSS Строка"].hasSub = 0;
	wholeMenu["Space.com RSS Строка"].link = "news_rus.html?source=space.com&type=all";
	wholeMenu["Space.com RSS Строка"].html = 'Space.com RSS Строка';

	wholeMenu["● Wired RSS Строка"] = {};
	wholeMenu["● Wired RSS Строка"].id = "26_7";
	wholeMenu["● Wired RSS Строка"].color = "red";
	wholeMenu["● Wired RSS Строка"].hasSub = 1;
	wholeMenu["● Wired RSS Строка"].link = "";
	wholeMenu["● Wired RSS Строка"].html = '&#9679; Wired RSS Строка';

	wholeMenu["Wired RSS Строка Top"] = {};
	wholeMenu["Wired RSS Строка Top"].id = "26_7_1";
	wholeMenu["Wired RSS Строка Top"].color = "red";
	wholeMenu["Wired RSS Строка Top"].hasSub = 0;
	wholeMenu["Wired RSS Строка Top"].link = "news_rus.html?source=wired&type=top";
	wholeMenu["Wired RSS Строка Top"].html = 'Top';

	wholeMenu["Wired RSS Строка Business"] = {};
	wholeMenu["Wired RSS Строка Business"].id = "26_7_2";
	wholeMenu["Wired RSS Строка Business"].color = "red";
	wholeMenu["Wired RSS Строка Business"].hasSub = 0;
	wholeMenu["Wired RSS Строка Business"].link = "news_rus.html?source=wired&type=business";
	wholeMenu["Wired RSS Строка Business"].html = 'Business';

	wholeMenu["Wired RSS Строка Artificial Intelligence"] = {};
	wholeMenu["Wired RSS Строка Artificial Intelligence"].id = "26_7_3";
	wholeMenu["Wired RSS Строка Artificial Intelligence"].color = "red";
	wholeMenu["Wired RSS Строка Artificial Intelligence"].hasSub = 0;
	wholeMenu["Wired RSS Строка Artificial Intelligence"].link = "news_rus.html?source=wired&type=ai";
	wholeMenu["Wired RSS Строка Artificial Intelligence"].html = 'Artificial Intelligence';

	wholeMenu["Wired RSS Строка Culture"] = {};
	wholeMenu["Wired RSS Строка Culture"].id = "26_7_4";
	wholeMenu["Wired RSS Строка Culture"].color = "red";
	wholeMenu["Wired RSS Строка Culture"].hasSub = 0;
	wholeMenu["Wired RSS Строка Culture"].link = "news_rus.html?source=wired&type=culture";
	wholeMenu["Wired RSS Строка Culture"].html = 'Culture';

	wholeMenu["Wired RSS Строка Gear"] = {};
	wholeMenu["Wired RSS Строка Gear"].id = "26_7_5";
	wholeMenu["Wired RSS Строка Gear"].color = "red";
	wholeMenu["Wired RSS Строка Gear"].hasSub = 0;
	wholeMenu["Wired RSS Строка Gear"].link = "news_rus.html?source=wired&type=gear";
	wholeMenu["Wired RSS Строка Gear"].html = 'Gear';

	wholeMenu["Wired RSS Строка Ideas"] = {};
	wholeMenu["Wired RSS Строка Ideas"].id = "26_7_6";
	wholeMenu["Wired RSS Строка Ideas"].color = "red";
	wholeMenu["Wired RSS Строка Ideas"].hasSub = 0;
	wholeMenu["Wired RSS Строка Ideas"].link = "news_rus.html?source=wired&type=ideas";
	wholeMenu["Wired RSS Строка Ideas"].html = 'Ideas';

	wholeMenu["Wired RSS Строка Science"] = {};
	wholeMenu["Wired RSS Строка Science"].id = "26_7_7";
	wholeMenu["Wired RSS Строка Science"].color = "red";
	wholeMenu["Wired RSS Строка Science"].hasSub = 0;
	wholeMenu["Wired RSS Строка Science"].link = "news_rus.html?source=wired&type=science";
	wholeMenu["Wired RSS Строка Science"].html = 'Science';

	wholeMenu["Wired RSS Строка Security"] = {};
	wholeMenu["Wired RSS Строка Security"].id = "26_7_8";
	wholeMenu["Wired RSS Строка Security"].color = "red";
	wholeMenu["Wired RSS Строка Security"].hasSub = 0;
	wholeMenu["Wired RSS Строка Security"].link = "news_rus.html?source=wired&type=security";
	wholeMenu["Wired RSS Строка Security"].html = 'Security';

	wholeMenu["Wired RSS Строка Backchannel"] = {};
	wholeMenu["Wired RSS Строка Backchannel"].id = "26_7_9";
	wholeMenu["Wired RSS Строка Backchannel"].color = "red";
	wholeMenu["Wired RSS Строка Backchannel"].hasSub = 0;
	wholeMenu["Wired RSS Строка Backchannel"].link = "news_rus.html?source=wired&type=backchannel";
	wholeMenu["Wired RSS Строка Backchannel"].html = 'Backchannel';

	wholeMenu["Wired RSS Строка Guides"] = {};
	wholeMenu["Wired RSS Строка Guides"].id = "26_7_10";
	wholeMenu["Wired RSS Строка Guides"].color = "red";
	wholeMenu["Wired RSS Строка Guides"].hasSub = 0;
	wholeMenu["Wired RSS Строка Guides"].link = "news_rus.html?source=wired&type=guides";
	wholeMenu["Wired RSS Строка Guides"].html = 'Guides';

	wholeMenu["● Yahoo RSS Строка"] = {};
	wholeMenu["● Yahoo RSS Строка"].id = "26_5";
	wholeMenu["● Yahoo RSS Строка"].color = "red";
	wholeMenu["● Yahoo RSS Строка"].hasSub = 1;
	wholeMenu["● Yahoo RSS Строка"].link = "";
	wholeMenu["● Yahoo RSS Строка"].html = '&#9679; Yahoo RSS Строка';

	wholeMenu["Yahoo RSS Строка Top"] = {};
	wholeMenu["Yahoo RSS Строка Top"].id = "26_5_1";
	wholeMenu["Yahoo RSS Строка Top"].color = "red";
	wholeMenu["Yahoo RSS Строка Top"].hasSub = 0;
	wholeMenu["Yahoo RSS Строка Top"].link = "news_rus.html?source=yahoo&type=top";
	wholeMenu["Yahoo RSS Строка Top"].html = 'Top';

	wholeMenu["Yahoo RSS Строка World"] = {};
	wholeMenu["Yahoo RSS Строка World"].id = "26_5_2";
	wholeMenu["Yahoo RSS Строка World"].color = "red";
	wholeMenu["Yahoo RSS Строка World"].hasSub = 0;
	wholeMenu["Yahoo RSS Строка World"].link = "news_rus.html?source=yahoo&type=world";
	wholeMenu["Yahoo RSS Строка World"].html = 'World';

	wholeMenu["Yahoo RSS Строка US"] = {};
	wholeMenu["Yahoo RSS Строка US"].id = "26_5_3";
	wholeMenu["Yahoo RSS Строка US"].color = "red";
	wholeMenu["Yahoo RSS Строка US"].hasSub = 0;
	wholeMenu["Yahoo RSS Строка US"].link = "news_rus.html?source=yahoo&type=us";
	wholeMenu["Yahoo RSS Строка US"].html = 'US';

	wholeMenu["Yahoo RSS Строка Politics"] = {};
	wholeMenu["Yahoo RSS Строка Politics"].id = "26_5_4";
	wholeMenu["Yahoo RSS Строка Politics"].color = "red";
	wholeMenu["Yahoo RSS Строка Politics"].hasSub = 0;
	wholeMenu["Yahoo RSS Строка Politics"].link = "news_rus.html?source=yahoo&type=politics";
	wholeMenu["Yahoo RSS Строка Politics"].html = 'Politics';

	wholeMenu["Yahoo RSS Строка Health"] = {};
	wholeMenu["Yahoo RSS Строка Health"].id = "26_5_5";
	wholeMenu["Yahoo RSS Строка Health"].color = "red";
	wholeMenu["Yahoo RSS Строка Health"].hasSub = 0;
	wholeMenu["Yahoo RSS Строка Health"].link = "news_rus.html?source=yahoo&type=health";
	wholeMenu["Yahoo RSS Строка Health"].html = 'Health';

	wholeMenu["Yahoo RSS Строка Finance"] = {};
	wholeMenu["Yahoo RSS Строка Finance"].id = "26_5_6";
	wholeMenu["Yahoo RSS Строка Finance"].color = "red";
	wholeMenu["Yahoo RSS Строка Finance"].hasSub = 0;
	wholeMenu["Yahoo RSS Строка Finance"].link = "news_rus.html?source=yahoo&type=finance";
	wholeMenu["Yahoo RSS Строка Finance"].html = 'Finance';

	wholeMenu["Yahoo RSS Строка Science"] = {};
	wholeMenu["Yahoo RSS Строка Science"].id = "26_5_7";
	wholeMenu["Yahoo RSS Строка Science"].color = "red";
	wholeMenu["Yahoo RSS Строка Science"].hasSub = 0;
	wholeMenu["Yahoo RSS Строка Science"].link = "news_rus.html?source=yahoo&type=science";
	wholeMenu["Yahoo RSS Строка Science"].html = 'Science';

	wholeMenu["Yahoo RSS Строка Sports"] = {};
	wholeMenu["Yahoo RSS Строка Sports"].id = "26_5_8";
	wholeMenu["Yahoo RSS Строка Sports"].color = "red";
	wholeMenu["Yahoo RSS Строка Sports"].hasSub = 0;
	wholeMenu["Yahoo RSS Строка Sports"].link = "news_rus.html?source=yahoo&type=sports";
	wholeMenu["Yahoo RSS Строка Sports"].html = 'Sports';

	wholeMenu["Yahoo RSS Строка Entertainment"] = {};
	wholeMenu["Yahoo RSS Строка Entertainment"].id = "26_5_9";
	wholeMenu["Yahoo RSS Строка Entertainment"].color = "red";
	wholeMenu["Yahoo RSS Строка Entertainment"].hasSub = 0;
	wholeMenu["Yahoo RSS Строка Entertainment"].link = "news_rus.html?source=yahoo&type=entertainment";
	wholeMenu["Yahoo RSS Строка Entertainment"].html = 'Entertainment';

	wholeMenu["Yahoo RSS Строка Lifestyle"] = {};
	wholeMenu["Yahoo RSS Строка Lifestyle"].id = "26_5_10";
	wholeMenu["Yahoo RSS Строка Lifestyle"].color = "red";
	wholeMenu["Yahoo RSS Строка Lifestyle"].hasSub = 0;
	wholeMenu["Yahoo RSS Строка Lifestyle"].link = "news_rus.html?source=yahoo&type=lifestyle";
	wholeMenu["Yahoo RSS Строка Lifestyle"].html = 'Lifestyle';

	wholeMenu["● Yonhap RSS Строка"] = {};
	wholeMenu["● Yonhap RSS Строка"].id = "26_4";
	wholeMenu["● Yonhap RSS Строка"].color = "red";
	wholeMenu["● Yonhap RSS Строка"].hasSub = 1;
	wholeMenu["● Yonhap RSS Строка"].link = "";
	wholeMenu["● Yonhap RSS Строка"].html = '&#9679; Yonhap RSS Строка';

	wholeMenu["Yonhap RSS Строка All News"] = {};
	wholeMenu["Yonhap RSS Строка All News"].id = "26_4_1";
	wholeMenu["Yonhap RSS Строка All News"].color = "red";
	wholeMenu["Yonhap RSS Строка All News"].hasSub = 0;
	wholeMenu["Yonhap RSS Строка All News"].link = "news_rus.html?source=yonhap&type=all";
	wholeMenu["Yonhap RSS Строка All News"].html = 'All News';

	wholeMenu["Yonhap RSS Строка National"] = {};
	wholeMenu["Yonhap RSS Строка National"].id = "26_4_2";
	wholeMenu["Yonhap RSS Строка National"].color = "red";
	wholeMenu["Yonhap RSS Строка National"].hasSub = 0;
	wholeMenu["Yonhap RSS Строка National"].link = "news_rus.html?source=yonhap&type=national";
	wholeMenu["Yonhap RSS Строка National"].html = 'National';

	wholeMenu["Yonhap RSS Строка North Korea"] = {};
	wholeMenu["Yonhap RSS Строка North Korea"].id = "26_4_3";
	wholeMenu["Yonhap RSS Строка North Korea"].color = "red";
	wholeMenu["Yonhap RSS Строка North Korea"].hasSub = 0;
	wholeMenu["Yonhap RSS Строка North Korea"].link = "news_rus.html?source=yonhap&type=northkorea";
	wholeMenu["Yonhap RSS Строка North Korea"].html = 'North Korea';

	wholeMenu["Yonhap RSS Строка Economy/Finance"] = {};
	wholeMenu["Yonhap RSS Строка Economy/Finance"].id = "26_4_4";
	wholeMenu["Yonhap RSS Строка Economy/Finance"].color = "red";
	wholeMenu["Yonhap RSS Строка Economy/Finance"].hasSub = 0;
	wholeMenu["Yonhap RSS Строка Economy/Finance"].link = "news_rus.html?source=yonhap&type=economy";
	wholeMenu["Yonhap RSS Строка Economy/Finance"].html = 'Economy/Finance';

	wholeMenu["Yonhap RSS Строка BIZ"] = {};
	wholeMenu["Yonhap RSS Строка BIZ"].id = "26_4_5";
	wholeMenu["Yonhap RSS Строка BIZ"].color = "red";
	wholeMenu["Yonhap RSS Строка BIZ"].hasSub = 0;
	wholeMenu["Yonhap RSS Строка BIZ"].link = "news_rus.html?source=yonhap&type=biz";
	wholeMenu["Yonhap RSS Строка BIZ"].html = 'BIZ';

	wholeMenu["Yonhap RSS Строка Culture/K-pop"] = {};
	wholeMenu["Yonhap RSS Строка Culture/K-pop"].id = "26_4_6";
	wholeMenu["Yonhap RSS Строка Culture/K-pop"].color = "red";
	wholeMenu["Yonhap RSS Строка Culture/K-pop"].hasSub = 0;
	wholeMenu["Yonhap RSS Строка Culture/K-pop"].link = "news_rus.html?source=yonhap&type=culture";
	wholeMenu["Yonhap RSS Строка Culture/K-pop"].html = 'Culture/K-pop';

	wholeMenu["Yonhap RSS Строка Sports"] = {};
	wholeMenu["Yonhap RSS Строка Sports"].id = "26_4_7";
	wholeMenu["Yonhap RSS Строка Sports"].color = "red";
	wholeMenu["Yonhap RSS Строка Sports"].hasSub = 0;
	wholeMenu["Yonhap RSS Строка Sports"].link = "news_rus.html?source=yonhap&type=sports";
	wholeMenu["Yonhap RSS Строка Sports"].html = 'Sports';


}


if (lang=="lat") {


	wholeMenu["● Nuntium"] = {};
	wholeMenu["● Nuntium"].id = "26";
	wholeMenu["● Nuntium"].color = "red";
	wholeMenu["● Nuntium"].hasSub = 1;
	wholeMenu["● Nuntium"].link = "";
	wholeMenu["● Nuntium"].html = '&#9679; Nuntium';

	wholeMenu["● CBS RSS Acies"] = {};
	wholeMenu["● CBS RSS Acies"].id = "26_3";
	wholeMenu["● CBS RSS Acies"].color = "red";
	wholeMenu["● CBS RSS Acies"].hasSub = 1;
	wholeMenu["● CBS RSS Acies"].link = "";
	wholeMenu["● CBS RSS Acies"].html = '&#9679; CBS RSS Acies';

	wholeMenu["CBS RSS Acies Top Stories"] = {};
	wholeMenu["CBS RSS Acies Top Stories"].id = "26_3_1";
	wholeMenu["CBS RSS Acies Top Stories"].color = "red";
	wholeMenu["CBS RSS Acies Top Stories"].hasSub = 0;
	wholeMenu["CBS RSS Acies Top Stories"].link = "news_lat.html?source=cbs&type=top";
	wholeMenu["CBS RSS Acies Top Stories"].html = 'Top Stories';

	wholeMenu["CBS RSS Acies U.S."] = {};
	wholeMenu["CBS RSS Acies U.S."].id = "26_3_2";
	wholeMenu["CBS RSS Acies U.S."].color = "red";
	wholeMenu["CBS RSS Acies U.S."].hasSub = 0;
	wholeMenu["CBS RSS Acies U.S."].link = "news_lat.html?source=cbs&type=us";
	wholeMenu["CBS RSS Acies U.S."].html = 'U.S.';

	wholeMenu["CBS RSS Acies Politics"] = {};
	wholeMenu["CBS RSS Acies Politics"].id = "26_3_3";
	wholeMenu["CBS RSS Acies Politics"].color = "red";
	wholeMenu["CBS RSS Acies Politics"].hasSub = 0;
	wholeMenu["CBS RSS Acies Politics"].link = "news_lat.html?source=cbs&type=politics";
	wholeMenu["CBS RSS Acies Politics"].html = 'Politics';

	wholeMenu["CBS RSS Acies World"] = {};
	wholeMenu["CBS RSS Acies World"].id = "26_3_4";
	wholeMenu["CBS RSS Acies World"].color = "red";
	wholeMenu["CBS RSS Acies World"].hasSub = 0;
	wholeMenu["CBS RSS Acies World"].link = "news_lat.html?source=cbs&type=world";
	wholeMenu["CBS RSS Acies World"].html = 'World';

	wholeMenu["CBS RSS Acies Health"] = {};
	wholeMenu["CBS RSS Acies Health"].id = "26_3_5";
	wholeMenu["CBS RSS Acies Health"].color = "red";
	wholeMenu["CBS RSS Acies Health"].hasSub = 0;
	wholeMenu["CBS RSS Acies Health"].link = "news_lat.html?source=cbs&type=health";
	wholeMenu["CBS RSS Acies Health"].html = 'Health';

	wholeMenu["CBS RSS Acies MoneyWatch"] = {};
	wholeMenu["CBS RSS Acies MoneyWatch"].id = "26_3_6";
	wholeMenu["CBS RSS Acies MoneyWatch"].color = "red";
	wholeMenu["CBS RSS Acies MoneyWatch"].hasSub = 0;
	wholeMenu["CBS RSS Acies MoneyWatch"].link = "news_lat.html?source=cbs&type=moneywatch";
	wholeMenu["CBS RSS Acies MoneyWatch"].html = 'MoneyWatch';

	wholeMenu["CBS RSS Acies Science"] = {};
	wholeMenu["CBS RSS Acies Science"].id = "26_3_7";
	wholeMenu["CBS RSS Acies Science"].color = "red";
	wholeMenu["CBS RSS Acies Science"].hasSub = 0;
	wholeMenu["CBS RSS Acies Science"].link = "news_lat.html?source=cbs&type=science";
	wholeMenu["CBS RSS Acies Science"].html = 'Science';

	wholeMenu["CBS RSS Acies Technology"] = {};
	wholeMenu["CBS RSS Acies Technology"].id = "26_3_8";
	wholeMenu["CBS RSS Acies Technology"].color = "red";
	wholeMenu["CBS RSS Acies Technology"].hasSub = 0;
	wholeMenu["CBS RSS Acies Technology"].link = "news_lat.html?source=cbs&type=technology";
	wholeMenu["CBS RSS Acies Technology"].html = 'Technology';

	wholeMenu["CBS RSS Acies Entertainment"] = {};
	wholeMenu["CBS RSS Acies Entertainment"].id = "26_3_9";
	wholeMenu["CBS RSS Acies Entertainment"].color = "red";
	wholeMenu["CBS RSS Acies Entertainment"].hasSub = 0;
	wholeMenu["CBS RSS Acies Entertainment"].link = "news_lat.html?source=cbs&type=entertainment";
	wholeMenu["CBS RSS Acies Entertainment"].html = 'Entertainment';

	wholeMenu["CBS RSS Acies Space"] = {};
	wholeMenu["CBS RSS Acies Space"].id = "26_3_10";
	wholeMenu["CBS RSS Acies Space"].color = "red";
	wholeMenu["CBS RSS Acies Space"].hasSub = 0;
	wholeMenu["CBS RSS Acies Space"].link = "news_lat.html?source=cbs&type=space";
	wholeMenu["CBS RSS Acies Space"].html = 'Space';

	wholeMenu["● NASA RSS Acies"] = {};
	wholeMenu["● NASA RSS Acies"].id = "26_2";
	wholeMenu["● NASA RSS Acies"].color = "red";
	wholeMenu["● NASA RSS Acies"].hasSub = 1;
	wholeMenu["● NASA RSS Acies"].link = "";
	wholeMenu["● NASA RSS Acies"].html = '&#9679; NASA RSS Acies';

	wholeMenu["NASA RSS Acies Releases"] = {};
	wholeMenu["NASA RSS Acies Releases"].id = "26_2_1";
	wholeMenu["NASA RSS Acies Releases"].color = "red";
	wholeMenu["NASA RSS Acies Releases"].hasSub = 0;
	wholeMenu["NASA RSS Acies Releases"].link = "news_lat.html?source=nasa&type=releases";
	wholeMenu["NASA RSS Acies Releases"].html = 'Releases';

	wholeMenu["NASA RSS Acies Recent"] = {};
	wholeMenu["NASA RSS Acies Recent"].id = "26_2_2";
	wholeMenu["NASA RSS Acies Recent"].color = "red";
	wholeMenu["NASA RSS Acies Recent"].hasSub = 0;
	wholeMenu["NASA RSS Acies Recent"].link = "news_lat.html?source=nasa&type=recent";
	wholeMenu["NASA RSS Acies Recent"].html = 'Recently Published Content';

	wholeMenu["NASA RSS Acies Image"] = {};
	wholeMenu["NASA RSS Acies Image"].id = "26_2_3";
	wholeMenu["NASA RSS Acies Image"].color = "red";
	wholeMenu["NASA RSS Acies Image"].hasSub = 0;
	wholeMenu["NASA RSS Acies Image"].link = "news_lat.html?source=nasa&type=image";
	wholeMenu["NASA RSS Acies Image"].html = 'Image of the Day';

	wholeMenu["NASA RSS Acies Technology"] = {};
	wholeMenu["NASA RSS Acies Technology"].id = "26_2_4";
	wholeMenu["NASA RSS Acies Technology"].color = "red";
	wholeMenu["NASA RSS Acies Technology"].hasSub = 0;
	wholeMenu["NASA RSS Acies Technology"].link = "news_lat.html?source=nasa&type=technology";
	wholeMenu["NASA RSS Acies Technology"].html = 'Technology';

	wholeMenu["NASA RSS Acies Aeronautics"] = {};
	wholeMenu["NASA RSS Acies Aeronautics"].id = "26_2_5";
	wholeMenu["NASA RSS Acies Aeronautics"].color = "red";
	wholeMenu["NASA RSS Acies Aeronautics"].hasSub = 0;
	wholeMenu["NASA RSS Acies Aeronautics"].link = "news_lat.html?source=nasa&type=aeronautics";
	wholeMenu["NASA RSS Acies Aeronautics"].html = 'Aeronautics';

	wholeMenu["NASA RSS Acies ISS"] = {};
	wholeMenu["NASA RSS Acies ISS"].id = "26_2_6";
	wholeMenu["NASA RSS Acies ISS"].color = "red";
	wholeMenu["NASA RSS Acies ISS"].hasSub = 0;
	wholeMenu["NASA RSS Acies ISS"].link = "news_lat.html?source=nasa&type=iss";
	wholeMenu["NASA RSS Acies ISS"].html = 'Space Station';

	wholeMenu["NASA RSS Acies Artemis"] = {};
	wholeMenu["NASA RSS Acies Artemis"].id = "26_2_7";
	wholeMenu["NASA RSS Acies Artemis"].color = "red";
	wholeMenu["NASA RSS Acies Artemis"].hasSub = 0;
	wholeMenu["NASA RSS Acies Artemis"].link = "news_lat.html?source=nasa&type=artemis";
	wholeMenu["NASA RSS Acies Artemis"].html = 'Artemis';

	wholeMenu["● Phys.org RSS Acies"] = {};
	wholeMenu["● Phys.org RSS Acies"].id = "26_1";
	wholeMenu["● Phys.org RSS Acies"].color = "red";
	wholeMenu["● Phys.org RSS Acies"].hasSub = 1;
	wholeMenu["● Phys.org RSS Acies"].link = "";
	wholeMenu["● Phys.org RSS Acies"].html = '&#9679; Phys.org RSS Acies';

	wholeMenu["Phys.org RSS Acies All Stories"] = {};
	wholeMenu["Phys.org RSS Acies All Stories"].id = "26_1_1";
	wholeMenu["Phys.org RSS Acies All Stories"].color = "red";
	wholeMenu["Phys.org RSS Acies All Stories"].hasSub = 0;
	wholeMenu["Phys.org RSS Acies All Stories"].link = "news_lat.html?source=phys.org&type=all";
	wholeMenu["Phys.org RSS Acies All Stories"].html = 'All Stories';

	wholeMenu["● Earth"] = {};
	wholeMenu["● Earth"].id = "26_1_2";
	wholeMenu["● Earth"].color = "red";
	wholeMenu["● Earth"].hasSub = 1;
	wholeMenu["● Earth"].link = "";
	wholeMenu["● Earth"].html = '&#9679; Earth';

	wholeMenu["Phys.org RSS Acies Earth Sciences"] = {};
	wholeMenu["Phys.org RSS Acies Earth Sciences"].id = "26_1_2_1";
	wholeMenu["Phys.org RSS Acies Earth Sciences"].color = "red";
	wholeMenu["Phys.org RSS Acies Earth Sciences"].hasSub = 0;
	wholeMenu["Phys.org RSS Acies Earth Sciences"].link = "news_lat.html?source=phys.org&type=earth";
	wholeMenu["Phys.org RSS Acies Earth Sciences"].html = 'Earth Sciences';

	wholeMenu["Phys.org RSS Acies Environment"] = {};
	wholeMenu["Phys.org RSS Acies Environment"].id = "26_1_2_2";
	wholeMenu["Phys.org RSS Acies Environment"].color = "red";
	wholeMenu["Phys.org RSS Acies Environment"].hasSub = 0;
	wholeMenu["Phys.org RSS Acies Environment"].link = "news_lat.html?source=phys.org&type=environment";
	wholeMenu["Phys.org RSS Acies Environment"].html = 'Environment';

	wholeMenu["● Other Sciences"] = {};
	wholeMenu["● Other Sciences"].id = "26_1_3";
	wholeMenu["● Other Sciences"].color = "red";
	wholeMenu["● Other Sciences"].hasSub = 1;
	wholeMenu["● Other Sciences"].link = "";
	wholeMenu["● Other Sciences"].html = '&#9679; Other Sciences';

	wholeMenu["Phys.org RSS Acies Archaeology"] = {};
	wholeMenu["Phys.org RSS Acies Archaeology"].id = "26_1_3_1";
	wholeMenu["Phys.org RSS Acies Archaeology"].color = "red";
	wholeMenu["Phys.org RSS Acies Archaeology"].hasSub = 0;
	wholeMenu["Phys.org RSS Acies Archaeology"].link = "news_lat.html?source=phys.org&type=archaeology";
	wholeMenu["Phys.org RSS Acies Archaeology"].html = 'Archaeology';

	wholeMenu["Phys.org RSS Acies Economics & Business"] = {};
	wholeMenu["Phys.org RSS Acies Economics & Business"].id = "26_1_3_2";
	wholeMenu["Phys.org RSS Acies Economics & Business"].color = "red";
	wholeMenu["Phys.org RSS Acies Economics & Business"].hasSub = 0;
	wholeMenu["Phys.org RSS Acies Economics & Business"].link = "news_lat.html?source=phys.org&type=economics";
	wholeMenu["Phys.org RSS Acies Economics & Business"].html = 'Economics & Business';

	wholeMenu["Phys.org RSS Acies Education"] = {};
	wholeMenu["Phys.org RSS Acies Education"].id = "26_1_3_3";
	wholeMenu["Phys.org RSS Acies Education"].color = "red";
	wholeMenu["Phys.org RSS Acies Education"].hasSub = 0;
	wholeMenu["Phys.org RSS Acies Education"].link = "news_lat.html?source=phys.org&type=education";
	wholeMenu["Phys.org RSS Acies Education"].html = 'Education';

	wholeMenu["Phys.org RSS Acies Mathematics"] = {};
	wholeMenu["Phys.org RSS Acies Mathematics"].id = "26_1_3_4";
	wholeMenu["Phys.org RSS Acies Mathematics"].color = "red";
	wholeMenu["Phys.org RSS Acies Mathematics"].hasSub = 0;
	wholeMenu["Phys.org RSS Acies Mathematics"].link = "news_lat.html?source=phys.org&type=mathematics";
	wholeMenu["Phys.org RSS Acies Mathematics"].html = 'Mathematics';

	wholeMenu["Phys.org RSS Acies Other"] = {};
	wholeMenu["Phys.org RSS Acies Other"].id = "26_1_3_5";
	wholeMenu["Phys.org RSS Acies Other"].color = "red";
	wholeMenu["Phys.org RSS Acies Other"].hasSub = 0;
	wholeMenu["Phys.org RSS Acies Other"].link = "news_lat.html?source=phys.org&type=other";
	wholeMenu["Phys.org RSS Acies Other"].html = 'Other';

	wholeMenu["Phys.org RSS Acies Political Science"] = {};
	wholeMenu["Phys.org RSS Acies Political Science"].id = "26_1_3_6";
	wholeMenu["Phys.org RSS Acies Political Science"].color = "red";
	wholeMenu["Phys.org RSS Acies Political Science"].hasSub = 0;
	wholeMenu["Phys.org RSS Acies Political Science"].link = "news_lat.html?source=phys.org&type=political";
	wholeMenu["Phys.org RSS Acies Political Science"].html = 'Political Science';

	wholeMenu["Phys.org RSS Acies Political Social Sciences"] = {};
	wholeMenu["Phys.org RSS Acies Political Social Sciences"].id = "26_1_3_7";
	wholeMenu["Phys.org RSS Acies Political Social Sciences"].color = "red";
	wholeMenu["Phys.org RSS Acies Political Social Sciences"].hasSub = 0;
	wholeMenu["Phys.org RSS Acies Political Social Sciences"].link = "news_lat.html?source=phys.org&type=social";
	wholeMenu["Phys.org RSS Acies Political Social Sciences"].html = 'Social Sciences';

	wholeMenu["● Nanotechnology"] = {};
	wholeMenu["● Nanotechnology"].id = "26_1_4";
	wholeMenu["● Nanotechnology"].color = "red";
	wholeMenu["● Nanotechnology"].hasSub = 1;
	wholeMenu["● Nanotechnology"].link = "";
	wholeMenu["● Nanotechnology"].html = '&#9679; Nanotechnology';

	wholeMenu["Phys.org RSS Acies Bio & Medicine"] = {};
	wholeMenu["Phys.org RSS Acies Bio & Medicine"].id = "26_1_4_1";
	wholeMenu["Phys.org RSS Acies Bio & Medicine"].color = "red";
	wholeMenu["Phys.org RSS Acies Bio & Medicine"].hasSub = 0;
	wholeMenu["Phys.org RSS Acies Bio & Medicine"].link = "news_lat.html?source=phys.org&type=bio";
	wholeMenu["Phys.org RSS Acies Bio & Medicine"].html = 'Bio & Medicine';

	wholeMenu["Phys.org RSS Acies Nanomaterials"] = {};
	wholeMenu["Phys.org RSS Acies Nanomaterials"].id = "26_1_4_2";
	wholeMenu["Phys.org RSS Acies Nanomaterials"].color = "red";
	wholeMenu["Phys.org RSS Acies Nanomaterials"].hasSub = 0;
	wholeMenu["Phys.org RSS Acies Nanomaterials"].link = "news_lat.html?source=phys.org&type=nanomaterials";
	wholeMenu["Phys.org RSS Acies Nanomaterials"].html = 'Nanomaterials';

	wholeMenu["Phys.org RSS Acies Nanophysics"] = {};
	wholeMenu["Phys.org RSS Acies Nanophysics"].id = "26_1_4_3";
	wholeMenu["Phys.org RSS Acies Nanophysics"].color = "red";
	wholeMenu["Phys.org RSS Acies Nanophysics"].hasSub = 0;
	wholeMenu["Phys.org RSS Acies Nanophysics"].link = "news_lat.html?source=phys.org&type=nanophysics";
	wholeMenu["Phys.org RSS Acies Nanophysics"].html = 'Nanophysics';

	wholeMenu["● Physics"] = {};
	wholeMenu["● Physics"].id = "26_1_5";
	wholeMenu["● Physics"].color = "red";
	wholeMenu["● Physics"].hasSub = 1;
	wholeMenu["● Physics"].link = "";
	wholeMenu["● Physics"].html = '&#9679; Physics';

	wholeMenu["Phys.org RSS Acies Condensed Matter"] = {};
	wholeMenu["Phys.org RSS Acies Condensed Matter"].id = "26_1_5_1";
	wholeMenu["Phys.org RSS Acies Condensed Matter"].color = "red";
	wholeMenu["Phys.org RSS Acies Condensed Matter"].hasSub = 0;
	wholeMenu["Phys.org RSS Acies Condensed Matter"].link = "news_lat.html?source=phys.org&type=condensed";
	wholeMenu["Phys.org RSS Acies Condensed Matter"].html = 'Condensed Matter';

	wholeMenu["Phys.org RSS Acies General Physics"] = {};
	wholeMenu["Phys.org RSS Acies General Physics"].id = "26_1_5_2";
	wholeMenu["Phys.org RSS Acies General Physics"].color = "red";
	wholeMenu["Phys.org RSS Acies General Physics"].hasSub = 0;
	wholeMenu["Phys.org RSS Acies General Physics"].link = "news_lat.html?source=phys.org&type=general";
	wholeMenu["Phys.org RSS Acies General Physics"].html = 'General Physics';

	wholeMenu["Phys.org RSS Acies Optics & Photonics"] = {};
	wholeMenu["Phys.org RSS Acies Optics & Photonics"].id = "26_1_5_3";
	wholeMenu["Phys.org RSS Acies Optics & Photonics"].color = "red";
	wholeMenu["Phys.org RSS Acies Optics & Photonics"].hasSub = 0;
	wholeMenu["Phys.org RSS Acies Optics & Photonics"].link = "news_lat.html?source=phys.org&type=optics";
	wholeMenu["Phys.org RSS Acies Optics & Photonics"].html = 'Optics & Photonics';

	wholeMenu["Phys.org RSS Acies Plasma Physics"] = {};
	wholeMenu["Phys.org RSS Acies Plasma Physics"].id = "26_1_5_4";
	wholeMenu["Phys.org RSS Acies Plasma Physics"].color = "red";
	wholeMenu["Phys.org RSS Acies Plasma Physics"].hasSub = 0;
	wholeMenu["Phys.org RSS Acies Plasma Physics"].link = "news_lat.html?source=phys.org&type=plasma";
	wholeMenu["Phys.org RSS Acies Plasma Physics"].html = 'Plasma Physics';

	wholeMenu["Phys.org RSS Acies Quantum Physics"] = {};
	wholeMenu["Phys.org RSS Acies Quantum Physics"].id = "26_1_5_5";
	wholeMenu["Phys.org RSS Acies Quantum Physics"].color = "red";
	wholeMenu["Phys.org RSS Acies Quantum Physics"].hasSub = 0;
	wholeMenu["Phys.org RSS Acies Quantum Physics"].link = "news_lat.html?source=phys.org&type=quantum";
	wholeMenu["Phys.org RSS Acies Quantum Physics"].html = 'Quantum Physics';

	wholeMenu["Phys.org RSS Acies Soft Matter"] = {};
	wholeMenu["Phys.org RSS Acies Soft Matter"].id = "26_1_5_6";
	wholeMenu["Phys.org RSS Acies Soft Matter"].color = "red";
	wholeMenu["Phys.org RSS Acies Soft Matter"].hasSub = 0;
	wholeMenu["Phys.org RSS Acies Soft Matter"].link = "news_lat.html?source=phys.org&type=soft";
	wholeMenu["Phys.org RSS Acies Soft Matter"].html = 'Soft Matter';

	wholeMenu["Phys.org RSS Acies Superconductivity"] = {};
	wholeMenu["Phys.org RSS Acies Superconductivity"].id = "26_1_5_7";
	wholeMenu["Phys.org RSS Acies Superconductivity"].color = "red";
	wholeMenu["Phys.org RSS Acies Superconductivity"].hasSub = 0;
	wholeMenu["Phys.org RSS Acies Superconductivity"].link = "news_lat.html?source=phys.org&type=superconductivity";
	wholeMenu["Phys.org RSS Acies Superconductivity"].html = 'Superconductivity';

	wholeMenu["● Astronomy & Space"] = {};
	wholeMenu["● Astronomy & Space"].id = "26_1_6";
	wholeMenu["● Astronomy & Space"].color = "red";
	wholeMenu["● Astronomy & Space"].hasSub = 1;
	wholeMenu["● Astronomy & Space"].link = "";
	wholeMenu["● Astronomy & Space"].html = '&#9679; Astronomy & Space';

	wholeMenu["Phys.org RSS Acies Astrobiology"] = {};
	wholeMenu["Phys.org RSS Acies Astrobiology"].id = "26_1_6_1";
	wholeMenu["Phys.org RSS Acies Astrobiology"].color = "red";
	wholeMenu["Phys.org RSS Acies Astrobiology"].hasSub = 0;
	wholeMenu["Phys.org RSS Acies Astrobiology"].link = "news_lat.html?source=phys.org&type=astrobiology";
	wholeMenu["Phys.org RSS Acies Astrobiology"].html = 'Astrobiology';

	wholeMenu["Phys.org RSS Acies Astronomy"] = {};
	wholeMenu["Phys.org RSS Acies Astronomy"].id = "26_1_6_2";
	wholeMenu["Phys.org RSS Acies Astronomy"].color = "red";
	wholeMenu["Phys.org RSS Acies Astronomy"].hasSub = 0;
	wholeMenu["Phys.org RSS Acies Astronomy"].link = "news_lat.html?source=phys.org&type=astronomy";
	wholeMenu["Phys.org RSS Acies Astronomy"].html = 'Astronomy';

	wholeMenu["Phys.org RSS Acies Planetary Sciences"] = {};
	wholeMenu["Phys.org RSS Acies Planetary Sciences"].id = "26_1_6_3";
	wholeMenu["Phys.org RSS Acies Planetary Sciences"].color = "red";
	wholeMenu["Phys.org RSS Acies Planetary Sciences"].hasSub = 0;
	wholeMenu["Phys.org RSS Acies Planetary Sciences"].link = "news_lat.html?source=phys.org&type=planetary";
	wholeMenu["Phys.org RSS Acies Planetary Sciences"].html = 'Planetary Sciences';

	wholeMenu["Phys.org RSS Acies Space Exploration"] = {};
	wholeMenu["Phys.org RSS Acies Space Exploration"].id = "26_1_6_4";
	wholeMenu["Phys.org RSS Acies Space Exploration"].color = "red";
	wholeMenu["Phys.org RSS Acies Space Exploration"].hasSub = 0;
	wholeMenu["Phys.org RSS Acies Space Exploration"].link = "news_lat.html?source=phys.org&type=space";
	wholeMenu["Phys.org RSS Acies Space Exploration"].html = 'Space Exploration';

	wholeMenu["● Biology"] = {};
	wholeMenu["● Biology"].id = "26_1_7";
	wholeMenu["● Biology"].color = "red";
	wholeMenu["● Biology"].hasSub = 1;
	wholeMenu["● Biology"].link = "";
	wholeMenu["● Biology"].html = '&#9679; Biology';

	wholeMenu["Phys.org RSS Acies Agriculture"] = {};
	wholeMenu["Phys.org RSS Acies Agriculture"].id = "26_1_7_1";
	wholeMenu["Phys.org RSS Acies Agriculture"].color = "red";
	wholeMenu["Phys.org RSS Acies Agriculture"].hasSub = 0;
	wholeMenu["Phys.org RSS Acies Agriculture"].link = "news_lat.html?source=phys.org&type=agriculture";
	wholeMenu["Phys.org RSS Acies Agriculture"].html = 'Agriculture';

	wholeMenu["Phys.org RSS Acies Biotechnology"] = {};
	wholeMenu["Phys.org RSS Acies Biotechnology"].id = "26_1_7_2";
	wholeMenu["Phys.org RSS Acies Biotechnology"].color = "red";
	wholeMenu["Phys.org RSS Acies Biotechnology"].hasSub = 0;
	wholeMenu["Phys.org RSS Acies Biotechnology"].link = "news_lat.html?source=phys.org&type=biotechnology";
	wholeMenu["Phys.org RSS Acies Biotechnology"].html = 'Biotechnology';

	wholeMenu["Phys.org RSS Acies Cell & Microbiology"] = {};
	wholeMenu["Phys.org RSS Acies Cell & Microbiology"].id = "26_1_7_3";
	wholeMenu["Phys.org RSS Acies Cell & Microbiology"].color = "red";
	wholeMenu["Phys.org RSS Acies Cell & Microbiology"].hasSub = 0;
	wholeMenu["Phys.org RSS Acies Cell & Microbiology"].link = "news_lat.html?source=phys.org&type=cell";
	wholeMenu["Phys.org RSS Acies Cell & Microbiology"].html = 'Cell & Microbiology';

	wholeMenu["Phys.org RSS Acies Ecology"] = {};
	wholeMenu["Phys.org RSS Acies Ecology"].id = "26_1_7_4";
	wholeMenu["Phys.org RSS Acies Ecology"].color = "red";
	wholeMenu["Phys.org RSS Acies Ecology"].hasSub = 0;
	wholeMenu["Phys.org RSS Acies Ecology"].link = "news_lat.html?source=phys.org&type=ecology";
	wholeMenu["Phys.org RSS Acies Ecology"].html = 'Ecology';

	wholeMenu["Phys.org RSS Acies Evolution"] = {};
	wholeMenu["Phys.org RSS Acies Evolution"].id = "26_1_7_5";
	wholeMenu["Phys.org RSS Acies Evolution"].color = "red";
	wholeMenu["Phys.org RSS Acies Evolution"].hasSub = 0;
	wholeMenu["Phys.org RSS Acies Evolution"].link = "news_lat.html?source=phys.org&type=evolution";
	wholeMenu["Phys.org RSS Acies Evolution"].html = 'Evolution';

	wholeMenu["Phys.org RSS Acies Molecular & Computational Biology"] = {};
	wholeMenu["Phys.org RSS Acies Molecular & Computational Biology"].id = "26_1_7_6";
	wholeMenu["Phys.org RSS Acies Molecular & Computational Biology"].color = "red";
	wholeMenu["Phys.org RSS Acies Molecular & Computational Biology"].hasSub = 0;
	wholeMenu["Phys.org RSS Acies Molecular & Computational Biology"].link = "news_lat.html?source=phys.org&type=molecular";
	wholeMenu["Phys.org RSS Acies Molecular & Computational Biology"].html = 'Molecular & Computational Biology';

	wholeMenu["Phys.org RSS Acies OtherB"] = {};
	wholeMenu["Phys.org RSS Acies OtherB"].id = "26_1_7_7";
	wholeMenu["Phys.org RSS Acies OtherB"].color = "red";
	wholeMenu["Phys.org RSS Acies OtherB"].hasSub = 0;
	wholeMenu["Phys.org RSS Acies OtherB"].link = "news_lat.html?source=phys.org&type=otherb";
	wholeMenu["Phys.org RSS Acies OtherB"].html = 'Other';

	wholeMenu["Phys.org RSS Acies Paleontology & Fossils"] = {};
	wholeMenu["Phys.org RSS Acies Paleontology & Fossils"].id = "26_1_7_8";
	wholeMenu["Phys.org RSS Acies Paleontology & Fossils"].color = "red";
	wholeMenu["Phys.org RSS Acies Paleontology & Fossils"].hasSub = 0;
	wholeMenu["Phys.org RSS Acies Paleontology & Fossils"].link = "news_lat.html?source=phys.org&type=paleontology";
	wholeMenu["Phys.org RSS Acies Paleontology & Fossils"].html = 'Paleontology & Fossils';

	wholeMenu["Phys.org RSS Acies Plants & Animals"] = {};
	wholeMenu["Phys.org RSS Acies Plants & Animals"].id = "26_1_7_9";
	wholeMenu["Phys.org RSS Acies Plants & Animals"].color = "red";
	wholeMenu["Phys.org RSS Acies Plants & Animals"].hasSub = 0;
	wholeMenu["Phys.org RSS Acies Plants & Animals"].link = "news_lat.html?source=phys.org&type=plants";
	wholeMenu["Phys.org RSS Acies Plants & Animals"].html = 'Plants & Animals';

	wholeMenu["Phys.org RSS Acies Veterinary Medicine"] = {};
	wholeMenu["Phys.org RSS Acies Veterinary Medicine"].id = "26_1_7_10";
	wholeMenu["Phys.org RSS Acies Veterinary Medicine"].color = "red";
	wholeMenu["Phys.org RSS Acies Veterinary Medicine"].hasSub = 0;
	wholeMenu["Phys.org RSS Acies Veterinary Medicine"].link = "news_lat.html?source=phys.org&type=veterinary";
	wholeMenu["Phys.org RSS Acies Veterinary Medicine"].html = 'Veterinary Medicine';

	wholeMenu["● Chemistry"] = {};
	wholeMenu["● Chemistry"].id = "26_1_8";
	wholeMenu["● Chemistry"].color = "red";
	wholeMenu["● Chemistry"].hasSub = 1;
	wholeMenu["● Chemistry"].link = "";
	wholeMenu["● Chemistry"].html = '&#9679; Chemistry';

	wholeMenu["Phys.org RSS Acies Analytical Chemistry"] = {};
	wholeMenu["Phys.org RSS Acies Analytical Chemistry"].id = "26_1_8_1";
	wholeMenu["Phys.org RSS Acies Analytical Chemistry"].color = "red";
	wholeMenu["Phys.org RSS Acies Analytical Chemistry"].hasSub = 0;
	wholeMenu["Phys.org RSS Acies Analytical Chemistry"].link = "news_lat.html?source=phys.org&type=analytical";
	wholeMenu["Phys.org RSS Acies Analytical Chemistry"].html = 'Analytical Chemistry';

	wholeMenu["Phys.org RSS Acies Biochemistry"] = {};
	wholeMenu["Phys.org RSS Acies Biochemistry"].id = "26_1_8_2";
	wholeMenu["Phys.org RSS Acies Biochemistry"].color = "red";
	wholeMenu["Phys.org RSS Acies Biochemistry"].hasSub = 0;
	wholeMenu["Phys.org RSS Acies Biochemistry"].link = "news_lat.html?source=phys.org&type=biochemistry";
	wholeMenu["Phys.org RSS Acies Biochemistry"].html = 'Biochemistry';

	wholeMenu["Phys.org RSS Acies Materials Science"] = {};
	wholeMenu["Phys.org RSS Acies Materials Science"].id = "26_1_8_3";
	wholeMenu["Phys.org RSS Acies Materials Science"].color = "red";
	wholeMenu["Phys.org RSS Acies Materials Science"].hasSub = 0;
	wholeMenu["Phys.org RSS Acies Materials Science"].link = "news_lat.html?source=phys.org&type=materials";
	wholeMenu["Phys.org RSS Acies Materials Science"].html = 'Materials Science';

	wholeMenu["Phys.org RSS Acies OtherC"] = {};
	wholeMenu["Phys.org RSS Acies OtherC"].id = "26_1_8_4";
	wholeMenu["Phys.org RSS Acies OtherC"].color = "red";
	wholeMenu["Phys.org RSS Acies OtherC"].hasSub = 0;
	wholeMenu["Phys.org RSS Acies OtherC"].link = "news_lat.html?source=phys.org&type=otherc";
	wholeMenu["Phys.org RSS Acies OtherC"].html = 'Other';

	wholeMenu["Phys.org RSS Acies Polymers"] = {};
	wholeMenu["Phys.org RSS Acies Polymers"].id = "26_1_8_5";
	wholeMenu["Phys.org RSS Acies Polymers"].color = "red";
	wholeMenu["Phys.org RSS Acies Polymers"].hasSub = 0;
	wholeMenu["Phys.org RSS Acies Polymers"].link = "news_lat.html?source=phys.org&type=polymers";
	wholeMenu["Phys.org RSS Acies Polymers"].html = 'Polymers';

	wholeMenu["Space.com RSS Acies"] = {};
	wholeMenu["Space.com RSS Acies"].id = "26_6";
	wholeMenu["Space.com RSS Acies"].color = "red";
	wholeMenu["Space.com RSS Acies"].hasSub = 0;
	wholeMenu["Space.com RSS Acies"].link = "news_lat.html?source=space.com&type=all";
	wholeMenu["Space.com RSS Acies"].html = 'Space.com RSS Acies';

	wholeMenu["● Wired RSS Acies"] = {};
	wholeMenu["● Wired RSS Acies"].id = "26_7";
	wholeMenu["● Wired RSS Acies"].color = "red";
	wholeMenu["● Wired RSS Acies"].hasSub = 1;
	wholeMenu["● Wired RSS Acies"].link = "";
	wholeMenu["● Wired RSS Acies"].html = '&#9679; Wired RSS Acies';

	wholeMenu["Wired RSS Acies Top"] = {};
	wholeMenu["Wired RSS Acies Top"].id = "26_7_1";
	wholeMenu["Wired RSS Acies Top"].color = "red";
	wholeMenu["Wired RSS Acies Top"].hasSub = 0;
	wholeMenu["Wired RSS Acies Top"].link = "news_lat.html?source=wired&type=top";
	wholeMenu["Wired RSS Acies Top"].html = 'Top';

	wholeMenu["Wired RSS Acies Business"] = {};
	wholeMenu["Wired RSS Acies Business"].id = "26_7_2";
	wholeMenu["Wired RSS Acies Business"].color = "red";
	wholeMenu["Wired RSS Acies Business"].hasSub = 0;
	wholeMenu["Wired RSS Acies Business"].link = "news_lat.html?source=wired&type=business";
	wholeMenu["Wired RSS Acies Business"].html = 'Business';

	wholeMenu["Wired RSS Acies Artificial Intelligence"] = {};
	wholeMenu["Wired RSS Acies Artificial Intelligence"].id = "26_7_3";
	wholeMenu["Wired RSS Acies Artificial Intelligence"].color = "red";
	wholeMenu["Wired RSS Acies Artificial Intelligence"].hasSub = 0;
	wholeMenu["Wired RSS Acies Artificial Intelligence"].link = "news_lat.html?source=wired&type=ai";
	wholeMenu["Wired RSS Acies Artificial Intelligence"].html = 'Artificial Intelligence';

	wholeMenu["Wired RSS Acies Culture"] = {};
	wholeMenu["Wired RSS Acies Culture"].id = "26_7_4";
	wholeMenu["Wired RSS Acies Culture"].color = "red";
	wholeMenu["Wired RSS Acies Culture"].hasSub = 0;
	wholeMenu["Wired RSS Acies Culture"].link = "news_lat.html?source=wired&type=culture";
	wholeMenu["Wired RSS Acies Culture"].html = 'Culture';

	wholeMenu["Wired RSS Acies Gear"] = {};
	wholeMenu["Wired RSS Acies Gear"].id = "26_7_5";
	wholeMenu["Wired RSS Acies Gear"].color = "red";
	wholeMenu["Wired RSS Acies Gear"].hasSub = 0;
	wholeMenu["Wired RSS Acies Gear"].link = "news_lat.html?source=wired&type=gear";
	wholeMenu["Wired RSS Acies Gear"].html = 'Gear';

	wholeMenu["Wired RSS Acies Ideas"] = {};
	wholeMenu["Wired RSS Acies Ideas"].id = "26_7_6";
	wholeMenu["Wired RSS Acies Ideas"].color = "red";
	wholeMenu["Wired RSS Acies Ideas"].hasSub = 0;
	wholeMenu["Wired RSS Acies Ideas"].link = "news_lat.html?source=wired&type=ideas";
	wholeMenu["Wired RSS Acies Ideas"].html = 'Ideas';

	wholeMenu["Wired RSS Acies Science"] = {};
	wholeMenu["Wired RSS Acies Science"].id = "26_7_7";
	wholeMenu["Wired RSS Acies Science"].color = "red";
	wholeMenu["Wired RSS Acies Science"].hasSub = 0;
	wholeMenu["Wired RSS Acies Science"].link = "news_lat.html?source=wired&type=science";
	wholeMenu["Wired RSS Acies Science"].html = 'Science';

	wholeMenu["Wired RSS Acies Security"] = {};
	wholeMenu["Wired RSS Acies Security"].id = "26_7_8";
	wholeMenu["Wired RSS Acies Security"].color = "red";
	wholeMenu["Wired RSS Acies Security"].hasSub = 0;
	wholeMenu["Wired RSS Acies Security"].link = "news_lat.html?source=wired&type=security";
	wholeMenu["Wired RSS Acies Security"].html = 'Security';

	wholeMenu["Wired RSS Acies Backchannel"] = {};
	wholeMenu["Wired RSS Acies Backchannel"].id = "26_7_9";
	wholeMenu["Wired RSS Acies Backchannel"].color = "red";
	wholeMenu["Wired RSS Acies Backchannel"].hasSub = 0;
	wholeMenu["Wired RSS Acies Backchannel"].link = "news_lat.html?source=wired&type=backchannel";
	wholeMenu["Wired RSS Acies Backchannel"].html = 'Backchannel';

	wholeMenu["Wired RSS Acies Guides"] = {};
	wholeMenu["Wired RSS Acies Guides"].id = "26_7_10";
	wholeMenu["Wired RSS Acies Guides"].color = "red";
	wholeMenu["Wired RSS Acies Guides"].hasSub = 0;
	wholeMenu["Wired RSS Acies Guides"].link = "news_lat.html?source=wired&type=guides";
	wholeMenu["Wired RSS Acies Guides"].html = 'Guides';

	wholeMenu["● Yahoo RSS Acies"] = {};
	wholeMenu["● Yahoo RSS Acies"].id = "26_5";
	wholeMenu["● Yahoo RSS Acies"].color = "red";
	wholeMenu["● Yahoo RSS Acies"].hasSub = 1;
	wholeMenu["● Yahoo RSS Acies"].link = "";
	wholeMenu["● Yahoo RSS Acies"].html = '&#9679; Yahoo RSS Acies';

	wholeMenu["Yahoo RSS Acies Top"] = {};
	wholeMenu["Yahoo RSS Acies Top"].id = "26_5_1";
	wholeMenu["Yahoo RSS Acies Top"].color = "red";
	wholeMenu["Yahoo RSS Acies Top"].hasSub = 0;
	wholeMenu["Yahoo RSS Acies Top"].link = "news_lat.html?source=yahoo&type=top";
	wholeMenu["Yahoo RSS Acies Top"].html = 'Top';

	wholeMenu["Yahoo RSS Acies World"] = {};
	wholeMenu["Yahoo RSS Acies World"].id = "26_5_2";
	wholeMenu["Yahoo RSS Acies World"].color = "red";
	wholeMenu["Yahoo RSS Acies World"].hasSub = 0;
	wholeMenu["Yahoo RSS Acies World"].link = "news_lat.html?source=yahoo&type=world";
	wholeMenu["Yahoo RSS Acies World"].html = 'World';

	wholeMenu["Yahoo RSS Acies US"] = {};
	wholeMenu["Yahoo RSS Acies US"].id = "26_5_3";
	wholeMenu["Yahoo RSS Acies US"].color = "red";
	wholeMenu["Yahoo RSS Acies US"].hasSub = 0;
	wholeMenu["Yahoo RSS Acies US"].link = "news_lat.html?source=yahoo&type=us";
	wholeMenu["Yahoo RSS Acies US"].html = 'US';

	wholeMenu["Yahoo RSS Acies Politics"] = {};
	wholeMenu["Yahoo RSS Acies Politics"].id = "26_5_4";
	wholeMenu["Yahoo RSS Acies Politics"].color = "red";
	wholeMenu["Yahoo RSS Acies Politics"].hasSub = 0;
	wholeMenu["Yahoo RSS Acies Politics"].link = "news_lat.html?source=yahoo&type=politics";
	wholeMenu["Yahoo RSS Acies Politics"].html = 'Politics';

	wholeMenu["Yahoo RSS Acies Health"] = {};
	wholeMenu["Yahoo RSS Acies Health"].id = "26_5_5";
	wholeMenu["Yahoo RSS Acies Health"].color = "red";
	wholeMenu["Yahoo RSS Acies Health"].hasSub = 0;
	wholeMenu["Yahoo RSS Acies Health"].link = "news_lat.html?source=yahoo&type=health";
	wholeMenu["Yahoo RSS Acies Health"].html = 'Health';

	wholeMenu["Yahoo RSS Acies Finance"] = {};
	wholeMenu["Yahoo RSS Acies Finance"].id = "26_5_6";
	wholeMenu["Yahoo RSS Acies Finance"].color = "red";
	wholeMenu["Yahoo RSS Acies Finance"].hasSub = 0;
	wholeMenu["Yahoo RSS Acies Finance"].link = "news_lat.html?source=yahoo&type=finance";
	wholeMenu["Yahoo RSS Acies Finance"].html = 'Finance';

	wholeMenu["Yahoo RSS Acies Science"] = {};
	wholeMenu["Yahoo RSS Acies Science"].id = "26_5_7";
	wholeMenu["Yahoo RSS Acies Science"].color = "red";
	wholeMenu["Yahoo RSS Acies Science"].hasSub = 0;
	wholeMenu["Yahoo RSS Acies Science"].link = "news_lat.html?source=yahoo&type=science";
	wholeMenu["Yahoo RSS Acies Science"].html = 'Science';

	wholeMenu["Yahoo RSS Acies Sports"] = {};
	wholeMenu["Yahoo RSS Acies Sports"].id = "26_5_8";
	wholeMenu["Yahoo RSS Acies Sports"].color = "red";
	wholeMenu["Yahoo RSS Acies Sports"].hasSub = 0;
	wholeMenu["Yahoo RSS Acies Sports"].link = "news_lat.html?source=yahoo&type=sports";
	wholeMenu["Yahoo RSS Acies Sports"].html = 'Sports';

	wholeMenu["Yahoo RSS Acies Entertainment"] = {};
	wholeMenu["Yahoo RSS Acies Entertainment"].id = "26_5_9";
	wholeMenu["Yahoo RSS Acies Entertainment"].color = "red";
	wholeMenu["Yahoo RSS Acies Entertainment"].hasSub = 0;
	wholeMenu["Yahoo RSS Acies Entertainment"].link = "news_lat.html?source=yahoo&type=entertainment";
	wholeMenu["Yahoo RSS Acies Entertainment"].html = 'Entertainment';

	wholeMenu["Yahoo RSS Acies Lifestyle"] = {};
	wholeMenu["Yahoo RSS Acies Lifestyle"].id = "26_5_10";
	wholeMenu["Yahoo RSS Acies Lifestyle"].color = "red";
	wholeMenu["Yahoo RSS Acies Lifestyle"].hasSub = 0;
	wholeMenu["Yahoo RSS Acies Lifestyle"].link = "news_lat.html?source=yahoo&type=lifestyle";
	wholeMenu["Yahoo RSS Acies Lifestyle"].html = 'Lifestyle';

	wholeMenu["● Yonhap RSS Acies"] = {};
	wholeMenu["● Yonhap RSS Acies"].id = "26_4";
	wholeMenu["● Yonhap RSS Acies"].color = "red";
	wholeMenu["● Yonhap RSS Acies"].hasSub = 1;
	wholeMenu["● Yonhap RSS Acies"].link = "";
	wholeMenu["● Yonhap RSS Acies"].html = '&#9679; Yonhap RSS Acies';

	wholeMenu["Yonhap RSS Acies All News"] = {};
	wholeMenu["Yonhap RSS Acies All News"].id = "26_4_1";
	wholeMenu["Yonhap RSS Acies All News"].color = "red";
	wholeMenu["Yonhap RSS Acies All News"].hasSub = 0;
	wholeMenu["Yonhap RSS Acies All News"].link = "news_lat.html?source=yonhap&type=all";
	wholeMenu["Yonhap RSS Acies All News"].html = 'All News';

	wholeMenu["Yonhap RSS Acies National"] = {};
	wholeMenu["Yonhap RSS Acies National"].id = "26_4_2";
	wholeMenu["Yonhap RSS Acies National"].color = "red";
	wholeMenu["Yonhap RSS Acies National"].hasSub = 0;
	wholeMenu["Yonhap RSS Acies National"].link = "news_lat.html?source=yonhap&type=national";
	wholeMenu["Yonhap RSS Acies National"].html = 'National';

	wholeMenu["Yonhap RSS Acies North Korea"] = {};
	wholeMenu["Yonhap RSS Acies North Korea"].id = "26_4_3";
	wholeMenu["Yonhap RSS Acies North Korea"].color = "red";
	wholeMenu["Yonhap RSS Acies North Korea"].hasSub = 0;
	wholeMenu["Yonhap RSS Acies North Korea"].link = "news_lat.html?source=yonhap&type=northkorea";
	wholeMenu["Yonhap RSS Acies North Korea"].html = 'North Korea';

	wholeMenu["Yonhap RSS Acies Economy/Finance"] = {};
	wholeMenu["Yonhap RSS Acies Economy/Finance"].id = "26_4_4";
	wholeMenu["Yonhap RSS Acies Economy/Finance"].color = "red";
	wholeMenu["Yonhap RSS Acies Economy/Finance"].hasSub = 0;
	wholeMenu["Yonhap RSS Acies Economy/Finance"].link = "news_lat.html?source=yonhap&type=economy";
	wholeMenu["Yonhap RSS Acies Economy/Finance"].html = 'Economy/Finance';

	wholeMenu["Yonhap RSS Acies BIZ"] = {};
	wholeMenu["Yonhap RSS Acies BIZ"].id = "26_4_5";
	wholeMenu["Yonhap RSS Acies BIZ"].color = "red";
	wholeMenu["Yonhap RSS Acies BIZ"].hasSub = 0;
	wholeMenu["Yonhap RSS Acies BIZ"].link = "news_lat.html?source=yonhap&type=biz";
	wholeMenu["Yonhap RSS Acies BIZ"].html = 'BIZ';

	wholeMenu["Yonhap RSS Acies Culture/K-pop"] = {};
	wholeMenu["Yonhap RSS Acies Culture/K-pop"].id = "26_4_6";
	wholeMenu["Yonhap RSS Acies Culture/K-pop"].color = "red";
	wholeMenu["Yonhap RSS Acies Culture/K-pop"].hasSub = 0;
	wholeMenu["Yonhap RSS Acies Culture/K-pop"].link = "news_lat.html?source=yonhap&type=culture";
	wholeMenu["Yonhap RSS Acies Culture/K-pop"].html = 'Culture/K-pop';

	wholeMenu["Yonhap RSS Acies Sports"] = {};
	wholeMenu["Yonhap RSS Acies Sports"].id = "26_4_7";
	wholeMenu["Yonhap RSS Acies Sports"].color = "red";
	wholeMenu["Yonhap RSS Acies Sports"].hasSub = 0;
	wholeMenu["Yonhap RSS Acies Sports"].link = "news_lat.html?source=yonhap&type=sports";
	wholeMenu["Yonhap RSS Acies Sports"].html = 'Sports';


}

return wholeMenu;
}




function  loadMenuContentsLink(ele, lang) {

	var wholeMenu = {};

	wholeMenu[ele.innerText.trim()] = {};
	wholeMenu[ele.innerText.trim()].id = "c";
	wholeMenu[ele.innerText.trim()].color = ele.className.substr(10);
	wholeMenu[ele.innerText.trim()].hasSub = 1;
	wholeMenu[ele.innerText.trim()].link = "";
	wholeMenu[ele.innerText.trim()].html = ''+ele.innerHTML.trim();

	var type;
	if (typeof getParameterByName === "function") { 
		type = getParameterByName('type');
	} else {
		type="";
	}

	var addImage=0;
	if (type=="movies" || type=="music" || type=="series" || type=="games" || type=="junk") addImage=1;

	if (lang=="eng") {
		if (addImage) {
			var anchors=ele.href.split("#");
			if (anchors.length>1) {
				wholeMenu["Image"] = {};
				wholeMenu["Image"].id = "c_0";
				wholeMenu["Image"].color = ele.className.substr(10);
				var type2=type;
				if (type=="series" && (
					anchors[1]=="animation" || 
					anchors[1]=="body_horror" || 
					anchors[1]=="space_opera" || 
					anchors[1]=="movies_superhero" || 
					anchors[1]=="dc_extended_universe" || 
					anchors[1]=="marvel_cinematic_universe")) {
					type2="movies";
				}
				wholeMenu["Image"].html='<img id="popupImage" src="images/icons/'+type2+'/'+anchors[1]+'.jpg" />';
			}
		}
		if (typeof ele.dataset.score!== "undefined") {
			wholeMenu["Score"] = {};
			wholeMenu["Score"].id = "c_1";
			wholeMenu["Score"].color = ele.className.substr(10);
			wholeMenu["Score"].html = 'Score: <font color="orange">';
			for (var i =0; i<ele.dataset.score; i++) {
				wholeMenu["Score"].html=wholeMenu["Score"].html+"&bigstar;"
			}
			wholeMenu["Score"].html=wholeMenu["Score"].html+'</font><font color="silver">';
			for (var i =0; i<5-ele.dataset.score; i++) {
				wholeMenu["Score"].html=wholeMenu["Score"].html+"&bigstar;"
			}
			wholeMenu["Score"].html=wholeMenu["Score"].html+"</font>";
		}
		if (typeof ele.dataset.country!== "undefined") {
			wholeMenu["Country"] = {};
			wholeMenu["Country"].id = "c_2";
			wholeMenu["Country"].color = ele.className.substr(10);
			var countries=ele.dataset.country.split(";");
			if (countries.length>1) {
				wholeMenu["Country"].html = 'Countries: ';
			} else {
				wholeMenu["Country"].html = 'Country: ';
			}
			for (var i = 0; i < countries.length; i++) {
				wholeMenu["Country"].html=wholeMenu["Country"].html+'<img src="lang/all/'+countries[i]+'.gif" height="17"  title="'+getFlagTitle(countries[i], lang)+'" data-ttcolor="'+ele.className.substr(10)+'" style="vertical-align:middle; margin-right: 5px;"/>';
			}
		}
		if (typeof ele.dataset.title_orig!== "undefined") {
			wholeMenu["TitleOrig"] = {};
			wholeMenu["TitleOrig"].id = "c_3";
			wholeMenu["TitleOrig"].color = ele.className.substr(10);
			wholeMenu["TitleOrig"].html = 'Title '+getLangShort(ele.dataset.lang, lang)+': '+ele.dataset.title_orig;
		}
		if (typeof ele.dataset.genre !== "undefined") {
			wholeMenu["Genre"] = {};
			wholeMenu["Genre"].id = "c_4";
			wholeMenu["Genre"].color = ele.className.substr(10);
			wholeMenu["Genre"].html = 'Genre: '+ele.dataset.genre;
		}
		if (typeof ele.dataset.actor!== "undefined") {
			wholeMenu["Actor"] = {};
			wholeMenu["Actor"].id = "c_5";
			wholeMenu["Actor"].color = ele.className.substr(10);
			wholeMenu["Actor"].html = 'Actor: '+ele.dataset.actor;
		}
		if (typeof ele.dataset.actor_orig!== "undefined") {
			wholeMenu["ActorOrig"] = {};
			wholeMenu["ActorOrig"].id = "c_6";
			wholeMenu["ActorOrig"].color = ele.className.substr(10);
			wholeMenu["ActorOrig"].html = 'Actor '+getLangShort(ele.dataset.lang, lang)+': '+ele.dataset.actor_orig;
		}
		if (typeof ele.dataset.video!== "undefined") {
			wholeMenu["Video"] = {};
			wholeMenu["Video"].id = "c_7";
			wholeMenu["Video"].color = ele.className.substr(10);
			wholeMenu["Video"].html = 'Video: '+ele.dataset.video;
		}
		if (typeof ele.dataset.audio!== "undefined") {
			wholeMenu["Audio"] = {};
			wholeMenu["Audio"].id = "c_8";
			wholeMenu["Audio"].color = ele.className.substr(10);
			wholeMenu["Audio"].html = 'Audio: '+ele.dataset.audio;
		}
		if (typeof ele.dataset.author!== "undefined") {
			wholeMenu["Author"] = {};
			wholeMenu["Author"].id = "c_9";
			wholeMenu["Author"].color = ele.className.substr(10);
			wholeMenu["Author"].html = 'Author: '+ele.dataset.author;
		}
		if (typeof ele.dataset.author_orig!== "undefined") {
			wholeMenu["AuthorOrig"] = {};
			wholeMenu["AuthorOrig"].id = "c_10";
			wholeMenu["AuthorOrig"].color = ele.className.substr(10);
			wholeMenu["AuthorOrig"].html = 'Author '+getLangShort(ele.dataset.lang, lang)+': '+ele.dataset.author_orig;
		}
		if (typeof ele.dataset.year!== "undefined") {
			wholeMenu["Year"] = {};
			wholeMenu["Year"].id = "c_11";
			wholeMenu["Year"].color = ele.className.substr(10);
			wholeMenu["Year"].html = 'Year: '+ele.dataset.year;
		}
		if (typeof ele.dataset.established!== "undefined") {
			wholeMenu["Established"] = {};
			wholeMenu["Established"].id = "c_12";
			wholeMenu["Established"].color = ele.className.substr(10);
			wholeMenu["Established"].html = 'Established: '+ele.dataset.established;
		}
		if (typeof ele.dataset.added!== "undefined") {
			wholeMenu["Added"] = {};
			wholeMenu["Added"].id = "c_13";
			wholeMenu["Added"].color = ele.className.substr(10);
			wholeMenu["Added"].html = 'Added: '+ele.dataset.added;
		}
	}

	if (lang=="rus") {
		if (addImage) {
			var anchors=ele.href.split("#");
			if (anchors.length>1) {
				wholeMenu["Картинка"] = {};
				wholeMenu["Картинка"].id = "c_0";
				wholeMenu["Картинка"].color = ele.className.substr(10);
				var type2=type;
				if (type=="series" && (
					anchors[1]=="animation" || 
					anchors[1]=="body_horror" || 
					anchors[1]=="space_opera" || 
					anchors[1]=="movies_superhero" || 
					anchors[1]=="dc_extended_universe" || 
					anchors[1]=="marvel_cinematic_universe")) {
					type2="movies";
				}
				wholeMenu["Картинка"].html='<img id="popupImage" src="images/icons/'+type2+'/'+anchors[1]+'.jpg" />';
			}
		}
		if (typeof ele.dataset.score!== "undefined") {
			wholeMenu["Счёт"] = {};
			wholeMenu["Счёт"].id = "c_1";
			wholeMenu["Счёт"].color = ele.className.substr(10);
			wholeMenu["Счёт"].html = 'Счёт: <font color="orange">';
			for (var i =0; i<ele.dataset.score; i++) {
				wholeMenu["Счёт"].html=wholeMenu["Счёт"].html+"&bigstar;"
			}
			wholeMenu["Счёт"].html=wholeMenu["Счёт"].html+'</font><font color="silver">';
			for (var i =0; i<5-ele.dataset.score; i++) {
				wholeMenu["Счёт"].html=wholeMenu["Счёт"].html+"&bigstar;"
			}
			wholeMenu["Счёт"].html=wholeMenu["Счёт"].html+"</font>";
		}
		if (typeof ele.dataset.country!== "undefined") {
			wholeMenu["Страна"] = {};
			wholeMenu["Страна"].id = "c_2";
			wholeMenu["Страна"].color = ele.className.substr(10);
			var countries=ele.dataset.country.split(";");
			if (countries.length>1) {
				wholeMenu["Страна"].html = 'Страны: ';
			} else {
				wholeMenu["Страна"].html = 'Страна: ';
			}
			for (var i = 0; i < countries.length; i++) {
				wholeMenu["Страна"].html=wholeMenu["Страна"].html+'<img src="lang/all/'+countries[i]+'.gif" height="17"  title="'+getFlagTitle(countries[i], lang)+'" data-ttcolor="'+ele.className.substr(10)+'" style="vertical-align:middle; margin-right: 5px;"/>';
			}
		}
		if (typeof ele.dataset.title_orig!== "undefined") {
			wholeMenu["НазваниеОриг"] = {};
			wholeMenu["НазваниеОриг"].id = "c_3";
			wholeMenu["НазваниеОриг"].color = ele.className.substr(10);
			wholeMenu["НазваниеОриг"].html = 'Название '+getLangShort(ele.dataset.lang, lang)+': '+ele.dataset.title_orig;
		}
		if (typeof ele.dataset.genre !== "undefined") {
			wholeMenu["Жанр"] = {};
			wholeMenu["Жанр"].id = "c_4";
			wholeMenu["Жанр"].color = ele.className.substr(10);
			wholeMenu["Жанр"].html = 'Жанр: '+ele.dataset.genre;
		}
		if (typeof ele.dataset.actor!== "undefined") {
			wholeMenu["Актёр"] = {};
			wholeMenu["Актёр"].id = "c_5";
			wholeMenu["Актёр"].color = ele.className.substr(10);
			wholeMenu["Актёр"].html = 'Актёр: '+ele.dataset.actor;
		}
		if (typeof ele.dataset.actor_orig!== "undefined") {
			wholeMenu["АктёрОриг"] = {};
			wholeMenu["АктёрОриг"].id = "c_6";
			wholeMenu["АктёрОриг"].color = ele.className.substr(10);
			wholeMenu["АктёрОриг"].html = 'Актёр '+getLangShort(ele.dataset.lang, lang)+': '+ele.dataset.actor_orig;
		}
		if (typeof ele.dataset.video!== "undefined") {
			wholeMenu["Видео"] = {};
			wholeMenu["Видео"].id = "c_7";
			wholeMenu["Видео"].color = ele.className.substr(10);
			wholeMenu["Видео"].html = 'Видео: '+ele.dataset.video;
		}
		if (typeof ele.dataset.audio!== "undefined") {
			wholeMenu["Аудио"] = {};
			wholeMenu["Аудио"].id = "c_8";
			wholeMenu["Аудио"].color = ele.className.substr(10);
			wholeMenu["Аудио"].html = 'Аудио: '+ele.dataset.audio;
		}
		if (typeof ele.dataset.author!== "undefined") {
			wholeMenu["Автор"] = {};
			wholeMenu["Автор"].id = "c_9";
			wholeMenu["Автор"].color = ele.className.substr(10);
			wholeMenu["Автор"].html = 'Автор: '+ele.dataset.author;
		}
		if (typeof ele.dataset.author_orig!== "undefined") {
			wholeMenu["АвторОриг"] = {};
			wholeMenu["АвторОриг"].id = "c_10";
			wholeMenu["АвторОриг"].color = ele.className.substr(10);
			wholeMenu["АвторОриг"].html = 'Автор '+getLangShort(ele.dataset.lang, lang)+': '+ele.dataset.author_orig;
		}
		if (typeof ele.dataset.year!== "undefined") {
			wholeMenu["Год"] = {};
			wholeMenu["Год"].id = "c_11";
			wholeMenu["Год"].color = ele.className.substr(10);
			wholeMenu["Год"].html = 'Год: '+ele.dataset.year;
		}
		if (typeof ele.dataset.established!== "undefined") {
			wholeMenu["Основано"] = {};
			wholeMenu["Основано"].id = "c_12";
			wholeMenu["Основано"].color = ele.className.substr(10);
			wholeMenu["Основано"].html = 'Основано: '+ele.dataset.established;
		}
		if (typeof ele.dataset.added!== "undefined") {
			wholeMenu["Добавлено"] = {};
			wholeMenu["Добавлено"].id = "c_13";
			wholeMenu["Добавлено"].color = ele.className.substr(10);
			wholeMenu["Добавлено"].html = 'Добавлено: '+ele.dataset.added;
		}
	}

	if (lang=="lat") {
		if (addImage) {
			var anchors=ele.href.split("#");
			if (anchors.length>1) {
				wholeMenu["Imago"] = {};
				wholeMenu["Imago"].id = "c_0";
				wholeMenu["Imago"].color = ele.className.substr(10);
				var type2=type;
				if (type=="series" && (
					anchors[1]=="animation" || 
					anchors[1]=="body_horror" || 
					anchors[1]=="space_opera" || 
					anchors[1]=="movies_superhero" || 
					anchors[1]=="dc_extended_universe" || 
					anchors[1]=="marvel_cinematic_universe")) {
					type2="movies";
				}
				wholeMenu["Imago"].html='<img id="popupImage" src="images/icons/'+type2+'/'+anchors[1]+'.jpg" />';
			}
		}
		if (typeof ele.dataset.score!== "undefined") {
			wholeMenu["Ratio"] = {};
			wholeMenu["Ratio"].id = "c_1";
			wholeMenu["Ratio"].color = ele.className.substr(10);
			wholeMenu["Ratio"].html = 'Ratio: <font color="orange">';
			for (var i =0; i<ele.dataset.score; i++) {
				wholeMenu["Ratio"].html=wholeMenu["Ratio"].html+"&bigstar;"
			}
			wholeMenu["Ratio"].html=wholeMenu["Ratio"].html+'</font><font color="silver">';
			for (var i =0; i<5-ele.dataset.score; i++) {
				wholeMenu["Ratio"].html=wholeMenu["Ratio"].html+"&bigstar;"
			}
			wholeMenu["Ratio"].html=wholeMenu["Ratio"].html+"</font>";
		}
		if (typeof ele.dataset.country!== "undefined") {
			wholeMenu["Patriam"] = {};
			wholeMenu["Patriam"].id = "c_2";
			wholeMenu["Patriam"].color = ele.className.substr(10);
			var countries=ele.dataset.country.split(";");
			if (countries.length>1) {
				wholeMenu["Patriam"].html = 'Terris: ';
			} else {
				wholeMenu["Patriam"].html = 'Patriam: ';
			}
			for (var i = 0; i < countries.length; i++) {
				wholeMenu["Patriam"].html=wholeMenu["Patriam"].html+'<img src="lang/all/'+countries[i]+'.gif" height="17"  title="'+getFlagTitle(countries[i], lang)+'" data-ttcolor="'+ele.className.substr(10)+'" style="vertical-align:middle; margin-right: 5px;"/>';
			}
		}
		if (typeof ele.dataset.title_orig!== "undefined") {
			wholeMenu["TitulusOrig"] = {};
			wholeMenu["TitulusOrig"].id = "c_3";
			wholeMenu["TitulusOrig"].color = ele.className.substr(10);
			wholeMenu["TitulusOrig"].html = 'Titulus '+getLangShort(ele.dataset.lang, lang)+': '+ele.dataset.title_orig;
		}
		if (typeof ele.dataset.genre !== "undefined") {
			wholeMenu["Genus"] = {};
			wholeMenu["Genus"].id = "c_4";
			wholeMenu["Genus"].color = ele.className.substr(10);
			wholeMenu["Genus"].html = 'Genus: '+ele.dataset.genre;
		}
		if (typeof ele.dataset.actor!== "undefined") {
			wholeMenu["Actoris"] = {};
			wholeMenu["Actoris"].id = "c_5";
			wholeMenu["Actoris"].color = ele.className.substr(10);
			wholeMenu["Actoris"].html = 'Actoris: '+ele.dataset.actor;
		}
		if (typeof ele.dataset.actor_orig!== "undefined") {
			wholeMenu["ActorisOrig"] = {};
			wholeMenu["ActorisOrig"].id = "c_6";
			wholeMenu["ActorisOrig"].color = ele.className.substr(10);
			wholeMenu["ActorisOrig"].html = 'Actoris '+getLangShort(ele.dataset.lang, lang)+': '+ele.dataset.actor_orig;
		}
		if (typeof ele.dataset.video!== "undefined") {
			wholeMenu["Video"] = {};
			wholeMenu["Video"].id = "c_7";
			wholeMenu["Video"].color = ele.className.substr(10);
			wholeMenu["Video"].html = 'Video: '+ele.dataset.video;
		}
		if (typeof ele.dataset.audio!== "undefined") {
			wholeMenu["Audio"] = {};
			wholeMenu["Audio"].id = "c_8";
			wholeMenu["Audio"].color = ele.className.substr(10);
			wholeMenu["Audio"].html = 'Audio: '+ele.dataset.audio;
		}
		if (typeof ele.dataset.author!== "undefined") {
			wholeMenu["Auctor"] = {};
			wholeMenu["Auctor"].id = "c_9";
			wholeMenu["Auctor"].color = ele.className.substr(10);
			wholeMenu["Auctor"].html = 'Auctor: '+ele.dataset.author;
		}
		if (typeof ele.dataset.author_orig!== "undefined") {
			wholeMenu["AuctorOrig"] = {};
			wholeMenu["AuctorOrig"].id = "c_10";
			wholeMenu["AuctorOrig"].color = ele.className.substr(10);
			wholeMenu["AuctorOrig"].html = 'Auctor '+getLangShort(ele.dataset.lang, lang)+': '+ele.dataset.author_orig;
		}
		if (typeof ele.dataset.year!== "undefined") {
			wholeMenu["Annus"] = {};
			wholeMenu["Annus"].id = "c_11";
			wholeMenu["Annus"].color = ele.className.substr(10);
			wholeMenu["Annus"].html = 'Annus: '+ele.dataset.year;
		}
		if (typeof ele.dataset.established!== "undefined") {
			wholeMenu["Statutum"] = {};
			wholeMenu["Statutum"].id = "c_12";
			wholeMenu["Statutum"].color = ele.className.substr(10);
			wholeMenu["Statutum"].html = 'Statutum: '+ele.dataset.established;
		}
		if (typeof ele.dataset.added!== "undefined") {
			wholeMenu["Additae"] = {};
			wholeMenu["Additae"].id = "c_13";
			wholeMenu["Additae"].color = ele.className.substr(10);
			wholeMenu["Additae"].html = 'Additae: '+ele.dataset.added;
		}
	}
	return wholeMenu;
}

function updateImageElement(ele, type) {
	const img = ele.querySelector('img');
	if (!img) return;

	const url = new URL(img.src, window.location.origin);
	const dir = url.pathname.slice(0, url.pathname.lastIndexOf('/') + 1);
	const parts = url.pathname
		.split('/')
		.pop()
		.replace('.svg', '')
		.split('_');
	const newFile = [...parts.slice(0, -1), type].join('_') + '.svg';

	img.src = dir + newFile;
//	img.height = 18;
//	img.style.verticalAlign = 'middle';
//	img.style.paddingRight = '5px';
}

function mouseInMenu(ele) {
	ele.className = "menu_selected";
	updateImageElement(ele, "selected");
}
function mouseOutMenu(ele, color) {
	if (clickStarted) return;
	ele.className="menu_not_selected_"+color;
	updateImageElement(ele, color);
}

function addTableRow(tableSM, menu, key, lang, type, newTableId, isCaption = 0) {

	var row, cell1, divSM, isImage, textStyle="";

	row = tableSM.insertRow(-1);
	cell1 = row.insertCell(0);
	cell1.setAttribute('style', 'padding:0px;');
	divSM = document.createElement("div");
	if (isCaption==0) {
		divSM.setAttribute('id', 'menu_' + menu.id);
	} else {
		divSM.setAttribute('id', 'menu_' + menu.id+"_cap");
	}
	divSM.align = "left";

	if (type != "contentsLink" && isCaption==0) {
		divSM.setAttribute('onmouseenter', "if (clickStarted) return; mouseInMenu(this); showSubMenu(this, '"+lang+"', '"+type+"', "+newTableId+");");
		divSM.setAttribute('onmouseleave', "if (clickStarted) return; mouseOutMenu(this, '"+menu.color+"');");
	}
	if (isCaption==1) {
		divSM.setAttribute('tabindex', "-1");
		divSM.setAttribute('onmouseenter', "hideSubMenu(this, 1);");
	} else {
		if (type != "contentsLink") {
			divSM.setAttribute('role', "button");
			divSM.setAttribute('tabindex', "0");
			divSM.setAttribute('onkeydown', "if(event.key==='Enter' || event.key===' ') { event.preventDefault(); this.click(); this.onmouseleave();}");
			if (menu.hasSub) {
				divSM.setAttribute('onclick', "showSubMenu(this, '"+lang+"', '"+type+"', "+newTableId+");");
			} else {
				divSM.setAttribute('onclick', "if (event.ctrlKey) { window.open('"+menu.link+"'); } else { clickStarted = true; window.location.href='"+menu.link+"'; };");
			}
		}
	}

	if (isCaption && typeof menu.alternativeCaption !== "undefined") {
		divSM.innerHTML = menu.alternativeCaption;
	} else {
		divSM.innerHTML = menu.html;
	}
	divSM.style.display = "inline-block";

	isImage = 0;
	if (type == "contentsLink" && (lang == "rus" && key == "Картинка" || lang == "eng" && key == "Image" || lang == "lat" && key == "Imago")) isImage = 1;

	if (isCaption==1) {
		divSM.setAttribute('class', 'menu_selected');
	} else {
		if (!isImage) {
			divSM.setAttribute('class', 'menu_not_selected_' + menu.color);
		} else {
			divSM.setAttribute('class', 'text_' + menu.color);
		}
	}

	if (isImage) textStyle+="text-align: center; padding-top:5px; ";
	if (isCaption) textStyle+="outline: none; ";
	if (type == "contentsLink") textStyle+="cursor:auto; ";
	divSM.setAttribute('style', textStyle+"border-spacing: 0px; padding-left:5px; padding-right:5px;");

	cell1.appendChild(divSM);
	if (isCaption) divSM.focus({ preventScroll: true });

	if (divSM.scrollHeight > divSM.clientHeight) divSM.style.height = "auto";
}

var lastSubMenuType = "";
var lastRect="";

function showSubMenu(ele, lang, type, newTableId) {
	var tablex, wholeMenu, key, keys, tableSM, row, cell1, rect, top_shift, left_shift, tableStyle;
	var prevId, top_scroll, h, rectT, popupImage, imageHeight, i, tableWidth;
	var lastSubMenu = null;

	if (typeof type === "undefined" || type != "contentsLink") ele.setAttribute('class', 'menu_selected');

	if (type != "contentsLink" && lastSubMenuType == "contentsLink" ) {
		hideSubMenu(ele, -1);
	}
	if (typeof newTableId === "undefined" && typeof ele === "undefined") {
		hideSubMenu(ele, -1);
	}

	if (typeof newTableId === "undefined" && typeof ele !== "undefined") {
		lastSubMenu = hideSubMenu(ele, 0);
	}

	if (typeof type === "undefined") {
		hideSubMenu(ele, -1);
		return;
	}

	if (typeof newTableId === "undefined") {
		newTableId = 1;
	} else {
		lastSubMenu = hideSubMenu(ele);
	}

	// additional case
	if (lastSubMenu!=null) {
		rectT=lastSubMenu.getBoundingClientRect();
		if (lastRect.left-rectT.left>=1) {
			lastSubMenu = hideSubMenu(ele, 0, lastSubMenu.dataset.id);
		}
	}

	tablex = document.getElementById("table" + newTableId);
	if (tablex && ele.getBoundingClientRect().left == tablex.dataset.origLeft && ele.id==tablex.dataset.id && type != "contentsLink") {
		// table already exists
		if (isMobileLike()) ele.setAttribute('onclick', "hideSubMenu(this, 1);");
		return;
	}

	lastSubMenuType = type;

	switch(type) {
		case 'sitemap': wholeMenu = loadMenuSitemap(lang); break;
		case 'music': wholeMenu = loadMenuMusic(lang); break;
		case 'movies': wholeMenu = loadMenuMovies(lang); break;
		case 'series': wholeMenu = loadMenuSeries(lang); break;
		case 'games': wholeMenu = loadMenuGames(lang); break;
		case 'books': wholeMenu = loadMenuBooks(lang); break;
		case 'photos': wholeMenu = loadMenuPhotos(lang); break;
		case 'amv': wholeMenu = loadMenuAmv(lang); break;
		case 'stuff': wholeMenu = loadMenuStuff(lang); break;
		case 'anecdotes': wholeMenu = loadMenuAnecdotes(lang); break;
		case 'relaxation': wholeMenu = loadMenuRelaxation(lang); break;
		case 'software': wholeMenu = loadMenuSoftware(lang); break;
		case 'satanism': wholeMenu = loadMenuSatanism(lang); break;
		case 'psychology': wholeMenu = loadMenuPsychology(lang); break;
		case 'countries': wholeMenu = loadMenuCountries(lang); break;
		case 'personalities': wholeMenu = loadMenuPersonalities(lang); break;
		case 'news': wholeMenu = loadMenuNews(lang); break;
		case 'contentsLink': wholeMenu = loadMenuContentsLink(ele, lang); break;
	}

	if (type == "contentsLink") ele.id = "menu_c";
	key = ele.innerText.trim();

	if (typeof wholeMenu[key] === "undefined" || wholeMenu[key].hasSub == 0) {
		if (lastSubMenu!=null) {
			hideSubMenu(ele, 0, lastSubMenu.dataset.id);
		} else {
			hideSubMenu(ele, 0);
		}
		return;
	}

	requestAnimationFrame(() => {
		ele.setAttribute('onclick', "hideSubMenu(this, 1);");
		if (isMobileLike()) {
			ele.setAttribute(
				"onmouseleave",
				`mouseOutMenu(this, "${wholeMenu[key].color}");
				this.setAttribute('onclick', 'showSubMenu(this, "${lang}", "${type}", ${newTableId});');
				this.setAttribute('onmouseleave', 'mouseOutMenu(this, "${wholeMenu[key].color}");');`
			);
		}
	});

	rect = ele.getBoundingClientRect();
	if (lastSubMenu==null) {
		tableSM = document.createElement("table");
		tableSM.setAttribute('id', "table" + newTableId);
		tableSM.dataset.id = ele.id;
		tableSM.dataset.origLeft = rect.left;
		tableSM.dataset.lang = lang;
		tableSM.dataset.type = type;

		top_shift = -9999;
		if (type == "contentsLink") {
			left_shift = rect.right + 10.0;
		} else {
			left_shift = rect.right - 10.0;
		}

		tableStyle = "";
		if (window.Galleria) tableStyle = "z-index: 10000;";
		tableStyle += " position: absolute; border: 1px #ff8a00 solid; border-spacing: 0px; box-shadow: 2px 2px 4px #ff8a00;";
		tableStyle += " opacity:0; transition: opacity 0.2s linear;";
		if (type != "contentsLink") {
			tableStyle += " width: 280px;";
		} else {
			tableWidth=" max-width: 280px; ";
			if (type == "contentsLink" && (lang == "rus" && typeof wholeMenu["Картинка"] !== "undefined" || lang == "eng" && typeof wholeMenu["Image"] !== "undefined" || lang == "lat" && typeof wholeMenu["Imago"] !== "undefined")) {
				tableWidth=" max-width: 362px; ";
			}
			tableStyle += tableWidth;
		}
		tableSM.setAttribute('style', tableStyle);
		tableSM.style.top=top_shift+"px";
		tableSM.style.left=left_shift+"px";

	} else {
		tableSM=lastSubMenu;
		tableSM.innerHTML = ''; lastSubMenu.innerHTML = '';
		tableSM.style.transition = "opacity 0.2s linear";
		tableSM.setAttribute('id', "table" + newTableId);
		tableSM.dataset.id = ele.id;
		tableSM.dataset.origLeft = rect.left;
		tableSM.dataset.lang = lang;
		tableSM.dataset.type = type;
	}
	if (lastSubMenu==null) document.body.appendChild(tableSM);

	// caption
	addTableRow(tableSM, wholeMenu[key], key, lang, type, newTableId + 1, 1);

	prevId = "";
	keys = Object.keys(wholeMenu);
	for (i = 0; i < keys.length; i++) {
		var id = wholeMenu[keys[i]].id;
		if (id.lastIndexOf("_") == -1) continue;
		if (id == prevId) continue;
		prevId = id;
		if (wholeMenu[key].id == id.substring(0, id.lastIndexOf("_"))) {
			addTableRow(tableSM, wholeMenu[keys[i]], keys[i], lang, type, newTableId + 1);
		}
	}

	top_scroll = window.scrollY;
	h = getViewportHeight();
	popupImage = document.getElementById("popupImage");

	if (!popupImage) {
		rectT = tableSM.getBoundingClientRect();
		top_shift = top_scroll + rect.top + rect.height / 2 - rectT.height / 2;
		tableSM.style.top=top_shift+"px";
		rectT = tableSM.getBoundingClientRect();
		if (rectT.top < 0) {
			top_shift = top_scroll;
		}
		if (rectT.bottom > h) {
			top_shift = top_scroll + h - rectT.height;
		}

		if (lastSubMenu!=null) {
			tableSM.style.transition = "opacity 0.2s linear";
			var shiftTransitionStart=top_scroll + lastRect.top+lastRect.height/2-rectT.height/2;
			if (shiftTransitionStart<0) {
				shiftTransitionStart=top_scroll ;
			}
			if (shiftTransitionStart+rectT.height - top_scroll > h) {
				shiftTransitionStart=top_scroll + h - rectT.height;
			}
			tableSM.style.top=shiftTransitionStart+"px";
			tableSM.offsetHeight;
			tableSM.style.transition = "top 0.2s ease-out, left 0.2s ease-out, opacity 0.2s linear";
			if (type == "contentsLink") {
				left_shift = rect.right + 10.0;
				tableSM.style.left=left_shift+"px";
			}

		}
		tableSM.style.top=top_shift+"px";
		lastRect=rect;
	}

	if (lastSubMenu==null) {
		requestAnimationFrame(() => { tableSM.style.opacity = "1"; });
	}

	if (popupImage) {
		popupImage.onload = function () {
			if (lastSubMenu!=null) tableSM.style.transition = "opacity 0.2s linear";
			var imageHeight = popupImage.height;
			rectT = tableSM.getBoundingClientRect();
			top_shift = top_scroll + rect.top + rect.height / 2 - rectT.height / 2;
			tableSM.style.top=top_shift+"px";
			rectT = tableSM.getBoundingClientRect();
			if (rectT.top < 0) {
				top_shift = top_scroll;
			}
			if (rectT.bottom > h) {
				top_shift = top_scroll + h - rectT.height;
			}
			if (lastSubMenu!=null) {
				var shiftTransitionStart=top_scroll + lastRect.top+lastRect.height/2-rectT.height/2;
				if (shiftTransitionStart<0) {
					shiftTransitionStart=top_scroll;
				}
				if (shiftTransitionStart+rectT.height  - top_scroll > h) {
					shiftTransitionStart=top_scroll + h - rectT.height;
				}
				tableSM.style.top=shiftTransitionStart+"px";
				tableSM.offsetHeight;
				tableSM.style.transition = "top 0.2s ease-out, left 0.2s ease-out, opacity 0.2s linear";
				if (type == "contentsLink") {
					left_shift = rect.right + 10.0;
					tableSM.style.left=left_shift+"px";
				}
			}
			tableSM.style.top=top_shift+"px";
			lastRect=rect;
		};
	}
}

function hideSubMenu(ele, manual = 0, additDel = "") {
	var maxSubCount = 3, eleID, tables, objToRemove=[], ret=null;

	eleID = "";
	if (typeof ele === "undefined") {
		manual = -1;
	} else {
		eleID = ele.id;
	}

	// for contentsL only
	var popupImage = document.getElementById("popupImage");
	if (popupImage) popupImage.id="";

	tables = [];
	for (var i = 0; i < maxSubCount; i++) {
		tables[i] = document.getElementById("table" + (i + 1));
	}

	// subs with ret
	if (manual == 0) {
		for (let i = maxSubCount - 1; i >= 0; i--) {
			if (tables[i]) {
				// use existing table for new contents
				if (tables[i].dataset.id != additDel && ele.getBoundingClientRect().left == tables[i].dataset.origLeft && eleID!=tables[i].dataset.id || lastSubMenuType == "contentsLink") {
					ret=tables[i];
					requestAnimationFrame(() => {
						document.getElementById(tables[i].dataset.id).setAttribute('onclick', "showSubMenu(this, '"+tables[i].dataset.lang+"', '"+tables[i].dataset.type+"', "+(i+1)+");");
					});
					continue;
				}
				if (eleID.indexOf(tables[i].dataset.id) == -1 || tables[i].dataset.id == additDel) {
					document.getElementById(tables[i].dataset.id).setAttribute('onclick', "showSubMenu(this, '"+tables[i].dataset.lang+"', '"+tables[i].dataset.type+"', "+(i+1)+");");
					tables[i].id="";
					tables[i].querySelectorAll("*").forEach(el => {
						el.removeAttribute("onclick");
						el.removeAttribute("onmouseenter");
						el.removeAttribute("onmouseleave");
						el.removeAttribute("title");
					});
					objToRemove.push(tables[i]);
				}
			}
		}
	}

	// subs no ret
	if (manual == 1) {
		for (let i = maxSubCount - 1; i >= 0; i--) {
			if (tables[i]) {
				if (eleID == tables[i].dataset.id+"_cap") break; // additional case 
				requestAnimationFrame(() => {
					document.getElementById(tables[i].dataset.id).setAttribute('onclick', "showSubMenu(this, '"+tables[i].dataset.lang+"', '"+tables[i].dataset.type+"', "+(i+1)+");");
				});
				tables[i].id="";
				tables[i].querySelectorAll("*").forEach(el => {
					el.removeAttribute("onclick");
					el.removeAttribute("onmouseenter");
					el.removeAttribute("onmouseleave");
					el.removeAttribute("title");
				});
				objToRemove.push(tables[i]);
				if (eleID == tables[i].dataset.id) break;
			}
		}
	}

	// all
	if (manual == -1) {
		for (let i = maxSubCount - 1; i >= 0; i--) {
			if (tables[i]) {
				requestAnimationFrame(() => {
					document.getElementById(tables[i].dataset.id).setAttribute('onclick', "showSubMenu(this, '"+tables[i].dataset.lang+"', '"+tables[i].dataset.type+"', "+(i+1)+");");
				});
				tables[i].id="";
				tables[i].querySelectorAll("*").forEach(el => {
					el.removeAttribute("onclick");
					el.removeAttribute("onmouseenter");
					el.removeAttribute("onmouseleave");
					el.removeAttribute("title");
				});
				objToRemove.push(tables[i]);
			}
		}
	}
	if (objToRemove.length>0) {
		for (let i = 0; i < objToRemove.length; i++) {
			objToRemove[i].style.opacity = "0";
			setTimeout(() => { document.body.removeChild(objToRemove[i]); }, 200);
		}
	}
	return ret;
}

function hideSubMenuNotCont() {
	if (lastSubMenuType == "contentsLink") return;
	hideSubMenu();
}

$(document).keyup(function(e) {
	if (e.key === "Escape") {
		hideSubMenu();
	}
});

window.addEventListener('resize', function(event) {
	hideSubMenu();
});
