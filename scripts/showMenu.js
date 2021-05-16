
function  getLangShort(lang1, lang) {

	if (typeof lang1=== "undefined") {
		if (lang=='eng' || lang=='lat') return 'orig.';
		if (lang=='rus') return 'ориг.';
	}

	if (lang1=='eng') {
		if (lang=='eng' || lang=='lat') return 'eng.';
		if (lang=='rus') return 'англ.';
	}
	if (lang1=='fr') {
		if (lang=='eng' || lang=='lat') return 'fr.';
		if (lang=='rus') return 'фр.';
	}
	if (lang1=='rus') {
		if (lang=='eng' || lang=='lat') return 'rus.';
		if (lang=='rus') return 'рус.';
	}
	if (lang1=='chi') {
		if (lang=='eng' || lang=='lat') return 'chi.';
		if (lang=='rus') return 'кит.';
	}
	if (lang1=='hun') {
		if (lang=='eng' || lang=='lat') return 'hung.';
		if (lang=='rus') return 'венг.';
	}
	if (lang1=='sp') {
		if (lang=='eng' || lang=='lat') return 'sp.';
		if (lang=='rus') return 'исп.';
	}
	if (lang1=='port') {
		if (lang=='eng' || lang=='lat') return 'port.';
		if (lang=='rus') return 'порт.';
	}
	if (lang1=='it') {
		if (lang=='eng' || lang=='lat') return 'it.';
		if (lang=='rus') return 'ит.';
	}
}



function  getFlagTitle(flag, lang) {


	if (flag=='usa') {
		if (lang=='eng' || lang=='lat') return 'United States of America';
		if (lang=='rus') return 'Соединённые Штаты Америки';
	}
	if (flag=='united_kingdom') {
		if (lang=='eng' || lang=='lat') return 'United Kingdom of Great Britain and Northern Ireland';
		if (lang=='rus') return 'Соединённое Королевство Великобритании и Северной Ирландии';
	}
	if (flag=='france') {
		if (lang=='eng' || lang=='lat') return 'French Republic';
		if (lang=='rus') return 'Французская Республика';
	}
	if (flag=='russia') {
		if (lang=='eng' || lang=='lat') return 'Russian Federation';
		if (lang=='rus') return 'Российская Федерация';
	}
	if (flag=='ussr') {
		if (lang=='eng' || lang=='lat') return 'Union of Soviet Socialist Republics';
		if (lang=='rus') return 'Союз Советских Социалистических Республик';
	}
	if (flag=='sanmarino') {
		if (lang=='eng' || lang=='lat') return 'Republic of San Marino';
		if (lang=='rus') return 'Республика Сан-Марино';
	}
	if (flag=='israel') {
		if (lang=='eng' || lang=='lat') return 'State of Israel';
		if (lang=='rus') return 'Государство Израиль';
	}
	if (flag=='finland') {
		if (lang=='eng' || lang=='lat') return 'Republic of Finland';
		if (lang=='rus') return 'Финляндская Республика';
	}
	if (flag=='south_korea') {
		if (lang=='eng' || lang=='lat') return 'Republic of Korea';
		if (lang=='rus') return 'Республика Корея';
	}
	if (flag=='germany') {
		if (lang=='eng' || lang=='lat') return 'Federal Republic of Germany';
		if (lang=='rus') return 'Федеративная Республика Германия';
	}
	if (flag=='norway') {
		if (lang=='eng' || lang=='lat') return 'Kingdom of Norway';
		if (lang=='rus') return 'Королевство Норвегия';
	}
	if (flag=='sweden') {
		if (lang=='eng' || lang=='lat') return 'Kingdom of Sweden';
		if (lang=='rus') return 'Королевство Швеция';
	}
	if (flag=='italy') {
		if (lang=='eng' || lang=='lat') return 'Italian Republic';
		if (lang=='rus') return 'Итальянская Республика';
	}
	if (flag=='belgium') {
		if (lang=='eng' || lang=='lat') return 'Kingdom of Belgium';
		if (lang=='rus') return 'Королевство Бельгия';
	}
	if (flag=='spain') {
		if (lang=='eng' || lang=='lat') return 'Kingdom of Spain';
		if (lang=='rus') return 'Королевство Испания';
	}
	if (flag=='mexico') {
		if (lang=='eng' || lang=='lat') return 'United Mexican States';
		if (lang=='rus') return 'Мексиканские Соединённые Штаты';
	}
	if (flag=='brazil') {
		if (lang=='eng' || lang=='lat') return 'Federative Republic of Brazil';
		if (lang=='rus') return 'Федеративная Республика Бразилия';
	}
	if (flag=='greece') {
		if (lang=='eng' || lang=='lat') return 'Hellenic Republic';
		if (lang=='rus') return 'Греческая Республика';
	}
	if (flag=='denmark') {
		if (lang=='eng' || lang=='lat') return 'Kingdom of Denmark';
		if (lang=='rus') return 'Королевство Дания';
	}
	if (flag=='denmark') {
		if (lang=='eng' || lang=='lat') return 'Kingdom of Denmark';
		if (lang=='rus') return 'Королевство Дания';
	}
	if (flag=='bulgaria') {
		if (lang=='eng' || lang=='lat') return 'Republic of Bulgaria';
		if (lang=='rus') return 'Республика Болгария';
	}
	if (flag=='bulgaria') {
		if (lang=='eng' || lang=='lat') return 'Republic of Bulgaria';
		if (lang=='rus') return 'Республика Болгария';
	}

	if (flag=='canada') {
		if (lang=='eng' || lang=='lat') return 'Canada';
		if (lang=='rus') return 'Канада';
	}
	if (flag=='china') {
		if (lang=='eng' || lang=='lat') return 'People&apos;s Republic of China';
		if (lang=='rus') return 'Китайская Народная Республика';
	}
	if (flag=='japan') {
		if (lang=='eng' || lang=='lat') return 'Japan';
		if (lang=='rus') return 'Государство Япония';
	}
	if (flag=='hungary') {
		if (lang=='eng' || lang=='lat') return 'Hungary';
		if (lang=='rus') return 'Венгрия';
	}
	if (flag=='australia') {
		if (lang=='eng' || lang=='lat') return 'Commonwealth of Australia';
		if (lang=='rus') return 'Австралийский Союз';
	}
	if (flag=='austria') {
		if (lang=='eng' || lang=='lat') return 'Republic of Austria';
		if (lang=='rus') return 'Австрийская Республика';
	}
	if (flag=='switzerland') {
		if (lang=='eng' || lang=='lat') return 'Swiss Confederation';
		if (lang=='rus') return 'Швейцарская Конфедерация';
	}
	if (flag=='argentina') {
		if (lang=='eng' || lang=='lat') return 'Argentine Republic';
		if (lang=='rus') return 'Аргентинская Республика';
	}
	if (flag=='ireland') {
		if (lang=='eng' || lang=='lat') return 'Republic of Ireland';
		if (lang=='rus') return 'Республика Ирландия';
	}
	if (flag=='romania') {
		if (lang=='eng' || lang=='lat') return 'Romania';
		if (lang=='rus') return 'Румыния';
	}
	if (flag=='iceland') {
		if (lang=='eng' || lang=='lat') return 'Iceland';
		if (lang=='rus') return 'Исландия';
	}
	if (flag=='south_africa') {
		if (lang=='eng' || lang=='lat') return 'Republic of South Africa';
		if (lang=='rus') return 'Южно-Африканская Республика';
	}
	if (flag=='new_zealand') {
		if (lang=='eng' || lang=='lat') return 'New Zealand';
		if (lang=='rus') return 'Новая Зеландия';
	}
	if (flag=='czech') {
		if (lang=='eng' || lang=='lat') return 'Czech Republic';
		if (lang=='rus') return 'Чешская Республика';
	}
	if (flag=='poland') {
		if (lang=='eng' || lang=='lat') return 'Republic of Poland';
		if (lang=='rus') return 'Республика Польша';
	}
	if (flag=='serbia') {
		if (lang=='eng' || lang=='lat') return 'Republic of Serbia';
		if (lang=='rus') return 'Республика Сербия';
	}
	if (flag=='colombia') {
		if (lang=='eng' || lang=='lat') return 'Republic of Colombia';
		if (lang=='rus') return 'Республика Колумбия';
	}
	if (flag=='netherlands') {
		if (lang=='eng' || lang=='lat') return 'Netherlands';
		if (lang=='rus') return 'Нидерланды';
	}

	return "";

}


function  loadMenuSitemap(lang) {


var wholeMenu = [];


if (lang=="eng") {

	wholeMenu["Site Map"] = [];
	wholeMenu["Site Map"].id = "1";
	wholeMenu["Site Map"].color = "blue";
	wholeMenu["Site Map"].hasSub = 1;
	wholeMenu["Site Map"].link = "";
	wholeMenu["Site Map"].html = 'Site Map';


	wholeMenu["● About me"] = [];
	wholeMenu["● About me"].id = "1_1";
	wholeMenu["● About me"].color = "blue";
	wholeMenu["● About me"].hasSub = 1;
	wholeMenu["● About me"].subCaption = "&#9679; About me, Sort by";
	wholeMenu["● About me"].link = "";
	wholeMenu["● About me"].html = '&#9679; About me';

	wholeMenu["11SortBy"] = [];
	wholeMenu["11SortBy"].id = "1_1_1";
	wholeMenu["11SortBy"].color = "blue";
	wholeMenu["11SortBy"].hasSub = 0;
	wholeMenu["11SortBy"].link = "index_eng.html?type=aboutme&sortby=name";
	wholeMenu["11SortBy"].html = '<img src="scripts/contents/icons/sortby/sortby_name.png" width="22" height="18"  style="vertical-align:middle;"/>Name';

	wholeMenu["12SortBy"] = [];
	wholeMenu["12SortBy"].id = "1_1_2";
	wholeMenu["12SortBy"].color = "blue";
	wholeMenu["12SortBy"].hasSub = 0;
	wholeMenu["12SortBy"].link = "index_eng.html?type=aboutme&sortby=date";
	wholeMenu["12SortBy"].html = '<img src="scripts/contents/icons/sortby/sortby_date.png" width="22" height="18"  style="vertical-align:middle;"/>Date';

	wholeMenu["● About my work"] = [];
	wholeMenu["● About my work"].id = "1_2";
	wholeMenu["● About my work"].color = "blue";
	wholeMenu["● About my work"].hasSub = 1;
	wholeMenu["● About my work"].subCaption = "&#9679; About my work, Sort by";
	wholeMenu["● About my work"].link = "";
	wholeMenu["● About my work"].html = '&#9679; About my work';

	wholeMenu["21SortBy"] = [];
	wholeMenu["21SortBy"].id = "1_2_1";
	wholeMenu["21SortBy"].color = "blue";
	wholeMenu["21SortBy"].hasSub = 0;
	wholeMenu["21SortBy"].link = "index_eng.html?type=aboutwork&sortby=name";
	wholeMenu["21SortBy"].html = '<img src="scripts/contents/icons/sortby/sortby_name.png" width="22" height="18"  style="vertical-align:middle;"/>Name';

	wholeMenu["22SortBy"] = [];
	wholeMenu["22SortBy"].id = "1_2_2";
	wholeMenu["22SortBy"].color = "blue";
	wholeMenu["22SortBy"].hasSub = 0;
	wholeMenu["22SortBy"].link = "index_eng.html?type=aboutwork&sortby=date";
	wholeMenu["22SortBy"].html = '<img src="scripts/contents/icons/sortby/sortby_date.png" width="22" height="18"  style="vertical-align:middle;"/>Date';

	wholeMenu["● About my PhD"] = [];
	wholeMenu["● About my PhD"].id = "1_3";
	wholeMenu["● About my PhD"].color = "blue";
	wholeMenu["● About my PhD"].hasSub = 1;
	wholeMenu["● About my PhD"].subCaption = "&#9679; About my PhD, Sort by";
	wholeMenu["● About my PhD"].link = "";
	wholeMenu["● About my PhD"].html = '&#9679; About my PhD';

	wholeMenu["31SortBy"] = [];
	wholeMenu["31SortBy"].id = "1_3_1";
	wholeMenu["31SortBy"].color = "blue";
	wholeMenu["31SortBy"].hasSub = 0;
	wholeMenu["31SortBy"].link = "index_eng.html?type=phd&sortby=name";
	wholeMenu["31SortBy"].html = '<img src="scripts/contents/icons/sortby/sortby_name.png" width="22" height="18"  style="vertical-align:middle;"/>Name';

	wholeMenu["32SortBy"] = [];
	wholeMenu["32SortBy"].id = "1_3_2";
	wholeMenu["32SortBy"].color = "blue";
	wholeMenu["32SortBy"].hasSub = 0;
	wholeMenu["32SortBy"].link = "index_eng.html?type=phd&sortby=date";
	wholeMenu["32SortBy"].html = '<img src="scripts/contents/icons/sortby/sortby_date.png" width="22" height="18"  style="vertical-align:middle;"/>Date';

	wholeMenu["● Links"] = [];
	wholeMenu["● Links"].id = "1_4";
	wholeMenu["● Links"].color = "blue";
	wholeMenu["● Links"].hasSub = 1;
	wholeMenu["● Links"].subCaption = "&#9679; Links, Sort by";
	wholeMenu["● Links"].link = "";
	wholeMenu["● Links"].html = '&#9679; Links';

	wholeMenu["41SortBy"] = [];
	wholeMenu["41SortBy"].id = "1_4_1";
	wholeMenu["41SortBy"].color = "blue";
	wholeMenu["41SortBy"].hasSub = 0;
	wholeMenu["41SortBy"].link = "index_eng.html?type=links&sortby=name";
	wholeMenu["41SortBy"].html = '<img src="scripts/contents/icons/sortby/sortby_name.png" width="22" height="18"  style="vertical-align:middle;"/>Name';

	wholeMenu["42SortBy"] = [];
	wholeMenu["42SortBy"].id = "1_4_2";
	wholeMenu["42SortBy"].color = "blue";
	wholeMenu["42SortBy"].hasSub = 0;
	wholeMenu["42SortBy"].link = "index_eng.html?type=links&sortby=date";
	wholeMenu["42SortBy"].html = '<img src="scripts/contents/icons/sortby/sortby_date.png" width="22" height="18"  style="vertical-align:middle;"/>Date';

	wholeMenu["● How-To ✶ No Entry ✶"] = [];
	wholeMenu["● How-To ✶ No Entry ✶"].id = "1_5";
	wholeMenu["● How-To ✶ No Entry ✶"].color = "blue";
	wholeMenu["● How-To ✶ No Entry ✶"].hasSub = 1;
	wholeMenu["● How-To ✶ No Entry ✶"].subCaption = '&#9679; How-To <font color="fuchsia"><sup>&#10038; No Entry &#10038;</sup></font>, Sort by';
	wholeMenu["● How-To ✶ No Entry ✶"].link = "";
	wholeMenu["● How-To ✶ No Entry ✶"].html = '&#9679; How-To <font color="fuchsia"><sup>&#10038; No Entry &#10038;</sup></font>';

	wholeMenu["51SortBy"] = [];
	wholeMenu["51SortBy"].id = "1_5_1";
	wholeMenu["51SortBy"].color = "blue";
	wholeMenu["51SortBy"].hasSub = 0;
	wholeMenu["51SortBy"].link = "index_eng.html?type=howto&sortby=name";
	wholeMenu["51SortBy"].html = '<img src="scripts/contents/icons/sortby/sortby_name.png" width="22" height="18"  style="vertical-align:middle;"/>Name';

	wholeMenu["52SortBy"] = [];
	wholeMenu["52SortBy"].id = "1_5_2";
	wholeMenu["52SortBy"].color = "blue";
	wholeMenu["52SortBy"].hasSub = 0;
	wholeMenu["52SortBy"].link = "index_eng.html?type=howto&sortby=date";
	wholeMenu["52SortBy"].html = '<img src="scripts/contents/icons/sortby/sortby_date.png" width="22" height="18"  style="vertical-align:middle;"/>Date';

	wholeMenu["● Music ☥ Vampiric ☥"] = [];
	wholeMenu["● Music ☥ Vampiric ☥"].id = "1_6";
	wholeMenu["● Music ☥ Vampiric ☥"].color = "black";
	wholeMenu["● Music ☥ Vampiric ☥"].hasSub = 1;
	wholeMenu["● Music ☥ Vampiric ☥"].subCaption = '&#9679; Music <font color="purple"><sup>&#9765; Vampiric &#9765;</sup></font>, Sort by';
	wholeMenu["● Music ☥ Vampiric ☥"].link = "";
	wholeMenu["● Music ☥ Vampiric ☥"].html = '&#9679; Music <font color="purple"><sup>&#9765; Vampiric &#9765;</sup></font>';

	wholeMenu["61SortBy"] = [];
	wholeMenu["61SortBy"].id = "1_6_1";
	wholeMenu["61SortBy"].color = "black";
	wholeMenu["61SortBy"].hasSub = 0;
	wholeMenu["61SortBy"].link = "index_eng.html?type=music&sortby=name";
	wholeMenu["61SortBy"].html = '<img src="scripts/contents/icons/sortby/sortby_name.png" width="22" height="18"  style="vertical-align:middle;"/>Name';

	wholeMenu["62SortBy"] = [];
	wholeMenu["62SortBy"].id = "1_6_2";
	wholeMenu["62SortBy"].color = "black";
	wholeMenu["62SortBy"].hasSub = 0;
	wholeMenu["62SortBy"].link = "index_eng.html?type=music&sortby=date";
	wholeMenu["62SortBy"].html = '<img src="scripts/contents/icons/sortby/sortby_date.png" width="22" height="18"  style="vertical-align:middle;"/>Date';

	wholeMenu["● Movies"] = [];
	wholeMenu["● Movies"].id = "1_7";
	wholeMenu["● Movies"].color = "black";
	wholeMenu["● Movies"].hasSub = 1;
	wholeMenu["● Movies"].subCaption = "&#9679; Movies, Sort by";
	wholeMenu["● Movies"].link = "";
	wholeMenu["● Movies"].html = '&#9679; Movies';

	wholeMenu["71SortBy"] = [];
	wholeMenu["71SortBy"].id = "1_7_1";
	wholeMenu["71SortBy"].color = "black";
	wholeMenu["71SortBy"].hasSub = 0;
	wholeMenu["71SortBy"].link = "index_eng.html?type=movies&sortby=name";
	wholeMenu["71SortBy"].html = '<img src="scripts/contents/icons/sortby/sortby_name.png" width="22" height="18"  style="vertical-align:middle;"/>Name';

	wholeMenu["72SortBy"] = [];
	wholeMenu["72SortBy"].id = "1_7_2";
	wholeMenu["72SortBy"].color = "black";
	wholeMenu["72SortBy"].hasSub = 0;
	wholeMenu["72SortBy"].link = "index_eng.html?type=movies&sortby=date";
	wholeMenu["72SortBy"].html = '<img src="scripts/contents/icons/sortby/sortby_date.png" width="22" height="18"  style="vertical-align:middle;"/>Date';

	wholeMenu["● Series"] = [];
	wholeMenu["● Series"].id = "1_27";
	wholeMenu["● Series"].color = "black";
	wholeMenu["● Series"].hasSub = 1;
	wholeMenu["● Series"].subCaption = "&#9679; Series, Sort by";
	wholeMenu["● Series"].link = "";
	wholeMenu["● Series"].html = '&#9679; Series';

	wholeMenu["271SortBy"] = [];
	wholeMenu["271SortBy"].id = "1_27_1";
	wholeMenu["271SortBy"].color = "black";
	wholeMenu["271SortBy"].hasSub = 0;
	wholeMenu["271SortBy"].link = "index_eng.html?type=series&sortby=name";
	wholeMenu["271SortBy"].html = '<img src="scripts/contents/icons/sortby/sortby_name.png" width="22" height="18"  style="vertical-align:middle;"/>Name';

	wholeMenu["272SortBy"] = [];
	wholeMenu["272SortBy"].id = "1_27_2";
	wholeMenu["272SortBy"].color = "black";
	wholeMenu["272SortBy"].hasSub = 0;
	wholeMenu["272SortBy"].link = "index_eng.html?type=series&sortby=date";
	wholeMenu["272SortBy"].html = '<img src="scripts/contents/icons/sortby/sortby_date.png" width="22" height="18"  style="vertical-align:middle;"/>Date';

	wholeMenu["● Games"] = [];
	wholeMenu["● Games"].id = "1_8";
	wholeMenu["● Games"].color = "black";
	wholeMenu["● Games"].hasSub = 1;
	wholeMenu["● Games"].subCaption = "&#9679; Games, Sort by";
	wholeMenu["● Games"].link = "";
	wholeMenu["● Games"].html = '&#9679; Games';

	wholeMenu["81SortBy"] = [];
	wholeMenu["81SortBy"].id = "1_8_1";
	wholeMenu["81SortBy"].color = "black";
	wholeMenu["81SortBy"].hasSub = 0;
	wholeMenu["81SortBy"].link = "index_eng.html?type=games&sortby=name";
	wholeMenu["81SortBy"].html = '<img src="scripts/contents/icons/sortby/sortby_name.png" width="22" height="18"  style="vertical-align:middle;"/>Name';

	wholeMenu["82SortBy"] = [];
	wholeMenu["82SortBy"].id = "1_8_2";
	wholeMenu["82SortBy"].color = "black";
	wholeMenu["82SortBy"].hasSub = 0;
	wholeMenu["82SortBy"].link = "index_eng.html?type=games&sortby=date";
	wholeMenu["82SortBy"].html = '<img src="scripts/contents/icons/sortby/sortby_date.png" width="22" height="18"  style="vertical-align:middle;"/>Date';

	wholeMenu["● Books"] = [];
	wholeMenu["● Books"].id = "1_9";
	wholeMenu["● Books"].color = "red";
	wholeMenu["● Books"].hasSub = 1;
	wholeMenu["● Books"].subCaption = "&#9679; Books, Sort by";
	wholeMenu["● Books"].link = "";
	wholeMenu["● Books"].html = '&#9679; Books';

	wholeMenu["91SortBy"] = [];
	wholeMenu["91SortBy"].id = "1_9_1";
	wholeMenu["91SortBy"].color = "red";
	wholeMenu["91SortBy"].hasSub = 0;
	wholeMenu["91SortBy"].link = "index_eng.html?type=books&sortby=name";
	wholeMenu["91SortBy"].html = '<img src="scripts/contents/icons/sortby/sortby_name.png" width="22" height="18"  style="vertical-align:middle;"/>Name';

	wholeMenu["92SortBy"] = [];
	wholeMenu["92SortBy"].id = "1_9_2";
	wholeMenu["92SortBy"].color = "red";
	wholeMenu["92SortBy"].hasSub = 0;
	wholeMenu["92SortBy"].link = "index_eng.html?type=books&sortby=date";
	wholeMenu["92SortBy"].html = '<img src="scripts/contents/icons/sortby/sortby_date.png" width="22" height="18"  style="vertical-align:middle;"/>Date';

	wholeMenu["● Photos/Images"] = [];
	wholeMenu["● Photos/Images"].id = "1_10";
	wholeMenu["● Photos/Images"].color = "red";
	wholeMenu["● Photos/Images"].hasSub = 1;
	wholeMenu["● Photos/Images"].subCaption = "&#9679; Photos/Images, Sort by";
	wholeMenu["● Photos/Images"].link = "";
	wholeMenu["● Photos/Images"].html = '&#9679; Photos/Images';

	wholeMenu["101SortBy"] = [];
	wholeMenu["101SortBy"].id = "1_10_1";
	wholeMenu["101SortBy"].color = "red";
	wholeMenu["101SortBy"].hasSub = 0;
	wholeMenu["101SortBy"].link = "index_eng.html?type=photos&sortby=name";
	wholeMenu["101SortBy"].html = '<img src="scripts/contents/icons/sortby/sortby_name.png" width="22" height="18"  style="vertical-align:middle;"/>Name';

	wholeMenu["102SortBy"] = [];
	wholeMenu["102SortBy"].id = "1_10_2";
	wholeMenu["102SortBy"].color = "red";
	wholeMenu["102SortBy"].hasSub = 0;
	wholeMenu["102SortBy"].link = "index_eng.html?type=photos&sortby=date";
	wholeMenu["102SortBy"].html = '<img src="scripts/contents/icons/sortby/sortby_date.png" width="22" height="18"  style="vertical-align:middle;"/>Date';

	wholeMenu["● AMV"] = [];
	wholeMenu["● AMV"].id = "1_11";
	wholeMenu["● AMV"].color = "black";
	wholeMenu["● AMV"].hasSub = 1;
	wholeMenu["● AMV"].subCaption = "&#9679; AMV, Sort by";
	wholeMenu["● AMV"].link = "";
	wholeMenu["● AMV"].html = '&#9679; AMV';

	wholeMenu["111SortBy"] = [];
	wholeMenu["111SortBy"].id = "1_11_1";
	wholeMenu["111SortBy"].color = "black";
	wholeMenu["111SortBy"].hasSub = 0;
	wholeMenu["111SortBy"].link = "index_eng.html?type=amv&sortby=name";
	wholeMenu["111SortBy"].html = '<img src="scripts/contents/icons/sortby/sortby_name.png" width="22" height="18"  style="vertical-align:middle;"/>Name';

	wholeMenu["112SortBy"] = [];
	wholeMenu["112SortBy"].id = "1_11_2";
	wholeMenu["112SortBy"].color = "black";
	wholeMenu["112SortBy"].hasSub = 0;
	wholeMenu["112SortBy"].link = "index_eng.html?type=amv&sortby=date";
	wholeMenu["112SortBy"].html = '<img src="scripts/contents/icons/sortby/sortby_date.png" width="22" height="18"  style="vertical-align:middle;"/>Date';

	wholeMenu["● Radio"] = [];
	wholeMenu["● Radio"].id = "1_12";
	wholeMenu["● Radio"].color = "black";
	wholeMenu["● Radio"].hasSub = 1;
	wholeMenu["● Radio"].subCaption = "&#9679; Radio, Sort by";
	wholeMenu["● Radio"].link = "";
	wholeMenu["● Radio"].html = '&#9679; Radio';

	wholeMenu["121SortBy"] = [];
	wholeMenu["121SortBy"].id = "1_12_1";
	wholeMenu["121SortBy"].color = "black";
	wholeMenu["121SortBy"].hasSub = 0;
	wholeMenu["121SortBy"].link = "index_eng.html?type=radio&sortby=name";
	wholeMenu["121SortBy"].html = '<img src="scripts/contents/icons/sortby/sortby_name.png" width="22" height="18"  style="vertical-align:middle;"/>Name';

	wholeMenu["122SortBy"] = [];
	wholeMenu["122SortBy"].id = "1_12_2";
	wholeMenu["122SortBy"].color = "black";
	wholeMenu["122SortBy"].hasSub = 0;
	wholeMenu["122SortBy"].link = "index_eng.html?type=radio&sortby=date";
	wholeMenu["122SortBy"].html = '<img src="scripts/contents/icons/sortby/sortby_date.png" width="22" height="18"  style="vertical-align:middle;"/>Date';

	wholeMenu["● Stuff ⚡ Evil ⚡"] = [];
	wholeMenu["● Stuff ⚡ Evil ⚡"].id = "1_13";
	wholeMenu["● Stuff ⚡ Evil ⚡"].color = "black";
	wholeMenu["● Stuff ⚡ Evil ⚡"].hasSub = 1;
	wholeMenu["● Stuff ⚡ Evil ⚡"].subCaption = '&#9679; Stuff <font color="red"><sup>&#9889; Evil &#9889;</sup></font>, Sort by';
	wholeMenu["● Stuff ⚡ Evil ⚡"].link = "";
	wholeMenu["● Stuff ⚡ Evil ⚡"].html = '&#9679; Stuff <font color="red"><sup>&#9889; Evil &#9889;</sup></font>';

	wholeMenu["131SortBy"] = [];
	wholeMenu["131SortBy"].id = "1_13_1";
	wholeMenu["131SortBy"].color = "black";
	wholeMenu["131SortBy"].hasSub = 0;
	wholeMenu["131SortBy"].link = "index_eng.html?type=stuff&sortby=name";
	wholeMenu["131SortBy"].html = '<img src="scripts/contents/icons/sortby/sortby_name.png" width="22" height="18"  style="vertical-align:middle;"/>Name';

	wholeMenu["132SortBy"] = [];
	wholeMenu["132SortBy"].id = "1_13_2";
	wholeMenu["132SortBy"].color = "black";
	wholeMenu["132SortBy"].hasSub = 0;
	wholeMenu["132SortBy"].link = "index_eng.html?type=stuff&sortby=date";
	wholeMenu["132SortBy"].html = '<img src="scripts/contents/icons/sortby/sortby_date.png" width="22" height="18"  style="vertical-align:middle;"/>Date';

	wholeMenu["● Anecdotes"] = [];
	wholeMenu["● Anecdotes"].id = "1_14";
	wholeMenu["● Anecdotes"].color = "red";
	wholeMenu["● Anecdotes"].hasSub = 1;
	wholeMenu["● Anecdotes"].subCaption = "&#9679; Anecdotes, Sort by";
	wholeMenu["● Anecdotes"].link = "";
	wholeMenu["● Anecdotes"].html = '&#9679; Anecdotes';

	wholeMenu["141SortBy"] = [];
	wholeMenu["141SortBy"].id = "1_14_1";
	wholeMenu["141SortBy"].color = "red";
	wholeMenu["141SortBy"].hasSub = 0;
	wholeMenu["141SortBy"].link = "index_eng.html?type=anecdotes&sortby=name";
	wholeMenu["141SortBy"].html = '<img src="scripts/contents/icons/sortby/sortby_name.png" width="22" height="18"  style="vertical-align:middle;"/>Name';

	wholeMenu["142SortBy"] = [];
	wholeMenu["142SortBy"].id = "1_14_2";
	wholeMenu["142SortBy"].color = "red";
	wholeMenu["142SortBy"].hasSub = 0;
	wholeMenu["142SortBy"].link = "index_eng.html?type=anecdotes&sortby=date";
	wholeMenu["142SortBy"].html = '<img src="scripts/contents/icons/sortby/sortby_date.png" width="22" height="18"  style="vertical-align:middle;"/>Date';

	wholeMenu["● Heffalump ☠ Criminal ☠"] = [];
	wholeMenu["● Heffalump ☠ Criminal ☠"].id = "1_15";
	wholeMenu["● Heffalump ☠ Criminal ☠"].color = "red";
	wholeMenu["● Heffalump ☠ Criminal ☠"].hasSub = 1;
	wholeMenu["● Heffalump ☠ Criminal ☠"].subCaption = '&#9679; Heffalump <font color="lightcoral"><sup>&#9760; Criminal &#9760;</sup></font>, Sort by';
	wholeMenu["● Heffalump ☠ Criminal ☠"].link = "";
	wholeMenu["● Heffalump ☠ Criminal ☠"].html = '&#9679; Heffalump <font color="lightcoral"><sup>&#9760; Criminal &#9760;</sup></font>';

	wholeMenu["151SortBy"] = [];
	wholeMenu["151SortBy"].id = "1_15_1";
	wholeMenu["151SortBy"].color = "red";
	wholeMenu["151SortBy"].hasSub = 0;
	wholeMenu["151SortBy"].link = "index_eng.html?type=heffalump&sortby=name";
	wholeMenu["151SortBy"].html = '<img src="scripts/contents/icons/sortby/sortby_name.png" width="22" height="18"  style="vertical-align:middle;"/>Name';

	wholeMenu["152SortBy"] = [];
	wholeMenu["152SortBy"].id = "1_15_2";
	wholeMenu["152SortBy"].color = "red";
	wholeMenu["152SortBy"].hasSub = 0;
	wholeMenu["152SortBy"].link = "index_eng.html?type=heffalump&sortby=date";
	wholeMenu["152SortBy"].html = '<img src="scripts/contents/icons/sortby/sortby_date.png" width="22" height="18"  style="vertical-align:middle;"/>Date';

	wholeMenu["● Substances For Relaxation"] = [];
	wholeMenu["● Substances For Relaxation"].id = "1_16";
	wholeMenu["● Substances For Relaxation"].color = "white";
	wholeMenu["● Substances For Relaxation"].hasSub = 1;
	wholeMenu["● Substances For Relaxation"].subCaption = "&#9679; Substances For Relaxation, Sort by";
	wholeMenu["● Substances For Relaxation"].link = "";
	wholeMenu["● Substances For Relaxation"].html = '&#9679; Substances For Relaxation';

	wholeMenu["161SortBy"] = [];
	wholeMenu["161SortBy"].id = "1_16_1";
	wholeMenu["161SortBy"].color = "white";
	wholeMenu["161SortBy"].hasSub = 0;
	wholeMenu["161SortBy"].link = "index_eng.html?type=relaxation&sortby=name";
	wholeMenu["161SortBy"].html = '<img src="scripts/contents/icons/sortby/sortby_name.png" width="22" height="18"  style="vertical-align:middle;"/>Name';

	wholeMenu["162SortBy"] = [];
	wholeMenu["162SortBy"].id = "1_16_2";
	wholeMenu["162SortBy"].color = "white";
	wholeMenu["162SortBy"].hasSub = 0;
	wholeMenu["162SortBy"].link = "index_eng.html?type=relaxation&sortby=date";
	wholeMenu["162SortBy"].html = '<img src="scripts/contents/icons/sortby/sortby_date.png" width="22" height="18"  style="vertical-align:middle;"/>Date';

	wholeMenu["● Software Development"] = [];
	wholeMenu["● Software Development"].id = "1_17";
	wholeMenu["● Software Development"].color = "white";
	wholeMenu["● Software Development"].hasSub = 1;
	wholeMenu["● Software Development"].subCaption = "&#9679; Software Development, Sort by";
	wholeMenu["● Software Development"].link = "";
	wholeMenu["● Software Development"].html = '&#9679; Software Development';

	wholeMenu["171SortBy"] = [];
	wholeMenu["171SortBy"].id = "1_17_1";
	wholeMenu["171SortBy"].color = "white";
	wholeMenu["171SortBy"].hasSub = 0;
	wholeMenu["171SortBy"].link = "index_eng.html?type=software&sortby=name";
	wholeMenu["171SortBy"].html = '<img src="scripts/contents/icons/sortby/sortby_name.png" width="22" height="18"  style="vertical-align:middle;"/>Name';

	wholeMenu["172SortBy"] = [];
	wholeMenu["172SortBy"].id = "1_17_2";
	wholeMenu["172SortBy"].color = "white";
	wholeMenu["172SortBy"].hasSub = 0;
	wholeMenu["172SortBy"].link = "index_eng.html?type=software&sortby=date";
	wholeMenu["172SortBy"].html = '<img src="scripts/contents/icons/sortby/sortby_date.png" width="22" height="18"  style="vertical-align:middle;"/>Date';

	wholeMenu["● Satanism"] = [];
	wholeMenu["● Satanism"].id = "1_18";
	wholeMenu["● Satanism"].color = "green";
	wholeMenu["● Satanism"].hasSub = 1;
	wholeMenu["● Satanism"].subCaption = "&#9679; Satanism, Sort by";
	wholeMenu["● Satanism"].link = "";
	wholeMenu["● Satanism"].html = '&#9679; Satanism';

	wholeMenu["181SortBy"] = [];
	wholeMenu["181SortBy"].id = "1_18_1";
	wholeMenu["181SortBy"].color = "green";
	wholeMenu["181SortBy"].hasSub = 0;
	wholeMenu["181SortBy"].link = "index_eng.html?type=satanism&sortby=name";
	wholeMenu["181SortBy"].html = '<img src="scripts/contents/icons/sortby/sortby_name.png" width="22" height="18"  style="vertical-align:middle;"/>Name';

	wholeMenu["182SortBy"] = [];
	wholeMenu["182SortBy"].id = "1_18_2";
	wholeMenu["182SortBy"].color = "green";
	wholeMenu["182SortBy"].hasSub = 0;
	wholeMenu["182SortBy"].link = "index_eng.html?type=satanism&sortby=date";
	wholeMenu["182SortBy"].html = '<img src="scripts/contents/icons/sortby/sortby_date.png" width="22" height="18"  style="vertical-align:middle;"/>Date';

	wholeMenu["● Wicca"] = [];
	wholeMenu["● Wicca"].id = "1_19";
	wholeMenu["● Wicca"].color = "green";
	wholeMenu["● Wicca"].hasSub = 1;
	wholeMenu["● Wicca"].subCaption = "&#9679; Wicca, Sort by";
	wholeMenu["● Wicca"].link = "";
	wholeMenu["● Wicca"].html = '&#9679; Wicca';

	wholeMenu["191SortBy"] = [];
	wholeMenu["191SortBy"].id = "1_19_1";
	wholeMenu["191SortBy"].color = "green";
	wholeMenu["191SortBy"].hasSub = 0;
	wholeMenu["191SortBy"].link = "index_eng.html?type=wicca&sortby=name";
	wholeMenu["191SortBy"].html = '<img src="scripts/contents/icons/sortby/sortby_name.png" width="22" height="18"  style="vertical-align:middle;"/>Name';

	wholeMenu["192SortBy"] = [];
	wholeMenu["192SortBy"].id = "1_19_2";
	wholeMenu["192SortBy"].color = "green";
	wholeMenu["192SortBy"].hasSub = 0;
	wholeMenu["192SortBy"].link = "index_eng.html?type=wicca&sortby=date";
	wholeMenu["192SortBy"].html = '<img src="scripts/contents/icons/sortby/sortby_date.png" width="22" height="18"  style="vertical-align:middle;"/>Date';

	wholeMenu["● Falsifiability"] = [];
	wholeMenu["● Falsifiability"].id = "1_20";
	wholeMenu["● Falsifiability"].color = "green";
	wholeMenu["● Falsifiability"].hasSub = 1;
	wholeMenu["● Falsifiability"].subCaption = "&#9679; Falsifiability, Sort by";
	wholeMenu["● Falsifiability"].link = "";
	wholeMenu["● Falsifiability"].html = '&#9679; Falsifiability';

	wholeMenu["201SortBy"] = [];
	wholeMenu["201SortBy"].id = "1_20_1";
	wholeMenu["201SortBy"].color = "green";
	wholeMenu["201SortBy"].hasSub = 0;
	wholeMenu["201SortBy"].link = "index_eng.html?type=falsifiability&sortby=name";
	wholeMenu["201SortBy"].html = '<img src="scripts/contents/icons/sortby/sortby_name.png" width="22" height="18"  style="vertical-align:middle;"/>Name';

	wholeMenu["202SortBy"] = [];
	wholeMenu["202SortBy"].id = "1_20_2";
	wholeMenu["202SortBy"].color = "green";
	wholeMenu["202SortBy"].hasSub = 0;
	wholeMenu["202SortBy"].link = "index_eng.html?type=falsifiability&sortby=date";
	wholeMenu["202SortBy"].html = '<img src="scripts/contents/icons/sortby/sortby_date.png" width="22" height="18"  style="vertical-align:middle;"/>Date';

	wholeMenu["● Psychology"] = [];
	wholeMenu["● Psychology"].id = "1_21";
	wholeMenu["● Psychology"].color = "green";
	wholeMenu["● Psychology"].hasSub = 1;
	wholeMenu["● Psychology"].subCaption = "&#9679; Psychology, Sort by";
	wholeMenu["● Psychology"].link = "";
	wholeMenu["● Psychology"].html = '&#9679; Psychology';

	wholeMenu["211SortBy"] = [];
	wholeMenu["211SortBy"].id = "1_21_1";
	wholeMenu["211SortBy"].color = "green";
	wholeMenu["211SortBy"].hasSub = 0;
	wholeMenu["211SortBy"].link = "index_eng.html?type=psychology&sortby=name";
	wholeMenu["211SortBy"].html = '<img src="scripts/contents/icons/sortby/sortby_name.png" width="22" height="18"  style="vertical-align:middle;"/>Name';

	wholeMenu["212SortBy"] = [];
	wholeMenu["212SortBy"].id = "1_21_2";
	wholeMenu["212SortBy"].color = "green";
	wholeMenu["212SortBy"].hasSub = 0;
	wholeMenu["212SortBy"].link = "index_eng.html?type=psychology&sortby=date";
	wholeMenu["212SortBy"].html = '<img src="scripts/contents/icons/sortby/sortby_date.png" width="22" height="18"  style="vertical-align:middle;"/>Date';

	wholeMenu["● Countries"] = [];
	wholeMenu["● Countries"].id = "1_22";
	wholeMenu["● Countries"].color = "green";
	wholeMenu["● Countries"].hasSub = 1;
	wholeMenu["● Countries"].subCaption = "&#9679; Countries, Sort by";
	wholeMenu["● Countries"].link = "";
	wholeMenu["● Countries"].html = '&#9679; Countries';

	wholeMenu["221SortBy"] = [];
	wholeMenu["221SortBy"].id = "1_22_1";
	wholeMenu["221SortBy"].color = "green";
	wholeMenu["221SortBy"].hasSub = 0;
	wholeMenu["221SortBy"].link = "index_eng.html?type=countries&sortby=name";
	wholeMenu["221SortBy"].html = '<img src="scripts/contents/icons/sortby/sortby_name.png" width="22" height="18"  style="vertical-align:middle;"/>Name';

	wholeMenu["222SortBy"] = [];
	wholeMenu["222SortBy"].id = "1_22_2";
	wholeMenu["222SortBy"].color = "green";
	wholeMenu["222SortBy"].hasSub = 0;
	wholeMenu["222SortBy"].link = "index_eng.html?type=countries&sortby=date";
	wholeMenu["222SortBy"].html = '<img src="scripts/contents/icons/sortby/sortby_date.png" width="22" height="18"  style="vertical-align:middle;"/>Date';

	wholeMenu["● Totalitarianism"] = [];
	wholeMenu["● Totalitarianism"].id = "1_23";
	wholeMenu["● Totalitarianism"].color = "green";
	wholeMenu["● Totalitarianism"].hasSub = 1;
	wholeMenu["● Totalitarianism"].subCaption = "&#9679; Totalitarianism, Sort by";
	wholeMenu["● Totalitarianism"].link = "";
	wholeMenu["● Totalitarianism"].html = '&#9679; Totalitarianism';

	wholeMenu["231SortBy"] = [];
	wholeMenu["231SortBy"].id = "1_23_1";
	wholeMenu["231SortBy"].color = "green";
	wholeMenu["231SortBy"].hasSub = 0;
	wholeMenu["231SortBy"].link = "index_eng.html?type=totalitarianism&sortby=name";
	wholeMenu["231SortBy"].html = '<img src="scripts/contents/icons/sortby/sortby_name.png" width="22" height="18"  style="vertical-align:middle;"/>Name';

	wholeMenu["232SortBy"] = [];
	wholeMenu["232SortBy"].id = "1_23_2";
	wholeMenu["232SortBy"].color = "green";
	wholeMenu["232SortBy"].hasSub = 0;
	wholeMenu["232SortBy"].link = "index_eng.html?type=totalitarianism&sortby=date";
	wholeMenu["232SortBy"].html = '<img src="scripts/contents/icons/sortby/sortby_date.png" width="22" height="18"  style="vertical-align:middle;"/>Date';

	wholeMenu["● Personalities"] = [];
	wholeMenu["● Personalities"].id = "1_24";
	wholeMenu["● Personalities"].color = "green";
	wholeMenu["● Personalities"].hasSub = 1;
	wholeMenu["● Personalities"].subCaption = "&#9679; Personalities, Sort by";
	wholeMenu["● Personalities"].link = "";
	wholeMenu["● Personalities"].html = '&#9679; Personalities';

	wholeMenu["241SortBy"] = [];
	wholeMenu["241SortBy"].id = "1_24_1";
	wholeMenu["241SortBy"].color = "green";
	wholeMenu["241SortBy"].hasSub = 0;
	wholeMenu["241SortBy"].link = "index_eng.html?type=personalities&sortby=name";
	wholeMenu["241SortBy"].html = '<img src="scripts/contents/icons/sortby/sortby_name.png" width="22" height="18"  style="vertical-align:middle;"/>Name';

	wholeMenu["242SortBy"] = [];
	wholeMenu["242SortBy"].id = "1_24_2";
	wholeMenu["242SortBy"].color = "green";
	wholeMenu["242SortBy"].hasSub = 0;
	wholeMenu["242SortBy"].link = "index_eng.html?type=personalities&sortby=date";
	wholeMenu["242SortBy"].html = '<img src="scripts/contents/icons/sortby/sortby_date.png" width="22" height="18"  style="vertical-align:middle;"/>Date';

	wholeMenu["● News"] = [];
	wholeMenu["● News"].id = "1_25";
	wholeMenu["● News"].color = "red";
	wholeMenu["● News"].hasSub = 1;
	wholeMenu["● News"].subCaption = "&#9679; News, Sort by";
	wholeMenu["● News"].link = "";
	wholeMenu["● News"].html = '&#9679; News';

	wholeMenu["251SortBy"] = [];
	wholeMenu["251SortBy"].id = "1_25_1";
	wholeMenu["251SortBy"].color = "red";
	wholeMenu["251SortBy"].hasSub = 0;
	wholeMenu["251SortBy"].link = "index_eng.html?type=news&sortby=name";
	wholeMenu["251SortBy"].html = '<img src="scripts/contents/icons/sortby/sortby_name.png" width="22" height="18"  style="vertical-align:middle;"/>Name';

	wholeMenu["252SortBy"] = [];
	wholeMenu["252SortBy"].id = "1_25_2";
	wholeMenu["252SortBy"].color = "red";
	wholeMenu["252SortBy"].hasSub = 0;
	wholeMenu["252SortBy"].link = "index_eng.html?type=news&sortby=date";
	wholeMenu["252SortBy"].html = '<img src="scripts/contents/icons/sortby/sortby_date.png" width="22" height="18"  style="vertical-align:middle;"/>Date';

}




if (lang=="rus") {


	wholeMenu["Карта Сайта"] = [];
	wholeMenu["Карта Сайта"].id = "1";
	wholeMenu["Карта Сайта"].color = "blue";
	wholeMenu["Карта Сайта"].hasSub = 1;
	wholeMenu["Карта Сайта"].link = "";
	wholeMenu["Карта Сайта"].html = 'Карта Сайта';

	wholeMenu["● Обо мне"] = [];
	wholeMenu["● Обо мне"].id = "1_1";
	wholeMenu["● Обо мне"].color = "blue";
	wholeMenu["● Обо мне"].hasSub = 1;
	wholeMenu["● Обо мне"].subCaption = "&#9679; Обо мне, Сортировать по";
	wholeMenu["● Обо мне"].link = "";
	wholeMenu["● Обо мне"].html = '&#9679; Обо мне';

	wholeMenu["11СортироватьПо"] = [];
	wholeMenu["11СортироватьПо"].id = "1_1_1";
	wholeMenu["11СортироватьПо"].color = "blue";
	wholeMenu["11СортироватьПо"].hasSub = 0;
	wholeMenu["11СортироватьПо"].link = "index_rus.html?type=aboutme&sortby=name";
	wholeMenu["11СортироватьПо"].html = '<img src="scripts/contents/icons/sortby/sortby_name.png" width="22" height="18"  style="vertical-align:middle;"/>Имени';

	wholeMenu["12СортироватьПо"] = [];
	wholeMenu["12СортироватьПо"].id = "1_1_2";
	wholeMenu["12СортироватьПо"].color = "blue";
	wholeMenu["12СортироватьПо"].hasSub = 0;
	wholeMenu["12СортироватьПо"].link = "index_rus.html?type=aboutme&sortby=date";
	wholeMenu["12СортироватьПо"].html = '<img src="scripts/contents/icons/sortby/sortby_date.png" width="22" height="18"  style="vertical-align:middle;"/>Дате';

	wholeMenu["● О моей работе"] = [];
	wholeMenu["● О моей работе"].id = "1_2";
	wholeMenu["● О моей работе"].color = "blue";
	wholeMenu["● О моей работе"].hasSub = 1;
	wholeMenu["● О моей работе"].subCaption = "&#9679; О моей работе, Сортировать по";
	wholeMenu["● О моей работе"].link = "";
	wholeMenu["● О моей работе"].html = '&#9679; О моей работе';

	wholeMenu["21СортироватьПо"] = [];
	wholeMenu["21СортироватьПо"].id = "1_2_1";
	wholeMenu["21СортироватьПо"].color = "blue";
	wholeMenu["21СортироватьПо"].hasSub = 0;
	wholeMenu["21СортироватьПо"].link = "index_rus.html?type=aboutwork&sortby=name";
	wholeMenu["21СортироватьПо"].html = '<img src="scripts/contents/icons/sortby/sortby_name.png" width="22" height="18"  style="vertical-align:middle;"/>Имени';

	wholeMenu["22СортироватьПо"] = [];
	wholeMenu["22СортироватьПо"].id = "1_2_2";
	wholeMenu["22СортироватьПо"].color = "blue";
	wholeMenu["22СортироватьПо"].hasSub = 0;
	wholeMenu["22СортироватьПо"].link = "index_rus.html?type=aboutwork&sortby=date";
	wholeMenu["22СортироватьПо"].html = '<img src="scripts/contents/icons/sortby/sortby_date.png" width="22" height="18"  style="vertical-align:middle;"/>Дате';

	wholeMenu["● О моём PhD"] = [];
	wholeMenu["● О моём PhD"].id = "1_3";
	wholeMenu["● О моём PhD"].color = "blue";
	wholeMenu["● О моём PhD"].hasSub = 1;
	wholeMenu["● О моём PhD"].subCaption = "&#9679; О моём PhD, Сортировать по";
	wholeMenu["● О моём PhD"].link = "";
	wholeMenu["● О моём PhD"].html = '&#9679; О моём PhD';

	wholeMenu["31СортироватьПо"] = [];
	wholeMenu["31СортироватьПо"].id = "1_3_1";
	wholeMenu["31СортироватьПо"].color = "blue";
	wholeMenu["31СортироватьПо"].hasSub = 0;
	wholeMenu["31СортироватьПо"].link = "index_rus.html?type=phd&sortby=name";
	wholeMenu["31СортироватьПо"].html = '<img src="scripts/contents/icons/sortby/sortby_name.png" width="22" height="18"  style="vertical-align:middle;"/>Имени';

	wholeMenu["32СортироватьПо"] = [];
	wholeMenu["32СортироватьПо"].id = "1_3_2";
	wholeMenu["32СортироватьПо"].color = "blue";
	wholeMenu["32СортироватьПо"].hasSub = 0;
	wholeMenu["32СортироватьПо"].link = "index_rus.html?type=phd&sortby=date";
	wholeMenu["32СортироватьПо"].html = '<img src="scripts/contents/icons/sortby/sortby_date.png" width="22" height="18"  style="vertical-align:middle;"/>Дате';

	wholeMenu["● Ссылки"] = [];
	wholeMenu["● Ссылки"].id = "1_4";
	wholeMenu["● Ссылки"].color = "blue";
	wholeMenu["● Ссылки"].hasSub = 1;
	wholeMenu["● Ссылки"].subCaption = "&#9679; Ссылки, Сортировать по";
	wholeMenu["● Ссылки"].link = "";
	wholeMenu["● Ссылки"].html = '&#9679; Ссылки';

	wholeMenu["41СортироватьПо"] = [];
	wholeMenu["41СортироватьПо"].id = "1_4_1";
	wholeMenu["41СортироватьПо"].color = "blue";
	wholeMenu["41СортироватьПо"].hasSub = 0;
	wholeMenu["41СортироватьПо"].link = "index_rus.html?type=links&sortby=name";
	wholeMenu["41СортироватьПо"].html = '<img src="scripts/contents/icons/sortby/sortby_name.png" width="22" height="18"  style="vertical-align:middle;"/>Имени';

	wholeMenu["42СортироватьПо"] = [];
	wholeMenu["42СортироватьПо"].id = "1_4_2";
	wholeMenu["42СортироватьПо"].color = "blue";
	wholeMenu["42СортироватьПо"].hasSub = 0;
	wholeMenu["42СортироватьПо"].link = "index_rus.html?type=links&sortby=date";
	wholeMenu["42СортироватьПо"].html = '<img src="scripts/contents/icons/sortby/sortby_date.png" width="22" height="18"  style="vertical-align:middle;"/>Дате';

	wholeMenu["● How-To ✶ No Entry ✶"] = [];
	wholeMenu["● How-To ✶ No Entry ✶"].id = "1_5";
	wholeMenu["● How-To ✶ No Entry ✶"].color = "blue";
	wholeMenu["● How-To ✶ No Entry ✶"].hasSub = 1;
	wholeMenu["● How-To ✶ No Entry ✶"].subCaption = '&#9679; How-To <font color="fuchsia"><sup>&#10038; No Entry &#10038;</sup></font>, Сорт. по';
	wholeMenu["● How-To ✶ No Entry ✶"].link = "";
	wholeMenu["● How-To ✶ No Entry ✶"].html = '&#9679; How-To <font color="fuchsia"><sup>&#10038; No Entry &#10038;</sup></font>';

	wholeMenu["51СортироватьПо"] = [];
	wholeMenu["51СортироватьПо"].id = "1_5_1";
	wholeMenu["51СортироватьПо"].color = "blue";
	wholeMenu["51СортироватьПо"].hasSub = 0;
	wholeMenu["51СортироватьПо"].link = "index_rus.html?type=howto&sortby=name";
	wholeMenu["51СортироватьПо"].html = '<img src="scripts/contents/icons/sortby/sortby_name.png" width="22" height="18"  style="vertical-align:middle;"/>Имени';

	wholeMenu["52СортироватьПо"] = [];
	wholeMenu["52СортироватьПо"].id = "1_5_2";
	wholeMenu["52СортироватьПо"].color = "blue";
	wholeMenu["52СортироватьПо"].hasSub = 0;
	wholeMenu["52СортироватьПо"].link = "index_rus.html?type=howto&sortby=date";
	wholeMenu["52СортироватьПо"].html = '<img src="scripts/contents/icons/sortby/sortby_date.png" width="22" height="18"  style="vertical-align:middle;"/>Дате';

	wholeMenu["● Музыка ☥ Vampiric ☥"] = [];
	wholeMenu["● Музыка ☥ Vampiric ☥"].id = "1_6";
	wholeMenu["● Музыка ☥ Vampiric ☥"].color = "black";
	wholeMenu["● Музыка ☥ Vampiric ☥"].hasSub = 1;
	wholeMenu["● Музыка ☥ Vampiric ☥"].subCaption = '&#9679; Музыка <font color="purple"><sup>&#9765; Vampiric &#9765;</sup></font>, Сорт. по';
	wholeMenu["● Музыка ☥ Vampiric ☥"].link = "";
	wholeMenu["● Музыка ☥ Vampiric ☥"].html = '&#9679; Музыка <font color="purple"><sup>&#9765; Vampiric &#9765;</sup></font>';

	wholeMenu["61СортироватьПо"] = [];
	wholeMenu["61СортироватьПо"].id = "1_6_1";
	wholeMenu["61СортироватьПо"].color = "black";
	wholeMenu["61СортироватьПо"].hasSub = 0;
	wholeMenu["61СортироватьПо"].link = "index_rus.html?type=music&sortby=name";
	wholeMenu["61СортироватьПо"].html = '<img src="scripts/contents/icons/sortby/sortby_name.png" width="22" height="18"  style="vertical-align:middle;"/>Имени';

	wholeMenu["62СортироватьПо"] = [];
	wholeMenu["62СортироватьПо"].id = "1_6_2";
	wholeMenu["62СортироватьПо"].color = "black";
	wholeMenu["62СортироватьПо"].hasSub = 0;
	wholeMenu["62СортироватьПо"].link = "index_rus.html?type=music&sortby=date";
	wholeMenu["62СортироватьПо"].html = '<img src="scripts/contents/icons/sortby/sortby_date.png" width="22" height="18"  style="vertical-align:middle;"/>Дате';

	wholeMenu["● Фильмы"] = [];
	wholeMenu["● Фильмы"].id = "1_7";
	wholeMenu["● Фильмы"].color = "black";
	wholeMenu["● Фильмы"].hasSub = 1;
	wholeMenu["● Фильмы"].subCaption = "&#9679; Фильмы, Сортировать по";
	wholeMenu["● Фильмы"].link = "";
	wholeMenu["● Фильмы"].html = '&#9679; Фильмы';

	wholeMenu["71СортироватьПо"] = [];
	wholeMenu["71СортироватьПо"].id = "1_7_1";
	wholeMenu["71СортироватьПо"].color = "black";
	wholeMenu["71СортироватьПо"].hasSub = 0;
	wholeMenu["71СортироватьПо"].link = "index_rus.html?type=movies&sortby=name";
	wholeMenu["71СортироватьПо"].html = '<img src="scripts/contents/icons/sortby/sortby_name.png" width="22" height="18"  style="vertical-align:middle;"/>Имени';

	wholeMenu["72СортироватьПо"] = [];
	wholeMenu["72СортироватьПо"].id = "1_7_2";
	wholeMenu["72СортироватьПо"].color = "black";
	wholeMenu["72СортироватьПо"].hasSub = 0;
	wholeMenu["72СортироватьПо"].link = "index_rus.html?type=movies&sortby=date";
	wholeMenu["72СортироватьПо"].html = '<img src="scripts/contents/icons/sortby/sortby_date.png" width="22" height="18"  style="vertical-align:middle;"/>Дате';

	wholeMenu["● Сериалы"] = [];
	wholeMenu["● Сериалы"].id = "1_27";
	wholeMenu["● Сериалы"].color = "black";
	wholeMenu["● Сериалы"].hasSub = 1;
	wholeMenu["● Сериалы"].subCaption = "&#9679; Сериалы, Сортировать по";
	wholeMenu["● Сериалы"].link = "";
	wholeMenu["● Сериалы"].html = '&#9679; Сериалы';

	wholeMenu["271СортироватьПо"] = [];
	wholeMenu["271СортироватьПо"].id = "1_27_1";
	wholeMenu["271СортироватьПо"].color = "black";
	wholeMenu["271СортироватьПо"].hasSub = 0;
	wholeMenu["271СортироватьПо"].link = "index_rus.html?type=series&sortby=name";
	wholeMenu["271СортироватьПо"].html = '<img src="scripts/contents/icons/sortby/sortby_name.png" width="22" height="18"  style="vertical-align:middle;"/>Имени';

	wholeMenu["272СортироватьПо"] = [];
	wholeMenu["272СортироватьПо"].id = "1_27_2";
	wholeMenu["272СортироватьПо"].color = "black";
	wholeMenu["272СортироватьПо"].hasSub = 0;
	wholeMenu["272СортироватьПо"].link = "index_rus.html?type=series&sortby=date";
	wholeMenu["272СортироватьПо"].html = '<img src="scripts/contents/icons/sortby/sortby_date.png" width="22" height="18"  style="vertical-align:middle;"/>Дате';


	wholeMenu["● Игры"] = [];
	wholeMenu["● Игры"].id = "1_8";
	wholeMenu["● Игры"].color = "black";
	wholeMenu["● Игры"].hasSub = 1;
	wholeMenu["● Игры"].subCaption = "&#9679; Игры, Сортировать по";
	wholeMenu["● Игры"].link = "";
	wholeMenu["● Игры"].html = '&#9679; Игры';

	wholeMenu["81СортироватьПо"] = [];
	wholeMenu["81СортироватьПо"].id = "1_8_1";
	wholeMenu["81СортироватьПо"].color = "black";
	wholeMenu["81СортироватьПо"].hasSub = 0;
	wholeMenu["81СортироватьПо"].link = "index_rus.html?type=games&sortby=name";
	wholeMenu["81СортироватьПо"].html = '<img src="scripts/contents/icons/sortby/sortby_name.png" width="22" height="18"  style="vertical-align:middle;"/>Имени';

	wholeMenu["82СортироватьПо"] = [];
	wholeMenu["82СортироватьПо"].id = "1_8_2";
	wholeMenu["82СортироватьПо"].color = "black";
	wholeMenu["82СортироватьПо"].hasSub = 0;
	wholeMenu["82СортироватьПо"].link = "index_rus.html?type=games&sortby=date";
	wholeMenu["82СортироватьПо"].html = '<img src="scripts/contents/icons/sortby/sortby_date.png" width="22" height="18"  style="vertical-align:middle;"/>Дате';

	wholeMenu["● Книги"] = [];
	wholeMenu["● Книги"].id = "1_9";
	wholeMenu["● Книги"].color = "red";
	wholeMenu["● Книги"].hasSub = 1;
	wholeMenu["● Книги"].subCaption = "&#9679; Книги, Сортировать по";
	wholeMenu["● Книги"].link = "";
	wholeMenu["● Книги"].html = '&#9679; Книги';

	wholeMenu["91СортироватьПо"] = [];
	wholeMenu["91СортироватьПо"].id = "1_9_1";
	wholeMenu["91СортироватьПо"].color = "red";
	wholeMenu["91СортироватьПо"].hasSub = 0;
	wholeMenu["91СортироватьПо"].link = "index_rus.html?type=books&sortby=name";
	wholeMenu["91СортироватьПо"].html = '<img src="scripts/contents/icons/sortby/sortby_name.png" width="22" height="18"  style="vertical-align:middle;"/>Имени';

	wholeMenu["92СортироватьПо"] = [];
	wholeMenu["92СортироватьПо"].id = "1_9_2";
	wholeMenu["92СортироватьПо"].color = "red";
	wholeMenu["92СортироватьПо"].hasSub = 0;
	wholeMenu["92СортироватьПо"].link = "index_rus.html?type=books&sortby=date";
	wholeMenu["92СортироватьПо"].html = '<img src="scripts/contents/icons/sortby/sortby_date.png" width="22" height="18"  style="vertical-align:middle;"/>Дате';

	wholeMenu["● Фото/Картинки"] = [];
	wholeMenu["● Фото/Картинки"].id = "1_10";
	wholeMenu["● Фото/Картинки"].color = "red";
	wholeMenu["● Фото/Картинки"].hasSub = 1;
	wholeMenu["● Фото/Картинки"].subCaption = "&#9679; Фото/Картинки, Сортировать по";
	wholeMenu["● Фото/Картинки"].link = "";
	wholeMenu["● Фото/Картинки"].html = '&#9679; Фото/Картинки';

	wholeMenu["101СортироватьПо"] = [];
	wholeMenu["101СортироватьПо"].id = "1_10_1";
	wholeMenu["101СортироватьПо"].color = "red";
	wholeMenu["101СортироватьПо"].hasSub = 0;
	wholeMenu["101СортироватьПо"].link = "index_rus.html?type=photos&sortby=name";
	wholeMenu["101СортироватьПо"].html = '<img src="scripts/contents/icons/sortby/sortby_name.png" width="22" height="18"  style="vertical-align:middle;"/>Имени';

	wholeMenu["102СортироватьПо"] = [];
	wholeMenu["102СортироватьПо"].id = "1_10_2";
	wholeMenu["102СортироватьПо"].color = "red";
	wholeMenu["102СортироватьПо"].hasSub = 0;
	wholeMenu["102СортироватьПо"].link = "index_rus.html?type=photos&sortby=date";
	wholeMenu["102СортироватьПо"].html = '<img src="scripts/contents/icons/sortby/sortby_date.png" width="22" height="18"  style="vertical-align:middle;"/>Дате';

	wholeMenu["● AMV"] = [];
	wholeMenu["● AMV"].id = "1_11";
	wholeMenu["● AMV"].color = "black";
	wholeMenu["● AMV"].hasSub = 1;
	wholeMenu["● AMV"].subCaption = "&#9679; AMV, Сортировать по";
	wholeMenu["● AMV"].link = "";
	wholeMenu["● AMV"].html = '&#9679; AMV';

	wholeMenu["111СортироватьПо"] = [];
	wholeMenu["111СортироватьПо"].id = "1_11_1";
	wholeMenu["111СортироватьПо"].color = "black";
	wholeMenu["111СортироватьПо"].hasSub = 0;
	wholeMenu["111СортироватьПо"].link = "index_rus.html?type=amv&sortby=name";
	wholeMenu["111СортироватьПо"].html = '<img src="scripts/contents/icons/sortby/sortby_name.png" width="22" height="18"  style="vertical-align:middle;"/>Имени';

	wholeMenu["112СортироватьПо"] = [];
	wholeMenu["112СортироватьПо"].id = "1_11_2";
	wholeMenu["112СортироватьПо"].color = "black";
	wholeMenu["112СортироватьПо"].hasSub = 0;
	wholeMenu["112СортироватьПо"].link = "index_rus.html?type=amv&sortby=date";
	wholeMenu["112СортироватьПо"].html = '<img src="scripts/contents/icons/sortby/sortby_date.png" width="22" height="18"  style="vertical-align:middle;"/>Дате';

	wholeMenu["● Радио"] = [];
	wholeMenu["● Радио"].id = "1_12";
	wholeMenu["● Радио"].color = "black";
	wholeMenu["● Радио"].hasSub = 1;
	wholeMenu["● Радио"].subCaption = "&#9679; Радио, Сортировать по";
	wholeMenu["● Радио"].link = "";
	wholeMenu["● Радио"].html = '&#9679; Радио';

	wholeMenu["121СортироватьПо"] = [];
	wholeMenu["121СортироватьПо"].id = "1_12_1";
	wholeMenu["121СортироватьПо"].color = "black";
	wholeMenu["121СортироватьПо"].hasSub = 0;
	wholeMenu["121СортироватьПо"].link = "index_rus.html?type=radio&sortby=name";
	wholeMenu["121СортироватьПо"].html = '<img src="scripts/contents/icons/sortby/sortby_name.png" width="22" height="18"  style="vertical-align:middle;"/>Имени';

	wholeMenu["122СортироватьПо"] = [];
	wholeMenu["122СортироватьПо"].id = "1_12_2";
	wholeMenu["122СортироватьПо"].color = "black";
	wholeMenu["122СортироватьПо"].hasSub = 0;
	wholeMenu["122СортироватьПо"].link = "index_rus.html?type=radio&sortby=date";
	wholeMenu["122СортироватьПо"].html = '<img src="scripts/contents/icons/sortby/sortby_date.png" width="22" height="18"  style="vertical-align:middle;"/>Дате';

	wholeMenu["● Барахло ⚡ Evil ⚡"] = [];
	wholeMenu["● Барахло ⚡ Evil ⚡"].id = "1_13";
	wholeMenu["● Барахло ⚡ Evil ⚡"].color = "black";
	wholeMenu["● Барахло ⚡ Evil ⚡"].hasSub = 1;
	wholeMenu["● Барахло ⚡ Evil ⚡"].subCaption = '&#9679; Барахло <font color="red"><sup>&#9889; Evil &#9889;</sup></font>, Сортировать по';
	wholeMenu["● Барахло ⚡ Evil ⚡"].link = "";
	wholeMenu["● Барахло ⚡ Evil ⚡"].html = '&#9679; Барахло <font color="red"><sup>&#9889; Evil &#9889;</sup></font>';

	wholeMenu["131СортироватьПо"] = [];
	wholeMenu["131СортироватьПо"].id = "1_13_1";
	wholeMenu["131СортироватьПо"].color = "black";
	wholeMenu["131СортироватьПо"].hasSub = 0;
	wholeMenu["131СортироватьПо"].link = "index_rus.html?type=stuff&sortby=name";
	wholeMenu["131СортироватьПо"].html = '<img src="scripts/contents/icons/sortby/sortby_name.png" width="22" height="18"  style="vertical-align:middle;"/>Имени';

	wholeMenu["132СортироватьПо"] = [];
	wholeMenu["132СортироватьПо"].id = "1_13_2";
	wholeMenu["132СортироватьПо"].color = "black";
	wholeMenu["132СортироватьПо"].hasSub = 0;
	wholeMenu["132СортироватьПо"].link = "index_rus.html?type=stuff&sortby=date";
	wholeMenu["132СортироватьПо"].html = '<img src="scripts/contents/icons/sortby/sortby_date.png" width="22" height="18"  style="vertical-align:middle;"/>Дате';

	wholeMenu["● Анекдоты"] = [];
	wholeMenu["● Анекдоты"].id = "1_14";
	wholeMenu["● Анекдоты"].color = "red";
	wholeMenu["● Анекдоты"].hasSub = 1;
	wholeMenu["● Анекдоты"].subCaption = "&#9679; Анекдоты, Сортировать по";
	wholeMenu["● Анекдоты"].link = "";
	wholeMenu["● Анекдоты"].html = '&#9679; Анекдоты';

	wholeMenu["141СортироватьПо"] = [];
	wholeMenu["141СортироватьПо"].id = "1_14_1";
	wholeMenu["141СортироватьПо"].color = "red";
	wholeMenu["141СортироватьПо"].hasSub = 0;
	wholeMenu["141СортироватьПо"].link = "index_rus.html?type=anecdotes&sortby=name";
	wholeMenu["141СортироватьПо"].html = '<img src="scripts/contents/icons/sortby/sortby_name.png" width="22" height="18"  style="vertical-align:middle;"/>Имени';

	wholeMenu["142СортироватьПо"] = [];
	wholeMenu["142СортироватьПо"].id = "1_14_2";
	wholeMenu["142СортироватьПо"].color = "red";
	wholeMenu["142СортироватьПо"].hasSub = 0;
	wholeMenu["142СортироватьПо"].link = "index_rus.html?type=anecdotes&sortby=date";
	wholeMenu["142СортироватьПо"].html = '<img src="scripts/contents/icons/sortby/sortby_date.png" width="22" height="18"  style="vertical-align:middle;"/>Дате';

	wholeMenu["● Слонопотам ☠ Criminal ☠"] = [];
	wholeMenu["● Слонопотам ☠ Criminal ☠"].id = "1_15";
	wholeMenu["● Слонопотам ☠ Criminal ☠"].color = "red";
	wholeMenu["● Слонопотам ☠ Criminal ☠"].hasSub = 1;
	wholeMenu["● Слонопотам ☠ Criminal ☠"].subCaption = '&#9679; Слонопотам <font color="lightcoral"><sup>&#9760; Criminal &#9760;</sup></font>, Сорт. по';
	wholeMenu["● Слонопотам ☠ Criminal ☠"].link = "";
	wholeMenu["● Слонопотам ☠ Criminal ☠"].html = '&#9679; Слонопотам <font color="lightcoral"><sup>&#9760; Criminal &#9760;</sup></font>';

	wholeMenu["151СортироватьПо"] = [];
	wholeMenu["151СортироватьПо"].id = "1_15_1";
	wholeMenu["151СортироватьПо"].color = "red";
	wholeMenu["151СортироватьПо"].hasSub = 0;
	wholeMenu["151СортироватьПо"].link = "index_rus.html?type=heffalump&sortby=name";
	wholeMenu["151СортироватьПо"].html = '<img src="scripts/contents/icons/sortby/sortby_name.png" width="22" height="18"  style="vertical-align:middle;"/>Имени';

	wholeMenu["152СортироватьПо"] = [];
	wholeMenu["152СортироватьПо"].id = "1_15_2";
	wholeMenu["152СортироватьПо"].color = "red";
	wholeMenu["152СортироватьПо"].hasSub = 0;
	wholeMenu["152СортироватьПо"].link = "index_rus.html?type=heffalump&sortby=date";
	wholeMenu["152СортироватьПо"].html = '<img src="scripts/contents/icons/sortby/sortby_date.png" width="22" height="18"  style="vertical-align:middle;"/>Дате';

	wholeMenu["● Вещества Для Расслабления"] = [];
	wholeMenu["● Вещества Для Расслабления"].id = "1_16";
	wholeMenu["● Вещества Для Расслабления"].color = "white";
	wholeMenu["● Вещества Для Расслабления"].hasSub = 1;
	wholeMenu["● Вещества Для Расслабления"].subCaption = "&#9679; Вещества Для Расслабления, По";
	wholeMenu["● Вещества Для Расслабления"].link = "";
	wholeMenu["● Вещества Для Расслабления"].html = '&#9679; Вещества Для Расслабления';

	wholeMenu["161СортироватьПо"] = [];
	wholeMenu["161СортироватьПо"].id = "1_16_1";
	wholeMenu["161СортироватьПо"].color = "white";
	wholeMenu["161СортироватьПо"].hasSub = 0;
	wholeMenu["161СортироватьПо"].link = "index_rus.html?type=relaxation&sortby=name";
	wholeMenu["161СортироватьПо"].html = '<img src="scripts/contents/icons/sortby/sortby_name.png" width="22" height="18"  style="vertical-align:middle;"/>Имени';

	wholeMenu["162СортироватьПо"] = [];
	wholeMenu["162СортироватьПо"].id = "1_16_2";
	wholeMenu["162СортироватьПо"].color = "white";
	wholeMenu["162СортироватьПо"].hasSub = 0;
	wholeMenu["162СортироватьПо"].link = "index_rus.html?type=relaxation&sortby=date";
	wholeMenu["162СортироватьПо"].html = '<img src="scripts/contents/icons/sortby/sortby_date.png" width="22" height="18"  style="vertical-align:middle;"/>Дате';

	wholeMenu["● Разработка Программ"] = [];
	wholeMenu["● Разработка Программ"].id = "1_17";
	wholeMenu["● Разработка Программ"].color = "white";
	wholeMenu["● Разработка Программ"].hasSub = 1;
	wholeMenu["● Разработка Программ"].subCaption = "&#9679; Разработка Программ, Сорт. по";
	wholeMenu["● Разработка Программ"].link = "";
	wholeMenu["● Разработка Программ"].html = '&#9679; Разработка Программ';

	wholeMenu["171СортироватьПо"] = [];
	wholeMenu["171СортироватьПо"].id = "1_17_1";
	wholeMenu["171СортироватьПо"].color = "white";
	wholeMenu["171СортироватьПо"].hasSub = 0;
	wholeMenu["171СортироватьПо"].link = "index_rus.html?type=software&sortby=name";
	wholeMenu["171СортироватьПо"].html = '<img src="scripts/contents/icons/sortby/sortby_name.png" width="22" height="18"  style="vertical-align:middle;"/>Имени';

	wholeMenu["172СортироватьПо"] = [];
	wholeMenu["172СортироватьПо"].id = "1_17_2";
	wholeMenu["172СортироватьПо"].color = "white";
	wholeMenu["172СортироватьПо"].hasSub = 0;
	wholeMenu["172СортироватьПо"].link = "index_rus.html?type=software&sortby=date";
	wholeMenu["172СортироватьПо"].html = '<img src="scripts/contents/icons/sortby/sortby_date.png" width="22" height="18"  style="vertical-align:middle;"/>Дате';

	wholeMenu["● Сатанизм"] = [];
	wholeMenu["● Сатанизм"].id = "1_18";
	wholeMenu["● Сатанизм"].color = "green";
	wholeMenu["● Сатанизм"].hasSub = 1;
	wholeMenu["● Сатанизм"].subCaption = "&#9679; Сатанизм, Сортировать по";
	wholeMenu["● Сатанизм"].link = "";
	wholeMenu["● Сатанизм"].html = '&#9679; Сатанизм';

	wholeMenu["181СортироватьПо"] = [];
	wholeMenu["181СортироватьПо"].id = "1_18_1";
	wholeMenu["181СортироватьПо"].color = "green";
	wholeMenu["181СортироватьПо"].hasSub = 0;
	wholeMenu["181СортироватьПо"].link = "index_rus.html?type=satanism&sortby=name";
	wholeMenu["181СортироватьПо"].html = '<img src="scripts/contents/icons/sortby/sortby_name.png" width="22" height="18"  style="vertical-align:middle;"/>Имени';

	wholeMenu["182СортироватьПо"] = [];
	wholeMenu["182СортироватьПо"].id = "1_18_2";
	wholeMenu["182СортироватьПо"].color = "green";
	wholeMenu["182СортироватьПо"].hasSub = 0;
	wholeMenu["182СортироватьПо"].link = "index_rus.html?type=satanism&sortby=date";
	wholeMenu["182СортироватьПо"].html = '<img src="scripts/contents/icons/sortby/sortby_date.png" width="22" height="18"  style="vertical-align:middle;"/>Дате';

	wholeMenu["● Викка"] = [];
	wholeMenu["● Викка"].id = "1_19";
	wholeMenu["● Викка"].color = "green";
	wholeMenu["● Викка"].hasSub = 1;
	wholeMenu["● Викка"].subCaption = "&#9679; Викка, Сортировать по";
	wholeMenu["● Викка"].link = "";
	wholeMenu["● Викка"].html = '&#9679; Викка';

	wholeMenu["191СортироватьПо"] = [];
	wholeMenu["191СортироватьПо"].id = "1_19_1";
	wholeMenu["191СортироватьПо"].color = "green";
	wholeMenu["191СортироватьПо"].hasSub = 0;
	wholeMenu["191СортироватьПо"].link = "index_rus.html?type=wicca&sortby=name";
	wholeMenu["191СортироватьПо"].html = '<img src="scripts/contents/icons/sortby/sortby_name.png" width="22" height="18"  style="vertical-align:middle;"/>Имени';

	wholeMenu["192СортироватьПо"] = [];
	wholeMenu["192СортироватьПо"].id = "1_19_2";
	wholeMenu["192СортироватьПо"].color = "green";
	wholeMenu["192СортироватьПо"].hasSub = 0;
	wholeMenu["192СортироватьПо"].link = "index_rus.html?type=wicca&sortby=date";
	wholeMenu["192СортироватьПо"].html = '<img src="scripts/contents/icons/sortby/sortby_date.png" width="22" height="18"  style="vertical-align:middle;"/>Дате';

	wholeMenu["● Фальсифицируемость"] = [];
	wholeMenu["● Фальсифицируемость"].id = "1_20";
	wholeMenu["● Фальсифицируемость"].color = "green";
	wholeMenu["● Фальсифицируемость"].hasSub = 1;
	wholeMenu["● Фальсифицируемость"].subCaption = "&#9679; Фальсифицируемость, Сорт. по";
	wholeMenu["● Фальсифицируемость"].link = "";
	wholeMenu["● Фальсифицируемость"].html = '&#9679; Фальсифицируемость';

	wholeMenu["201СортироватьПо"] = [];
	wholeMenu["201СортироватьПо"].id = "1_20_1";
	wholeMenu["201СортироватьПо"].color = "green";
	wholeMenu["201СортироватьПо"].hasSub = 0;
	wholeMenu["201СортироватьПо"].link = "index_rus.html?type=falsifiability&sortby=name";
	wholeMenu["201СортироватьПо"].html = '<img src="scripts/contents/icons/sortby/sortby_name.png" width="22" height="18"  style="vertical-align:middle;"/>Имени';

	wholeMenu["202СортироватьПо"] = [];
	wholeMenu["202СортироватьПо"].id = "1_20_2";
	wholeMenu["202СортироватьПо"].color = "green";
	wholeMenu["202СортироватьПо"].hasSub = 0;
	wholeMenu["202СортироватьПо"].link = "index_rus.html?type=falsifiability&sortby=date";
	wholeMenu["202СортироватьПо"].html = '<img src="scripts/contents/icons/sortby/sortby_date.png" width="22" height="18"  style="vertical-align:middle;"/>Дате';

	wholeMenu["● Психология"] = [];
	wholeMenu["● Психология"].id = "1_21";
	wholeMenu["● Психология"].color = "green";
	wholeMenu["● Психология"].hasSub = 1;
	wholeMenu["● Психология"].subCaption = "&#9679; Психология, Сортировать по";
	wholeMenu["● Психология"].link = "";
	wholeMenu["● Психология"].html = '&#9679; Психология';

	wholeMenu["211СортироватьПо"] = [];
	wholeMenu["211СортироватьПо"].id = "1_21_1";
	wholeMenu["211СортироватьПо"].color = "green";
	wholeMenu["211СортироватьПо"].hasSub = 0;
	wholeMenu["211СортироватьПо"].link = "index_rus.html?type=psychology&sortby=name";
	wholeMenu["211СортироватьПо"].html = '<img src="scripts/contents/icons/sortby/sortby_name.png" width="22" height="18"  style="vertical-align:middle;"/>Имени';

	wholeMenu["212СортироватьПо"] = [];
	wholeMenu["212СортироватьПо"].id = "1_21_2";
	wholeMenu["212СортироватьПо"].color = "green";
	wholeMenu["212СортироватьПо"].hasSub = 0;
	wholeMenu["212СортироватьПо"].link = "index_rus.html?type=psychology&sortby=date";
	wholeMenu["212СортироватьПо"].html = '<img src="scripts/contents/icons/sortby/sortby_date.png" width="22" height="18"  style="vertical-align:middle;"/>Дате';

	wholeMenu["● Страны"] = [];
	wholeMenu["● Страны"].id = "1_22";
	wholeMenu["● Страны"].color = "green";
	wholeMenu["● Страны"].hasSub = 1;
	wholeMenu["● Страны"].subCaption = "&#9679; Страны, Сортировать по";
	wholeMenu["● Страны"].link = "";
	wholeMenu["● Страны"].html = '&#9679; Страны';

	wholeMenu["221СортироватьПо"] = [];
	wholeMenu["221СортироватьПо"].id = "1_22_1";
	wholeMenu["221СортироватьПо"].color = "green";
	wholeMenu["221СортироватьПо"].hasSub = 0;
	wholeMenu["221СортироватьПо"].link = "index_rus.html?type=countries&sortby=name";
	wholeMenu["221СортироватьПо"].html = '<img src="scripts/contents/icons/sortby/sortby_name.png" width="22" height="18"  style="vertical-align:middle;"/>Имени';

	wholeMenu["222СортироватьПо"] = [];
	wholeMenu["222СортироватьПо"].id = "1_22_2";
	wholeMenu["222СортироватьПо"].color = "green";
	wholeMenu["222СортироватьПо"].hasSub = 0;
	wholeMenu["222СортироватьПо"].link = "index_rus.html?type=countries&sortby=date";
	wholeMenu["222СортироватьПо"].html = '<img src="scripts/contents/icons/sortby/sortby_date.png" width="22" height="18"  style="vertical-align:middle;"/>Дате';

	wholeMenu["● Тоталитаризм"] = [];
	wholeMenu["● Тоталитаризм"].id = "1_23";
	wholeMenu["● Тоталитаризм"].color = "green";
	wholeMenu["● Тоталитаризм"].hasSub = 1;
	wholeMenu["● Тоталитаризм"].subCaption = "&#9679; Тоталитаризм, Сортировать по";
	wholeMenu["● Тоталитаризм"].link = "";
	wholeMenu["● Тоталитаризм"].html = '&#9679; Тоталитаризм';

	wholeMenu["231СортироватьПо"] = [];
	wholeMenu["231СортироватьПо"].id = "1_23_1";
	wholeMenu["231СортироватьПо"].color = "green";
	wholeMenu["231СортироватьПо"].hasSub = 0;
	wholeMenu["231СортироватьПо"].link = "index_rus.html?type=totalitarianism&sortby=name";
	wholeMenu["231СортироватьПо"].html = '<img src="scripts/contents/icons/sortby/sortby_name.png" width="22" height="18"  style="vertical-align:middle;"/>Имени';

	wholeMenu["232СортироватьПо"] = [];
	wholeMenu["232СортироватьПо"].id = "1_23_2";
	wholeMenu["232СортироватьПо"].color = "green";
	wholeMenu["232СортироватьПо"].hasSub = 0;
	wholeMenu["232СортироватьПо"].link = "index_rus.html?type=totalitarianism&sortby=date";
	wholeMenu["232СортироватьПо"].html = '<img src="scripts/contents/icons/sortby/sortby_date.png" width="22" height="18"  style="vertical-align:middle;"/>Дате';

	wholeMenu["● Деятели"] = [];
	wholeMenu["● Деятели"].id = "1_24";
	wholeMenu["● Деятели"].color = "green";
	wholeMenu["● Деятели"].hasSub = 1;
	wholeMenu["● Деятели"].subCaption = "&#9679; Деятели, Сортировать по";
	wholeMenu["● Деятели"].link = "";
	wholeMenu["● Деятели"].html = '&#9679; Деятели';

	wholeMenu["241СортироватьПо"] = [];
	wholeMenu["241СортироватьПо"].id = "1_24_1";
	wholeMenu["241СортироватьПо"].color = "green";
	wholeMenu["241СортироватьПо"].hasSub = 0;
	wholeMenu["241СортироватьПо"].link = "index_rus.html?type=personalities&sortby=name";
	wholeMenu["241СортироватьПо"].html = '<img src="scripts/contents/icons/sortby/sortby_name.png" width="22" height="18"  style="vertical-align:middle;"/>Имени';

	wholeMenu["242СортироватьПо"] = [];
	wholeMenu["242СортироватьПо"].id = "1_24_2";
	wholeMenu["242СортироватьПо"].color = "green";
	wholeMenu["242СортироватьПо"].hasSub = 0;
	wholeMenu["242СортироватьПо"].link = "index_rus.html?type=personalities&sortby=date";
	wholeMenu["242СортироватьПо"].html = '<img src="scripts/contents/icons/sortby/sortby_date.png" width="22" height="18"  style="vertical-align:middle;"/>Дате';

	wholeMenu["● Новости"] = [];
	wholeMenu["● Новости"].id = "1_25";
	wholeMenu["● Новости"].color = "red";
	wholeMenu["● Новости"].hasSub = 1;
	wholeMenu["● Новости"].subCaption = "&#9679; Новости, Сортировать по";
	wholeMenu["● Новости"].link = "";
	wholeMenu["● Новости"].html = '&#9679; Новости';

	wholeMenu["251СортироватьПо"] = [];
	wholeMenu["251СортироватьПо"].id = "1_25_1";
	wholeMenu["251СортироватьПо"].color = "red";
	wholeMenu["251СортироватьПо"].hasSub = 0;
	wholeMenu["251СортироватьПо"].link = "index_rus.html?type=news&sortby=name";
	wholeMenu["251СортироватьПо"].html = '<img src="scripts/contents/icons/sortby/sortby_name.png" width="22" height="18"  style="vertical-align:middle;"/>Имени';

	wholeMenu["252СортироватьПо"] = [];
	wholeMenu["252СортироватьПо"].id = "1_25_2";
	wholeMenu["252СортироватьПо"].color = "red";
	wholeMenu["252СортироватьПо"].hasSub = 0;
	wholeMenu["252СортироватьПо"].link = "index_rus.html?type=news&sortby=date";
	wholeMenu["252СортироватьПо"].html = '<img src="scripts/contents/icons/sortby/sortby_date.png" width="22" height="18"  style="vertical-align:middle;"/>Дате';


}


if (lang=="lat") {

	wholeMenu["Pagina Tabula"] = [];
	wholeMenu["Pagina Tabula"].id = "1";
	wholeMenu["Pagina Tabula"].color = "blue";
	wholeMenu["Pagina Tabula"].hasSub = 1;
	wholeMenu["Pagina Tabula"].link = "";
	wholeMenu["Pagina Tabula"].html = 'Pagina Tabula';


	wholeMenu["● Circa Mihi"] = [];
	wholeMenu["● Circa Mihi"].id = "1_1";
	wholeMenu["● Circa Mihi"].color = "blue";
	wholeMenu["● Circa Mihi"].hasSub = 1;
	wholeMenu["● Circa Mihi"].subCaption = "&#9679; Circa Mihi, Digerere";
	wholeMenu["● Circa Mihi"].link = "";
	wholeMenu["● Circa Mihi"].html = '&#9679; Circa Mihi';

	wholeMenu["11Digerere"] = [];
	wholeMenu["11Digerere"].id = "1_1_1";
	wholeMenu["11Digerere"].color = "blue";
	wholeMenu["11Digerere"].hasSub = 0;
	wholeMenu["11Digerere"].link = "index_lat.html?type=aboutme&sortby=name";
	wholeMenu["11Digerere"].html = '<img src="scripts/contents/icons/sortby/sortby_name.png" alt="Nomine" title="Nomine" width="22" height="18"  style="vertical-align:middle;"/>Nomine';

	wholeMenu["12Digerere"] = [];
	wholeMenu["12Digerere"].id = "1_1_2";
	wholeMenu["12Digerere"].color = "blue";
	wholeMenu["12Digerere"].hasSub = 0;
	wholeMenu["12Digerere"].link = "index_lat.html?type=aboutme&sortby=date";
	wholeMenu["12Digerere"].html = '<img src="scripts/contents/icons/sortby/sortby_date.png" alt="Diem" title="Diem" width="22" height="18"  style="vertical-align:middle;"/>Diem';

	wholeMenu["● Circa Opus Meum"] = [];
	wholeMenu["● Circa Opus Meum"].id = "1_2";
	wholeMenu["● Circa Opus Meum"].color = "blue";
	wholeMenu["● Circa Opus Meum"].hasSub = 1;
	wholeMenu["● Circa Opus Meum"].subCaption = "&#9679; Circa Opus Meum, Digerere";
	wholeMenu["● Circa Opus Meum"].link = "";
	wholeMenu["● Circa Opus Meum"].html = '&#9679; Circa Opus Meum';

	wholeMenu["21Digerere"] = [];
	wholeMenu["21Digerere"].id = "1_2_1";
	wholeMenu["21Digerere"].color = "blue";
	wholeMenu["21Digerere"].hasSub = 0;
	wholeMenu["21Digerere"].link = "index_lat.html?type=aboutwork&sortby=name";
	wholeMenu["21Digerere"].html = '<img src="scripts/contents/icons/sortby/sortby_name.png" alt="Nomine" title="Nomine" width="22" height="18"  style="vertical-align:middle;"/>Nomine';

	wholeMenu["22Digerere"] = [];
	wholeMenu["22Digerere"].id = "1_2_2";
	wholeMenu["22Digerere"].color = "blue";
	wholeMenu["22Digerere"].hasSub = 0;
	wholeMenu["22Digerere"].link = "index_lat.html?type=aboutwork&sortby=date";
	wholeMenu["22Digerere"].html = '<img src="scripts/contents/icons/sortby/sortby_date.png" alt="Diem" title="Diem" width="22" height="18"  style="vertical-align:middle;"/>Diem';

	wholeMenu["● Circa Mei PhD"] = [];
	wholeMenu["● Circa Mei PhD"].id = "1_3";
	wholeMenu["● Circa Mei PhD"].color = "blue";
	wholeMenu["● Circa Mei PhD"].hasSub = 1;
	wholeMenu["● Circa Mei PhD"].subCaption = "&#9679; Circa Mei PhD, Digerere";
	wholeMenu["● Circa Mei PhD"].link = "";
	wholeMenu["● Circa Mei PhD"].html = '&#9679; Circa Mei PhD';

	wholeMenu["31Digerere"] = [];
	wholeMenu["31Digerere"].id = "1_3_1";
	wholeMenu["31Digerere"].color = "blue";
	wholeMenu["31Digerere"].hasSub = 0;
	wholeMenu["31Digerere"].link = "index_lat.html?type=phd&sortby=name";
	wholeMenu["31Digerere"].html = '<img src="scripts/contents/icons/sortby/sortby_name.png" alt="Nomine" title="Nomine" width="22" height="18"  style="vertical-align:middle;"/>Nomine';

	wholeMenu["32Digerere"] = [];
	wholeMenu["32Digerere"].id = "1_3_2";
	wholeMenu["32Digerere"].color = "blue";
	wholeMenu["32Digerere"].hasSub = 0;
	wholeMenu["32Digerere"].link = "index_lat.html?type=phd&sortby=date";
	wholeMenu["32Digerere"].html = '<img src="scripts/contents/icons/sortby/sortby_date.png" alt="Diem" title="Diem" width="22" height="18"  style="vertical-align:middle;"/>Diem';

	wholeMenu["● Relatio"] = [];
	wholeMenu["● Relatio"].id = "1_4";
	wholeMenu["● Relatio"].color = "blue";
	wholeMenu["● Relatio"].hasSub = 1;
	wholeMenu["● Relatio"].subCaption = "&#9679; Relatio, Digerere";
	wholeMenu["● Relatio"].link = "";
	wholeMenu["● Relatio"].html = '&#9679; Relatio';

	wholeMenu["41Digerere"] = [];
	wholeMenu["41Digerere"].id = "1_4_1";
	wholeMenu["41Digerere"].color = "blue";
	wholeMenu["41Digerere"].hasSub = 0;
	wholeMenu["41Digerere"].link = "index_lat.html?type=links&sortby=name";
	wholeMenu["41Digerere"].html = '<img src="scripts/contents/icons/sortby/sortby_name.png" alt="Nomine" title="Nomine" width="22" height="18"  style="vertical-align:middle;"/>Nomine';

	wholeMenu["42Digerere"] = [];
	wholeMenu["42Digerere"].id = "1_4_2";
	wholeMenu["42Digerere"].color = "blue";
	wholeMenu["42Digerere"].hasSub = 0;
	wholeMenu["42Digerere"].link = "index_lat.html?type=links&sortby=date";
	wholeMenu["42Digerere"].html = '<img src="scripts/contents/icons/sortby/sortby_date.png" alt="Diem" title="Diem" width="22" height="18"  style="vertical-align:middle;"/>Diem';

	wholeMenu["● Photo/Imaginibus"] = [];
	wholeMenu["● Photo/Imaginibus"].id = "1_10";
	wholeMenu["● Photo/Imaginibus"].color = "red";
	wholeMenu["● Photo/Imaginibus"].hasSub = 1;
	wholeMenu["● Photo/Imaginibus"].subCaption = "&#9679; Photo/Imaginibus, Digerere";
	wholeMenu["● Photo/Imaginibus"].link = "";
	wholeMenu["● Photo/Imaginibus"].html = '&#9679; Photo/Imaginibus';

	wholeMenu["101Digerere"] = [];
	wholeMenu["101Digerere"].id = "1_10_1";
	wholeMenu["101Digerere"].color = "red";
	wholeMenu["101Digerere"].hasSub = 0;
	wholeMenu["101Digerere"].link = "index_lat.html?type=photos&sortby=name";
	wholeMenu["101Digerere"].html = '<img src="scripts/contents/icons/sortby/sortby_name.png" alt="Nomine" title="Nomine" width="22" height="18"  style="vertical-align:middle;"/>Nomine';

	wholeMenu["102Digerere"] = [];
	wholeMenu["102Digerere"].id = "1_10_2";
	wholeMenu["102Digerere"].color = "red";
	wholeMenu["102Digerere"].hasSub = 0;
	wholeMenu["102Digerere"].link = "index_lat.html?type=photos&sortby=date";
	wholeMenu["102Digerere"].html = '<img src="scripts/contents/icons/sortby/sortby_date.png" alt="Diem" title="Diem" width="22" height="18"  style="vertical-align:middle;"/>Diem';

	wholeMenu["● AMV"] = [];
	wholeMenu["● AMV"].id = "1_11";
	wholeMenu["● AMV"].color = "black";
	wholeMenu["● AMV"].hasSub = 1;
	wholeMenu["● AMV"].subCaption = "&#9679; AMV, Digerere";
	wholeMenu["● AMV"].link = "";
	wholeMenu["● AMV"].html = '&#9679; AMV';

	wholeMenu["111Digerere"] = [];
	wholeMenu["111Digerere"].id = "1_11_1";
	wholeMenu["111Digerere"].color = "black";
	wholeMenu["111Digerere"].hasSub = 0;
	wholeMenu["111Digerere"].link = "index_lat.html?type=amv&sortby=name";
	wholeMenu["111Digerere"].html = '<img src="scripts/contents/icons/sortby/sortby_name.png" alt="Nomine" title="Nomine" width="22" height="18"  style="vertical-align:middle;"/>Nomine';

	wholeMenu["112Digerere"] = [];
	wholeMenu["112Digerere"].id = "1_11_2";
	wholeMenu["112Digerere"].color = "black";
	wholeMenu["112Digerere"].hasSub = 0;
	wholeMenu["112Digerere"].link = "index_lat.html?type=amv&sortby=date";
	wholeMenu["112Digerere"].html = '<img src="scripts/contents/icons/sortby/sortby_date.png" alt="Diem" title="Diem" width="22" height="18"  style="vertical-align:middle;"/>Diem';

	wholeMenu["● Radio"] = [];
	wholeMenu["● Radio"].id = "1_12";
	wholeMenu["● Radio"].color = "black";
	wholeMenu["● Radio"].hasSub = 1;
	wholeMenu["● Radio"].subCaption = "&#9679; Radio, Digerere";
	wholeMenu["● Radio"].link = "";
	wholeMenu["● Radio"].html = '&#9679; Radio';

	wholeMenu["121Digerere"] = [];
	wholeMenu["121Digerere"].id = "1_12_1";
	wholeMenu["121Digerere"].color = "black";
	wholeMenu["121Digerere"].hasSub = 0;
	wholeMenu["121Digerere"].link = "index_lat.html?type=radio&sortby=name";
	wholeMenu["121Digerere"].html = '<img src="scripts/contents/icons/sortby/sortby_name.png" alt="Nomine" title="Nomine" width="22" height="18"  style="vertical-align:middle;"/>Nomine';

	wholeMenu["122Digerere"] = [];
	wholeMenu["122Digerere"].id = "1_12_2";
	wholeMenu["122Digerere"].color = "black";
	wholeMenu["122Digerere"].hasSub = 0;
	wholeMenu["122Digerere"].link = "index_lat.html?type=radio&sortby=date";
	wholeMenu["122Digerere"].html = '<img src="scripts/contents/icons/sortby/sortby_date.png" alt="Diem" title="Diem" width="22" height="18"  style="vertical-align:middle;"/>Diem';

	wholeMenu["● Effercio ⚡ Evil ⚡"] = [];
	wholeMenu["● Effercio ⚡ Evil ⚡"].id = "1_13";
	wholeMenu["● Effercio ⚡ Evil ⚡"].color = "black";
	wholeMenu["● Effercio ⚡ Evil ⚡"].hasSub = 1;
	wholeMenu["● Effercio ⚡ Evil ⚡"].subCaption = '&#9679; Effercio <font color="red"><sup>&#9889; Evil &#9889;</sup></font>, Digerere';
	wholeMenu["● Effercio ⚡ Evil ⚡"].link = "";
	wholeMenu["● Effercio ⚡ Evil ⚡"].html = '&#9679; Effercio <font color="red"><sup>&#9889; Evil &#9889;</sup></font>';

	wholeMenu["131Digerere"] = [];
	wholeMenu["131Digerere"].id = "1_13_1";
	wholeMenu["131Digerere"].color = "black";
	wholeMenu["131Digerere"].hasSub = 0;
	wholeMenu["131Digerere"].link = "index_lat.html?type=stuff&sortby=name";
	wholeMenu["131Digerere"].html = '<img src="scripts/contents/icons/sortby/sortby_name.png" alt="Nomine" title="Nomine" width="22" height="18"  style="vertical-align:middle;"/>Nomine';

	wholeMenu["132Digerere"] = [];
	wholeMenu["132Digerere"].id = "1_13_2";
	wholeMenu["132Digerere"].color = "black";
	wholeMenu["132Digerere"].hasSub = 0;
	wholeMenu["132Digerere"].link = "index_lat.html?type=stuff&sortby=date";
	wholeMenu["132Digerere"].html = '<img src="scripts/contents/icons/sortby/sortby_date.png" alt="Diem" title="Diem" width="22" height="18"  style="vertical-align:middle;"/>Diem';

	wholeMenu["● Nuntium"] = [];
	wholeMenu["● Nuntium"].id = "1_25";
	wholeMenu["● Nuntium"].color = "red";
	wholeMenu["● Nuntium"].hasSub = 1;
	wholeMenu["● Nuntium"].subCaption = "&#9679; Nuntium, Digerere";
	wholeMenu["● Nuntium"].link = "";
	wholeMenu["● Nuntium"].html = '&#9679; Nuntium';

	wholeMenu["251Digerere"] = [];
	wholeMenu["251Digerere"].id = "1_25_1";
	wholeMenu["251Digerere"].color = "red";
	wholeMenu["251Digerere"].hasSub = 0;
	wholeMenu["251Digerere"].link = "index_lat.html?type=news&sortby=name";
	wholeMenu["251Digerere"].html = '<img src="scripts/contents/icons/sortby/sortby_name.png" alt="Nomine" title="Nomine" width="22" height="18"  style="vertical-align:middle;"/>Nomine';

	wholeMenu["252Digerere"] = [];
	wholeMenu["252Digerere"].id = "1_25_2";
	wholeMenu["252Digerere"].color = "red";
	wholeMenu["252Digerere"].hasSub = 0;
	wholeMenu["252Digerere"].link = "index_lat.html?type=news&sortby=date";
	wholeMenu["252Digerere"].html = '<img src="scripts/contents/icons/sortby/sortby_date.png" alt="Diem" title="Diem" width="22" height="18"  style="vertical-align:middle;"/>Diem';



}

return wholeMenu;
}




function  loadMenuHowto(lang) {

var wholeMenu = [];


if (lang=="eng") {

	wholeMenu["How-To ✶ No Entry ✶"] = [];
	wholeMenu["How-To ✶ No Entry ✶"].id = "6";
	wholeMenu["How-To ✶ No Entry ✶"].color = "blue";
	wholeMenu["How-To ✶ No Entry ✶"].hasSub = 1;
	wholeMenu["How-To ✶ No Entry ✶"].link = "";
	wholeMenu["How-To ✶ No Entry ✶"].html = 'How-To <font color="fuchsia"><sup>&#10038; No Entry &#10038;</sup></font>';

	wholeMenu["Add News Feed ✶ No Entry ✶"] = [];
	wholeMenu["Add News Feed ✶ No Entry ✶"].id = "6_1";
	wholeMenu["Add News Feed ✶ No Entry ✶"].color = "blue";
	wholeMenu["Add News Feed ✶ No Entry ✶"].hasSub = 0;
	wholeMenu["Add News Feed ✶ No Entry ✶"].link = "howto_add_feed_eng.html";
	wholeMenu["Add News Feed ✶ No Entry ✶"].html = 'Add News Feed <font color="fuchsia"><sup>&#10038; No Entry &#10038;</sup></font>';

	wholeMenu["AMV Creator"] = [];
	wholeMenu["AMV Creator"].id = "6_2";
	wholeMenu["AMV Creator"].color = "blue";
	wholeMenu["AMV Creator"].hasSub = 0;
	wholeMenu["AMV Creator"].link = "amv_creator_eng.html";
	wholeMenu["AMV Creator"].html = 'AMV Creator';

	wholeMenu["Dowload File"] = [];
	wholeMenu["Dowload File"].id = "6_3";
	wholeMenu["Dowload File"].color = "blue";
	wholeMenu["Dowload File"].hasSub = 0;
	wholeMenu["Dowload File"].link = "howto_download_file_eng.html";
	wholeMenu["Dowload File"].html = 'Dowload File';

	wholeMenu["HTML Editor"] = [];
	wholeMenu["HTML Editor"].id = "6_4";
	wholeMenu["HTML Editor"].color = "blue";
	wholeMenu["HTML Editor"].hasSub = 0;
	wholeMenu["HTML Editor"].link = "html_editor_eng.html?pattern=*.html&i=0";
	wholeMenu["HTML Editor"].html = 'HTML Editor';

	wholeMenu["Launch Program"] = [];
	wholeMenu["Launch Program"].id = "6_5";
	wholeMenu["Launch Program"].color = "blue";
	wholeMenu["Launch Program"].hasSub = 0;
	wholeMenu["Launch Program"].link = "howto_launch_program_eng.html";
	wholeMenu["Launch Program"].html = 'Launch Program';

}




if (lang=="rus") {

	wholeMenu["How-To ✶ No Entry ✶"] = [];
	wholeMenu["How-To ✶ No Entry ✶"].id = "6";
	wholeMenu["How-To ✶ No Entry ✶"].color = "blue";
	wholeMenu["How-To ✶ No Entry ✶"].hasSub = 1;
	wholeMenu["How-To ✶ No Entry ✶"].link = "";
	wholeMenu["How-To ✶ No Entry ✶"].html = 'How-To <font color="fuchsia"><sup>&#10038; No Entry &#10038;</sup></font>';

	wholeMenu["Доб. Строку Новостей ✶ No Entry ✶"] = [];
	wholeMenu["Доб. Строку Новостей ✶ No Entry ✶"].id = "6_1";
	wholeMenu["Доб. Строку Новостей ✶ No Entry ✶"].color = "blue";
	wholeMenu["Доб. Строку Новостей ✶ No Entry ✶"].hasSub = 0;
	wholeMenu["Доб. Строку Новостей ✶ No Entry ✶"].link = "howto_add_feed_rus.html";
	wholeMenu["Доб. Строку Новостей ✶ No Entry ✶"].html = 'Доб. Строку Новостей <font color="fuchsia"><sup>&#10038; No Entry &#10038;</sup></font>';

	wholeMenu["AMV Разработчик"] = [];
	wholeMenu["AMV Разработчик"].id = "6_2";
	wholeMenu["AMV Разработчик"].color = "blue";
	wholeMenu["AMV Разработчик"].hasSub = 0;
	wholeMenu["AMV Разработчик"].link = "amv_creator_rus.html";
	wholeMenu["AMV Разработчик"].html = 'AMV Разработчик';

	wholeMenu["Скачать Фаил"] = [];
	wholeMenu["Скачать Фаил"].id = "6_3";
	wholeMenu["Скачать Фаил"].color = "blue";
	wholeMenu["Скачать Фаил"].hasSub = 0;
	wholeMenu["Скачать Фаил"].link = "howto_download_file_rus.html";
	wholeMenu["Скачать Фаил"].html = 'Скачать Фаил';

	wholeMenu["HTML Редактор"] = [];
	wholeMenu["HTML Редактор"].id = "6_4";
	wholeMenu["HTML Редактор"].color = "blue";
	wholeMenu["HTML Редактор"].hasSub = 0;
	wholeMenu["HTML Редактор"].link = "html_editor_rus.html?pattern=*.html&i=0";
	wholeMenu["HTML Редактор"].html = 'HTML Редактор';

	wholeMenu["Запустить Программу"] = [];
	wholeMenu["Запустить Программу"].id = "6_5";
	wholeMenu["Запустить Программу"].color = "blue";
	wholeMenu["Запустить Программу"].hasSub = 0;
	wholeMenu["Запустить Программу"].link = "howto_launch_program_rus.html";
	wholeMenu["Запустить Программу"].html = 'Запустить Программу';

}



return wholeMenu;
}




function  loadMenuMusic(lang) {


var wholeMenu = [];

if (lang=="eng") {

	wholeMenu["Music ☥ Vampiric ☥"] = [];
	wholeMenu["Music ☥ Vampiric ☥"].id = "7";
	wholeMenu["Music ☥ Vampiric ☥"].color = "black";
	wholeMenu["Music ☥ Vampiric ☥"].hasSub = 1;
	wholeMenu["Music ☥ Vampiric ☥"].link = "";
	wholeMenu["Music ☥ Vampiric ☥"].html = 'Music <font color="purple"><sup>&#9765; Vampiric &#9765;</sup></font>';

	wholeMenu["Chanson"] = [];
	wholeMenu["Chanson"].id = "7_1";
	wholeMenu["Chanson"].color = "black";
	wholeMenu["Chanson"].hasSub = 0;
	wholeMenu["Chanson"].link = "music_chanson_eng.html";
	wholeMenu["Chanson"].html = 'Chanson <font color="purple"><sup>&#9765; Vampiric &#9765;</sup></font>';


	wholeMenu["Classical"] = [];
	wholeMenu["Classical"].id = "7_2";
	wholeMenu["Classical"].color = "black";
	wholeMenu["Classical"].hasSub = 0;
	wholeMenu["Classical"].link = "music_classical_eng.html";
	wholeMenu["Classical"].html = 'Classical';

	wholeMenu["Country"] = [];
	wholeMenu["Country"].id = "7_3";
	wholeMenu["Country"].color = "black";
	wholeMenu["Country"].hasSub = 0;
	wholeMenu["Country"].link = "music_country_eng.html";
	wholeMenu["Country"].html = 'Country <font color="mediumseagreen"><sup>&circlearrowright; Minimalistic &circlearrowleft;</sup></font>';

	wholeMenu["Disco"] = [];
	wholeMenu["Disco"].id = "7_4";
	wholeMenu["Disco"].color = "black";
	wholeMenu["Disco"].hasSub = 0;
	wholeMenu["Disco"].link = "music_disco_eng.html";
	wholeMenu["Disco"].html = 'Disco';

	wholeMenu["● Electronic"] = [];
	wholeMenu["● Electronic"].id = "7_5";
	wholeMenu["● Electronic"].color = "black";
	wholeMenu["● Electronic"].hasSub = 1;
	wholeMenu["● Electronic"].link = "";
	wholeMenu["● Electronic"].html = '&#9679; Electronic';

	wholeMenu["Body (EBM)"] = [];
	wholeMenu["Body (EBM)"].id = "7_5_1";
	wholeMenu["Body (EBM)"].color = "black";
	wholeMenu["Body (EBM)"].hasSub = 0;
	wholeMenu["Body (EBM)"].link = "music_electronic_body_eng.html";
	wholeMenu["Body (EBM)"].html = 'Body (EBM)';

	wholeMenu["Dance (EDM)"] = [];
	wholeMenu["Dance (EDM)"].id = "7_5_2";
	wholeMenu["Dance (EDM)"].color = "black";
	wholeMenu["Dance (EDM)"].hasSub = 0;
	wholeMenu["Dance (EDM)"].link = "music_electronic_dance_eng.html";
	wholeMenu["Dance (EDM)"].html = 'Dance (EDM)';

	wholeMenu["eRock"] = [];
	wholeMenu["eRock"].id = "7_5_3";
	wholeMenu["eRock"].color = "black";
	wholeMenu["eRock"].hasSub = 0;
	wholeMenu["eRock"].link = "music_electronic_rock_eng.html";
	wholeMenu["eRock"].html = 'Rock';

	wholeMenu["Synthwave"] = [];
	wholeMenu["Synthwave"].id = "7_5_4";
	wholeMenu["Synthwave"].color = "black";
	wholeMenu["Synthwave"].hasSub = 0;
	wholeMenu["Synthwave"].link = "music_electronic_synthwave_eng.html";
	wholeMenu["Synthwave"].html = 'Synthwave';

	wholeMenu["● Industrial"] = [];
	wholeMenu["● Industrial"].id = "7_6";
	wholeMenu["● Industrial"].color = "black";
	wholeMenu["● Industrial"].hasSub = 1;
	wholeMenu["● Industrial"].link = "";
	wholeMenu["● Industrial"].html = '&#9679; Industrial';

	wholeMenu["Electro-"] = [];
	wholeMenu["Electro-"].id = "7_6_1";
	wholeMenu["Electro-"].color = "black";
	wholeMenu["Electro-"].hasSub = 0;
	wholeMenu["Electro-"].link = "music_industrial_electro_eng.html";
	wholeMenu["Electro-"].html = 'Electro-';

	wholeMenu["iMetal"] = [];
	wholeMenu["iMetal"].id = "7_6_2";
	wholeMenu["iMetal"].color = "black";
	wholeMenu["iMetal"].hasSub = 0;
	wholeMenu["iMetal"].link = "music_industrial_metal_eng.html";
	wholeMenu["iMetal"].html = 'Metal';

	wholeMenu["iRock"] = [];
	wholeMenu["iRock"].id = "7_6_3";
	wholeMenu["iRock"].color = "black";
	wholeMenu["iRock"].hasSub = 0;
	wholeMenu["iRock"].link = "music_industrial_rock_eng.html";
	wholeMenu["iRock"].html = 'Rock';

	wholeMenu["● Metal ⤧ Real ⤧"] = [];
	wholeMenu["● Metal ⤧ Real ⤧"].id = "7_7";
	wholeMenu["● Metal ⤧ Real ⤧"].color = "black";
	wholeMenu["● Metal ⤧ Real ⤧"].hasSub = 1;
	wholeMenu["● Metal ⤧ Real ⤧"].link = "";
	wholeMenu["● Metal ⤧ Real ⤧"].html = '&#9679; Metal <font color="orangered"><sup>&nwnear; Real &nwnear;</sup>';

	wholeMenu["Alternative"] = [];
	wholeMenu["Alternative"].id = "7_7_1";
	wholeMenu["Alternative"].color = "black";
	wholeMenu["Alternative"].hasSub = 0;
	wholeMenu["Alternative"].link = "music_metal_alternative_eng.html";
	wholeMenu["Alternative"].html = 'Alternative <font color="crimson"><sup>&#191; Inadequate &#191;</sup></font>';

	wholeMenu["Black"] = [];
	wholeMenu["Black"].id = "7_7_2";
	wholeMenu["Black"].color = "black";
	wholeMenu["Black"].hasSub = 0;
	wholeMenu["Black"].link = "music_metal_black_eng.html";
	wholeMenu["Black"].html = 'Black';

	wholeMenu["Death"] = [];
	wholeMenu["Death"].id = "7_7_3";
	wholeMenu["Death"].color = "black";
	wholeMenu["Death"].hasSub = 0;
	wholeMenu["Death"].link = "music_metal_death_eng.html";
	wholeMenu["Death"].html = 'Death <font color="blueviolet"><sup>&#9996; Fresh &#9996;</sup></font>';

	wholeMenu["Gothic"] = [];
	wholeMenu["Gothic"].id = "7_7_4";
	wholeMenu["Gothic"].color = "black";
	wholeMenu["Gothic"].hasSub = 0;
	wholeMenu["Gothic"].link = "music_metal_gothic_eng.html";
	wholeMenu["Gothic"].html = 'Gothic <font color="orangered"><sup>&nwnear; Real &nwnear;</sup></font>';

	wholeMenu["Power"] = [];
	wholeMenu["Power"].id = "7_7_5";
	wholeMenu["Power"].color = "black";
	wholeMenu["Power"].hasSub = 0;
	wholeMenu["Power"].link = "music_metal_power_eng.html";
	wholeMenu["Power"].html = 'Power';

	wholeMenu["Symphonic"] = [];
	wholeMenu["Symphonic"].id = "7_7_6";
	wholeMenu["Symphonic"].color = "black";
	wholeMenu["Symphonic"].hasSub = 0;
	wholeMenu["Symphonic"].link = "music_metal_symphonic_eng.html";
	wholeMenu["Symphonic"].html = 'Symphonic';

	wholeMenu["● National"] = [];
	wholeMenu["● National"].id = "7_8";
	wholeMenu["● National"].color = "black";
	wholeMenu["● National"].hasSub = 1;
	wholeMenu["● National"].link = "";
	wholeMenu["● National"].html = '&#9679; National';

	wholeMenu["American (USA)"] = [];
	wholeMenu["American (USA)"].id = "7_8_1";
	wholeMenu["American (USA)"].color = "black";
	wholeMenu["American (USA)"].hasSub = 0;
	wholeMenu["American (USA)"].link = "music_national_usa_eng.html";
	wholeMenu["American (USA)"].html = 'American (USA)';

	wholeMenu["English (UK)"] = [];
	wholeMenu["English (UK)"].id = "7_8_2";
	wholeMenu["English (UK)"].color = "black";
	wholeMenu["English (UK)"].hasSub = 0;
	wholeMenu["English (UK)"].link = "music_national_uk_eng.html";
	wholeMenu["English (UK)"].html = 'English (UK)';

	wholeMenu["Irish (Ireland)"] = [];
	wholeMenu["Irish (Ireland)"].id = "7_8_3";
	wholeMenu["Irish (Ireland)"].color = "black";
	wholeMenu["Irish (Ireland)"].hasSub = 0;
	wholeMenu["Irish (Ireland)"].link = "music_national_irish_eng.html";
	wholeMenu["Irish (Ireland)"].html = 'Irish (Ireland)';

	wholeMenu["Soviet (USSR)"] = [];
	wholeMenu["Soviet (USSR)"].id = "7_8_4";
	wholeMenu["Soviet (USSR)"].color = "black";
	wholeMenu["Soviet (USSR)"].hasSub = 0;
	wholeMenu["Soviet (USSR)"].link = "music_national_soviet_eng.html";
	wholeMenu["Soviet (USSR)"].html = 'Soviet (USSR)';

	wholeMenu["Pop"] = [];
	wholeMenu["Pop"].id = "7_9";
	wholeMenu["Pop"].color = "black";
	wholeMenu["Pop"].hasSub = 0;
	wholeMenu["Pop"].link = "music_pop_eng.html";
	wholeMenu["Pop"].html = 'Pop';

	wholeMenu["● Psychedelic ⛅ Cool ⛅"] = [];
	wholeMenu["● Psychedelic ⛅ Cool ⛅"].id = "7_10";
	wholeMenu["● Psychedelic ⛅ Cool ⛅"].color = "black";
	wholeMenu["● Psychedelic ⛅ Cool ⛅"].hasSub = 1;
	wholeMenu["● Psychedelic ⛅ Cool ⛅"].link = "";
	wholeMenu["● Psychedelic ⛅ Cool ⛅"].html = '&#9679; Psychedelic <font color="cornflowerblue"><sup>&#9925; Cool &#9925;</sup></font>';

	wholeMenu["pRock"] = [];
	wholeMenu["pRock"].id = "7_10_1";
	wholeMenu["pRock"].color = "black";
	wholeMenu["pRock"].hasSub = 0;
	wholeMenu["pRock"].link = "music_psychedelic_rock_eng.html";
	wholeMenu["pRock"].html = 'Rock <font color="cornflowerblue"><sup>&#9925; Cool &#9925;</sup></font>';

	wholeMenu["Trance"] = [];
	wholeMenu["Trance"].id = "7_10_2";
	wholeMenu["Trance"].color = "black";
	wholeMenu["Trance"].hasSub = 0;
	wholeMenu["Trance"].link = "music_psychedelic_trance_eng.html";
	wholeMenu["Trance"].html = 'Trance';

	wholeMenu["● Punk ☥ Vampiric ☥"] = [];
	wholeMenu["● Punk ☥ Vampiric ☥"].id = "7_11";
	wholeMenu["● Punk ☥ Vampiric ☥"].color = "black";
	wholeMenu["● Punk ☥ Vampiric ☥"].hasSub = 1;
	wholeMenu["● Punk ☥ Vampiric ☥"].link = "";
	wholeMenu["● Punk ☥ Vampiric ☥"].html = '&#9679; Punk <font color="purple"><sup>&#9765; Vampiric &#9765;</sup></font>';

	wholeMenu["Pop Punk"] = [];
	wholeMenu["Pop Punk"].id = "7_11_1";
	wholeMenu["Pop Punk"].color = "black";
	wholeMenu["Pop Punk"].hasSub = 0;
	wholeMenu["Pop Punk"].link = "music_punk_pop_eng.html";
	wholeMenu["Pop Punk"].html = 'Pop Punk';

	wholeMenu["Punk Rock"] = [];
	wholeMenu["Punk Rock"].id = "7_11_2";
	wholeMenu["Punk Rock"].color = "black";
	wholeMenu["Punk Rock"].hasSub = 0;
	wholeMenu["Punk Rock"].link = "music_punk_rock_eng.html";
	wholeMenu["Punk Rock"].html = 'Punk Rock';

	wholeMenu["Ska Punk"] = [];
	wholeMenu["Ska Punk"].id = "7_11_3";
	wholeMenu["Ska Punk"].color = "black";
	wholeMenu["Ska Punk"].hasSub = 0;
	wholeMenu["Ska Punk"].link = "music_punk_ska_eng.html";
	wholeMenu["Ska Punk"].html = 'Ska Punk <font color="purple"><sup>&#9765; Vampiric &#9765;</sup></font>';

	wholeMenu["Rap"] = [];
	wholeMenu["Rap"].id = "7_12";
	wholeMenu["Rap"].color = "black";
	wholeMenu["Rap"].hasSub = 0;
	wholeMenu["Rap"].link = "music_rap_eng.html";
	wholeMenu["Rap"].html = 'Rap <font color="dodgerblue"><sup>&sung; Simple &sung;</sup></font>';

	wholeMenu["Reggae"] = [];
	wholeMenu["Reggae"].id = "7_13";
	wholeMenu["Reggae"].color = "black";
	wholeMenu["Reggae"].hasSub = 0;
	wholeMenu["Reggae"].link = "music_reggae_eng.html";
	wholeMenu["Reggae"].html = 'Reggae';

	wholeMenu["Rock"] = [];
	wholeMenu["Rock"].id = "7_14";
	wholeMenu["Rock"].color = "black";
	wholeMenu["Rock"].hasSub = 0;
	wholeMenu["Rock"].link = "music_rock_eng.html";
	wholeMenu["Rock"].html = 'Rock <font color="cornflowerblue"><sup>&#9925; Cool &#9925;</sup></font>';

	wholeMenu["Satanic"] = [];
	wholeMenu["Satanic"].id = "7_15";
	wholeMenu["Satanic"].color = "black";
	wholeMenu["Satanic"].hasSub = 0;
	wholeMenu["Satanic"].link = "music_satanic_eng.html";
	wholeMenu["Satanic"].html = 'Satanic <font color="darkred"><sup>&#9765; Tricky &#9765;</sup></font>';

	wholeMenu["USA ↔ USSR"] = [];
	wholeMenu["USA ↔ USSR"].id = "7_16";
	wholeMenu["USA ↔ USSR"].color = "black";
	wholeMenu["USA ↔ USSR"].hasSub = 0;
	wholeMenu["USA ↔ USSR"].link = "music_corr_eng.html";
	wholeMenu["USA ↔ USSR"].html = 'USA &#8596; USSR';
}

if (lang=="rus") {

	wholeMenu["Музыка ☥ Vampiric ☥"] = [];
	wholeMenu["Музыка ☥ Vampiric ☥"].id = "7";
	wholeMenu["Музыка ☥ Vampiric ☥"].color = "black";
	wholeMenu["Музыка ☥ Vampiric ☥"].hasSub = 1;
	wholeMenu["Музыка ☥ Vampiric ☥"].link = "";
	wholeMenu["Музыка ☥ Vampiric ☥"].html = 'Музыка <font color="purple"><sup>&#9765; Vampiric &#9765;</sup></font>';

	wholeMenu["Шансон"] = [];
	wholeMenu["Шансон"].id = "7_1";
	wholeMenu["Шансон"].color = "black";
	wholeMenu["Шансон"].hasSub = 0;
	wholeMenu["Шансон"].link = "music_chanson_rus.html";
	wholeMenu["Шансон"].html = 'Шансон <font color="purple"><sup>&#9765; Vampiric &#9765;</sup></font>';


	wholeMenu["Классическая"] = [];
	wholeMenu["Классическая"].id = "7_2";
	wholeMenu["Классическая"].color = "black";
	wholeMenu["Классическая"].hasSub = 0;
	wholeMenu["Классическая"].link = "music_classical_rus.html";
	wholeMenu["Классическая"].html = 'Классическая';


	wholeMenu["Кантри"] = [];
	wholeMenu["Кантри"].id = "7_3";
	wholeMenu["Кантри"].color = "black";
	wholeMenu["Кантри"].hasSub = 0;
	wholeMenu["Кантри"].link = "music_country_rus.html";
	wholeMenu["Кантри"].html = 'Кантри <font color="mediumseagreen"><sup>&circlearrowright; Minimalistic &circlearrowleft;</sup></font>';


	wholeMenu["Диско"] = [];
	wholeMenu["Диско"].id = "7_4";
	wholeMenu["Диско"].color = "black";
	wholeMenu["Диско"].hasSub = 0;
	wholeMenu["Диско"].link = "music_disco_rus.html";
	wholeMenu["Диско"].html = 'Диско';

	wholeMenu["● Электронная"] = [];
	wholeMenu["● Электронная"].id = "7_5";
	wholeMenu["● Электронная"].color = "black";
	wholeMenu["● Электронная"].hasSub = 1;
	wholeMenu["● Электронная"].link = "";
	wholeMenu["● Электронная"].html = '&#9679; Электронная';

	wholeMenu["● Электронная/ый"] = [];
	wholeMenu["● Электронная/ый"].id = "7_5";
	wholeMenu["● Электронная/ый"].color = "black";
	wholeMenu["● Электронная/ый"].hasSub = 1;
	wholeMenu["● Электронная/ый"].link = "";
	wholeMenu["● Электронная/ый"].html = '&#9679; Электронная/ый';

	wholeMenu["Body (EBM)"] = [];
	wholeMenu["Body (EBM)"].id = "7_5_1";
	wholeMenu["Body (EBM)"].color = "black";
	wholeMenu["Body (EBM)"].hasSub = 0;
	wholeMenu["Body (EBM)"].link = "music_electronic_body_rus.html";
	wholeMenu["Body (EBM)"].html = 'Body (EBM)';

	wholeMenu["Танцевальная (EDM)"] = [];
	wholeMenu["Танцевальная (EDM)"].id = "7_5_2";
	wholeMenu["Танцевальная (EDM)"].color = "black";
	wholeMenu["Танцевальная (EDM)"].hasSub = 0;
	wholeMenu["Танцевальная (EDM)"].link = "music_electronic_dance_rus.html";
	wholeMenu["Танцевальная (EDM)"].html = 'Танцевальная (EDM)';

	wholeMenu["эРок"] = [];
	wholeMenu["эРок"].id = "7_5_3";
	wholeMenu["эРок"].color = "black";
	wholeMenu["эРок"].hasSub = 0;
	wholeMenu["эРок"].link = "music_electronic_rock_rus.html";
	wholeMenu["эРок"].html = 'Рок';

	wholeMenu["Синтвейв"] = [];
	wholeMenu["Синтвейв"].id = "7_5_4";
	wholeMenu["Синтвейв"].color = "black";
	wholeMenu["Синтвейв"].hasSub = 0;
	wholeMenu["Синтвейв"].link = "music_electronic_synthwave_rus.html";
	wholeMenu["Синтвейв"].html = 'Синтвейв';


	wholeMenu["● Индастриал"] = [];
	wholeMenu["● Индастриал"].id = "7_6";
	wholeMenu["● Индастриал"].color = "black";
	wholeMenu["● Индастриал"].hasSub = 1;
	wholeMenu["● Индастриал"].link = "";
	wholeMenu["● Индастриал"].html = '&#9679; Индастриал';

	wholeMenu["Электро-"] = [];
	wholeMenu["Электро-"].id = "7_6_1";
	wholeMenu["Электро-"].color = "black";
	wholeMenu["Электро-"].hasSub = 0;
	wholeMenu["Электро-"].link = "music_industrial_electro_rus.html";
	wholeMenu["Электро-"].html = 'Электро-';

	wholeMenu["иМетал"] = [];
	wholeMenu["иМетал"].id = "7_6_2";
	wholeMenu["иМетал"].color = "black";
	wholeMenu["иМетал"].hasSub = 0;
	wholeMenu["иМетал"].link = "music_industrial_metal_rus.html";
	wholeMenu["иМетал"].html = 'Метал';

	wholeMenu["иРок"] = [];
	wholeMenu["иРок"].id = "7_6_3";
	wholeMenu["иРок"].color = "black";
	wholeMenu["иРок"].hasSub = 0;
	wholeMenu["иРок"].link = "music_industrial_rock_rus.html";
	wholeMenu["иРок"].html = 'Рок';

	wholeMenu["● Метал ⤧ Real ⤧"] = [];
	wholeMenu["● Метал ⤧ Real ⤧"].id = "7_7";
	wholeMenu["● Метал ⤧ Real ⤧"].color = "black";
	wholeMenu["● Метал ⤧ Real ⤧"].hasSub = 1;
	wholeMenu["● Метал ⤧ Real ⤧"].link = "";
	wholeMenu["● Метал ⤧ Real ⤧"].html = '&#9679; Метал <font color="orangered"><sup>&nwnear; Real &nwnear;</sup>';

	wholeMenu["Альтернативный"] = [];
	wholeMenu["Альтернативный"].id = "7_7_1";
	wholeMenu["Альтернативный"].color = "black";
	wholeMenu["Альтернативный"].hasSub = 0;
	wholeMenu["Альтернативный"].link = "music_metal_alternative_rus.html";
	wholeMenu["Альтернативный"].html = 'Альтернативный <font color="crimson"><sup>&#191; Inadequate &#191;</sup></font>';

	wholeMenu["Блэк-"] = [];
	wholeMenu["Блэк-"].id = "7_7_2";
	wholeMenu["Блэк-"].color = "black";
	wholeMenu["Блэк-"].hasSub = 0;
	wholeMenu["Блэк-"].link = "music_metal_black_rus.html";
	wholeMenu["Блэк-"].html = 'Блэк-';

	wholeMenu["Дэт-"] = [];
	wholeMenu["Дэт-"].id = "7_7_3";
	wholeMenu["Дэт-"].color = "black";
	wholeMenu["Дэт-"].hasSub = 0;
	wholeMenu["Дэт-"].link = "music_metal_death_rus.html";
	wholeMenu["Дэт-"].html = 'Дэт- <font color="blueviolet"><sup>&#9996; Fresh &#9996;</sup></font>';

	wholeMenu["Готик-"] = [];
	wholeMenu["Готик-"].id = "7_7_4";
	wholeMenu["Готик-"].color = "black";
	wholeMenu["Готик-"].hasSub = 0;
	wholeMenu["Готик-"].link = "music_metal_gothic_rus.html";
	wholeMenu["Готик-"].html = 'Готик- <font color="orangered"><sup>&nwnear; Real &nwnear;</sup></font>';

	wholeMenu["Пауэр-"] = [];
	wholeMenu["Пауэр-"].id = "7_7_5";
	wholeMenu["Пауэр-"].color = "black";
	wholeMenu["Пауэр-"].hasSub = 0;
	wholeMenu["Пауэр-"].link = "music_metal_power_rus.html";
	wholeMenu["Пауэр-"].html = 'Пауэр-';

	wholeMenu["Симфоник-"] = [];
	wholeMenu["Симфоник-"].id = "7_7_6";
	wholeMenu["Симфоник-"].color = "black";
	wholeMenu["Симфоник-"].hasSub = 0;
	wholeMenu["Симфоник-"].link = "music_metal_symphonic_rus.html";
	wholeMenu["Симфоник-"].html = 'Симфоник-';


	wholeMenu["● Национальная"] = [];
	wholeMenu["● Национальная"].id = "7_8";
	wholeMenu["● Национальная"].color = "black";
	wholeMenu["● Национальная"].hasSub = 1;
	wholeMenu["● Национальная"].link = "";
	wholeMenu["● Национальная"].html = '&#9679; Национальная';

	wholeMenu["Американская (США)"] = [];
	wholeMenu["Американская (США)"].id = "7_8_1";
	wholeMenu["Американская (США)"].color = "black";
	wholeMenu["Американская (США)"].hasSub = 0;
	wholeMenu["Американская (США)"].link = "music_national_usa_rus.html";
	wholeMenu["Американская (США)"].html = 'Американская (США)';

	wholeMenu["Английская (СК)"] = [];
	wholeMenu["Английская (СК)"].id = "7_8_2";
	wholeMenu["Английская (СК)"].color = "black";
	wholeMenu["Английская (СК)"].hasSub = 0;
	wholeMenu["Английская (СК)"].link = "music_national_uk_rus.html";
	wholeMenu["Английская (СК)"].html = 'Английская (СК)';

	wholeMenu["Ирландская (Ирландия)"] = [];
	wholeMenu["Ирландская (Ирландия)"].id = "7_8_3";
	wholeMenu["Ирландская (Ирландия)"].color = "black";
	wholeMenu["Ирландская (Ирландия)"].hasSub = 0;
	wholeMenu["Ирландская (Ирландия)"].link = "music_national_irish_rus.html";
	wholeMenu["Ирландская (Ирландия)"].html = 'Ирландская (Ирландия)';

	wholeMenu["Советская (СССР)"] = [];
	wholeMenu["Советская (СССР)"].id = "7_8_4";
	wholeMenu["Советская (СССР)"].color = "black";
	wholeMenu["Советская (СССР)"].hasSub = 0;
	wholeMenu["Советская (СССР)"].link = "music_national_soviet_rus.html";
	wholeMenu["Советская (СССР)"].html = 'Советская (СССР)';

	wholeMenu["Поп"] = [];
	wholeMenu["Поп"].id = "7_9";
	wholeMenu["Поп"].color = "black";
	wholeMenu["Поп"].hasSub = 0;
	wholeMenu["Поп"].link = "music_pop_rus.html";
	wholeMenu["Поп"].html = 'Поп';

	wholeMenu["● Психоделическая ⛅ Cool ⛅"] = [];
	wholeMenu["● Психоделическая ⛅ Cool ⛅"].id = "7_10";
	wholeMenu["● Психоделическая ⛅ Cool ⛅"].color = "black";
	wholeMenu["● Психоделическая ⛅ Cool ⛅"].hasSub = 1;
	wholeMenu["● Психоделическая ⛅ Cool ⛅"].link = "";
	wholeMenu["● Психоделическая ⛅ Cool ⛅"].html = '&#9679; Психоделическая <font color="cornflowerblue"><sup>&#9925; Cool &#9925;</sup></font>';

	wholeMenu["● Психоделическая/ий ⛅ Cool ⛅"] = [];
	wholeMenu["● Психоделическая/ий ⛅ Cool ⛅"].id = "7_10";
	wholeMenu["● Психоделическая/ий ⛅ Cool ⛅"].color = "black";
	wholeMenu["● Психоделическая/ий ⛅ Cool ⛅"].hasSub = 1;
	wholeMenu["● Психоделическая/ий ⛅ Cool ⛅"].link = "";
	wholeMenu["● Психоделическая/ий ⛅ Cool ⛅"].html = '&#9679; Психоделическая/ий <font color="cornflowerblue"><sup>&#9925; Cool &#9925;</sup></font>';

	wholeMenu["пРок"] = [];
	wholeMenu["пРок"].id = "7_10_1";
	wholeMenu["пРок"].color = "black";
	wholeMenu["пРок"].hasSub = 0;
	wholeMenu["пРок"].link = "music_psychedelic_rock_rus.html";
	wholeMenu["пРок"].html = 'Рок <font color="cornflowerblue"><sup>&#9925; Cool &#9925;</sup></font>';

	wholeMenu["Транс"] = [];
	wholeMenu["Транс"].id = "7_10_2";
	wholeMenu["Транс"].color = "black";
	wholeMenu["Транс"].hasSub = 0;
	wholeMenu["Транс"].link = "music_psychedelic_trance_rus.html";
	wholeMenu["Транс"].html = 'Транс';

	wholeMenu["● Панк ☥ Vampiric ☥"] = [];
	wholeMenu["● Панк ☥ Vampiric ☥"].id = "7_11";
	wholeMenu["● Панк ☥ Vampiric ☥"].color = "black";
	wholeMenu["● Панк ☥ Vampiric ☥"].hasSub = 1;
	wholeMenu["● Панк ☥ Vampiric ☥"].link = "";
	wholeMenu["● Панк ☥ Vampiric ☥"].html = '&#9679; Панк <font color="purple"><sup>&#9765; Vampiric &#9765;</sup></font>';

	wholeMenu["Поп-Панк"] = [];
	wholeMenu["Поп-Панк"].id = "7_11_1";
	wholeMenu["Поп-Панк"].color = "black";
	wholeMenu["Поп-Панк"].hasSub = 0;
	wholeMenu["Поп-Панк"].link = "music_punk_pop_rus.html";
	wholeMenu["Поп-Панк"].html = 'Поп-Панк';

	wholeMenu["Панк-Рок"] = [];
	wholeMenu["Панк-Рок"].id = "7_11_2";
	wholeMenu["Панк-Рок"].color = "black";
	wholeMenu["Панк-Рок"].hasSub = 0;
	wholeMenu["Панк-Рок"].link = "music_punk_rock_rus.html";
	wholeMenu["Панк-Рок"].html = 'Панк-Рок';

	wholeMenu["Ска-Панк"] = [];
	wholeMenu["Ска-Панк"].id = "7_11_3";
	wholeMenu["Ска-Панк"].color = "black";
	wholeMenu["Ска-Панк"].hasSub = 0;
	wholeMenu["Ска-Панк"].link = "music_punk_ska_rus.html";
	wholeMenu["Ска-Панк"].html = 'Ска-Панк <font color="purple"><sup>&#9765; Vampiric &#9765;</sup></font>';

	wholeMenu["Рэп"] = [];
	wholeMenu["Рэп"].id = "7_12";
	wholeMenu["Рэп"].color = "black";
	wholeMenu["Рэп"].hasSub = 0;
	wholeMenu["Рэп"].link = "music_rap_rus.html";
	wholeMenu["Рэп"].html = 'Рэп <font color="dodgerblue"><sup>&sung; Simple &sung;</sup></font>';

	wholeMenu["Регги"] = [];
	wholeMenu["Регги"].id = "7_13";
	wholeMenu["Регги"].color = "black";
	wholeMenu["Регги"].hasSub = 0;
	wholeMenu["Регги"].link = "music_reggae_rus.html";
	wholeMenu["Регги"].html = 'Регги';

	wholeMenu["Рок-музыка"] = [];
	wholeMenu["Рок-музыка"].id = "7_14";
	wholeMenu["Рок-музыка"].color = "black";
	wholeMenu["Рок-музыка"].hasSub = 0;
	wholeMenu["Рок-музыка"].link = "music_rock_rus.html";
	wholeMenu["Рок-музыка"].html = 'Рок-музыка <font color="cornflowerblue"><sup>&#9925; Cool &#9925;</sup></font>';

	wholeMenu["Сатанинская"] = [];
	wholeMenu["Сатанинская"].id = "7_15";
	wholeMenu["Сатанинская"].color = "black";
	wholeMenu["Сатанинская"].hasSub = 0;
	wholeMenu["Сатанинская"].link = "music_satanic_rus.html";
	wholeMenu["Сатанинская"].html = 'Сатанинская <font color="darkred"><sup>&#9765; Tricky &#9765;</sup></font>';

	wholeMenu["США ↔ СССР"] = [];
	wholeMenu["США ↔ СССР"].id = "7_16";
	wholeMenu["США ↔ СССР"].color = "black";
	wholeMenu["США ↔ СССР"].hasSub = 0;
	wholeMenu["США ↔ СССР"].link = "music_corr_rus.html";
	wholeMenu["США ↔ СССР"].html = 'США &#8596; СССР';
}


return wholeMenu;
}


function  loadMenuMovies(lang) {


var wholeMenu = [];

if (lang=="eng") {

	wholeMenu["Movies"] = [];
	wholeMenu["Movies"].id = "8";
	wholeMenu["Movies"].color = "black";
	wholeMenu["Movies"].hasSub = 1;
	wholeMenu["Movies"].link = "";
	wholeMenu["Movies"].html = 'Movies';

	wholeMenu["● By Actors"] = [];
	wholeMenu["● By Actors"].id = "8_1";
	wholeMenu["● By Actors"].color = "black";
	wholeMenu["● By Actors"].hasSub = 1;
	wholeMenu["● By Actors"].link = "";
	wholeMenu["● By Actors"].html = '&#9679; By Actors';

	wholeMenu["Vin Diesel"] = [];
	wholeMenu["Vin Diesel"].id = "8_1_4";
	wholeMenu["Vin Diesel"].color = "black";
	wholeMenu["Vin Diesel"].hasSub = 0;
	wholeMenu["Vin Diesel"].link = "movies_actor_diesel_eng.html";
	wholeMenu["Vin Diesel"].html = 'Vin Diesel';

	wholeMenu["Michael Douglas"] = [];
	wholeMenu["Michael Douglas"].id = "8_1_5";
	wholeMenu["Michael Douglas"].color = "black";
	wholeMenu["Michael Douglas"].hasSub = 0;
	wholeMenu["Michael Douglas"].link = "movies_actor_douglas_eng.html";
	wholeMenu["Michael Douglas"].html = 'Michael Douglas';

	wholeMenu["Milla Jovovich"] = [];
	wholeMenu["Milla Jovovich"].id = "8_1_9";
	wholeMenu["Milla Jovovich"].color = "black";
	wholeMenu["Milla Jovovich"].hasSub = 0;
	wholeMenu["Milla Jovovich"].link = "movies_actor_jovovich_eng.html";
	wholeMenu["Milla Jovovich"].html = 'Milla Jovovich';

	wholeMenu["Arnold Schwarzenegger"] = [];
	wholeMenu["Arnold Schwarzenegger"].id = "8_1_14";
	wholeMenu["Arnold Schwarzenegger"].color = "black";
	wholeMenu["Arnold Schwarzenegger"].hasSub = 0;
	wholeMenu["Arnold Schwarzenegger"].link = "movies_actor_schwarzenegger_eng.html";
	wholeMenu["Arnold Schwarzenegger"].html = 'Arnold Schwarzenegger';

	wholeMenu["Sylvester Stallone"] = [];
	wholeMenu["Sylvester Stallone"].id = "8_1_15";
	wholeMenu["Sylvester Stallone"].color = "black";
	wholeMenu["Sylvester Stallone"].hasSub = 0;
	wholeMenu["Sylvester Stallone"].link = "movies_actor_stallone_eng.html";
	wholeMenu["Sylvester Stallone"].html = 'Sylvester Stallone';

	wholeMenu["Jason Statham"] = [];
	wholeMenu["Jason Statham"].id = "8_1_16";
	wholeMenu["Jason Statham"].color = "black";
	wholeMenu["Jason Statham"].hasSub = 0;
	wholeMenu["Jason Statham"].link = "movies_actor_statham_eng.html";
	wholeMenu["Jason Statham"].html = 'Jason Statham';

	wholeMenu["Bruce Willis"] = [];
	wholeMenu["Bruce Willis"].id = "8_1_18";
	wholeMenu["Bruce Willis"].color = "black";
	wholeMenu["Bruce Willis"].hasSub = 0;
	wholeMenu["Bruce Willis"].link = "movies_actor_willis_eng.html";
	wholeMenu["Bruce Willis"].html = 'Bruce Willis';

	wholeMenu["● By Genre"] = [];
	wholeMenu["● By Genre"].id = "8_2";
	wholeMenu["● By Genre"].color = "black";
	wholeMenu["● By Genre"].hasSub = 1;
	wholeMenu["● By Genre"].link = "";
	wholeMenu["● By Genre"].html = '&#9679; By Genre';

	wholeMenu["● Action Horror"] = [];
	wholeMenu["● Action Horror"].id = "8_2_1";
	wholeMenu["● Action Horror"].color = "black";
	wholeMenu["● Action Horror"].hasSub = 1;
	wholeMenu["● Action Horror"].subCaption = "&#9679; Action Horror, Sort by";
	wholeMenu["● Action Horror"].link = "";
	wholeMenu["● Action Horror"].html = '&#9679; Action Horror';

	wholeMenu["11SortBy"] = [];
	wholeMenu["11SortBy"].id = "8_2_1_1";
	wholeMenu["11SortBy"].color = "black";
	wholeMenu["11SortBy"].hasSub = 0;
	wholeMenu["11SortBy"].link = "movies_genre_action_horror_eng.html";
	wholeMenu["11SortBy"].html = '<img src="scripts/contents/icons/sortby/sortby_name.png" width="22" height="18"  style="vertical-align:middle;"/>Name';

	wholeMenu["12SortBy"] = [];
	wholeMenu["12SortBy"].id = "8_2_1_2";
	wholeMenu["12SortBy"].color = "black";
	wholeMenu["12SortBy"].hasSub = 0;
	wholeMenu["12SortBy"].link = "movies_genre_action_horror_score_eng.html";
	wholeMenu["12SortBy"].html = '<img src="scripts/contents/icons/sortby/sortby_score.png" alt="Score" title="Score" width="22" height="18"  style="vertical-align:middle;"/>Score';

	wholeMenu["● Body Horror"] = [];
	wholeMenu["● Body Horror"].id = "8_2_3";
	wholeMenu["● Body Horror"].color = "black";
	wholeMenu["● Body Horror"].hasSub = 1;
	wholeMenu["● Body Horror"].subCaption = "&#9679; Body Horror, Sort by";
	wholeMenu["● Body Horror"].link = "";
	wholeMenu["● Body Horror"].html = '&#9679; Body Horror';

	wholeMenu["31SortBy"] = [];
	wholeMenu["31SortBy"].id = "8_2_3_1";
	wholeMenu["31SortBy"].color = "black";
	wholeMenu["31SortBy"].hasSub = 0;
	wholeMenu["31SortBy"].link = "movies_genre_body_horror_eng.html";
	wholeMenu["31SortBy"].html = '<img src="scripts/contents/icons/sortby/sortby_name.png" width="22" height="18"  style="vertical-align:middle;"/>Name';

	wholeMenu["32SortBy"] = [];
	wholeMenu["32SortBy"].id = "8_2_3_2";
	wholeMenu["32SortBy"].color = "black";
	wholeMenu["32SortBy"].hasSub = 0;
	wholeMenu["32SortBy"].link = "movies_genre_body_horror_score_eng.html";
	wholeMenu["32SortBy"].html = '<img src="scripts/contents/icons/sortby/sortby_score.png" alt="Score" title="Score" width="22" height="18"  style="vertical-align:middle;"/>Score';

	wholeMenu["● Dystopia"] = [];
	wholeMenu["● Dystopia"].id = "8_2_4";
	wholeMenu["● Dystopia"].color = "black";
	wholeMenu["● Dystopia"].hasSub = 1;
	wholeMenu["● Dystopia"].subCaption = "&#9679; Dystopia, Sort by";
	wholeMenu["● Dystopia"].link = "";
	wholeMenu["● Dystopia"].html = '&#9679; Dystopia';

	wholeMenu["41SortBy"] = [];
	wholeMenu["41SortBy"].id = "8_2_4_1";
	wholeMenu["41SortBy"].color = "black";
	wholeMenu["41SortBy"].hasSub = 0;
	wholeMenu["41SortBy"].link = "movies_genre_dystopia_eng.html";
	wholeMenu["41SortBy"].html = '<img src="scripts/contents/icons/sortby/sortby_name.png" width="22" height="18"  style="vertical-align:middle;"/>Name';

	wholeMenu["42SortBy"] = [];
	wholeMenu["42SortBy"].id = "8_2_4_2";
	wholeMenu["42SortBy"].color = "black";
	wholeMenu["42SortBy"].hasSub = 0;
	wholeMenu["42SortBy"].link = "movies_genre_dystopia_score_eng.html";
	wholeMenu["42SortBy"].html = '<img src="scripts/contents/icons/sortby/sortby_score.png" alt="Score" title="Score" width="22" height="18"  style="vertical-align:middle;"/>Score';


	wholeMenu["● Television Pilot"] = [];
	wholeMenu["● Television Pilot"].id = "8_2_6";
	wholeMenu["● Television Pilot"].color = "black";
	wholeMenu["● Television Pilot"].hasSub = 1;
	wholeMenu["● Television Pilot"].subCaption = "&#9679; Television Pilot, Sort by";
	wholeMenu["● Television Pilot"].link = "";
	wholeMenu["● Television Pilot"].html = '&#9679; Television Pilot';

	wholeMenu["61SortBy"] = [];
	wholeMenu["61SortBy"].id = "8_2_6_1";
	wholeMenu["61SortBy"].color = "black";
	wholeMenu["61SortBy"].hasSub = 0;
	wholeMenu["61SortBy"].link = "movies_genre_pilot_eng.html";
	wholeMenu["61SortBy"].html = '<img src="scripts/contents/icons/sortby/sortby_name.png" width="22" height="18"  style="vertical-align:middle;"/>Name';

	wholeMenu["62SortBy"] = [];
	wholeMenu["62SortBy"].id = "8_2_6_2";
	wholeMenu["62SortBy"].color = "black";
	wholeMenu["62SortBy"].hasSub = 0;
	wholeMenu["62SortBy"].link = "movies_genre_pilot_score_eng.html";
	wholeMenu["62SortBy"].html = '<img src="scripts/contents/icons/sortby/sortby_score.png" alt="Score" title="Score" width="22" height="18"  style="vertical-align:middle;"/>Score';

	wholeMenu["● Post-Apocalyptic"] = [];
	wholeMenu["● Post-Apocalyptic"].id = "8_2_7";
	wholeMenu["● Post-Apocalyptic"].color = "black";
	wholeMenu["● Post-Apocalyptic"].hasSub = 1;
	wholeMenu["● Post-Apocalyptic"].subCaption = "&#9679; Post-Apocalyptic, Sort by";
	wholeMenu["● Post-Apocalyptic"].link = "movies_genre_post_apocalyptic_eng.html";
	wholeMenu["● Post-Apocalyptic"].html = '&#9679; Post-Apocalyptic';

	wholeMenu["71SortBy"] = [];
	wholeMenu["71SortBy"].id = "8_2_7_1";
	wholeMenu["71SortBy"].color = "black";
	wholeMenu["71SortBy"].hasSub = 0;
	wholeMenu["71SortBy"].link = "movies_genre_post_apocalyptic_eng.html";
	wholeMenu["71SortBy"].html = '<img src="scripts/contents/icons/sortby/sortby_name.png" width="22" height="18"  style="vertical-align:middle;"/>Name';

	wholeMenu["72SortBy"] = [];
	wholeMenu["72SortBy"].id = "8_2_7_2";
	wholeMenu["72SortBy"].color = "black";
	wholeMenu["72SortBy"].hasSub = 0;
	wholeMenu["72SortBy"].link = "movies_genre_post_apocalyptic_score_eng.html";
	wholeMenu["72SortBy"].html = '<img src="scripts/contents/icons/sortby/sortby_score.png" alt="Score" title="Score" width="22" height="18"  style="vertical-align:middle;"/>Score';

	wholeMenu["● Short"] = [];
	wholeMenu["● Short"].id = "8_2_9";
	wholeMenu["● Short"].color = "black";
	wholeMenu["● Short"].hasSub = 1;
	wholeMenu["● Short"].subCaption = "&#9679; Short, Sort by";
	wholeMenu["● Short"].link = "movies_genre_short_eng.html";
	wholeMenu["● Short"].html = '&#9679; Short';

	wholeMenu["91SortBy"] = [];
	wholeMenu["91SortBy"].id = "8_2_9_1";
	wholeMenu["91SortBy"].color = "black";
	wholeMenu["91SortBy"].hasSub = 0;
	wholeMenu["91SortBy"].link = "movies_genre_short_eng.html";
	wholeMenu["91SortBy"].html = '<img src="scripts/contents/icons/sortby/sortby_name.png" width="22" height="18"  style="vertical-align:middle;"/>Name';

	wholeMenu["92SortBy"] = [];
	wholeMenu["92SortBy"].id = "8_2_9_2";
	wholeMenu["92SortBy"].color = "black";
	wholeMenu["92SortBy"].hasSub = 0;
	wholeMenu["92SortBy"].link = "movies_genre_short_score_eng.html";
	wholeMenu["92SortBy"].html = '<img src="scripts/contents/icons/sortby/sortby_score.png" alt="Score" title="Score" width="22" height="18"  style="vertical-align:middle;"/>Score';

	wholeMenu["● Situation Comedy"] = [];
	wholeMenu["● Situation Comedy"].id = "8_2_10";
	wholeMenu["● Situation Comedy"].color = "black";
	wholeMenu["● Situation Comedy"].hasSub = 1;
	wholeMenu["● Situation Comedy"].subCaption = "&#9679; Situation Comedy, Sort by";
	wholeMenu["● Situation Comedy"].link = "";
	wholeMenu["● Situation Comedy"].html = '&#9679; Situation Comedy';

	wholeMenu["101SortBy"] = [];
	wholeMenu["101SortBy"].id = "8_2_10_1";
	wholeMenu["101SortBy"].color = "black";
	wholeMenu["101SortBy"].hasSub = 0;
	wholeMenu["101SortBy"].link = "movies_genre_sitcom_eng.html";
	wholeMenu["101SortBy"].html = '<img src="scripts/contents/icons/sortby/sortby_name.png" width="22" height="18"  style="vertical-align:middle;"/>Name';

	wholeMenu["102SortBy"] = [];
	wholeMenu["102SortBy"].id = "8_2_10_2";
	wholeMenu["102SortBy"].color = "black";
	wholeMenu["102SortBy"].hasSub = 0;
	wholeMenu["102SortBy"].link = "movies_genre_sitcom_score_eng.html";
	wholeMenu["102SortBy"].html = '<img src="scripts/contents/icons/sortby/sortby_score.png" alt="Score" title="Score" width="22" height="18"  style="vertical-align:middle;"/>Score';

	wholeMenu["● Space Opera"] = [];
	wholeMenu["● Space Opera"].id = "8_2_11";
	wholeMenu["● Space Opera"].color = "black";
	wholeMenu["● Space Opera"].hasSub = 1;
	wholeMenu["● Space Opera"].subCaption = "&#9679; Space Opera, Sort by";
	wholeMenu["● Space Opera"].link = "";
	wholeMenu["● Space Opera"].html = '&#9679; Space Opera';

	wholeMenu["111SortBy"] = [];
	wholeMenu["111SortBy"].id = "8_2_11_1";
	wholeMenu["111SortBy"].color = "black";
	wholeMenu["111SortBy"].hasSub = 0;
	wholeMenu["111SortBy"].link = "movies_genre_space_opera_eng.html";
	wholeMenu["111SortBy"].html = '<img src="scripts/contents/icons/sortby/sortby_name.png" width="22" height="18"  style="vertical-align:middle;"/>Name';

	wholeMenu["112SortBy"] = [];
	wholeMenu["112SortBy"].id = "8_2_11_2";
	wholeMenu["112SortBy"].color = "black";
	wholeMenu["112SortBy"].hasSub = 0;
	wholeMenu["112SortBy"].link = "movies_genre_space_opera_score_eng.html";
	wholeMenu["112SortBy"].html = '<img src="scripts/contents/icons/sortby/sortby_score.png" alt="Score" title="Score" width="22" height="18"  style="vertical-align:middle;"/>Score';

	wholeMenu["● Animation"] = [];
	wholeMenu["● Animation"].id = "8_3";
	wholeMenu["● Animation"].color = "black";
	wholeMenu["● Animation"].hasSub = 1;
	wholeMenu["● Animation"].link = "";
	wholeMenu["● Animation"].html = '&#9679; Animation';

	wholeMenu["For Adults"] = [];
	wholeMenu["For Adults"].id = "8_3_1";
	wholeMenu["For Adults"].color = "black";
	wholeMenu["For Adults"].hasSub = 0;
	wholeMenu["For Adults"].link = "movies_animation_for_adults_eng.html";
	wholeMenu["For Adults"].html = 'For Adults';

	wholeMenu["For Children"] = [];
	wholeMenu["For Children"].id = "8_3_2";
	wholeMenu["For Children"].color = "black";
	wholeMenu["For Children"].hasSub = 0;
	wholeMenu["For Children"].link = "movies_animation_for_children_eng.html";
	wholeMenu["For Children"].html = 'For Children';


	wholeMenu["Superhero"] = [];
	wholeMenu["Superhero"].id = "8_3_4";
	wholeMenu["Superhero"].color = "black";
	wholeMenu["Superhero"].hasSub = 0;
	wholeMenu["Superhero"].link = "movies_animation_superhero_eng.html";
	wholeMenu["Superhero"].html = 'Superhero';

	wholeMenu["Mockbuster"] = [];
	wholeMenu["Mockbuster"].id = "8_4";
	wholeMenu["Mockbuster"].color = "black";
	wholeMenu["Mockbuster"].hasSub = 0;
	wholeMenu["Mockbuster"].link = "movies_mockbuster_eng.html";
	wholeMenu["Mockbuster"].html = 'Mockbuster';

	wholeMenu["● Superhero"] = [];
	wholeMenu["● Superhero"].id = "8_5";
	wholeMenu["● Superhero"].color = "black";
	wholeMenu["● Superhero"].hasSub = 1;
	wholeMenu["● Superhero"].link = "";
	wholeMenu["● Superhero"].html = '&#9679; Superhero';

	wholeMenu["DC Extended Universe"] = [];
	wholeMenu["DC Extended Universe"].id = "8_5_1";
	wholeMenu["DC Extended Universe"].color = "black";
	wholeMenu["DC Extended Universe"].hasSub = 0;
	wholeMenu["DC Extended Universe"].link = "movies_superhero_dc_eng.html";
	wholeMenu["DC Extended Universe"].html = 'DC Extended Universe';

	wholeMenu["Marvel Cinematic Universe"] = [];
	wholeMenu["Marvel Cinematic Universe"].id = "8_5_2";
	wholeMenu["Marvel Cinematic Universe"].color = "black";
	wholeMenu["Marvel Cinematic Universe"].hasSub = 0;
	wholeMenu["Marvel Cinematic Universe"].link = "movies_superhero_marvel_eng.html";
	wholeMenu["Marvel Cinematic Universe"].html = 'Marvel Cinematic Universe';

	wholeMenu["Other"] = [];
	wholeMenu["Other"].id = "8_5_3";
	wholeMenu["Other"].color = "black";
	wholeMenu["Other"].hasSub = 0;
	wholeMenu["Other"].link = "movies_superhero_other_eng.html";
	wholeMenu["Other"].html = 'Other';


	wholeMenu["Not Satanic"] = [];
	wholeMenu["Not Satanic"].id = "8_6";
	wholeMenu["Not Satanic"].color = "black";
	wholeMenu["Not Satanic"].hasSub = 0;
	wholeMenu["Not Satanic"].link = "movies_not_satanic_eng.html";
	wholeMenu["Not Satanic"].html = 'Not Satanic';


}


if (lang=="rus") {
	wholeMenu["Фильмы"] = [];
	wholeMenu["Фильмы"].id = "8";
	wholeMenu["Фильмы"].color = "black";
	wholeMenu["Фильмы"].hasSub = 1;
	wholeMenu["Фильмы"].link = "";
	wholeMenu["Фильмы"].html = 'Фильмы';

	wholeMenu["● По Актёрам"] = [];
	wholeMenu["● По Актёрам"].id = "8_1";
	wholeMenu["● По Актёрам"].color = "black";
	wholeMenu["● По Актёрам"].hasSub = 1;
	wholeMenu["● По Актёрам"].link = "";
	wholeMenu["● По Актёрам"].html = '&#9679; По Актёрам';

	wholeMenu["Вин Дизель"] = [];
	wholeMenu["Вин Дизель"].id = "8_1_4";
	wholeMenu["Вин Дизель"].color = "black";
	wholeMenu["Вин Дизель"].hasSub = 0;
	wholeMenu["Вин Дизель"].link = "movies_actor_diesel_rus.html";
	wholeMenu["Вин Дизель"].html = 'Вин Дизель';

	wholeMenu["Майкл Дуглас"] = [];
	wholeMenu["Майкл Дуглас"].id = "8_1_5";
	wholeMenu["Майкл Дуглас"].color = "black";
	wholeMenu["Майкл Дуглас"].hasSub = 0;
	wholeMenu["Майкл Дуглас"].link = "movies_actor_douglas_rus.html";
	wholeMenu["Майкл Дуглас"].html = 'Майкл Дуглас';

	wholeMenu["Милла Йовович"] = [];
	wholeMenu["Милла Йовович"].id = "8_1_9";
	wholeMenu["Милла Йовович"].color = "black";
	wholeMenu["Милла Йовович"].hasSub = 0;
	wholeMenu["Милла Йовович"].link = "movies_actor_jovovich_rus.html";
	wholeMenu["Милла Йовович"].html = 'Милла Йовович';

	wholeMenu["Арнольд Шварценеггер"] = [];
	wholeMenu["Арнольд Шварценеггер"].id = "8_1_14";
	wholeMenu["Арнольд Шварценеггер"].color = "black";
	wholeMenu["Арнольд Шварценеггер"].hasSub = 0;
	wholeMenu["Арнольд Шварценеггер"].link = "movies_actor_schwarzenegger_rus.html";
	wholeMenu["Арнольд Шварценеггер"].html = 'Арнольд Шварценеггер';

	wholeMenu["Сильвестер Сталлоне"] = [];
	wholeMenu["Сильвестер Сталлоне"].id = "8_1_15";
	wholeMenu["Сильвестер Сталлоне"].color = "black";
	wholeMenu["Сильвестер Сталлоне"].hasSub = 0;
	wholeMenu["Сильвестер Сталлоне"].link = "movies_actor_stallone_rus.html";
	wholeMenu["Сильвестер Сталлоне"].html = 'Сильвестер Сталлоне';

	wholeMenu["Джейсон Стейтем"] = [];
	wholeMenu["Джейсон Стейтем"].id = "8_1_16";
	wholeMenu["Джейсон Стейтем"].color = "black";
	wholeMenu["Джейсон Стейтем"].hasSub = 0;
	wholeMenu["Джейсон Стейтем"].link = "movies_actor_statham_rus.html";
	wholeMenu["Джейсон Стейтем"].html = 'Джейсон Стейтем';

	wholeMenu["Брюс Уиллис"] = [];
	wholeMenu["Брюс Уиллис"].id = "8_1_18";
	wholeMenu["Брюс Уиллис"].color = "black";
	wholeMenu["Брюс Уиллис"].hasSub = 0;
	wholeMenu["Брюс Уиллис"].link = "movies_actor_willis_rus.html";
	wholeMenu["Брюс Уиллис"].html = 'Брюс Уиллис';

	wholeMenu["● По Жанрам"] = [];
	wholeMenu["● По Жанрам"].id = "8_2";
	wholeMenu["● По Жанрам"].color = "black";
	wholeMenu["● По Жанрам"].hasSub = 1;
	wholeMenu["● По Жанрам"].link = "";
	wholeMenu["● По Жанрам"].html = '&#9679; По Жанрам';

	wholeMenu["● Экшн-Хоррор"] = [];
	wholeMenu["● Экшн-Хоррор"].id = "8_2_1";
	wholeMenu["● Экшн-Хоррор"].color = "black";
	wholeMenu["● Экшн-Хоррор"].hasSub = 1;
	wholeMenu["● Экшн-Хоррор"].subCaption = "&#9679; Экшн-Хоррор, Сортировать по";
	wholeMenu["● Экшн-Хоррор"].link = "";
	wholeMenu["● Экшн-Хоррор"].html = '&#9679; Экшн-Хоррор';

	wholeMenu["11СортироватьПо"] = [];
	wholeMenu["11СортироватьПо"].id = "8_2_1_1";
	wholeMenu["11СортироватьПо"].color = "black";
	wholeMenu["11СортироватьПо"].hasSub = 0;
	wholeMenu["11СортироватьПо"].link = "movies_genre_action_horror_rus.html";
	wholeMenu["11СортироватьПо"].html = '<img src="scripts/contents/icons/sortby/sortby_name.png" width="22" height="18"  style="vertical-align:middle;"/>Имени';

	wholeMenu["12СортироватьПо"] = [];
	wholeMenu["12СортироватьПо"].id = "8_2_1_2";
	wholeMenu["12СортироватьПо"].color = "black";
	wholeMenu["12СортироватьПо"].hasSub = 0;
	wholeMenu["12СортироватьПо"].link = "movies_genre_action_horror_score_rus.html";
	wholeMenu["12СортироватьПо"].html = '<img src="scripts/contents/icons/sortby/sortby_score.png" width="22" height="18"  style="vertical-align:middle;"/>Счёту';

	wholeMenu["● Боди-Хоррор"] = [];
	wholeMenu["● Боди-Хоррор"].id = "8_2_3";
	wholeMenu["● Боди-Хоррор"].color = "black";
	wholeMenu["● Боди-Хоррор"].hasSub = 1;
	wholeMenu["● Боди-Хоррор"].subCaption = "&#9679; Боди-Хоррор, Сортировать по";
	wholeMenu["● Боди-Хоррор"].link = "";
	wholeMenu["● Боди-Хоррор"].html = '&#9679; Боди-Хоррор';

	wholeMenu["31СортироватьПо"] = [];
	wholeMenu["31СортироватьПо"].id = "8_2_3_1";
	wholeMenu["31СортироватьПо"].color = "black";
	wholeMenu["31СортироватьПо"].hasSub = 0;
	wholeMenu["31СортироватьПо"].link = "movies_genre_body_horror_rus.html";
	wholeMenu["31СортироватьПо"].html = '<img src="scripts/contents/icons/sortby/sortby_name.png" width="22" height="18"  style="vertical-align:middle;"/>Имени';

	wholeMenu["32СортироватьПо"] = [];
	wholeMenu["32СортироватьПо"].id = "8_2_3_2";
	wholeMenu["32СортироватьПо"].color = "black";
	wholeMenu["32СортироватьПо"].hasSub = 0;
	wholeMenu["32СортироватьПо"].link = "movies_genre_body_horror_score_rus.html";
	wholeMenu["32СортироватьПо"].html = '<img src="scripts/contents/icons/sortby/sortby_score.png" width="22" height="18"  style="vertical-align:middle;"/>Счёту';


	wholeMenu["● Антиутопия"] = [];
	wholeMenu["● Антиутопия"].id = "8_2_4";
	wholeMenu["● Антиутопия"].color = "black";
	wholeMenu["● Антиутопия"].hasSub = 1;
	wholeMenu["● Антиутопия"].subCaption = "&#9679; Антиутопия, Сортировать по";
	wholeMenu["● Антиутопия"].link = "";
	wholeMenu["● Антиутопия"].html = '&#9679; Антиутопия';

	wholeMenu["41СортироватьПо"] = [];
	wholeMenu["41СортироватьПо"].id = "8_2_4_1";
	wholeMenu["41СортироватьПо"].color = "black";
	wholeMenu["41СортироватьПо"].hasSub = 0;
	wholeMenu["41СортироватьПо"].link = "movies_genre_dystopia_rus.html";
	wholeMenu["41СортироватьПо"].html = '<img src="scripts/contents/icons/sortby/sortby_name.png" width="22" height="18"  style="vertical-align:middle;"/>Имени';

	wholeMenu["42СортироватьПо"] = [];
	wholeMenu["42СортироватьПо"].id = "8_2_4_2";
	wholeMenu["42СортироватьПо"].color = "black";
	wholeMenu["42СортироватьПо"].hasSub = 0;
	wholeMenu["42СортироватьПо"].link = "movies_genre_dystopia_score_rus.html";
	wholeMenu["42СортироватьПо"].html = '<img src="scripts/contents/icons/sortby/sortby_score.png" width="22" height="18"  style="vertical-align:middle;"/>Счёту';

	wholeMenu["● Пилотный Эпизод"] = [];
	wholeMenu["● Пилотный Эпизод"].id = "8_2_6";
	wholeMenu["● Пилотный Эпизод"].color = "black";
	wholeMenu["● Пилотный Эпизод"].hasSub = 1;
	wholeMenu["● Пилотный Эпизод"].subCaption = "&#9679; Пилотный Эпизод, Сортировать по";
	wholeMenu["● Пилотный Эпизод"].link = "";
	wholeMenu["● Пилотный Эпизод"].html = '&#9679; Пилотный Эпизод';

	wholeMenu["61СортироватьПо"] = [];
	wholeMenu["61СортироватьПо"].id = "8_2_6_1";
	wholeMenu["61СортироватьПо"].color = "black";
	wholeMenu["61СортироватьПо"].hasSub = 0;
	wholeMenu["61СортироватьПо"].link = "movies_genre_pilot_rus.html";
	wholeMenu["61СортироватьПо"].html = '<img src="scripts/contents/icons/sortby/sortby_name.png" width="22" height="18"  style="vertical-align:middle;"/>Имени';

	wholeMenu["62СортироватьПо"] = [];
	wholeMenu["62СортироватьПо"].id = "8_2_6_2";
	wholeMenu["62СортироватьПо"].color = "black";
	wholeMenu["62СортироватьПо"].hasSub = 0;
	wholeMenu["62СортироватьПо"].link = "movies_genre_pilot_score_rus.html";
	wholeMenu["62СортироватьПо"].html = '<img src="scripts/contents/icons/sortby/sortby_score.png" width="22" height="18"  style="vertical-align:middle;"/>Счёту';

	wholeMenu["● Постапокалиптика"] = [];
	wholeMenu["● Постапокалиптика"].id = "8_2_7";
	wholeMenu["● Постапокалиптика"].color = "black";
	wholeMenu["● Постапокалиптика"].hasSub = 1;
	wholeMenu["● Постапокалиптика"].subCaption = "&#9679; Постапокалиптика, Сорт. по";
	wholeMenu["● Постапокалиптика"].link = "";
	wholeMenu["● Постапокалиптика"].html = '&#9679; Постапокалиптика';

	wholeMenu["71СортироватьПо"] = [];
	wholeMenu["71СортироватьПо"].id = "8_2_7_1";
	wholeMenu["71СортироватьПо"].color = "black";
	wholeMenu["71СортироватьПо"].hasSub = 0;
	wholeMenu["71СортироватьПо"].link = "movies_genre_post_apocalyptic_rus.html";
	wholeMenu["71СортироватьПо"].html = '<img src="scripts/contents/icons/sortby/sortby_name.png" width="22" height="18"  style="vertical-align:middle;"/>Имени';

	wholeMenu["72СортироватьПо"] = [];
	wholeMenu["72СортироватьПо"].id = "8_2_7_2";
	wholeMenu["72СортироватьПо"].color = "black";
	wholeMenu["72СортироватьПо"].hasSub = 0;
	wholeMenu["72СортироватьПо"].link = "movies_genre_post_apocalyptic_score_rus.html";
	wholeMenu["72СортироватьПо"].html = '<img src="scripts/contents/icons/sortby/sortby_score.png" width="22" height="18"  style="vertical-align:middle;"/>Счёту';

	wholeMenu["● Короткометражные"] = [];
	wholeMenu["● Короткометражные"].id = "8_2_9";
	wholeMenu["● Короткометражные"].color = "black";
	wholeMenu["● Короткометражные"].hasSub = 1;
	wholeMenu["● Короткометражные"].subCaption = "&#9679; Короткометражные, Сорт. по";
	wholeMenu["● Короткометражные"].link = "";
	wholeMenu["● Короткометражные"].html = '&#9679; Короткометражные';

	wholeMenu["91СортироватьПо"] = [];
	wholeMenu["91СортироватьПо"].id = "8_2_9_1";
	wholeMenu["91СортироватьПо"].color = "black";
	wholeMenu["91СортироватьПо"].hasSub = 0;
	wholeMenu["91СортироватьПо"].link = "movies_genre_short_rus.html";
	wholeMenu["91СортироватьПо"].html = '<img src="scripts/contents/icons/sortby/sortby_name.png" width="22" height="18"  style="vertical-align:middle;"/>Имени';

	wholeMenu["92СортироватьПо"] = [];
	wholeMenu["92СортироватьПо"].id = "8_2_9_2";
	wholeMenu["92СортироватьПо"].color = "black";
	wholeMenu["92СортироватьПо"].hasSub = 0;
	wholeMenu["92СортироватьПо"].link = "movies_genre_short_score_rus.html";
	wholeMenu["92СортироватьПо"].html = '<img src="scripts/contents/icons/sortby/sortby_score.png" width="22" height="18"  style="vertical-align:middle;"/>Счёту';

	wholeMenu["● Ситуационная Комедия"] = [];
	wholeMenu["● Ситуационная Комедия"].id = "8_2_10";
	wholeMenu["● Ситуационная Комедия"].color = "black";
	wholeMenu["● Ситуационная Комедия"].hasSub = 1;
	wholeMenu["● Ситуационная Комедия"].subCaption = "&#9679; Ситуационная Комедия, Сорт. по";
	wholeMenu["● Ситуационная Комедия"].link = "";
	wholeMenu["● Ситуационная Комедия"].html = '&#9679; Ситуационная Комедия';

	wholeMenu["101СортироватьПо"] = [];
	wholeMenu["101СортироватьПо"].id = "8_2_10_1";
	wholeMenu["101СортироватьПо"].color = "black";
	wholeMenu["101СортироватьПо"].hasSub = 0;
	wholeMenu["101СортироватьПо"].link = "movies_genre_sitcom_rus.html";
	wholeMenu["101СортироватьПо"].html = '<img src="scripts/contents/icons/sortby/sortby_name.png" width="22" height="18"  style="vertical-align:middle;"/>Имени';

	wholeMenu["102СортироватьПо"] = [];
	wholeMenu["102СортироватьПо"].id = "8_2_10_2";
	wholeMenu["102СортироватьПо"].color = "black";
	wholeMenu["102СортироватьПо"].hasSub = 0;
	wholeMenu["102СортироватьПо"].link = "movies_genre_sitcom_score_rus.html";
	wholeMenu["102СортироватьПо"].html = '<img src="scripts/contents/icons/sortby/sortby_score.png" width="22" height="18"  style="vertical-align:middle;"/>Счёту';

	wholeMenu["● Космическая Опера"] = [];
	wholeMenu["● Космическая Опера"].id = "8_2_11";
	wholeMenu["● Космическая Опера"].color = "black";
	wholeMenu["● Космическая Опера"].hasSub = 1;
	wholeMenu["● Космическая Опера"].subCaption = "&#9679; Космическая Опера, Сорт. по";
	wholeMenu["● Космическая Опера"].link = "";
	wholeMenu["● Космическая Опера"].html = '&#9679; Космическая Опера';

	wholeMenu["111СортироватьПо"] = [];
	wholeMenu["111СортироватьПо"].id = "8_2_11_1";
	wholeMenu["111СортироватьПо"].color = "black";
	wholeMenu["111СортироватьПо"].hasSub = 0;
	wholeMenu["111СортироватьПо"].link = "movies_genre_space_opera_rus.html";
	wholeMenu["111СортироватьПо"].html = '<img src="scripts/contents/icons/sortby/sortby_name.png" width="22" height="18"  style="vertical-align:middle;"/>Имени';

	wholeMenu["112СортироватьПо"] = [];
	wholeMenu["112СортироватьПо"].id = "8_2_11_2";
	wholeMenu["112СортироватьПо"].color = "black";
	wholeMenu["112СортироватьПо"].hasSub = 0;
	wholeMenu["112СортироватьПо"].link = "movies_genre_space_opera_score_rus.html";
	wholeMenu["112СортироватьПо"].html = '<img src="scripts/contents/icons/sortby/sortby_score.png" width="22" height="18"  style="vertical-align:middle;"/>Счёту';

	wholeMenu["● Мультипликация"] = [];
	wholeMenu["● Мультипликация"].id = "8_3";
	wholeMenu["● Мультипликация"].color = "black";
	wholeMenu["● Мультипликация"].hasSub = 1;
	wholeMenu["● Мультипликация"].link = "";
	wholeMenu["● Мультипликация"].html = '&#9679; Мультипликация';

	wholeMenu["Для Взрослых"] = [];
	wholeMenu["Для Взрослых"].id = "8_3_1";
	wholeMenu["Для Взрослых"].color = "black";
	wholeMenu["Для Взрослых"].hasSub = 0;
	wholeMenu["Для Взрослых"].link = "movies_animation_for_adults_rus.html";
	wholeMenu["Для Взрослых"].html = 'Для Взрослых';

	wholeMenu["Для Детей"] = [];
	wholeMenu["Для Детей"].id = "8_3_2";
	wholeMenu["Для Детей"].color = "black";
	wholeMenu["Для Детей"].hasSub = 0;
	wholeMenu["Для Детей"].link = "movies_animation_for_children_rus.html";
	wholeMenu["Для Детей"].html = 'For Детей';


	wholeMenu["Супергеройские"] = [];
	wholeMenu["Супергеройские"].id = "8_3_4";
	wholeMenu["Супергеройские"].color = "black";
	wholeMenu["Супергеройские"].hasSub = 0;
	wholeMenu["Супергеройские"].link = "movies_animation_superhero_rus.html";
	wholeMenu["Супергеройские"].html = 'Супергеройские';

	wholeMenu["Мокбастер"] = [];
	wholeMenu["Мокбастер"].id = "8_4";
	wholeMenu["Мокбастер"].color = "black";
	wholeMenu["Мокбастер"].hasSub = 0;
	wholeMenu["Мокбастер"].link = "movies_mockbuster_rus.html";
	wholeMenu["Мокбастер"].html = 'Мокбастер';

	wholeMenu["● Супергеройские"] = [];
	wholeMenu["● Супергеройские"].id = "8_5";
	wholeMenu["● Супергеройские"].color = "black";
	wholeMenu["● Супергеройские"].hasSub = 1;
	wholeMenu["● Супергеройские"].link = "";
	wholeMenu["● Супергеройские"].html = '&#9679; Супергеройские';

	wholeMenu["Расширенная Вселенная DC'"] = [];
	wholeMenu["Расширенная Вселенная DC'"].id = "8_5_1";
	wholeMenu["Расширенная Вселенная DC'"].color = "black";
	wholeMenu["Расширенная Вселенная DC'"].hasSub = 0;
	wholeMenu["Расширенная Вселенная DC'"].link = "movies_superhero_dc_rus.html";
	wholeMenu["Расширенная Вселенная DC'"].html = 'Расширенная Вселенная DC';

	wholeMenu["Кинематографическая Вселенная Marvel"] = [];
	wholeMenu["Кинематографическая Вселенная Marvel"].id = "8_5_2";
	wholeMenu["Кинематографическая Вселенная Marvel"].color = "black";
	wholeMenu["Кинематографическая Вселенная Marvel"].hasSub = 0;
	wholeMenu["Кинематографическая Вселенная Marvel"].link = "movies_superhero_marvel_rus.html";
	wholeMenu["Кинематографическая Вселенная Marvel"].html = 'Кинематогр. Вселенная Marvel';

	wholeMenu["Другие"] = [];
	wholeMenu["Другие"].id = "8_5_3";
	wholeMenu["Другие"].color = "black";
	wholeMenu["Другие"].hasSub = 0;
	wholeMenu["Другие"].link = "movies_superhero_other_rus.html";
	wholeMenu["Другие"].html = 'Другие';


	wholeMenu["Не Сатанинские"] = [];
	wholeMenu["Не Сатанинские"].id = "8_6";
	wholeMenu["Не Сатанинские"].color = "black";
	wholeMenu["Не Сатанинские"].hasSub = 0;
	wholeMenu["Не Сатанинские"].link = "movies_not_satanic_rus.html";
	wholeMenu["Не Сатанинские"].html = 'Не Сатанинские';


}

return wholeMenu;
}




function  loadMenuSeries(lang) {


var wholeMenu = [];

if (lang=="eng") {

	wholeMenu["Series"] = [];
	wholeMenu["Series"].id = "27";
	wholeMenu["Series"].color = "black";
	wholeMenu["Series"].hasSub = 1;
	wholeMenu["Series"].link = "";
	wholeMenu["Series"].html = 'Series';


	wholeMenu["Animation"] = [];
	wholeMenu["Animation"].id = "27_1";
	wholeMenu["Animation"].color = "black";
	wholeMenu["Animation"].hasSub = 0;
	wholeMenu["Animation"].link = "series_animation_eng.html";
	wholeMenu["Animation"].html = 'Animation';

	wholeMenu["Superhero"] = [];
	wholeMenu["Superhero"].id = "27_2";
	wholeMenu["Superhero"].color = "black";
	wholeMenu["Superhero"].hasSub = 0;
	wholeMenu["Superhero"].link = "series_superhero_eng.html";
	wholeMenu["Superhero"].html = 'Superhero';

	wholeMenu["Other"] = [];
	wholeMenu["Other"].id = "27_3";
	wholeMenu["Other"].color = "black";
	wholeMenu["Other"].hasSub = 0;
	wholeMenu["Other"].link = "series_other_eng.html";
	wholeMenu["Other"].html = 'Other';

	wholeMenu["Not Satanic"] = [];
	wholeMenu["Not Satanic"].id = "27_4";
	wholeMenu["Not Satanic"].color = "black";
	wholeMenu["Not Satanic"].hasSub = 0;
	wholeMenu["Not Satanic"].link = "series_not_satanic_eng.html";
	wholeMenu["Not Satanic"].html = 'Not Satanic';

}

if (lang=="rus") {

	wholeMenu["Сериалы"] = [];
	wholeMenu["Сериалы"].id = "27";
	wholeMenu["Сериалы"].color = "black";
	wholeMenu["Сериалы"].hasSub = 1;
	wholeMenu["Сериалы"].link = "";
	wholeMenu["Сериалы"].html = 'Сериалы';

	wholeMenu["Мультипликация"] = [];
	wholeMenu["Мультипликация"].id = "27_1";
	wholeMenu["Мультипликация"].color = "black";
	wholeMenu["Мультипликация"].hasSub = 0;
	wholeMenu["Мультипликация"].link = "series_animation_rus.html";
	wholeMenu["Мультипликация"].html = 'Мультипликация';

	wholeMenu["Супергеройские"] = [];
	wholeMenu["Супергеройские"].id = "27_2";
	wholeMenu["Супергеройские"].color = "black";
	wholeMenu["Супергеройские"].hasSub = 0;
	wholeMenu["Супергеройские"].link = "series_superhero_rus.html";
	wholeMenu["Супергеройские"].html = 'Супергеройские';

	wholeMenu["Другие"] = [];
	wholeMenu["Другие"].id = "27_3";
	wholeMenu["Другие"].color = "black";
	wholeMenu["Другие"].hasSub = 0;
	wholeMenu["Другие"].link = "series_other_rus.html";
	wholeMenu["Другие"].html = 'Другие';

	wholeMenu["Не Сатанинские"] = [];
	wholeMenu["Не Сатанинские"].id = "27_4";
	wholeMenu["Не Сатанинские"].color = "black";
	wholeMenu["Не Сатанинские"].hasSub = 0;
	wholeMenu["Не Сатанинские"].link = "series_not_satanic_rus.html";
	wholeMenu["Не Сатанинские"].html = 'Не Сатанинские';
}

return wholeMenu;
}

function  loadMenuGames(lang) {


var wholeMenu = [];

if (lang=="eng") {

	wholeMenu["Games"] = [];
	wholeMenu["Games"].id = "9";
	wholeMenu["Games"].color = "black";
	wholeMenu["Games"].hasSub = 1;
	wholeMenu["Games"].link = "";
	wholeMenu["Games"].html = 'Games';


	wholeMenu["Action-Adventure"] = [];
	wholeMenu["Action-Adventure"].id = "9_1";
	wholeMenu["Action-Adventure"].color = "black";
	wholeMenu["Action-Adventure"].hasSub = 0;
	wholeMenu["Action-Adventure"].link = "games_action_adventure_eng.html";
	wholeMenu["Action-Adventure"].html = 'Action-Adventure';

	wholeMenu["Card"] = [];
	wholeMenu["Card"].id = "9_2";
	wholeMenu["Card"].color = "black";
	wholeMenu["Card"].hasSub = 0;
	wholeMenu["Card"].link = "games_card_eng.html";
	wholeMenu["Card"].html = 'Card';

	wholeMenu["Puzzle"] = [];
	wholeMenu["Puzzle"].id = "9_3";
	wholeMenu["Puzzle"].color = "black";
	wholeMenu["Puzzle"].hasSub = 0;
	wholeMenu["Puzzle"].link = "games_puzzle_eng.html";
	wholeMenu["Puzzle"].html = 'Puzzle';

	wholeMenu["Racing"] = [];
	wholeMenu["Racing"].id = "9_4";
	wholeMenu["Racing"].color = "black";
	wholeMenu["Racing"].hasSub = 0;
	wholeMenu["Racing"].link = "games_racing_eng.html";
	wholeMenu["Racing"].html = 'Racing';


	wholeMenu["● Role-Playing (RPG)"] = [];
	wholeMenu["● Role-Playing (RPG)"].id = "9_5";
	wholeMenu["● Role-Playing (RPG)"].color = "black";
	wholeMenu["● Role-Playing (RPG)"].hasSub = 1;
	wholeMenu["● Role-Playing (RPG)"].link = "";
	wholeMenu["● Role-Playing (RPG)"].html = '&#9679; Role-Playing (RPG)';

	wholeMenu["Action-"] = [];
	wholeMenu["Action-"].id = "9_5_1";
	wholeMenu["Action-"].color = "black";
	wholeMenu["Action-"].hasSub = 0;
	wholeMenu["Action-"].link = "games_rpg_action_eng.html";
	wholeMenu["Action-"].html = 'Action-';

	wholeMenu["Breakout-"] = [];
	wholeMenu["Breakout-"].id = "9_5_2";
	wholeMenu["Breakout-"].color = "black";
	wholeMenu["Breakout-"].hasSub = 0;
	wholeMenu["Breakout-"].link = "games_rpg_breakout_eng.html";
	wholeMenu["Breakout-"].html = 'Breakout-';

	wholeMenu["MMORPG"] = [];
	wholeMenu["MMORPG"].id = "9_5_3";
	wholeMenu["MMORPG"].color = "black";
	wholeMenu["MMORPG"].hasSub = 0;
	wholeMenu["MMORPG"].link = "games_rpg_mmorpg_eng.html";
	wholeMenu["MMORPG"].html = 'MMORPG';

	wholeMenu["RPG"] = [];
	wholeMenu["RPG"].id = "9_5_4";
	wholeMenu["RPG"].color = "black";
	wholeMenu["RPG"].hasSub = 0;
	wholeMenu["RPG"].link = "games_rpg_eng.html";
	wholeMenu["RPG"].html = 'RPG';

	wholeMenu["● Simulation"] = [];
	wholeMenu["● Simulation"].id = "9_6";
	wholeMenu["● Simulation"].color = "black";
	wholeMenu["● Simulation"].hasSub = 1;
	wholeMenu["● Simulation"].link = "";
	wholeMenu["● Simulation"].html = '&#9679; Simulation';

	wholeMenu["Business"] = [];
	wholeMenu["Business"].id = "9_6_1";
	wholeMenu["Business"].color = "black";
	wholeMenu["Business"].hasSub = 0;
	wholeMenu["Business"].link = "games_simulation_business_eng.html";
	wholeMenu["Business"].html = 'Business';

	wholeMenu["Simulation"] = [];
	wholeMenu["Simulation"].id = "9_6_2";
	wholeMenu["Simulation"].color = "black";
	wholeMenu["Simulation"].hasSub = 0;
	wholeMenu["Simulation"].link = "games_simulation_eng.html";
	wholeMenu["Simulation"].html = 'Simulation';

	wholeMenu["Space Flight"] = [];
	wholeMenu["Space Flight"].id = "9_6_3";
	wholeMenu["Space Flight"].color = "black";
	wholeMenu["Space Flight"].hasSub = 0;
	wholeMenu["Space Flight"].link = "games_simulation_space_flight_eng.html";
	wholeMenu["Space Flight"].html = 'Space Flight';

	wholeMenu["● Strategy"] = [];
	wholeMenu["● Strategy"].id = "9_7";
	wholeMenu["● Strategy"].color = "black";
	wholeMenu["● Strategy"].hasSub = 1;
	wholeMenu["● Strategy"].link = "";
	wholeMenu["● Strategy"].html = '&#9679; Strategy';

	wholeMenu["Real-Time"] = [];
	wholeMenu["Real-Time"].id = "9_7_1";
	wholeMenu["Real-Time"].color = "black";
	wholeMenu["Real-Time"].hasSub = 0;
	wholeMenu["Real-Time"].link = "games_strategy_real_time_eng.html";
	wholeMenu["Real-Time"].html = 'Real-Time';

	wholeMenu["Tower Defense"] = [];
	wholeMenu["Tower Defense"].id = "9_7_2";
	wholeMenu["Tower Defense"].color = "black";
	wholeMenu["Tower Defense"].hasSub = 0;
	wholeMenu["Tower Defense"].link = "games_strategy_tower_defense_eng.html";
	wholeMenu["Tower Defense"].html = 'Tower Defense';

	wholeMenu["Turn-Based"] = [];
	wholeMenu["Turn-Based"].id = "9_7_3";
	wholeMenu["Turn-Based"].color = "black";
	wholeMenu["Turn-Based"].hasSub = 0;
	wholeMenu["Turn-Based"].link = "games_strategy_turn_based_eng.html";
	wholeMenu["Turn-Based"].html = 'Turn-Based';

	wholeMenu["Not Video"] = [];
	wholeMenu["Not Video"].id = "9_8";
	wholeMenu["Not Video"].color = "black";
	wholeMenu["Not Video"].hasSub = 0;
	wholeMenu["Not Video"].link = "games_not_video_eng.html";
	wholeMenu["Not Video"].html = 'Not Video';
}


if (lang=="rus") {
	wholeMenu["Игры"] = [];
	wholeMenu["Игры"].id = "9";
	wholeMenu["Игры"].color = "black";
	wholeMenu["Игры"].hasSub = 1;
	wholeMenu["Игры"].link = "";
	wholeMenu["Игры"].html = 'Игры';

	wholeMenu["Action-Adventure"] = [];
	wholeMenu["Action-Adventure"].id = "9_1";
	wholeMenu["Action-Adventure"].color = "black";
	wholeMenu["Action-Adventure"].hasSub = 0;
	wholeMenu["Action-Adventure"].link = "games_action_adventure_rus.html";
	wholeMenu["Action-Adventure"].html = 'Action-Adventure';

	wholeMenu["Карточные"] = [];
	wholeMenu["Карточные"].id = "9_2";
	wholeMenu["Карточные"].color = "black";
	wholeMenu["Карточные"].hasSub = 0;
	wholeMenu["Карточные"].link = "games_card_rus.html";
	wholeMenu["Карточные"].html = 'Карточные';

	wholeMenu["Головоломка"] = [];
	wholeMenu["Головоломка"].id = "9_3";
	wholeMenu["Головоломка"].color = "black";
	wholeMenu["Головоломка"].hasSub = 0;
	wholeMenu["Головоломка"].link = "games_puzzle_rus.html";
	wholeMenu["Головоломка"].html = 'Головоломка';

	wholeMenu["Автосимулятор"] = [];
	wholeMenu["Автосимулятор"].id = "9_4";
	wholeMenu["Автосимулятор"].color = "black";
	wholeMenu["Автосимулятор"].hasSub = 0;
	wholeMenu["Автосимулятор"].link = "games_racing_rus.html";
	wholeMenu["Автосимулятор"].html = 'Автосимулятор';


	wholeMenu["● Ролевая Игра (РПГ)"] = [];
	wholeMenu["● Ролевая Игра (РПГ)"].id = "9_5";
	wholeMenu["● Ролевая Игра (РПГ)"].color = "black";
	wholeMenu["● Ролевая Игра (РПГ)"].hasSub = 1;
	wholeMenu["● Ролевая Игра (РПГ)"].link = "";
	wholeMenu["● Ролевая Игра (РПГ)"].html = '&#9679; Ролевая Игра (РПГ)';

	wholeMenu["Action-"] = [];
	wholeMenu["Action-"].id = "9_5_1";
	wholeMenu["Action-"].color = "black";
	wholeMenu["Action-"].hasSub = 0;
	wholeMenu["Action-"].link = "games_rpg_action_rus.html";
	wholeMenu["Action-"].html = 'Action-';

	wholeMenu["Breakout-"] = [];
	wholeMenu["Breakout-"].id = "9_5_2";
	wholeMenu["Breakout-"].color = "black";
	wholeMenu["Breakout-"].hasSub = 0;
	wholeMenu["Breakout-"].link = "games_rpg_breakout_rus.html";
	wholeMenu["Breakout-"].html = 'Breakout-';

	wholeMenu["ММОРПГ"] = [];
	wholeMenu["ММОРПГ"].id = "9_5_3";
	wholeMenu["ММОРПГ"].color = "black";
	wholeMenu["ММОРПГ"].hasSub = 0;
	wholeMenu["ММОРПГ"].link = "games_rpg_mmorpg_rus.html";
	wholeMenu["ММОРПГ"].html = 'ММОРПГ';

	wholeMenu["РПГ"] = [];
	wholeMenu["РПГ"].id = "9_5_4";
	wholeMenu["РПГ"].color = "black";
	wholeMenu["РПГ"].hasSub = 0;
	wholeMenu["РПГ"].link = "games_rpg_rus.html";
	wholeMenu["РПГ"].html = 'РПГ';

	wholeMenu["● Симулятор"] = [];
	wholeMenu["● Симулятор"].id = "9_6";
	wholeMenu["● Симулятор"].color = "black";
	wholeMenu["● Симулятор"].hasSub = 1;
	wholeMenu["● Симулятор"].link = "";
	wholeMenu["● Симулятор"].html = '&#9679; Симулятор';

	wholeMenu["Экономический"] = [];
	wholeMenu["Экономический"].id = "9_6_1";
	wholeMenu["Экономический"].color = "black";
	wholeMenu["Экономический"].hasSub = 0;
	wholeMenu["Экономический"].link = "games_simulation_business_rus.html";
	wholeMenu["Экономический"].html = 'Экономический';

	wholeMenu["Симулятор"] = [];
	wholeMenu["Симулятор"].id = "9_6_2";
	wholeMenu["Симулятор"].color = "black";
	wholeMenu["Симулятор"].hasSub = 0;
	wholeMenu["Симулятор"].link = "games_simulation_rus.html";
	wholeMenu["Симулятор"].html = 'Симулятор';

	wholeMenu["Космический"] = [];
	wholeMenu["Космический"].id = "9_6_3";
	wholeMenu["Космический"].color = "black";
	wholeMenu["Космический"].hasSub = 0;
	wholeMenu["Космический"].link = "games_simulation_space_flight_rus.html";
	wholeMenu["Космический"].html = 'Космический';

	wholeMenu["● Стратегия"] = [];
	wholeMenu["● Стратегия"].id = "9_7";
	wholeMenu["● Стратегия"].color = "black";
	wholeMenu["● Стратегия"].hasSub = 1;
	wholeMenu["● Стратегия"].link = "";
	wholeMenu["● Стратегия"].html = '&#9679; Стратегия';

	wholeMenu["В реальном времени"] = [];
	wholeMenu["В реальном времени"].id = "9_7_1";
	wholeMenu["В реальном времени"].color = "black";
	wholeMenu["В реальном времени"].hasSub = 0;
	wholeMenu["В реальном времени"].link = "games_strategy_real_time_rus.html";
	wholeMenu["В реальном времени"].html = 'В реальном времени';

	wholeMenu["Tower Defense"] = [];
	wholeMenu["Tower Defense"].id = "9_7_2";
	wholeMenu["Tower Defense"].color = "black";
	wholeMenu["Tower Defense"].hasSub = 0;
	wholeMenu["Tower Defense"].link = "games_strategy_tower_defense_rus.html";
	wholeMenu["Tower Defense"].html = 'Tower Defense';

	wholeMenu["Пошаговая"] = [];
	wholeMenu["Пошаговая"].id = "9_7_3";
	wholeMenu["Пошаговая"].color = "black";
	wholeMenu["Пошаговая"].hasSub = 0;
	wholeMenu["Пошаговая"].link = "games_strategy_turn_based_rus.html";
	wholeMenu["Пошаговая"].html = 'Пошаговая';

	wholeMenu["Не Видео"] = [];
	wholeMenu["Не Видео"].id = "9_8";
	wholeMenu["Не Видео"].color = "black";
	wholeMenu["Не Видео"].hasSub = 0;
	wholeMenu["Не Видео"].link = "games_not_video_rus.html";
	wholeMenu["Не Видео"].html = 'Не Видео';

}

return wholeMenu;
}



function  loadMenuBooks(lang) {



var wholeMenu = [];

if (lang=="eng") {

	wholeMenu["Books"] = [];
	wholeMenu["Books"].id = "10";
	wholeMenu["Books"].color = "red";
	wholeMenu["Books"].hasSub = 1;
	wholeMenu["Books"].link = "";
	wholeMenu["Books"].html = 'Books';

	wholeMenu["● France"] = [];
	wholeMenu["● France"].id = "10_1";
	wholeMenu["● France"].color = "red";
	wholeMenu["● France"].hasSub = 1;
	wholeMenu["● France"].link = "";
	wholeMenu["● France"].html = '&#9679; France';

	wholeMenu["Francis Carsac"] = [];
	wholeMenu["Francis Carsac"].id = "10_1_1";
	wholeMenu["Francis Carsac"].color = "red";
	wholeMenu["Francis Carsac"].hasSub = 0;
	wholeMenu["Francis Carsac"].link = "books_carsac_eng.html";
	wholeMenu["Francis Carsac"].html = 'Francis Carsac';

	wholeMenu["● Russia"] = [];
	wholeMenu["● Russia"].id = "10_2";
	wholeMenu["● Russia"].color = "red";
	wholeMenu["● Russia"].hasSub = 1;
	wholeMenu["● Russia"].link = "";
	wholeMenu["● Russia"].html = '&#9679; Russia';

	wholeMenu["Maks Fraj"] = [];
	wholeMenu["Maks Fraj"].id = "10_2_1";
	wholeMenu["Maks Fraj"].color = "red";
	wholeMenu["Maks Fraj"].hasSub = 0;
	wholeMenu["Maks Fraj"].link = "books_fraj_eng.html";
	wholeMenu["Maks Fraj"].html = 'Maks Fraj';

	wholeMenu["Andrei Livadnyj"] = [];
	wholeMenu["Andrei Livadnyj"].id = "10_2_2";
	wholeMenu["Andrei Livadnyj"].color = "red";
	wholeMenu["Andrei Livadnyj"].hasSub = 0;
	wholeMenu["Andrei Livadnyj"].link = "books_livadnyj_eng.html";
	wholeMenu["Andrei Livadnyj"].html = 'Andrei Livadnyj';

	wholeMenu["Sergei Lukjanenko"] = [];
	wholeMenu["Sergei Lukjanenko"].id = "10_2_3";
	wholeMenu["Sergei Lukjanenko"].color = "red";
	wholeMenu["Sergei Lukjanenko"].hasSub = 0;
	wholeMenu["Sergei Lukjanenko"].link = "books_lukjanenko_eng.html";
	wholeMenu["Sergei Lukjanenko"].html = 'Sergei Lukjanenko';

	wholeMenu["Sergei Tarmashev"] = [];
	wholeMenu["Sergei Tarmashev"].id = "10_2_4";
	wholeMenu["Sergei Tarmashev"].color = "red";
	wholeMenu["Sergei Tarmashev"].hasSub = 0;
	wholeMenu["Sergei Tarmashev"].link = "books_tarmashev_eng.html";
	wholeMenu["Sergei Tarmashev"].html = 'Sergei Tarmashev';

	wholeMenu["● USSR"] = [];
	wholeMenu["● USSR"].id = "10_3";
	wholeMenu["● USSR"].color = "red";
	wholeMenu["● USSR"].hasSub = 1;
	wholeMenu["● USSR"].link = "";
	wholeMenu["● USSR"].html = '&#9679; USSR';

	wholeMenu["Kir Bulychev"] = [];
	wholeMenu["Kir Bulychev"].id = "10_3_1";
	wholeMenu["Kir Bulychev"].color = "red";
	wholeMenu["Kir Bulychev"].hasSub = 0;
	wholeMenu["Kir Bulychev"].link = "books_bulychev_eng.html";
	wholeMenu["Kir Bulychev"].html = 'Kir Bulychev';

	wholeMenu["Alexander Grin"] = [];
	wholeMenu["Alexander Grin"].id = "10_3_2";
	wholeMenu["Alexander Grin"].color = "red";
	wholeMenu["Alexander Grin"].hasSub = 0;
	wholeMenu["Alexander Grin"].link = "books_grin_eng.html";
	wholeMenu["Alexander Grin"].html = 'Alexander Grin';

	wholeMenu["Alexander Kazantsev"] = [];
	wholeMenu["Alexander Kazantsev"].id = "10_3_3";
	wholeMenu["Alexander Kazantsev"].color = "red";
	wholeMenu["Alexander Kazantsev"].hasSub = 0;
	wholeMenu["Alexander Kazantsev"].link = "books_kazancev_eng.html";
	wholeMenu["Alexander Kazantsev"].html = 'Alexander Kazantsev';

	wholeMenu["Sergey Pavlov"] = [];
	wholeMenu["Sergey Pavlov"].id = "10_3_4";
	wholeMenu["Sergey Pavlov"].color = "red";
	wholeMenu["Sergey Pavlov"].hasSub = 0;
	wholeMenu["Sergey Pavlov"].link = "books_pavlov_eng.html";
	wholeMenu["Sergey Pavlov"].html = 'Sergey Pavlov';

	wholeMenu["Ivan Yefremov"] = [];
	wholeMenu["Ivan Yefremov"].id = "10_3_4";
	wholeMenu["Ivan Yefremov"].color = "red";
	wholeMenu["Ivan Yefremov"].hasSub = 0;
	wholeMenu["Ivan Yefremov"].link = "books_yefremov_eng.html";
	wholeMenu["Ivan Yefremov"].html = 'Ivan Yefremov';

	wholeMenu["● United Kingdom"] = [];
	wholeMenu["● United Kingdom"].id = "10_4";
	wholeMenu["● United Kingdom"].color = "red";
	wholeMenu["● United Kingdom"].hasSub = 1;
	wholeMenu["● United Kingdom"].link = "";
	wholeMenu["● United Kingdom"].html = '&#9679; United Kingdom';

	wholeMenu["Sir Arthur Charles Clarke"] = [];
	wholeMenu["Sir Arthur Charles Clarke"].id = "10_4_1";
	wholeMenu["Sir Arthur Charles Clarke"].color = "red";
	wholeMenu["Sir Arthur Charles Clarke"].hasSub = 0;
	wholeMenu["Sir Arthur Charles Clarke"].link = "books_clarke_eng.html";
	wholeMenu["Sir Arthur Charles Clarke"].html = 'Sir Arthur Charles Clarke';

	wholeMenu["Herbert George Wells"] = [];
	wholeMenu["Herbert George Wells"].id = "10_4_2";
	wholeMenu["Herbert George Wells"].color = "red";
	wholeMenu["Herbert George Wells"].hasSub = 0;
	wholeMenu["Herbert George Wells"].link = "books_wells_eng.html";
	wholeMenu["Herbert George Wells"].html = 'Herbert George Wells';

	wholeMenu["John Wyndham"] = [];
	wholeMenu["John Wyndham"].id = "10_4_3";
	wholeMenu["John Wyndham"].color = "red";
	wholeMenu["John Wyndham"].hasSub = 0;
	wholeMenu["John Wyndham"].link = "books_wyndham_eng.html";
	wholeMenu["John Wyndham"].html = 'John Wyndham';

	wholeMenu["● United States of America"] = [];
	wholeMenu["● United States of America"].id = "10_5";
	wholeMenu["● United States of America"].color = "red";
	wholeMenu["● United States of America"].hasSub = 1;
	wholeMenu["● United States of America"].link = "";
	wholeMenu["● United States of America"].html = '&#9679; United States of America';

	wholeMenu["Poul William Anderson"] = [];
	wholeMenu["Poul William Anderson"].id = "10_5_1";
	wholeMenu["Poul William Anderson"].color = "red";
	wholeMenu["Poul William Anderson"].hasSub = 0;
	wholeMenu["Poul William Anderson"].link = "books_anderson_eng.html";
	wholeMenu["Poul William Anderson"].html = 'Poul William Anderson';

	wholeMenu["Isaac Asimov"] = [];
	wholeMenu["Isaac Asimov"].id = "10_5_2";
	wholeMenu["Isaac Asimov"].color = "red";
	wholeMenu["Isaac Asimov"].hasSub = 0;
	wholeMenu["Isaac Asimov"].link = "books_azimov_eng.html";
	wholeMenu["Isaac Asimov"].html = 'Isaac Asimov';

	wholeMenu["Robert Anson Heinlein"] = [];
	wholeMenu["Robert Anson Heinlein"].id = "10_5_3";
	wholeMenu["Robert Anson Heinlein"].color = "red";
	wholeMenu["Robert Anson Heinlein"].hasSub = 0;
	wholeMenu["Robert Anson Heinlein"].link = "books_heinlein_eng.html";
	wholeMenu["Robert Anson Heinlein"].html = 'Robert Anson Heinlein';

	wholeMenu["Daniel Keyes"] = [];
	wholeMenu["Daniel Keyes"].id = "10_5_4";
	wholeMenu["Daniel Keyes"].color = "red";
	wholeMenu["Daniel Keyes"].hasSub = 0;
	wholeMenu["Daniel Keyes"].link = "books_keyes_eng.html";
	wholeMenu["Daniel Keyes"].html = 'Daniel Keyes';

	wholeMenu["Jack London"] = [];
	wholeMenu["Jack London"].id = "10_5_5";
	wholeMenu["Jack London"].color = "red";
	wholeMenu["Jack London"].hasSub = 0;
	wholeMenu["Jack London"].link = "books_london_eng.html";
	wholeMenu["Jack London"].html = 'Jack London';

	wholeMenu["Robert Sheckley"] = [];
	wholeMenu["Robert Sheckley"].id = "10_5_6";
	wholeMenu["Robert Sheckley"].color = "red";
	wholeMenu["Robert Sheckley"].hasSub = 0;
	wholeMenu["Robert Sheckley"].link = "books_sheckley_eng.html";
	wholeMenu["Robert Sheckley"].html = 'Robert Sheckley';

	wholeMenu["Clifford Donald Simak"] = [];
	wholeMenu["Clifford Donald Simak"].id = "10_5_7";
	wholeMenu["Clifford Donald Simak"].color = "red";
	wholeMenu["Clifford Donald Simak"].hasSub = 0;
	wholeMenu["Clifford Donald Simak"].link = "books_simak_eng.html";
	wholeMenu["Clifford Donald Simak"].html = 'Clifford Donald Simak';
}


if (lang=="rus") {

	wholeMenu["Книги"] = [];
	wholeMenu["Книги"].id = "10";
	wholeMenu["Книги"].color = "red";
	wholeMenu["Книги"].hasSub = 1;
	wholeMenu["Книги"].link = "";
	wholeMenu["Книги"].html = 'Книги';

	wholeMenu["● Франция"] = [];
	wholeMenu["● Франция"].id = "10_1";
	wholeMenu["● Франция"].color = "red";
	wholeMenu["● Франция"].hasSub = 1;
	wholeMenu["● Франция"].link = "";
	wholeMenu["● Франция"].html = '&#9679; Франция';

	wholeMenu["Франсис Карсак"] = [];
	wholeMenu["Франсис Карсак"].id = "10_1_1";
	wholeMenu["Франсис Карсак"].color = "red";
	wholeMenu["Франсис Карсак"].hasSub = 0;
	wholeMenu["Франсис Карсак"].link = "books_carsac_rus.html";
	wholeMenu["Франсис Карсак"].html = 'Франсис Карсак';

	wholeMenu["● Россия"] = [];
	wholeMenu["● Россия"].id = "10_2";
	wholeMenu["● Россия"].color = "red";
	wholeMenu["● Россия"].hasSub = 1;
	wholeMenu["● Россия"].link = "";
	wholeMenu["● Россия"].html = '&#9679; Россия';

	wholeMenu["Макс Фрай"] = [];
	wholeMenu["Макс Фрай"].id = "10_2_1";
	wholeMenu["Макс Фрай"].color = "red";
	wholeMenu["Макс Фрай"].hasSub = 0;
	wholeMenu["Макс Фрай"].link = "books_fraj_rus.html";
	wholeMenu["Макс Фрай"].html = 'Макс Фрай';

	wholeMenu["Андрей Ливадный"] = [];
	wholeMenu["Андрей Ливадный"].id = "10_2_2";
	wholeMenu["Андрей Ливадный"].color = "red";
	wholeMenu["Андрей Ливадный"].hasSub = 0;
	wholeMenu["Андрей Ливадный"].link = "books_livadnyj_rus.html";
	wholeMenu["Андрей Ливадный"].html = 'Андрей Ливадный';

	wholeMenu["Сергей Лукьяненко"] = [];
	wholeMenu["Сергей Лукьяненко"].id = "10_2_3";
	wholeMenu["Сергей Лукьяненко"].color = "red";
	wholeMenu["Сергей Лукьяненко"].hasSub = 0;
	wholeMenu["Сергей Лукьяненко"].link = "books_lukjanenko_rus.html";
	wholeMenu["Сергей Лукьяненко"].html = 'Сергей Лукьяненко';

	wholeMenu["Сергей Тармашев"] = [];
	wholeMenu["Сергей Тармашев"].id = "10_2_4";
	wholeMenu["Сергей Тармашев"].color = "red";
	wholeMenu["Сергей Тармашев"].hasSub = 0;
	wholeMenu["Сергей Тармашев"].link = "books_tarmashev_rus.html";
	wholeMenu["Сергей Тармашев"].html = 'Сергей Тармашев';

	wholeMenu["● СССР"] = [];
	wholeMenu["● СССР"].id = "10_3";
	wholeMenu["● СССР"].color = "red";
	wholeMenu["● СССР"].hasSub = 1;
	wholeMenu["● СССР"].link = "";
	wholeMenu["● СССР"].html = '&#9679; СССР';

	wholeMenu["Кир Булычёв"] = [];
	wholeMenu["Кир Булычёв"].id = "10_3_1";
	wholeMenu["Кир Булычёв"].color = "red";
	wholeMenu["Кир Булычёв"].hasSub = 0;
	wholeMenu["Кир Булычёв"].link = "books_bulychev_rus.html";
	wholeMenu["Кир Булычёв"].html = 'Кир Булычёв';

	wholeMenu["Александр Грин"] = [];
	wholeMenu["Александр Грин"].id = "10_3_2";
	wholeMenu["Александр Грин"].color = "red";
	wholeMenu["Александр Грин"].hasSub = 0;
	wholeMenu["Александр Грин"].link = "books_grin_rus.html";
	wholeMenu["Александр Грин"].html = 'Александр Грин';

	wholeMenu["Александр Казанцев"] = [];
	wholeMenu["Александр Казанцев"].id = "10_3_3";
	wholeMenu["Александр Казанцев"].color = "red";
	wholeMenu["Александр Казанцев"].hasSub = 0;
	wholeMenu["Александр Казанцев"].link = "books_kazancev_rus.html";
	wholeMenu["Александр Казанцев"].html = 'Александр Казанцев';

	wholeMenu["Сергей Павлов"] = [];
	wholeMenu["Сергей Павлов"].id = "10_3_4";
	wholeMenu["Сергей Павлов"].color = "red";
	wholeMenu["Сергей Павлов"].hasSub = 0;
	wholeMenu["Сергей Павлов"].link = "books_pavlov_rus.html";
	wholeMenu["Сергей Павлов"].html = 'Сергей Павлов';

	wholeMenu["Иван Ефремов"] = [];
	wholeMenu["Иван Ефремов"].id = "10_3_4";
	wholeMenu["Иван Ефремов"].color = "red";
	wholeMenu["Иван Ефремов"].hasSub = 0;
	wholeMenu["Иван Ефремов"].link = "books_yefremov_rus.html";
	wholeMenu["Иван Ефремов"].html = 'Иван Ефремов';

	wholeMenu["● Великобритания"] = [];
	wholeMenu["● Великобритания"].id = "10_4";
	wholeMenu["● Великобритания"].color = "red";
	wholeMenu["● Великобритания"].hasSub = 1;
	wholeMenu["● Великобритания"].link = "";
	wholeMenu["● Великобритания"].html = '&#9679; Великобритания';

	wholeMenu["Сэр Артур Чарльз Кларк"] = [];
	wholeMenu["Сэр Артур Чарльз Кларк"].id = "10_4_1";
	wholeMenu["Сэр Артур Чарльз Кларк"].color = "red";
	wholeMenu["Сэр Артур Чарльз Кларк"].hasSub = 0;
	wholeMenu["Сэр Артур Чарльз Кларк"].link = "books_clarke_rus.html";
	wholeMenu["Сэр Артур Чарльз Кларк"].html = 'Сэр Артур Чарльз Кларк';

	wholeMenu["Герберт Уэллс"] = [];
	wholeMenu["Герберт Уэллс"].id = "10_4_2";
	wholeMenu["Герберт Уэллс"].color = "red";
	wholeMenu["Герберт Уэллс"].hasSub = 0;
	wholeMenu["Герберт Уэллс"].link = "books_wells_rus.html";
	wholeMenu["Герберт Уэллс"].html = 'Герберт Уэллс';

	wholeMenu["Джон Уиндем"] = [];
	wholeMenu["Джон Уиндем"].id = "10_4_3";
	wholeMenu["Джон Уиндем"].color = "red";
	wholeMenu["Джон Уиндем"].hasSub = 0;
	wholeMenu["Джон Уиндем"].link = "books_wyndham_rus.html";
	wholeMenu["Джон Уиндем"].html = 'Джон Уиндем';

	wholeMenu["● Соединённые Штаты Америки"] = [];
	wholeMenu["● Соединённые Штаты Америки"].id = "10_5";
	wholeMenu["● Соединённые Штаты Америки"].color = "red";
	wholeMenu["● Соединённые Штаты Америки"].hasSub = 1;
	wholeMenu["● Соединённые Штаты Америки"].link = "";
	wholeMenu["● Соединённые Штаты Америки"].html = '&#9679; Соединённые Штаты Америки';

	wholeMenu["Пол Уильям Андерсон"] = [];
	wholeMenu["Пол Уильям Андерсон"].id = "10_5_1";
	wholeMenu["Пол Уильям Андерсон"].color = "red";
	wholeMenu["Пол Уильям Андерсон"].hasSub = 0;
	wholeMenu["Пол Уильям Андерсон"].link = "books_anderson_rus.html";
	wholeMenu["Пол Уильям Андерсон"].html = 'Пол Уильям Андерсон';

	wholeMenu["Айзек Азимов"] = [];
	wholeMenu["Айзек Азимов"].id = "10_5_2";
	wholeMenu["Айзек Азимов"].color = "red";
	wholeMenu["Айзек Азимов"].hasSub = 0;
	wholeMenu["Айзек Азимов"].link = "books_azimov_rus.html";
	wholeMenu["Айзек Азимов"].html = 'Айзек Азимов';

	wholeMenu["Роберт Хайнлайн"] = [];
	wholeMenu["Роберт Хайнлайн"].id = "10_5_3";
	wholeMenu["Роберт Хайнлайн"].color = "red";
	wholeMenu["Роберт Хайнлайн"].hasSub = 0;
	wholeMenu["Роберт Хайнлайн"].link = "books_heinlein_rus.html";
	wholeMenu["Роберт Хайнлайн"].html = 'Роберт Хайнлайн';

	wholeMenu["Дэниел Киз"] = [];
	wholeMenu["Дэниел Киз"].id = "10_5_4";
	wholeMenu["Дэниел Киз"].color = "red";
	wholeMenu["Дэниел Киз"].hasSub = 0;
	wholeMenu["Дэниел Киз"].link = "books_keyes_rus.html";
	wholeMenu["Дэниел Киз"].html = 'Дэниел Киз';

	wholeMenu["Джек Лондон"] = [];
	wholeMenu["Джек Лондон"].id = "10_5_5";
	wholeMenu["Джек Лондон"].color = "red";
	wholeMenu["Джек Лондон"].hasSub = 0;
	wholeMenu["Джек Лондон"].link = "books_london_rus.html";
	wholeMenu["Джек Лондон"].html = 'Джек Лондон';

	wholeMenu["Роберт Шекли"] = [];
	wholeMenu["Роберт Шекли"].id = "10_5_6";
	wholeMenu["Роберт Шекли"].color = "red";
	wholeMenu["Роберт Шекли"].hasSub = 0;
	wholeMenu["Роберт Шекли"].link = "books_sheckley_rus.html";
	wholeMenu["Роберт Шекли"].html = 'Роберт Шекли';

	wholeMenu["Клиффорд Саймак"] = [];
	wholeMenu["Клиффорд Саймак"].id = "10_5_7";
	wholeMenu["Клиффорд Саймак"].color = "red";
	wholeMenu["Клиффорд Саймак"].hasSub = 0;
	wholeMenu["Клиффорд Саймак"].link = "books_simak_rus.html";
	wholeMenu["Клиффорд Саймак"].html = 'Клиффорд Саймак';
}

return wholeMenu;
}



function  loadMenuPhotos(lang) {


var wholeMenu = [];

if (lang=="eng") {

	wholeMenu["Photos/Images"] = [];
	wholeMenu["Photos/Images"].id = "11";
	wholeMenu["Photos/Images"].color = "red";
	wholeMenu["Photos/Images"].hasSub = 1;
	wholeMenu["Photos/Images"].link = "";
	wholeMenu["Photos/Images"].html = 'Photos/Images';

	wholeMenu["● My Photos"] = [];
	wholeMenu["● My Photos"].id = "11_1";
	wholeMenu["● My Photos"].color = "red";
	wholeMenu["● My Photos"].hasSub = 1;
	wholeMenu["● My Photos"].link = "";
	wholeMenu["● My Photos"].html = '&#9679; My Photos';

	wholeMenu["Me"] = [];
	wholeMenu["Me"].id = "11_1_1";
	wholeMenu["Me"].color = "red";
	wholeMenu["Me"].hasSub = 0;
	wholeMenu["Me"].link = "fotos_me_eng.html";
	wholeMenu["Me"].html = 'Me';

	wholeMenu["Summer 2012"] = [];
	wholeMenu["Summer 2012"].id = "11_1_2";
	wholeMenu["Summer 2012"].color = "red";
	wholeMenu["Summer 2012"].hasSub = 0;
	wholeMenu["Summer 2012"].link = "fotos_summer_2012_eng.html";
	wholeMenu["Summer 2012"].html = 'Summer 2012';

	wholeMenu["Zveri (rus. Звери) 2012"] = [];
	wholeMenu["Zveri (rus. Звери) 2012"].id = "11_1_3";
	wholeMenu["Zveri (rus. Звери) 2012"].color = "red";
	wholeMenu["Zveri (rus. Звери) 2012"].hasSub = 0;
	wholeMenu["Zveri (rus. Звери) 2012"].link = "fotos_zveri_2012_eng.html";
	wholeMenu["Zveri (rus. Звери) 2012"].html = 'Zveri (rus. Звери) 2012';

	wholeMenu["● Images - Nicoletta Ceccoli"] = [];
	wholeMenu["● Images - Nicoletta Ceccoli"].id = "11_2";
	wholeMenu["● Images - Nicoletta Ceccoli"].color = "red";
	wholeMenu["● Images - Nicoletta Ceccoli"].hasSub = 1;
	wholeMenu["● Images - Nicoletta Ceccoli"].link = "";
	wholeMenu["● Images - Nicoletta Ceccoli"].html = '&#9679; Images - Nicoletta Ceccoli';

	wholeMenu["About Nicoletta Ceccoli"] = [];
	wholeMenu["About Nicoletta Ceccoli"].id = "11_2_1";
	wholeMenu["About Nicoletta Ceccoli"].color = "red";
	wholeMenu["About Nicoletta Ceccoli"].hasSub = 0;
	wholeMenu["About Nicoletta Ceccoli"].link = "fotos_images_about_ceccoli_eng.html";
	wholeMenu["About Nicoletta Ceccoli"].html = 'About Nicoletta Ceccoli';

	wholeMenu["Works"] = [];
	wholeMenu["Works"].id = "11_2_2";
	wholeMenu["Works"].color = "red";
	wholeMenu["Works"].hasSub = 0;
	wholeMenu["Works"].link = "fotos_images_ceccoli_works_eng.html";
	wholeMenu["Works"].html = 'Works';

	wholeMenu["● Images - KuKuLa"] = [];
	wholeMenu["● Images - KuKuLa"].id = "11_3";
	wholeMenu["● Images - KuKuLa"].color = "red";
	wholeMenu["● Images - KuKuLa"].hasSub = 1;
	wholeMenu["● Images - KuKuLa"].link = "";
	wholeMenu["● Images - KuKuLa"].html = '&#9679; Images - KuKuLa';

	wholeMenu["About KuKuLa"] = [];
	wholeMenu["About KuKuLa"].id = "11_3_1";
	wholeMenu["About KuKuLa"].color = "red";
	wholeMenu["About KuKuLa"].hasSub = 0;
	wholeMenu["About KuKuLa"].link = "fotos_images_about_kukula_eng.html";
	wholeMenu["About KuKuLa"].html = 'About KuKuLa';

	wholeMenu["Pop Royale"] = [];
	wholeMenu["Pop Royale"].id = "11_3_2";
	wholeMenu["Pop Royale"].color = "red";
	wholeMenu["Pop Royale"].hasSub = 0;
	wholeMenu["Pop Royale"].link = "fotos_images_kukula_pop_royale_eng.html";
	wholeMenu["Pop Royale"].html = 'Pop Royale';


	wholeMenu["The Huntington Epidemic"] = [];
	wholeMenu["The Huntington Epidemic"].id = "11_3_3";
	wholeMenu["The Huntington Epidemic"].color = "red";
	wholeMenu["The Huntington Epidemic"].hasSub = 0;
	wholeMenu["The Huntington Epidemic"].link = "fotos_images_kukula_the_huntington_epidemic_eng.html";
	wholeMenu["The Huntington Epidemic"].html = 'The Huntington Epidemic';

	wholeMenu["Haute Debutant"] = [];
	wholeMenu["Haute Debutant"].id = "11_3_4";
	wholeMenu["Haute Debutant"].color = "red";
	wholeMenu["Haute Debutant"].hasSub = 0;
	wholeMenu["Haute Debutant"].link = "fotos_images_kukula_haute_debutant_eng.html";
	wholeMenu["Haute Debutant"].html = 'Haute Debutant';

	wholeMenu["The Adventures of Rasberry Finn"] = [];
	wholeMenu["The Adventures of Rasberry Finn"].id = "11_3_5";
	wholeMenu["The Adventures of Rasberry Finn"].color = "red";
	wholeMenu["The Adventures of Rasberry Finn"].hasSub = 0;
	wholeMenu["The Adventures of Rasberry Finn"].link = "fotos_images_kukula_the_adventures_of_rasberry_finn_eng.html";
	wholeMenu["The Adventures of Rasberry Finn"].html = 'The Adventures of Rasberry Finn';

	wholeMenu["Selected Paintings"] = [];
	wholeMenu["Selected Paintings"].id = "11_3_6";
	wholeMenu["Selected Paintings"].color = "red";
	wholeMenu["Selected Paintings"].hasSub = 0;
	wholeMenu["Selected Paintings"].link = "fotos_images_kukula_selected_paintings_eng.html";
	wholeMenu["Selected Paintings"].html = 'Selected Paintings';

	wholeMenu["● Images - Mai Ja"] = [];
	wholeMenu["● Images - Mai Ja"].id = "11_4";
	wholeMenu["● Images - Mai Ja"].color = "red";
	wholeMenu["● Images - Mai Ja"].hasSub = 1;
	wholeMenu["● Images - Mai Ja"].link = "";
	wholeMenu["● Images - Mai Ja"].html = '&#9679; Images - Mai Ja';

	wholeMenu["About Mai Ja"] = [];
	wholeMenu["About Mai Ja"].id = "11_4_1";
	wholeMenu["About Mai Ja"].color = "red";
	wholeMenu["About Mai Ja"].hasSub = 0;
	wholeMenu["About Mai Ja"].link = "fotos_images_about_mai_ja_eng.html";
	wholeMenu["About Mai Ja"].html = 'About Mai Ja';

	wholeMenu["Traditional Paintings"] = [];
	wholeMenu["Traditional Paintings"].id = "11_4_2";
	wholeMenu["Traditional Paintings"].color = "red";
	wholeMenu["Traditional Paintings"].hasSub = 0;
	wholeMenu["Traditional Paintings"].link = "fotos_images_mai_ja_traditional_paintings_eng.html";
	wholeMenu["Traditional Paintings"].html = 'Traditional Paintings';

	wholeMenu["Digital Paintings"] = [];
	wholeMenu["Digital Paintings"].id = "11_4_3";
	wholeMenu["Digital Paintings"].color = "red";
	wholeMenu["Digital Paintings"].hasSub = 0;
	wholeMenu["Digital Paintings"].link = "fotos_images_mai_ja_digital_paintings_eng.html";
	wholeMenu["Digital Paintings"].html = 'Digital Paintings';

	wholeMenu["Video"] = [];
	wholeMenu["Video"].id = "11_4_4";
	wholeMenu["Video"].color = "red";
	wholeMenu["Video"].hasSub = 0;
	wholeMenu["Video"].link = "fotos_images_mai_ja_video_eng.html";
	wholeMenu["Video"].html = 'Video';

	wholeMenu["● Images - Minjae Lee"] = [];
	wholeMenu["● Images - Minjae Lee"].id = "11_5";
	wholeMenu["● Images - Minjae Lee"].color = "red";
	wholeMenu["● Images - Minjae Lee"].hasSub = 1;
	wholeMenu["● Images - Minjae Lee"].link = "";
	wholeMenu["● Images - Minjae Lee"].html = '&#9679; Images - Minjae Lee';

	wholeMenu["About Minjae Lee"] = [];
	wholeMenu["About Minjae Lee"].id = "11_5_1";
	wholeMenu["About Minjae Lee"].color = "red";
	wholeMenu["About Minjae Lee"].hasSub = 0;
	wholeMenu["About Minjae Lee"].link = "fotos_images_about_minjae_lee_eng.html";
	wholeMenu["About Minjae Lee"].html = 'About Minjae Lee';

	wholeMenu["y2007"] = [];
	wholeMenu["y2007"].id = "11_5_2";
	wholeMenu["y2007"].color = "red";
	wholeMenu["y2007"].hasSub = 0;
	wholeMenu["y2007"].link = "fotos_images_minjae_lee_2007_eng.html";
	wholeMenu["y2007"].html = '2007';

	wholeMenu["y2008"] = [];
	wholeMenu["y2008"].id = "11_5_3";
	wholeMenu["y2008"].color = "red";
	wholeMenu["y2008"].hasSub = 0;
	wholeMenu["y2008"].link = "fotos_images_minjae_lee_2008_eng.html";
	wholeMenu["y2008"].html = '2008';

	wholeMenu["y2009"] = [];
	wholeMenu["y2009"].id = "11_5_4";
	wholeMenu["y2009"].color = "red";
	wholeMenu["y2009"].hasSub = 0;
	wholeMenu["y2009"].link = "fotos_images_minjae_lee_2009_eng.html";
	wholeMenu["y2009"].html = '2009';

	wholeMenu["y2010"] = [];
	wholeMenu["y2010"].id = "11_5_5";
	wholeMenu["y2010"].color = "red";
	wholeMenu["y2010"].hasSub = 0;
	wholeMenu["y2010"].link = "fotos_images_minjae_lee_2010_eng.html";
	wholeMenu["y2010"].html = '2010';

	wholeMenu["y2011"] = [];
	wholeMenu["y2011"].id = "11_5_6";
	wholeMenu["y2011"].color = "red";
	wholeMenu["y2011"].hasSub = 0;
	wholeMenu["y2011"].link = "fotos_images_minjae_lee_2011_eng.html";
	wholeMenu["y2011"].html = '2007';

	wholeMenu["y2012"] = [];
	wholeMenu["y2012"].id = "11_5_7";
	wholeMenu["y2012"].color = "red";
	wholeMenu["y2012"].hasSub = 0;
	wholeMenu["y2012"].link = "fotos_images_minjae_lee_2012_eng.html";
	wholeMenu["y2012"].html = '2012';

	wholeMenu["y2013"] = [];
	wholeMenu["y2013"].id = "11_5_8";
	wholeMenu["y2013"].color = "red";
	wholeMenu["y2013"].hasSub = 0;
	wholeMenu["y2013"].link = "fotos_images_minjae_lee_2013_eng.html";
	wholeMenu["y2013"].html = '2013';

	wholeMenu["y2014"] = [];
	wholeMenu["y2014"].id = "11_5_9";
	wholeMenu["y2014"].color = "red";
	wholeMenu["y2014"].hasSub = 0;
	wholeMenu["y2014"].link = "fotos_images_minjae_lee_2014_eng.html";
	wholeMenu["y2014"].html = '2014';

	wholeMenu["y2015"] = [];
	wholeMenu["y2015"].id = "11_5_10";
	wholeMenu["y2015"].color = "red";
	wholeMenu["y2015"].hasSub = 0;
	wholeMenu["y2015"].link = "fotos_images_minjae_lee_2015_eng.html";
	wholeMenu["y2015"].html = '2015';

	wholeMenu["y2016"] = [];
	wholeMenu["y2016"].id = "11_5_11";
	wholeMenu["y2016"].color = "red";
	wholeMenu["y2016"].hasSub = 0;
	wholeMenu["y2016"].link = "fotos_images_minjae_lee_2016_eng.html";
	wholeMenu["y2016"].html = '2016';

	wholeMenu["y2017"] = [];
	wholeMenu["y2017"].id = "11_5_12";
	wholeMenu["y2017"].color = "red";
	wholeMenu["y2017"].hasSub = 0;
	wholeMenu["y2017"].link = "fotos_images_minjae_lee_2017_eng.html";
	wholeMenu["y2017"].html = '2017';

	wholeMenu["● Images - Anne Stokes"] = [];
	wholeMenu["● Images - Anne Stokes"].id = "11_6";
	wholeMenu["● Images - Anne Stokes"].color = "red";
	wholeMenu["● Images - Anne Stokes"].hasSub = 1;
	wholeMenu["● Images - Anne Stokes"].link = "";
	wholeMenu["● Images - Anne Stokes"].html = '&#9679; Images - Anne Stokes';

	wholeMenu["About Anne Stokes"] = [];
	wholeMenu["About Anne Stokes"].id = "11_6_1";
	wholeMenu["About Anne Stokes"].color = "red";
	wholeMenu["About Anne Stokes"].hasSub = 0;
	wholeMenu["About Anne Stokes"].link = "fotos_images_about_stokes_eng.html";
	wholeMenu["About Anne Stokes"].html = 'About Anne Stokes';

	wholeMenu["Dragons"] = [];
	wholeMenu["Dragons"].id = "11_6_2";
	wholeMenu["Dragons"].color = "red";
	wholeMenu["Dragons"].hasSub = 0;
	wholeMenu["Dragons"].link = "fotos_images_stokes_dragons_eng.html";
	wholeMenu["Dragons"].html = 'Dragons';

	wholeMenu["Gothic"] = [];
	wholeMenu["Gothic"].id = "11_6_3";
	wholeMenu["Gothic"].color = "red";
	wholeMenu["Gothic"].hasSub = 0;
	wholeMenu["Gothic"].link = "fotos_images_stokes_gothic_eng.html";
	wholeMenu["Gothic"].html = 'Gothic';

	wholeMenu["Fae"] = [];
	wholeMenu["Fae"].id = "11_6_4";
	wholeMenu["Fae"].color = "red";
	wholeMenu["Fae"].hasSub = 0;
	wholeMenu["Fae"].link = "fotos_images_stokes_fae_eng.html";
	wholeMenu["Fae"].html = 'Fae';

	wholeMenu["Tribal"] = [];
	wholeMenu["Tribal"].id = "11_6_5";
	wholeMenu["Tribal"].color = "red";
	wholeMenu["Tribal"].hasSub = 0;
	wholeMenu["Tribal"].link = "fotos_images_stokes_tribal_eng.html";
	wholeMenu["Tribal"].html = 'Tribal';

	wholeMenu["Steampunk"] = [];
	wholeMenu["Steampunk"].id = "11_6_6";
	wholeMenu["Steampunk"].color = "red";
	wholeMenu["Steampunk"].hasSub = 0;
	wholeMenu["Steampunk"].link = "fotos_images_stokes_steampunk_eng.html";
	wholeMenu["Steampunk"].html = 'Steampunk';

	wholeMenu["Age of Dragons"] = [];
	wholeMenu["Age of Dragons"].id = "11_6_7";
	wholeMenu["Age of Dragons"].color = "red";
	wholeMenu["Age of Dragons"].hasSub = 0;
	wholeMenu["Age of Dragons"].link = "fotos_images_stokes_age_of_dragons_eng.html";
	wholeMenu["Age of Dragons"].html = 'Age of Dragons';

	wholeMenu["Soviet Ads"] = [];
	wholeMenu["Soviet Ads"].id = "11_7";
	wholeMenu["Soviet Ads"].color = "red";
	wholeMenu["Soviet Ads"].hasSub = 0;
	wholeMenu["Soviet Ads"].link = "fotos_soviet_ads_eng.html";
	wholeMenu["Soviet Ads"].html = 'Soviet Ads';
}


if (lang=="rus") {

	wholeMenu["Фото/Картинки"] = [];
	wholeMenu["Фото/Картинки"].id = "11";
	wholeMenu["Фото/Картинки"].color = "red";
	wholeMenu["Фото/Картинки"].hasSub = 1;
	wholeMenu["Фото/Картинки"].link = "";
	wholeMenu["Фото/Картинки"].html = 'Фото/Картинки';

	wholeMenu["● Мои Фото"] = [];
	wholeMenu["● Мои Фото"].id = "11_1";
	wholeMenu["● Мои Фото"].color = "red";
	wholeMenu["● Мои Фото"].hasSub = 1;
	wholeMenu["● Мои Фото"].link = "";
	wholeMenu["● Мои Фото"].html = '&#9679; Мои Фото';

	wholeMenu["Я"] = [];
	wholeMenu["Я"].id = "11_1_1";
	wholeMenu["Я"].color = "red";
	wholeMenu["Я"].hasSub = 0;
	wholeMenu["Я"].link = "fotos_me_rus.html";
	wholeMenu["Я"].html = 'Я';

	wholeMenu["Лето 2012"] = [];
	wholeMenu["Лето 2012"].id = "11_1_2";
	wholeMenu["Лето 2012"].color = "red";
	wholeMenu["Лето 2012"].hasSub = 0;
	wholeMenu["Лето 2012"].link = "fotos_summer_2012_rus.html";
	wholeMenu["Лето 2012"].html = 'Лето 2012';

	wholeMenu["Звери 2012"] = [];
	wholeMenu["Звери 2012"].id = "11_1_3";
	wholeMenu["Звери 2012"].color = "red";
	wholeMenu["Звери 2012"].hasSub = 0;
	wholeMenu["Звери 2012"].link = "fotos_zveri_2012_rus.html";
	wholeMenu["Звери 2012"].html = 'Звери 2012';

	wholeMenu["● Картинки - Николетта Чекколи"] = [];
	wholeMenu["● Картинки - Николетта Чекколи"].id = "11_2";
	wholeMenu["● Картинки - Николетта Чекколи"].color = "red";
	wholeMenu["● Картинки - Николетта Чекколи"].hasSub = 1;
	wholeMenu["● Картинки - Николетта Чекколи"].link = "";
	wholeMenu["● Картинки - Николетта Чекколи"].html = '&#9679; Картинки - Николетта Чекколи';

	wholeMenu["О Николетта Чекколи"] = [];
	wholeMenu["О Николетта Чекколи"].id = "11_2_1";
	wholeMenu["О Николетта Чекколи"].color = "red";
	wholeMenu["О Николетта Чекколи"].hasSub = 0;
	wholeMenu["О Николетта Чекколи"].link = "fotos_images_about_ceccoli_rus.html";
	wholeMenu["О Николетта Чекколи"].html = 'О Николетта Чекколи';

	wholeMenu["Работы"] = [];
	wholeMenu["Работы"].id = "11_2_2";
	wholeMenu["Работы"].color = "red";
	wholeMenu["Работы"].hasSub = 0;
	wholeMenu["Работы"].link = "fotos_images_ceccoli_works_rus.html";
	wholeMenu["Работы"].html = 'Работы';

	wholeMenu["● Картинки - KuKuLa"] = [];
	wholeMenu["● Картинки - KuKuLa"].id = "11_3";
	wholeMenu["● Картинки - KuKuLa"].color = "red";
	wholeMenu["● Картинки - KuKuLa"].hasSub = 1;
	wholeMenu["● Картинки - KuKuLa"].link = "";
	wholeMenu["● Картинки - KuKuLa"].html = '&#9679; Картинки - KuKuLa';

	wholeMenu["О KuKuLa"] = [];
	wholeMenu["О KuKuLa"].id = "11_3_1";
	wholeMenu["О KuKuLa"].color = "red";
	wholeMenu["О KuKuLa"].hasSub = 0;
	wholeMenu["О KuKuLa"].link = "fotos_images_about_kukula_rus.html";
	wholeMenu["О KuKuLa"].html = 'О KuKuLa';

	wholeMenu["Поп-Рояль"] = [];
	wholeMenu["Поп-Рояль"].id = "11_3_2";
	wholeMenu["Поп-Рояль"].color = "red";
	wholeMenu["Поп-Рояль"].hasSub = 0;
	wholeMenu["Поп-Рояль"].link = "fotos_images_kukula_pop_royale_rus.html";
	wholeMenu["Поп-Рояль"].html = 'Поп-Рояль';


	wholeMenu["Хантингтонская Эпидемия"] = [];
	wholeMenu["Хантингтонская Эпидемия"].id = "11_3_3";
	wholeMenu["Хантингтонская Эпидемия"].color = "red";
	wholeMenu["Хантингтонская Эпидемия"].hasSub = 0;
	wholeMenu["Хантингтонская Эпидемия"].link = "fotos_images_kukula_the_huntington_epidemic_rus.html";
	wholeMenu["Хантингтонская Эпидемия"].html = 'Хантингтонская Эпидемия';

	wholeMenu["Дебютант Высокого Класса"] = [];
	wholeMenu["Дебютант Высокого Класса"].id = "11_3_4";
	wholeMenu["Дебютант Высокого Класса"].color = "red";
	wholeMenu["Дебютант Высокого Класса"].hasSub = 0;
	wholeMenu["Дебютант Высокого Класса"].link = "fotos_images_kukula_haute_debutant_rus.html";
	wholeMenu["Дебютант Высокого Класса"].html = 'Дебютант Высокого Класса';

	wholeMenu["Приключения Rasberry Finn"] = [];
	wholeMenu["Приключения Rasberry Finn"].id = "11_3_5";
	wholeMenu["Приключения Rasberry Finn"].color = "red";
	wholeMenu["Приключения Rasberry Finn"].hasSub = 0;
	wholeMenu["Приключения Rasberry Finn"].link = "fotos_images_kukula_the_adventures_of_rasberry_finn_rus.html";
	wholeMenu["Приключения Rasberry Finn"].html = 'Приключения Rasberry Finn';

	wholeMenu["Избранные Картины"] = [];
	wholeMenu["Избранные Картины"].id = "11_3_6";
	wholeMenu["Избранные Картины"].color = "red";
	wholeMenu["Избранные Картины"].hasSub = 0;
	wholeMenu["Избранные Картины"].link = "fotos_images_kukula_selected_paintings_rus.html";
	wholeMenu["Избранные Картины"].html = 'Избранные Картины';

	wholeMenu["● Картинки - Mai Ja"] = [];
	wholeMenu["● Картинки - Mai Ja"].id = "11_4";
	wholeMenu["● Картинки - Mai Ja"].color = "red";
	wholeMenu["● Картинки - Mai Ja"].hasSub = 1;
	wholeMenu["● Картинки - Mai Ja"].link = "";
	wholeMenu["● Картинки - Mai Ja"].html = '&#9679; Картинки - Mai Ja';

	wholeMenu["О Mai Ja"] = [];
	wholeMenu["О Mai Ja"].id = "11_4_1";
	wholeMenu["О Mai Ja"].color = "red";
	wholeMenu["О Mai Ja"].hasSub = 0;
	wholeMenu["О Mai Ja"].link = "fotos_images_about_mai_ja_rus.html";
	wholeMenu["О Mai Ja"].html = 'О Mai Ja';

	wholeMenu["Обычные Картины"] = [];
	wholeMenu["Обычные Картины"].id = "11_4_2";
	wholeMenu["Обычные Картины"].color = "red";
	wholeMenu["Обычные Картины"].hasSub = 0;
	wholeMenu["Обычные Картины"].link = "fotos_images_mai_ja_traditional_paintings_rus.html";
	wholeMenu["Обычные Картины"].html = 'Обычные Картины';

	wholeMenu["Цифровые Картины"] = [];
	wholeMenu["Цифровые Картины"].id = "11_4_3";
	wholeMenu["Цифровые Картины"].color = "red";
	wholeMenu["Цифровые Картины"].hasSub = 0;
	wholeMenu["Цифровые Картины"].link = "fotos_images_mai_ja_digital_paintings_rus.html";
	wholeMenu["Цифровые Картины"].html = 'Цифровые Картины';

	wholeMenu["Видео"] = [];
	wholeMenu["Видео"].id = "11_4_4";
	wholeMenu["Видео"].color = "red";
	wholeMenu["Видео"].hasSub = 0;
	wholeMenu["Видео"].link = "fotos_images_mai_ja_video_rus.html";
	wholeMenu["Видео"].html = 'Видео';

	wholeMenu["● Картинки - Minjae Lee"] = [];
	wholeMenu["● Картинки - Minjae Lee"].id = "11_5";
	wholeMenu["● Картинки - Minjae Lee"].color = "red";
	wholeMenu["● Картинки - Minjae Lee"].hasSub = 1;
	wholeMenu["● Картинки - Minjae Lee"].link = "";
	wholeMenu["● Картинки - Minjae Lee"].html = '&#9679; Картинки - Minjae Lee';

	wholeMenu["О Minjae Lee"] = [];
	wholeMenu["О Minjae Lee"].id = "11_5_1";
	wholeMenu["О Minjae Lee"].color = "red";
	wholeMenu["О Minjae Lee"].hasSub = 0;
	wholeMenu["О Minjae Lee"].link = "fotos_images_about_minjae_lee_rus.html";
	wholeMenu["О Minjae Lee"].html = 'О Minjae Lee';

	wholeMenu["y2007"] = [];
	wholeMenu["y2007"].id = "11_5_2";
	wholeMenu["y2007"].color = "red";
	wholeMenu["y2007"].hasSub = 0;
	wholeMenu["y2007"].link = "fotos_images_minjae_lee_2007_rus.html";
	wholeMenu["y2007"].html = '2007';

	wholeMenu["y2008"] = [];
	wholeMenu["y2008"].id = "11_5_3";
	wholeMenu["y2008"].color = "red";
	wholeMenu["y2008"].hasSub = 0;
	wholeMenu["y2008"].link = "fotos_images_minjae_lee_2008_rus.html";
	wholeMenu["y2008"].html = '2008';

	wholeMenu["y2009"] = [];
	wholeMenu["y2009"].id = "11_5_4";
	wholeMenu["y2009"].color = "red";
	wholeMenu["y2009"].hasSub = 0;
	wholeMenu["y2009"].link = "fotos_images_minjae_lee_2009_rus.html";
	wholeMenu["y2009"].html = '2009';

	wholeMenu["y2010"] = [];
	wholeMenu["y2010"].id = "11_5_5";
	wholeMenu["y2010"].color = "red";
	wholeMenu["y2010"].hasSub = 0;
	wholeMenu["y2010"].link = "fotos_images_minjae_lee_2010_rus.html";
	wholeMenu["y2010"].html = '2010';

	wholeMenu["y2011"] = [];
	wholeMenu["y2011"].id = "11_5_6";
	wholeMenu["y2011"].color = "red";
	wholeMenu["y2011"].hasSub = 0;
	wholeMenu["y2011"].link = "fotos_images_minjae_lee_2011_rus.html";
	wholeMenu["y2011"].html = '2007';

	wholeMenu["y2012"] = [];
	wholeMenu["y2012"].id = "11_5_7";
	wholeMenu["y2012"].color = "red";
	wholeMenu["y2012"].hasSub = 0;
	wholeMenu["y2012"].link = "fotos_images_minjae_lee_2012_rus.html";
	wholeMenu["y2012"].html = '2012';

	wholeMenu["y2013"] = [];
	wholeMenu["y2013"].id = "11_5_8";
	wholeMenu["y2013"].color = "red";
	wholeMenu["y2013"].hasSub = 0;
	wholeMenu["y2013"].link = "fotos_images_minjae_lee_2013_rus.html";
	wholeMenu["y2013"].html = '2013';

	wholeMenu["y2014"] = [];
	wholeMenu["y2014"].id = "11_5_9";
	wholeMenu["y2014"].color = "red";
	wholeMenu["y2014"].hasSub = 0;
	wholeMenu["y2014"].link = "fotos_images_minjae_lee_2014_rus.html";
	wholeMenu["y2014"].html = '2014';

	wholeMenu["y2015"] = [];
	wholeMenu["y2015"].id = "11_5_10";
	wholeMenu["y2015"].color = "red";
	wholeMenu["y2015"].hasSub = 0;
	wholeMenu["y2015"].link = "fotos_images_minjae_lee_2015_rus.html";
	wholeMenu["y2015"].html = '2015';

	wholeMenu["y2016"] = [];
	wholeMenu["y2016"].id = "11_5_11";
	wholeMenu["y2016"].color = "red";
	wholeMenu["y2016"].hasSub = 0;
	wholeMenu["y2016"].link = "fotos_images_minjae_lee_2016_rus.html";
	wholeMenu["y2016"].html = '2016';

	wholeMenu["y2017"] = [];
	wholeMenu["y2017"].id = "11_5_12";
	wholeMenu["y2017"].color = "red";
	wholeMenu["y2017"].hasSub = 0;
	wholeMenu["y2017"].link = "fotos_images_minjae_lee_2017_rus.html";
	wholeMenu["y2017"].html = '2017';

	wholeMenu["● Картинки - Энн Стоукс"] = [];
	wholeMenu["● Картинки - Энн Стоукс"].id = "11_6";
	wholeMenu["● Картинки - Энн Стоукс"].color = "red";
	wholeMenu["● Картинки - Энн Стоукс"].hasSub = 1;
	wholeMenu["● Картинки - Энн Стоукс"].link = "";
	wholeMenu["● Картинки - Энн Стоукс"].html = '&#9679; Картинки - Энн Стоукс';

	wholeMenu["О Энн Стоукс"] = [];
	wholeMenu["О Энн Стоукс"].id = "11_6_1";
	wholeMenu["О Энн Стоукс"].color = "red";
	wholeMenu["О Энн Стоукс"].hasSub = 0;
	wholeMenu["О Энн Стоукс"].link = "fotos_images_about_stokes_rus.html";
	wholeMenu["О Энн Стоукс"].html = 'О Энн Стоукс';

	wholeMenu["Драконы"] = [];
	wholeMenu["Драконы"].id = "11_6_2";
	wholeMenu["Драконы"].color = "red";
	wholeMenu["Драконы"].hasSub = 0;
	wholeMenu["Драконы"].link = "fotos_images_stokes_dragons_rus.html";
	wholeMenu["Драконы"].html = 'Драконы';

	wholeMenu["Готические"] = [];
	wholeMenu["Готические"].id = "11_6_3";
	wholeMenu["Готические"].color = "red";
	wholeMenu["Готические"].hasSub = 0;
	wholeMenu["Готические"].link = "fotos_images_stokes_gothic_rus.html";
	wholeMenu["Готические"].html = 'Готические';

	wholeMenu["Феерические"] = [];
	wholeMenu["Феерические"].id = "11_6_4";
	wholeMenu["Феерические"].color = "red";
	wholeMenu["Феерические"].hasSub = 0;
	wholeMenu["Феерические"].link = "fotos_images_stokes_fae_rus.html";
	wholeMenu["Феерические"].html = 'Феерические';

	wholeMenu["Трайбл"] = [];
	wholeMenu["Трайбл"].id = "11_6_5";
	wholeMenu["Трайбл"].color = "red";
	wholeMenu["Трайбл"].hasSub = 0;
	wholeMenu["Трайбл"].link = "fotos_images_stokes_tribal_rus.html";
	wholeMenu["Трайбл"].html = 'Трайбл';

	wholeMenu["Стимпанк"] = [];
	wholeMenu["Стимпанк"].id = "11_6_6";
	wholeMenu["Стимпанк"].color = "red";
	wholeMenu["Стимпанк"].hasSub = 0;
	wholeMenu["Стимпанк"].link = "fotos_images_stokes_steampunk_rus.html";
	wholeMenu["Стимпанк"].html = 'Стимпанк';

	wholeMenu["Эра Драконов"] = [];
	wholeMenu["Эра Драконов"].id = "11_6_7";
	wholeMenu["Эра Драконов"].color = "red";
	wholeMenu["Эра Драконов"].hasSub = 0;
	wholeMenu["Эра Драконов"].link = "fotos_images_stokes_age_of_dragons_rus.html";
	wholeMenu["Эра Драконов"].html = 'Эра Драконов';

	wholeMenu["Советские Плакаты"] = [];
	wholeMenu["Советские Плакаты"].id = "11_7";
	wholeMenu["Советские Плакаты"].color = "red";
	wholeMenu["Советские Плакаты"].hasSub = 0;
	wholeMenu["Советские Плакаты"].link = "fotos_soviet_ads_rus.html";
	wholeMenu["Советские Плакаты"].html = 'Советские Плакаты';
}



if (lang=="lat") {

	wholeMenu["Photo/Imaginibus"] = [];
	wholeMenu["Photo/Imaginibus"].id = "11";
	wholeMenu["Photo/Imaginibus"].color = "red";
	wholeMenu["Photo/Imaginibus"].hasSub = 1;
	wholeMenu["Photo/Imaginibus"].link = "";
	wholeMenu["Photo/Imaginibus"].html = 'Photo/Imaginibus';

	wholeMenu["● Photographia Mihi"] = [];
	wholeMenu["● Photographia Mihi"].id = "11_1";
	wholeMenu["● Photographia Mihi"].color = "red";
	wholeMenu["● Photographia Mihi"].hasSub = 1;
	wholeMenu["● Photographia Mihi"].link = "";
	wholeMenu["● Photographia Mihi"].html = '&#9679; Photographia Mihi';

	wholeMenu["Ego"] = [];
	wholeMenu["Ego"].id = "11_1_1";
	wholeMenu["Ego"].color = "red";
	wholeMenu["Ego"].hasSub = 0;
	wholeMenu["Ego"].link = "fotos_me_lat.html";
	wholeMenu["Ego"].html = 'Ego';

	wholeMenu["Aestas 2012"] = [];
	wholeMenu["Aestas 2012"].id = "11_1_2";
	wholeMenu["Aestas 2012"].color = "red";
	wholeMenu["Aestas 2012"].hasSub = 0;
	wholeMenu["Aestas 2012"].link = "fotos_summer_2012_lat.html";
	wholeMenu["Aestas 2012"].html = 'Aestas 2012';

	wholeMenu["Zveri (rus. Звери) 2012"] = [];
	wholeMenu["Zveri (rus. Звери) 2012"].id = "11_1_3";
	wholeMenu["Zveri (rus. Звери) 2012"].color = "red";
	wholeMenu["Zveri (rus. Звери) 2012"].hasSub = 0;
	wholeMenu["Zveri (rus. Звери) 2012"].link = "fotos_zveri_2012_lat.html";
	wholeMenu["Zveri (rus. Звери) 2012"].html = 'Zveri (rus. Звери) 2012';

	wholeMenu["● Imaginibus - Nicoletta Ceccoli"] = [];
	wholeMenu["● Imaginibus - Nicoletta Ceccoli"].id = "11_2";
	wholeMenu["● Imaginibus - Nicoletta Ceccoli"].color = "red";
	wholeMenu["● Imaginibus - Nicoletta Ceccoli"].hasSub = 1;
	wholeMenu["● Imaginibus - Nicoletta Ceccoli"].link = "";
	wholeMenu["● Imaginibus - Nicoletta Ceccoli"].html = '&#9679; Imaginibus - Nicoletta Ceccoli';

	wholeMenu["Circa Nicoletta Ceccoli"] = [];
	wholeMenu["Circa Nicoletta Ceccoli"].id = "11_2_1";
	wholeMenu["Circa Nicoletta Ceccoli"].color = "red";
	wholeMenu["Circa Nicoletta Ceccoli"].hasSub = 0;
	wholeMenu["Circa Nicoletta Ceccoli"].link = "fotos_images_about_ceccoli_lat.html";
	wholeMenu["Circa Nicoletta Ceccoli"].html = 'Circa Nicoletta Ceccoli';

	wholeMenu["Opera"] = [];
	wholeMenu["Opera"].id = "11_2_2";
	wholeMenu["Opera"].color = "red";
	wholeMenu["Opera"].hasSub = 0;
	wholeMenu["Opera"].link = "fotos_images_ceccoli_works_lat.html";
	wholeMenu["Opera"].html = 'Opera';

	wholeMenu["● Imaginibus - KuKuLa"] = [];
	wholeMenu["● Imaginibus - KuKuLa"].id = "11_3";
	wholeMenu["● Imaginibus - KuKuLa"].color = "red";
	wholeMenu["● Imaginibus - KuKuLa"].hasSub = 1;
	wholeMenu["● Imaginibus - KuKuLa"].link = "";
	wholeMenu["● Imaginibus - KuKuLa"].html = '&#9679; Imaginibus - KuKuLa';

	wholeMenu["Circa KuKuLa"] = [];
	wholeMenu["Circa KuKuLa"].id = "11_3_1";
	wholeMenu["Circa KuKuLa"].color = "red";
	wholeMenu["Circa KuKuLa"].hasSub = 0;
	wholeMenu["Circa KuKuLa"].link = "fotos_images_about_kukula_lat.html";
	wholeMenu["Circa KuKuLa"].html = 'Circa KuKuLa';

	wholeMenu["Pop Royale"] = [];
	wholeMenu["Pop Royale"].id = "11_3_2";
	wholeMenu["Pop Royale"].color = "red";
	wholeMenu["Pop Royale"].hasSub = 0;
	wholeMenu["Pop Royale"].link = "fotos_images_kukula_pop_royale_lat.html";
	wholeMenu["Pop Royale"].html = 'Pop Royale';


	wholeMenu["The Huntington Epidemic"] = [];
	wholeMenu["The Huntington Epidemic"].id = "11_3_3";
	wholeMenu["The Huntington Epidemic"].color = "red";
	wholeMenu["The Huntington Epidemic"].hasSub = 0;
	wholeMenu["The Huntington Epidemic"].link = "fotos_images_kukula_the_huntington_epidemic_lat.html";
	wholeMenu["The Huntington Epidemic"].html = 'The Huntington Epidemic';

	wholeMenu["Haute Debutant"] = [];
	wholeMenu["Haute Debutant"].id = "11_3_4";
	wholeMenu["Haute Debutant"].color = "red";
	wholeMenu["Haute Debutant"].hasSub = 0;
	wholeMenu["Haute Debutant"].link = "fotos_images_kukula_haute_debutant_lat.html";
	wholeMenu["Haute Debutant"].html = 'Haute Debutant';

	wholeMenu["The Adventures of Rasberry Finn"] = [];
	wholeMenu["The Adventures of Rasberry Finn"].id = "11_3_5";
	wholeMenu["The Adventures of Rasberry Finn"].color = "red";
	wholeMenu["The Adventures of Rasberry Finn"].hasSub = 0;
	wholeMenu["The Adventures of Rasberry Finn"].link = "fotos_images_kukula_the_adventures_of_rasberry_finn_lat.html";
	wholeMenu["The Adventures of Rasberry Finn"].html = 'The Adventures of Rasberry Finn';

	wholeMenu["Selected Paintings"] = [];
	wholeMenu["Selected Paintings"].id = "11_3_6";
	wholeMenu["Selected Paintings"].color = "red";
	wholeMenu["Selected Paintings"].hasSub = 0;
	wholeMenu["Selected Paintings"].link = "fotos_images_kukula_selected_paintings_lat.html";
	wholeMenu["Selected Paintings"].html = 'Selected Paintings';

	wholeMenu["● Imaginibus - Mai Ja"] = [];
	wholeMenu["● Imaginibus - Mai Ja"].id = "11_4";
	wholeMenu["● Imaginibus - Mai Ja"].color = "red";
	wholeMenu["● Imaginibus - Mai Ja"].hasSub = 1;
	wholeMenu["● Imaginibus - Mai Ja"].link = "";
	wholeMenu["● Imaginibus - Mai Ja"].html = '&#9679; Imaginibus - Mai Ja';

	wholeMenu["Circa Mai Ja"] = [];
	wholeMenu["Circa Mai Ja"].id = "11_4_1";
	wholeMenu["Circa Mai Ja"].color = "red";
	wholeMenu["Circa Mai Ja"].hasSub = 0;
	wholeMenu["Circa Mai Ja"].link = "fotos_images_about_mai_ja_lat.html";
	wholeMenu["Circa Mai Ja"].html = 'Circa Mai Ja';

	wholeMenu["Sollemnis Picturae"] = [];
	wholeMenu["Sollemnis Picturae"].id = "11_4_2";
	wholeMenu["Sollemnis Picturae"].color = "red";
	wholeMenu["Sollemnis Picturae"].hasSub = 0;
	wholeMenu["Sollemnis Picturae"].link = "fotos_images_mai_ja_traditional_paintings_lat.html";
	wholeMenu["Sollemnis Picturae"].html = 'Sollemnis Picturae';

	wholeMenu["Digital Picturae"] = [];
	wholeMenu["Digital Picturae"].id = "11_4_3";
	wholeMenu["Digital Picturae"].color = "red";
	wholeMenu["Digital Picturae"].hasSub = 0;
	wholeMenu["Digital Picturae"].link = "fotos_images_mai_ja_digital_paintings_lat.html";
	wholeMenu["Digital Picturae"].html = 'Digital Picturae';

	wholeMenu["Video"] = [];
	wholeMenu["Video"].id = "11_4_4";
	wholeMenu["Video"].color = "red";
	wholeMenu["Video"].hasSub = 0;
	wholeMenu["Video"].link = "fotos_images_mai_ja_video_lat.html";
	wholeMenu["Video"].html = 'Video';

	wholeMenu["● Imaginibus - Minjae Lee"] = [];
	wholeMenu["● Imaginibus - Minjae Lee"].id = "11_5";
	wholeMenu["● Imaginibus - Minjae Lee"].color = "red";
	wholeMenu["● Imaginibus - Minjae Lee"].hasSub = 1;
	wholeMenu["● Imaginibus - Minjae Lee"].link = "";
	wholeMenu["● Imaginibus - Minjae Lee"].html = '&#9679; Imaginibus - Minjae Lee';

	wholeMenu["Circa Minjae Lee"] = [];
	wholeMenu["Circa Minjae Lee"].id = "11_5_1";
	wholeMenu["Circa Minjae Lee"].color = "red";
	wholeMenu["Circa Minjae Lee"].hasSub = 0;
	wholeMenu["Circa Minjae Lee"].link = "fotos_images_about_minjae_lee_lat.html";
	wholeMenu["Circa Minjae Lee"].html = 'Circa Minjae Lee';

	wholeMenu["y2007"] = [];
	wholeMenu["y2007"].id = "11_5_2";
	wholeMenu["y2007"].color = "red";
	wholeMenu["y2007"].hasSub = 0;
	wholeMenu["y2007"].link = "fotos_images_minjae_lee_2007_lat.html";
	wholeMenu["y2007"].html = '2007';

	wholeMenu["y2008"] = [];
	wholeMenu["y2008"].id = "11_5_3";
	wholeMenu["y2008"].color = "red";
	wholeMenu["y2008"].hasSub = 0;
	wholeMenu["y2008"].link = "fotos_images_minjae_lee_2008_lat.html";
	wholeMenu["y2008"].html = '2008';

	wholeMenu["y2009"] = [];
	wholeMenu["y2009"].id = "11_5_4";
	wholeMenu["y2009"].color = "red";
	wholeMenu["y2009"].hasSub = 0;
	wholeMenu["y2009"].link = "fotos_images_minjae_lee_2009_lat.html";
	wholeMenu["y2009"].html = '2009';

	wholeMenu["y2010"] = [];
	wholeMenu["y2010"].id = "11_5_5";
	wholeMenu["y2010"].color = "red";
	wholeMenu["y2010"].hasSub = 0;
	wholeMenu["y2010"].link = "fotos_images_minjae_lee_2010_lat.html";
	wholeMenu["y2010"].html = '2010';

	wholeMenu["y2011"] = [];
	wholeMenu["y2011"].id = "11_5_6";
	wholeMenu["y2011"].color = "red";
	wholeMenu["y2011"].hasSub = 0;
	wholeMenu["y2011"].link = "fotos_images_minjae_lee_2011_lat.html";
	wholeMenu["y2011"].html = '2007';

	wholeMenu["y2012"] = [];
	wholeMenu["y2012"].id = "11_5_7";
	wholeMenu["y2012"].color = "red";
	wholeMenu["y2012"].hasSub = 0;
	wholeMenu["y2012"].link = "fotos_images_minjae_lee_2012_lat.html";
	wholeMenu["y2012"].html = '2012';

	wholeMenu["y2013"] = [];
	wholeMenu["y2013"].id = "11_5_8";
	wholeMenu["y2013"].color = "red";
	wholeMenu["y2013"].hasSub = 0;
	wholeMenu["y2013"].link = "fotos_images_minjae_lee_2013_lat.html";
	wholeMenu["y2013"].html = '2013';

	wholeMenu["y2014"] = [];
	wholeMenu["y2014"].id = "11_5_9";
	wholeMenu["y2014"].color = "red";
	wholeMenu["y2014"].hasSub = 0;
	wholeMenu["y2014"].link = "fotos_images_minjae_lee_2014_lat.html";
	wholeMenu["y2014"].html = '2014';

	wholeMenu["y2015"] = [];
	wholeMenu["y2015"].id = "11_5_10";
	wholeMenu["y2015"].color = "red";
	wholeMenu["y2015"].hasSub = 0;
	wholeMenu["y2015"].link = "fotos_images_minjae_lee_2015_lat.html";
	wholeMenu["y2015"].html = '2015';

	wholeMenu["y2016"] = [];
	wholeMenu["y2016"].id = "11_5_11";
	wholeMenu["y2016"].color = "red";
	wholeMenu["y2016"].hasSub = 0;
	wholeMenu["y2016"].link = "fotos_images_minjae_lee_2016_lat.html";
	wholeMenu["y2016"].html = '2016';

	wholeMenu["y2017"] = [];
	wholeMenu["y2017"].id = "11_5_12";
	wholeMenu["y2017"].color = "red";
	wholeMenu["y2017"].hasSub = 0;
	wholeMenu["y2017"].link = "fotos_images_minjae_lee_2017_lat.html";
	wholeMenu["y2017"].html = '2017';

	wholeMenu["● Imaginibus - Anne Stokes"] = [];
	wholeMenu["● Imaginibus - Anne Stokes"].id = "11_6";
	wholeMenu["● Imaginibus - Anne Stokes"].color = "red";
	wholeMenu["● Imaginibus - Anne Stokes"].hasSub = 1;
	wholeMenu["● Imaginibus - Anne Stokes"].link = "";
	wholeMenu["● Imaginibus - Anne Stokes"].html = '&#9679; Imaginibus - Anne Stokes';

	wholeMenu["Circa Anne Stokes"] = [];
	wholeMenu["Circa Anne Stokes"].id = "11_6_1";
	wholeMenu["Circa Anne Stokes"].color = "red";
	wholeMenu["Circa Anne Stokes"].hasSub = 0;
	wholeMenu["Circa Anne Stokes"].link = "fotos_images_about_stokes_lat.html";
	wholeMenu["Circa Anne Stokes"].html = 'Circa Anne Stokes';

	wholeMenu["Dracones"] = [];
	wholeMenu["Dracones"].id = "11_6_2";
	wholeMenu["Dracones"].color = "red";
	wholeMenu["Dracones"].hasSub = 0;
	wholeMenu["Dracones"].link = "fotos_images_stokes_dragons_lat.html";
	wholeMenu["Dracones"].html = 'Dracones';

	wholeMenu["Antiqua"] = [];
	wholeMenu["Antiqua"].id = "11_6_3";
	wholeMenu["Antiqua"].color = "red";
	wholeMenu["Antiqua"].hasSub = 0;
	wholeMenu["Antiqua"].link = "fotos_images_stokes_gothic_lat.html";
	wholeMenu["Antiqua"].html = 'Antiqua';

	wholeMenu["Fae"] = [];
	wholeMenu["Fae"].id = "11_6_4";
	wholeMenu["Fae"].color = "red";
	wholeMenu["Fae"].hasSub = 0;
	wholeMenu["Fae"].link = "fotos_images_stokes_fae_lat.html";
	wholeMenu["Fae"].html = 'Fae';

	wholeMenu["Tribal"] = [];
	wholeMenu["Tribal"].id = "11_6_5";
	wholeMenu["Tribal"].color = "red";
	wholeMenu["Tribal"].hasSub = 0;
	wholeMenu["Tribal"].link = "fotos_images_stokes_tribal_lat.html";
	wholeMenu["Tribal"].html = 'Tribal';

	wholeMenu["Steampunk"] = [];
	wholeMenu["Steampunk"].id = "11_6_6";
	wholeMenu["Steampunk"].color = "red";
	wholeMenu["Steampunk"].hasSub = 0;
	wholeMenu["Steampunk"].link = "fotos_images_stokes_steampunk_lat.html";
	wholeMenu["Steampunk"].html = 'Steampunk';

	wholeMenu["Aetas Dragonum"] = [];
	wholeMenu["Aetas Dragonum"].id = "11_6_7";
	wholeMenu["Aetas Dragonum"].color = "red";
	wholeMenu["Aetas Dragonum"].hasSub = 0;
	wholeMenu["Aetas Dragonum"].link = "fotos_images_stokes_age_of_dragons_lat.html";
	wholeMenu["Aetas Dragonum"].html = 'Aetas Dragonum';

	wholeMenu["Soviet Ads"] = [];
	wholeMenu["Soviet Ads"].id = "11_7";
	wholeMenu["Soviet Ads"].color = "red";
	wholeMenu["Soviet Ads"].hasSub = 0;
	wholeMenu["Soviet Ads"].link = "fotos_soviet_ads_lat.html";
	wholeMenu["Soviet Ads"].html = 'Soviet Ads';
}


return wholeMenu;
}



function  loadMenuAmv(lang) {


var wholeMenu = [];

if (lang=="eng") {

	wholeMenu["AMV"] = [];
	wholeMenu["AMV"].id = "12";
	wholeMenu["AMV"].color = "black";
	wholeMenu["AMV"].hasSub = 1;
	wholeMenu["AMV"].link = "";
	wholeMenu["AMV"].html = 'AMV';

	wholeMenu["y2012"] = [];
	wholeMenu["y2012"].id = "12_1";
	wholeMenu["y2012"].color = "black";
	wholeMenu["y2012"].hasSub = 0;
	wholeMenu["y2012"].link = "amv_2012_eng.html";
	wholeMenu["y2012"].html = '2012';

	wholeMenu["2013 &amp; 2014"] = [];
	wholeMenu["2013 &amp; 2014"].id = "12_2";
	wholeMenu["2013 &amp; 2014"].color = "black";
	wholeMenu["2013 &amp; 2014"].hasSub = 0;
	wholeMenu["2013 &amp; 2014"].link = "amv_2013_2014_eng.html";
	wholeMenu["2013 &amp; 2014"].html = '2013 &amp; 2014';

	wholeMenu["2020 &amp; 2021"] = [];
	wholeMenu["2020 &amp; 2021"].id = "12_3";
	wholeMenu["2020 &amp; 2021"].color = "black";
	wholeMenu["2020 &amp; 2021"].hasSub = 0;
	wholeMenu["2020 &amp; 2021"].link = "amv_2020_2021_eng.html";
	wholeMenu["2020 &amp; 2021"].html = '2020 &amp; 2021';


}

if (lang=="rus") {

	wholeMenu["AMV"] = [];
	wholeMenu["AMV"].id = "12";
	wholeMenu["AMV"].color = "black";
	wholeMenu["AMV"].hasSub = 1;
	wholeMenu["AMV"].link = "";
	wholeMenu["AMV"].html = 'AMV';

	wholeMenu["y2012"] = [];
	wholeMenu["y2012"].id = "12_1";
	wholeMenu["y2012"].color = "black";
	wholeMenu["y2012"].hasSub = 0;
	wholeMenu["y2012"].link = "amv_2012_rus.html";
	wholeMenu["y2012"].html = '2012';

	wholeMenu["2013 &amp; 2014"] = [];
	wholeMenu["2013 &amp; 2014"].id = "12_2";
	wholeMenu["2013 &amp; 2014"].color = "black";
	wholeMenu["2013 &amp; 2014"].hasSub = 0;
	wholeMenu["2013 &amp; 2014"].link = "amv_2013_2014_rus.html";
	wholeMenu["2013 &amp; 2014"].html = '2013 &amp; 2014';

	wholeMenu["2020 &amp; 2021"] = [];
	wholeMenu["2020 &amp; 2021"].id = "12_3";
	wholeMenu["2020 &amp; 2021"].color = "black";
	wholeMenu["2020 &amp; 2021"].hasSub = 0;
	wholeMenu["2020 &amp; 2021"].link = "amv_2020_2021_rus.html";
	wholeMenu["2020 &amp; 2021"].html = '2020 &amp; 2021';

}


if (lang=="lat") {

	wholeMenu["AMV"] = [];
	wholeMenu["AMV"].id = "12";
	wholeMenu["AMV"].color = "black";
	wholeMenu["AMV"].hasSub = 1;
	wholeMenu["AMV"].link = "";
	wholeMenu["AMV"].html = 'AMV';

	wholeMenu["y2012"] = [];
	wholeMenu["y2012"].id = "12_1";
	wholeMenu["y2012"].color = "black";
	wholeMenu["y2012"].hasSub = 0;
	wholeMenu["y2012"].link = "amv_2012_lat.html";
	wholeMenu["y2012"].html = '2012';

	wholeMenu["2013 &amp; 2014"] = [];
	wholeMenu["2013 &amp; 2014"].id = "12_2";
	wholeMenu["2013 &amp; 2014"].color = "black";
	wholeMenu["2013 &amp; 2014"].hasSub = 0;
	wholeMenu["2013 &amp; 2014"].link = "amv_2013_2014_lat.html";
	wholeMenu["2013 &amp; 2014"].html = '2013 &amp; 2014';

	wholeMenu["2020 &amp; 2021"] = [];
	wholeMenu["2020 &amp; 2021"].id = "12_3";
	wholeMenu["2020 &amp; 2021"].color = "black";
	wholeMenu["2020 &amp; 2021"].hasSub = 0;
	wholeMenu["2020 &amp; 2021"].link = "amv_2020_2021_lat.html";
	wholeMenu["2020 &amp; 2021"].html = '2020 &amp; 2021';


}

return wholeMenu;
}



function  loadMenuStuff(lang) {


var wholeMenu = [];

if (lang=="eng") {

	wholeMenu["Stuff ⚡ Evil ⚡"] = [];
	wholeMenu["Stuff ⚡ Evil ⚡"].id = "14";
	wholeMenu["Stuff ⚡ Evil ⚡"].color = "black";
	wholeMenu["Stuff ⚡ Evil ⚡"].hasSub = 1;
	wholeMenu["Stuff ⚡ Evil ⚡"].link = "";
	wholeMenu["Stuff ⚡ Evil ⚡"].html = 'Stuff <font color="red"><sup>&#9889; Evil &#9889;</sup></font>';

	wholeMenu["● Videoclips"] = [];
	wholeMenu["● Videoclips"].id = "14_1";
	wholeMenu["● Videoclips"].color = "black";
	wholeMenu["● Videoclips"].hasSub = 1;
	wholeMenu["● Videoclips"].link = "";
	wholeMenu["● Videoclips"].html = '&#9679; Videoclips';

	wholeMenu["About 9. May 1945"] = [];
	wholeMenu["About 9. May 1945"].id = "14_1_1";
	wholeMenu["About 9. May 1945"].color = "black";
	wholeMenu["About 9. May 1945"].hasSub = 0;
	wholeMenu["About 9. May 1945"].link = "stuff_9_may_eng.html";
	wholeMenu["About 9. May 1945"].html = 'About 9. May 1945';

	wholeMenu["Count Dracula Collection"] = [];
	wholeMenu["Count Dracula Collection"].id = "14_1_2";
	wholeMenu["Count Dracula Collection"].color = "black";
	wholeMenu["Count Dracula Collection"].hasSub = 0;
	wholeMenu["Count Dracula Collection"].link = "stuff_count_dracula_eng.html";
	wholeMenu["Count Dracula Collection"].html = 'Count Dracula Collection';

	wholeMenu["Different"] = [];
	wholeMenu["Different"].id = "14_1_3";
	wholeMenu["Different"].color = "black";
	wholeMenu["Different"].hasSub = 0;
	wholeMenu["Different"].link = "stuff_eng.html";
	wholeMenu["Different"].html = 'Different';

	wholeMenu["About Falsifiability"] = [];
	wholeMenu["About Falsifiability"].id = "14_1_4";
	wholeMenu["About Falsifiability"].color = "black";
	wholeMenu["About Falsifiability"].hasSub = 0;
	wholeMenu["About Falsifiability"].link = "stuff_falsifiability_eng.html";
	wholeMenu["About Falsifiability"].html = 'About Falsifiability';

	wholeMenu["About Latin Language"] = [];
	wholeMenu["About Latin Language"].id = "14_1_5";
	wholeMenu["About Latin Language"].color = "black";
	wholeMenu["About Latin Language"].hasSub = 0;
	wholeMenu["About Latin Language"].link = "stuff_latin_eng.html";
	wholeMenu["About Latin Language"].html = 'About Latin Language';

	wholeMenu["About PhD"] = [];
	wholeMenu["About PhD"].id = "14_1_6";
	wholeMenu["About PhD"].color = "black";
	wholeMenu["About PhD"].hasSub = 0;
	wholeMenu["About PhD"].link = "stuff_phd_eng.html";
	wholeMenu["About PhD"].html = 'About PhD';

	wholeMenu["About Russian Language"] = [];
	wholeMenu["About Russian Language"].id = "14_1_7";
	wholeMenu["About Russian Language"].color = "black";
	wholeMenu["About Russian Language"].hasSub = 0;
	wholeMenu["About Russian Language"].link = "stuff_russian_eng.html";
	wholeMenu["About Russian Language"].html = 'About Russian Language';

	wholeMenu["About USSR"] = [];
	wholeMenu["About USSR"].id = "14_1_8";
	wholeMenu["About USSR"].color = "black";
	wholeMenu["About USSR"].hasSub = 0;
	wholeMenu["About USSR"].link = "stuff_ussr_eng.html";
	wholeMenu["About USSR"].html = 'About USSR';

	wholeMenu["Yeralash (rus. Ералаш)"] = [];
	wholeMenu["Yeralash (rus. Ералаш)"].id = "14_1_9";
	wholeMenu["Yeralash (rus. Ералаш)"].color = "black";
	wholeMenu["Yeralash (rus. Ералаш)"].hasSub = 0;
	wholeMenu["Yeralash (rus. Ералаш)"].link = "stuff_yeralash_eng.html";
	wholeMenu["Yeralash (rus. Ералаш)"].html = 'Yeralash (rus. Ералаш)';

	wholeMenu["Chupacabra"] = [];
	wholeMenu["Chupacabra"].id = "14_2";
	wholeMenu["Chupacabra"].color = "black";
	wholeMenu["Chupacabra"].hasSub = 0;
	wholeMenu["Chupacabra"].link = "stuff_chupacabra_eng.html";
	wholeMenu["Chupacabra"].html = 'Chupacabra';

	wholeMenu["Educational Movie ⚡ Evil ⚡"] = [];
	wholeMenu["Educational Movie ⚡ Evil ⚡"].id = "14_3";
	wholeMenu["Educational Movie ⚡ Evil ⚡"].color = "black";
	wholeMenu["Educational Movie ⚡ Evil ⚡"].hasSub = 0;
	wholeMenu["Educational Movie ⚡ Evil ⚡"].link = "stuff_educational_eng.html";
	wholeMenu["Educational Movie ⚡ Evil ⚡"].html = 'Educational Movie <font color="red"><sup>&#9889; Evil &#9889;</sup></font>';

	wholeMenu["Hyperspace"] = [];
	wholeMenu["Hyperspace"].id = "14_4";
	wholeMenu["Hyperspace"].color = "black";
	wholeMenu["Hyperspace"].hasSub = 0;
	wholeMenu["Hyperspace"].link = "stuff_hyperspace_eng.html";
	wholeMenu["Hyperspace"].html = 'Hyperspace';

	wholeMenu["Images"] = [];
	wholeMenu["Images"].id = "14_5";
	wholeMenu["Images"].color = "black";
	wholeMenu["Images"].hasSub = 0;
	wholeMenu["Images"].link = "stuff_images_general_eng.html";
	wholeMenu["Images"].html = 'Images';

	wholeMenu["Warlock"] = [];
	wholeMenu["Warlock"].id = "14_6";
	wholeMenu["Warlock"].color = "black";
	wholeMenu["Warlock"].hasSub = 0;
	wholeMenu["Warlock"].link = "stuff_warlock_eng.html";
	wholeMenu["Warlock"].html = 'Warlock';
}

if (lang=="rus") {

	wholeMenu["Барахло ⚡ Evil ⚡"] = [];
	wholeMenu["Барахло ⚡ Evil ⚡"].id = "14";
	wholeMenu["Барахло ⚡ Evil ⚡"].color = "black";
	wholeMenu["Барахло ⚡ Evil ⚡"].hasSub = 1;
	wholeMenu["Барахло ⚡ Evil ⚡"].link = "";
	wholeMenu["Барахло ⚡ Evil ⚡"].html = 'Барахло <font color="red"><sup>&#9889; Evil &#9889;</sup></font>';

	wholeMenu["● Видеоролики"] = [];
	wholeMenu["● Видеоролики"].id = "14_1";
	wholeMenu["● Видеоролики"].color = "black";
	wholeMenu["● Видеоролики"].hasSub = 1;
	wholeMenu["● Видеоролики"].link = "";
	wholeMenu["● Видеоролики"].html = '&#9679; Видеоролики';

	wholeMenu["Про 9. Мая 1945"] = [];
	wholeMenu["Про 9. Мая 1945"].id = "14_1_1";
	wholeMenu["Про 9. Мая 1945"].color = "black";
	wholeMenu["Про 9. Мая 1945"].hasSub = 0;
	wholeMenu["Про 9. Мая 1945"].link = "stuff_9_may_rus.html";
	wholeMenu["Про 9. Мая 1945"].html = 'Про 9. Мая 1945';

	wholeMenu["Граф Дракула Collection"] = [];
	wholeMenu["Граф Дракула Collection"].id = "14_1_2";
	wholeMenu["Граф Дракула Collection"].color = "black";
	wholeMenu["Граф Дракула Collection"].hasSub = 0;
	wholeMenu["Граф Дракула Collection"].link = "stuff_count_dracula_rus.html";
	wholeMenu["Граф Дракула Collection"].html = 'Граф Дракула Collection';

	wholeMenu["Разное"] = [];
	wholeMenu["Разное"].id = "14_1_3";
	wholeMenu["Разное"].color = "black";
	wholeMenu["Разное"].hasSub = 0;
	wholeMenu["Разное"].link = "stuff_rus.html";
	wholeMenu["Разное"].html = 'Разное';

	wholeMenu["Про Фальсифицируемость"] = [];
	wholeMenu["Про Фальсифицируемость"].id = "14_1_4";
	wholeMenu["Про Фальсифицируемость"].color = "black";
	wholeMenu["Про Фальсифицируемость"].hasSub = 0;
	wholeMenu["Про Фальсифицируемость"].link = "stuff_falsifiability_rus.html";
	wholeMenu["Про Фальсифицируемость"].html = 'Про Фальсифицируемость';

	wholeMenu["Про Латинский Язык"] = [];
	wholeMenu["Про Латинский Язык"].id = "14_1_5";
	wholeMenu["Про Латинский Язык"].color = "black";
	wholeMenu["Про Латинский Язык"].hasSub = 0;
	wholeMenu["Про Латинский Язык"].link = "stuff_latin_rus.html";
	wholeMenu["Про Латинский Язык"].html = 'Про Латинский Язык';

	wholeMenu["Про PhD"] = [];
	wholeMenu["Про PhD"].id = "14_1_6";
	wholeMenu["Про PhD"].color = "black";
	wholeMenu["Про PhD"].hasSub = 0;
	wholeMenu["Про PhD"].link = "stuff_phd_rus.html";
	wholeMenu["Про PhD"].html = 'Про PhD';

	wholeMenu["Про Русский Язык"] = [];
	wholeMenu["Про Русский Язык"].id = "14_1_7";
	wholeMenu["Про Русский Язык"].color = "black";
	wholeMenu["Про Русский Язык"].hasSub = 0;
	wholeMenu["Про Русский Язык"].link = "stuff_russian_rus.html";
	wholeMenu["Про Русский Язык"].html = 'Про Русский Язык';

	wholeMenu["Про СССР"] = [];
	wholeMenu["Про СССР"].id = "14_1_8";
	wholeMenu["Про СССР"].color = "black";
	wholeMenu["Про СССР"].hasSub = 0;
	wholeMenu["Про СССР"].link = "stuff_ussr_rus.html";
	wholeMenu["Про СССР"].html = 'Про СССР';

	wholeMenu["Ералаш"] = [];
	wholeMenu["Ералаш"].id = "14_1_9";
	wholeMenu["Ералаш"].color = "black";
	wholeMenu["Ералаш"].hasSub = 0;
	wholeMenu["Ералаш"].link = "stuff_yeralash_rus.html";
	wholeMenu["Ералаш"].html = 'Ералаш';

	wholeMenu["Чупакабра"] = [];
	wholeMenu["Чупакабра"].id = "14_2";
	wholeMenu["Чупакабра"].color = "black";
	wholeMenu["Чупакабра"].hasSub = 0;
	wholeMenu["Чупакабра"].link = "stuff_chupacabra_rus.html";
	wholeMenu["Чупакабра"].html = 'Чупакабра';

	wholeMenu["Образовательное Кино ⚡ Evil ⚡"] = [];
	wholeMenu["Образовательное Кино ⚡ Evil ⚡"].id = "14_3";
	wholeMenu["Образовательное Кино ⚡ Evil ⚡"].color = "black";
	wholeMenu["Образовательное Кино ⚡ Evil ⚡"].hasSub = 0;
	wholeMenu["Образовательное Кино ⚡ Evil ⚡"].link = "stuff_educational_rus.html";
	wholeMenu["Образовательное Кино ⚡ Evil ⚡"].html = 'Образовательное Кино <font color="red"><sup>&#9889; Evil &#9889;</sup></font>';

	wholeMenu["Гиперпространство"] = [];
	wholeMenu["Гиперпространство"].id = "14_4";
	wholeMenu["Гиперпространство"].color = "black";
	wholeMenu["Гиперпространство"].hasSub = 0;
	wholeMenu["Гиперпространство"].link = "stuff_hyperspace_rus.html";
	wholeMenu["Гиперпространство"].html = 'Гиперпространство';

	wholeMenu["Картинки"] = [];
	wholeMenu["Картинки"].id = "14_5";
	wholeMenu["Картинки"].color = "black";
	wholeMenu["Картинки"].hasSub = 0;
	wholeMenu["Картинки"].link = "stuff_images_general_rus.html";
	wholeMenu["Картинки"].html = 'Картинки';

	wholeMenu["Чернокнижник"] = [];
	wholeMenu["Чернокнижник"].id = "14_6";
	wholeMenu["Чернокнижник"].color = "black";
	wholeMenu["Чернокнижник"].hasSub = 0;
	wholeMenu["Чернокнижник"].link = "stuff_warlock_rus.html";
	wholeMenu["Чернокнижник"].html = 'Чернокнижник';

}


if (lang=="lat") {

	wholeMenu["Effercio ⚡ Evil ⚡"] = [];
	wholeMenu["Effercio ⚡ Evil ⚡"].id = "14";
	wholeMenu["Effercio ⚡ Evil ⚡"].color = "black";
	wholeMenu["Effercio ⚡ Evil ⚡"].hasSub = 1;
	wholeMenu["Effercio ⚡ Evil ⚡"].link = "";
	wholeMenu["Effercio ⚡ Evil ⚡"].html = 'Effercio <font color="red"><sup>&#9889; Evil &#9889;</sup></font>';

	wholeMenu["● Videoclips"] = [];
	wholeMenu["● Videoclips"].id = "14_1";
	wholeMenu["● Videoclips"].color = "black";
	wholeMenu["● Videoclips"].hasSub = 1;
	wholeMenu["● Videoclips"].link = "";
	wholeMenu["● Videoclips"].html = '&#9679; Videoclips';

	wholeMenu["De 9. Maii MCMXLV"] = [];
	wholeMenu["De 9. Maii MCMXLV"].id = "14_1_1";
	wholeMenu["De 9. Maii MCMXLV"].color = "black";
	wholeMenu["De 9. Maii MCMXLV"].hasSub = 0;
	wholeMenu["De 9. Maii MCMXLV"].link = "stuff_9_may_lat.html";
	wholeMenu["De 9. Maii MCMXLV"].html = 'De 9. Maii MCMXLV';

	wholeMenu["Comes Dracula Collectio"] = [];
	wholeMenu["Comes Dracula Collectio"].id = "14_1_2";
	wholeMenu["Comes Dracula Collectio"].color = "black";
	wholeMenu["Comes Dracula Collectio"].hasSub = 0;
	wholeMenu["Comes Dracula Collectio"].link = "stuff_count_dracula_lat.html";
	wholeMenu["Comes Dracula Collectio"].html = 'Comes Dracula Collectio';

	wholeMenu["Miscellanea"] = [];
	wholeMenu["Miscellanea"].id = "14_1_3";
	wholeMenu["Miscellanea"].color = "black";
	wholeMenu["Miscellanea"].hasSub = 0;
	wholeMenu["Miscellanea"].link = "stuff_lat.html";
	wholeMenu["Miscellanea"].html = 'Miscellanea';

	wholeMenu["De Falsifiability"] = [];
	wholeMenu["De Falsifiability"].id = "14_1_4";
	wholeMenu["De Falsifiability"].color = "black";
	wholeMenu["De Falsifiability"].hasSub = 0;
	wholeMenu["De Falsifiability"].link = "stuff_falsifiability_lat.html";
	wholeMenu["De Falsifiability"].html = 'De Falsifiability';

	wholeMenu["De Lingua Latina"] = [];
	wholeMenu["De Lingua Latina"].id = "14_1_5";
	wholeMenu["De Lingua Latina"].color = "black";
	wholeMenu["De Lingua Latina"].hasSub = 0;
	wholeMenu["De Lingua Latina"].link = "stuff_latin_lat.html";
	wholeMenu["De Lingua Latina"].html = 'De Lingua Latina';

	wholeMenu["De PhD"] = [];
	wholeMenu["De PhD"].id = "14_1_6";
	wholeMenu["De PhD"].color = "black";
	wholeMenu["De PhD"].hasSub = 0;
	wholeMenu["De PhD"].link = "stuff_phd_lat.html";
	wholeMenu["De PhD"].html = 'De PhD';

	wholeMenu["De Lingua Russian"] = [];
	wholeMenu["De Lingua Russian"].id = "14_1_7";
	wholeMenu["De Lingua Russian"].color = "black";
	wholeMenu["De Lingua Russian"].hasSub = 0;
	wholeMenu["De Lingua Russian"].link = "stuff_russian_lat.html";
	wholeMenu["De Lingua Russian"].html = 'De Lingua Russian';

	wholeMenu["De USSR"] = [];
	wholeMenu["De USSR"].id = "14_1_8";
	wholeMenu["De USSR"].color = "black";
	wholeMenu["De USSR"].hasSub = 0;
	wholeMenu["De USSR"].link = "stuff_ussr_lat.html";
	wholeMenu["De USSR"].html = 'De USSR';

	wholeMenu["Yeralash (rus. Ералаш)"] = [];
	wholeMenu["Yeralash (rus. Ералаш)"].id = "14_1_9";
	wholeMenu["Yeralash (rus. Ералаш)"].color = "black";
	wholeMenu["Yeralash (rus. Ералаш)"].hasSub = 0;
	wholeMenu["Yeralash (rus. Ералаш)"].link = "stuff_yeralash_lat.html";
	wholeMenu["Yeralash (rus. Ералаш)"].html = 'Yeralash (rus. Ералаш)';

	wholeMenu["Chupacabra"] = [];
	wholeMenu["Chupacabra"].id = "14_2";
	wholeMenu["Chupacabra"].color = "black";
	wholeMenu["Chupacabra"].hasSub = 0;
	wholeMenu["Chupacabra"].link = "stuff_chupacabra_lat.html";
	wholeMenu["Chupacabra"].html = 'Chupacabra';

	wholeMenu["Educational Movie ⚡ Evil ⚡"] = [];
	wholeMenu["Educational Movie ⚡ Evil ⚡"].id = "14_3";
	wholeMenu["Educational Movie ⚡ Evil ⚡"].color = "black";
	wholeMenu["Educational Movie ⚡ Evil ⚡"].hasSub = 0;
	wholeMenu["Educational Movie ⚡ Evil ⚡"].link = "stuff_educational_lat.html";
	wholeMenu["Educational Movie ⚡ Evil ⚡"].html = 'Educational Movie <font color="red"><sup>&#9889; Evil &#9889;</sup></font>';

	wholeMenu["Hyperspace"] = [];
	wholeMenu["Hyperspace"].id = "14_4";
	wholeMenu["Hyperspace"].color = "black";
	wholeMenu["Hyperspace"].hasSub = 0;
	wholeMenu["Hyperspace"].link = "stuff_hyperspace_lat.html";
	wholeMenu["Hyperspace"].html = 'Hyperspace';

	wholeMenu["Imaginibus"] = [];
	wholeMenu["Imaginibus"].id = "14_5";
	wholeMenu["Imaginibus"].color = "black";
	wholeMenu["Imaginibus"].hasSub = 0;
	wholeMenu["Imaginibus"].link = "stuff_images_general_lat.html";
	wholeMenu["Imaginibus"].html = 'Imaginibus';

	wholeMenu["Veneficus"] = [];
	wholeMenu["Veneficus"].id = "14_6";
	wholeMenu["Veneficus"].color = "black";
	wholeMenu["Veneficus"].hasSub = 0;
	wholeMenu["Veneficus"].link = "stuff_warlock_lat.html";
	wholeMenu["Veneficus"].html = 'Veneficus';
}


return wholeMenu;
}




function  loadMenuAnecdotes(lang) {


var wholeMenu = [];


if (lang=="eng") {

	wholeMenu["Anecdotes"] = [];
	wholeMenu["Anecdotes"].id = "15";
	wholeMenu["Anecdotes"].color = "red";
	wholeMenu["Anecdotes"].hasSub = 1;
	wholeMenu["Anecdotes"].link = "";
	wholeMenu["Anecdotes"].html = 'Anecdotes';

	wholeMenu["General"] = [];
	wholeMenu["General"].id = "15_1";
	wholeMenu["General"].color = "red";
	wholeMenu["General"].hasSub = 0;
	wholeMenu["General"].link = "anekdots_general_eng.html";
	wholeMenu["General"].html = 'General';

	wholeMenu["Lieutenant Rzhevskiy"] = [];
	wholeMenu["Lieutenant Rzhevskiy"].id = "15_2";
	wholeMenu["Lieutenant Rzhevskiy"].color = "red";
	wholeMenu["Lieutenant Rzhevskiy"].hasSub = 0;
	wholeMenu["Lieutenant Rzhevskiy"].link = "anekdots_lieutenant_rzhevskiy_eng.html";
	wholeMenu["Lieutenant Rzhevskiy"].html = 'Lieutenant Rzhevskiy';

	wholeMenu["Nuthouse"] = [];
	wholeMenu["Nuthouse"].id = "15_3";
	wholeMenu["Nuthouse"].color = "red";
	wholeMenu["Nuthouse"].hasSub = 0;
	wholeMenu["Nuthouse"].link = "anekdots_nuthouse_eng.html";
	wholeMenu["Nuthouse"].html = 'Nuthouse';

	wholeMenu["Politics"] = [];
	wholeMenu["Politics"].id = "15_4";
	wholeMenu["Politics"].color = "red";
	wholeMenu["Politics"].hasSub = 0;
	wholeMenu["Politics"].link = "anekdots_politics_eng.html";
	wholeMenu["Politics"].html = 'Politics';

	wholeMenu["Students"] = [];
	wholeMenu["Students"].id = "15_5";
	wholeMenu["Students"].color = "red";
	wholeMenu["Students"].hasSub = 0;
	wholeMenu["Students"].link = "anekdots_students_eng.html";
	wholeMenu["Students"].html = 'Students';

	wholeMenu["Vovochka"] = [];
	wholeMenu["Vovochka"].id = "15_6";
	wholeMenu["Vovochka"].color = "red";
	wholeMenu["Vovochka"].hasSub = 0;
	wholeMenu["Vovochka"].link = "anekdots_vovochka_eng.html";
	wholeMenu["Vovochka"].html = 'Vovochka';
}




if (lang=="rus") {

	wholeMenu["Анекдоты"] = [];
	wholeMenu["Анекдоты"].id = "15";
	wholeMenu["Анекдоты"].color = "red";
	wholeMenu["Анекдоты"].hasSub = 1;
	wholeMenu["Анекдоты"].link = "";
	wholeMenu["Анекдоты"].html = 'Анекдоты';

	wholeMenu["Общие"] = [];
	wholeMenu["Общие"].id = "15_1";
	wholeMenu["Общие"].color = "red";
	wholeMenu["Общие"].hasSub = 0;
	wholeMenu["Общие"].link = "anekdots_general_rus.html";
	wholeMenu["Общие"].html = 'Общие';

	wholeMenu["Поручик Ржевский"] = [];
	wholeMenu["Поручик Ржевский"].id = "15_2";
	wholeMenu["Поручик Ржевский"].color = "red";
	wholeMenu["Поручик Ржевский"].hasSub = 0;
	wholeMenu["Поручик Ржевский"].link = "anekdots_lieutenant_rzhevskiy_rus.html";
	wholeMenu["Поручик Ржевский"].html = 'Поручик Ржевский';

	wholeMenu["Психушка"] = [];
	wholeMenu["Психушка"].id = "15_3";
	wholeMenu["Психушка"].color = "red";
	wholeMenu["Психушка"].hasSub = 0;
	wholeMenu["Психушка"].link = "anekdots_nuthouse_rus.html";
	wholeMenu["Психушка"].html = 'Психушка';

	wholeMenu["Политика"] = [];
	wholeMenu["Политика"].id = "15_4";
	wholeMenu["Политика"].color = "red";
	wholeMenu["Политика"].hasSub = 0;
	wholeMenu["Политика"].link = "anekdots_politics_rus.html";
	wholeMenu["Политика"].html = 'Политика';

	wholeMenu["Студенты"] = [];
	wholeMenu["Студенты"].id = "15_5";
	wholeMenu["Студенты"].color = "red";
	wholeMenu["Студенты"].hasSub = 0;
	wholeMenu["Студенты"].link = "anekdots_students_rus.html";
	wholeMenu["Студенты"].html = 'Студенты';

	wholeMenu["Вовочка"] = [];
	wholeMenu["Вовочка"].id = "15_6";
	wholeMenu["Вовочка"].color = "red";
	wholeMenu["Вовочка"].hasSub = 0;
	wholeMenu["Вовочка"].link = "anekdots_vovochka_rus.html";
	wholeMenu["Вовочка"].html = 'Вовочка';
}


return wholeMenu;
}



function  loadMenuRelaxation(lang) {


var wholeMenu = [];


if (lang=="eng") {

	wholeMenu["Substances For Relaxation"] = [];
	wholeMenu["Substances For Relaxation"].id = "17";
	wholeMenu["Substances For Relaxation"].color = "white";
	wholeMenu["Substances For Relaxation"].hasSub = 1;
	wholeMenu["Substances For Relaxation"].link = "";
	wholeMenu["Substances For Relaxation"].html = 'Substances For Relaxation';

	wholeMenu["Cacao"] = [];
	wholeMenu["Cacao"].id = "17_1";
	wholeMenu["Cacao"].color = "white";
	wholeMenu["Cacao"].hasSub = 0;
	wholeMenu["Cacao"].link = "substances_for_relaxation_cacao_eng.html";
	wholeMenu["Cacao"].html = 'Cacao';

	wholeMenu["Cannabis"] = [];
	wholeMenu["Cannabis"].id = "17_2";
	wholeMenu["Cannabis"].color = "white";
	wholeMenu["Cannabis"].hasSub = 0;
	wholeMenu["Cannabis"].link = "substances_for_relaxation_cannabis_eng.html";
	wholeMenu["Cannabis"].html = 'Cannabis';

	wholeMenu["Cigarettes"] = [];
	wholeMenu["Cigarettes"].id = "17_3";
	wholeMenu["Cigarettes"].color = "white";
	wholeMenu["Cigarettes"].hasSub = 0;
	wholeMenu["Cigarettes"].link = "substances_for_relaxation_cigarettes_eng.html";
	wholeMenu["Cigarettes"].html = 'Cigarettes';

	wholeMenu["Coffee"] = [];
	wholeMenu["Coffee"].id = "17_4";
	wholeMenu["Coffee"].color = "white";
	wholeMenu["Coffee"].hasSub = 0;
	wholeMenu["Coffee"].link = "substances_for_relaxation_coffee_eng.html";
	wholeMenu["Coffee"].html = 'Coffee';

	wholeMenu["Energy Drinks"] = [];
	wholeMenu["Energy Drinks"].id = "17_5";
	wholeMenu["Energy Drinks"].color = "white";
	wholeMenu["Energy Drinks"].hasSub = 0;
	wholeMenu["Energy Drinks"].link = "substances_for_relaxation_energy_drinks_eng.html";
	wholeMenu["Energy Drinks"].html = 'Energy Drinks';

	wholeMenu["Psilocybin Mushrooms"] = [];
	wholeMenu["Psilocybin Mushrooms"].id = "17_6";
	wholeMenu["Psilocybin Mushrooms"].color = "white";
	wholeMenu["Psilocybin Mushrooms"].hasSub = 0;
	wholeMenu["Psilocybin Mushrooms"].link = "substances_for_relaxation_psilocybin_mushrooms_eng.html";
	wholeMenu["Psilocybin Mushrooms"].html = 'Psilocybin Mushrooms';

	wholeMenu["Tea"] = [];
	wholeMenu["Tea"].id = "17_7";
	wholeMenu["Tea"].color = "white";
	wholeMenu["Tea"].hasSub = 0;
	wholeMenu["Tea"].link = "substances_for_relaxation_tea_eng.html";
	wholeMenu["Tea"].html = 'Tea';

	wholeMenu["Tobacco"] = [];
	wholeMenu["Tobacco"].id = "17_7";
	wholeMenu["Tobacco"].color = "white";
	wholeMenu["Tobacco"].hasSub = 0;
	wholeMenu["Tobacco"].link = "substances_for_relaxation_tobacco_eng.html";
	wholeMenu["Tobacco"].html = 'Tobacco';
}




if (lang=="rus") {

	wholeMenu["Вещества Для Расслабления"] = [];
	wholeMenu["Вещества Для Расслабления"].id = "17";
	wholeMenu["Вещества Для Расслабления"].color = "white";
	wholeMenu["Вещества Для Расслабления"].hasSub = 1;
	wholeMenu["Вещества Для Расслабления"].link = "";
	wholeMenu["Вещества Для Расслабления"].html = 'Вещества Для Расслабления';

	wholeMenu["Какао"] = [];
	wholeMenu["Какао"].id = "17_1";
	wholeMenu["Какао"].color = "white";
	wholeMenu["Какао"].hasSub = 0;
	wholeMenu["Какао"].link = "substances_for_relaxation_cacao_rus.html";
	wholeMenu["Какао"].html = 'Какао';

	wholeMenu["Конопля"] = [];
	wholeMenu["Конопля"].id = "17_2";
	wholeMenu["Конопля"].color = "white";
	wholeMenu["Конопля"].hasSub = 0;
	wholeMenu["Конопля"].link = "substances_for_relaxation_cannabis_rus.html";
	wholeMenu["Конопля"].html = 'Конопля';

	wholeMenu["Сигареты"] = [];
	wholeMenu["Сигареты"].id = "17_3";
	wholeMenu["Сигареты"].color = "white";
	wholeMenu["Сигареты"].hasSub = 0;
	wholeMenu["Сигареты"].link = "substances_for_relaxation_cigarettes_rus.html";
	wholeMenu["Сигареты"].html = 'Сигареты';

	wholeMenu["Кофе"] = [];
	wholeMenu["Кофе"].id = "17_4";
	wholeMenu["Кофе"].color = "white";
	wholeMenu["Кофе"].hasSub = 0;
	wholeMenu["Кофе"].link = "substances_for_relaxation_coffee_rus.html";
	wholeMenu["Кофе"].html = 'Кофе';

	wholeMenu["Энергетические Напитки"] = [];
	wholeMenu["Энергетические Напитки"].id = "17_5";
	wholeMenu["Энергетические Напитки"].color = "white";
	wholeMenu["Энергетические Напитки"].hasSub = 0;
	wholeMenu["Энергетические Напитки"].link = "substances_for_relaxation_energy_drinks_rus.html";
	wholeMenu["Энергетические Напитки"].html = 'Энергетические Напитки';

	wholeMenu["Галлюциногенные Грибы"] = [];
	wholeMenu["Галлюциногенные Грибы"].id = "17_6";
	wholeMenu["Галлюциногенные Грибы"].color = "white";
	wholeMenu["Галлюциногенные Грибы"].hasSub = 0;
	wholeMenu["Галлюциногенные Грибы"].link = "substances_for_relaxation_psilocybin_mushrooms_rus.html";
	wholeMenu["Галлюциногенные Грибы"].html = 'Галлюциногенные Грибы';

	wholeMenu["Чай"] = [];
	wholeMenu["Чай"].id = "17_7";
	wholeMenu["Чай"].color = "white";
	wholeMenu["Чай"].hasSub = 0;
	wholeMenu["Чай"].link = "substances_for_relaxation_tea_rus.html";
	wholeMenu["Чай"].html = 'Чай';

	wholeMenu["Табак"] = [];
	wholeMenu["Табак"].id = "17_7";
	wholeMenu["Табак"].color = "white";
	wholeMenu["Табак"].hasSub = 0;
	wholeMenu["Табак"].link = "substances_for_relaxation_tobacco_rus.html";
	wholeMenu["Табак"].html = 'Табак';
}


return wholeMenu;
}


function  loadMenuSoftware(lang) {


var wholeMenu = [];


if (lang=="eng") {

	wholeMenu["Software Development"] = [];
	wholeMenu["Software Development"].id = "18";
	wholeMenu["Software Development"].color = "white";
	wholeMenu["Software Development"].hasSub = 1;
	wholeMenu["Software Development"].link = "";
	wholeMenu["Software Development"].html = 'Software Development';


	wholeMenu["● Audio/Video Processing"] = [];
	wholeMenu["● Audio/Video Processing"].id = "18_1";
	wholeMenu["● Audio/Video Processing"].color = "white";
	wholeMenu["● Audio/Video Processing"].hasSub = 1;
	wholeMenu["● Audio/Video Processing"].link = "";
	wholeMenu["● Audio/Video Processing"].html = '&#9679; Audio/Video Processing';


	wholeMenu["GoldWave"] = [];
	wholeMenu["GoldWave"].id = "18_1_1";
	wholeMenu["GoldWave"].color = "white";
	wholeMenu["GoldWave"].hasSub = 0;
	wholeMenu["GoldWave"].link = "software_development_goldvawe_eng.html";
	wholeMenu["GoldWave"].html = 'GoldWave';

	wholeMenu["Movie Maker Online"] = [];
	wholeMenu["Movie Maker Online"].id = "18_1_2";
	wholeMenu["Movie Maker Online"].color = "white";
	wholeMenu["Movie Maker Online"].hasSub = 0;
	wholeMenu["Movie Maker Online"].link = "software_development_movie_maker_online_eng.html";
	wholeMenu["Movie Maker Online"].html = 'Movie Maker Online';

	wholeMenu["Windows Movie Maker"] = [];
	wholeMenu["Windows Movie Maker"].id = "18_1_3";
	wholeMenu["Windows Movie Maker"].color = "white";
	wholeMenu["Windows Movie Maker"].hasSub = 0;
	wholeMenu["Windows Movie Maker"].link = "software_development_windows_movie_maker_eng.html";
	wholeMenu["Windows Movie Maker"].html = 'Windows Movie Maker';

	wholeMenu["● Data Processing"] = [];
	wholeMenu["● Data Processing"].id = "18_2";
	wholeMenu["● Data Processing"].color = "white";
	wholeMenu["● Data Processing"].hasSub = 1;
	wholeMenu["● Data Processing"].link = "";
	wholeMenu["● Data Processing"].html = '&#9679; Data Processing';

	wholeMenu["MathCad"] = [];
	wholeMenu["MathCad"].id = "18_2_1";
	wholeMenu["MathCad"].color = "white";
	wholeMenu["MathCad"].hasSub = 0;
	wholeMenu["MathCad"].link = "software_development_mathcad_eng.html";
	wholeMenu["MathCad"].html = 'MathCad';

	wholeMenu["MatLab"] = [];
	wholeMenu["MatLab"].id = "18_2_2";
	wholeMenu["MatLab"].color = "white";
	wholeMenu["MatLab"].hasSub = 0;
	wholeMenu["MatLab"].link = "software_development_matlab_eng.html";
	wholeMenu["MatLab"].html = 'MatLab';

	wholeMenu["● Drawing"] = [];
	wholeMenu["● Drawing"].id = "18_3";
	wholeMenu["● Drawing"].color = "white";
	wholeMenu["● Drawing"].hasSub = 1;
	wholeMenu["● Drawing"].link = "";
	wholeMenu["● Drawing"].html = '&#9679; Drawing';

	wholeMenu["CorelDraw"] = [];
	wholeMenu["CorelDraw"].id = "18_3_1";
	wholeMenu["CorelDraw"].color = "white";
	wholeMenu["CorelDraw"].hasSub = 0;
	wholeMenu["CorelDraw"].link = "software_development_coreldraw_eng.html";
	wholeMenu["CorelDraw"].html = 'CorelDraw';

	wholeMenu["Gimp (Linux)"] = [];
	wholeMenu["Gimp (Linux)"].id = "18_3_2";
	wholeMenu["Gimp (Linux)"].color = "white";
	wholeMenu["Gimp (Linux)"].hasSub = 0;
	wholeMenu["Gimp (Linux)"].link = "software_development_gimp_eng.html";
	wholeMenu["Gimp (Linux)"].html = 'Gimp (Linux)';

	wholeMenu["Paint"] = [];
	wholeMenu["Paint"].id = "18_3_3";
	wholeMenu["Paint"].color = "white";
	wholeMenu["Paint"].hasSub = 0;
	wholeMenu["Paint"].link = "software_development_paint_eng.html";
	wholeMenu["Paint"].html = 'Paint';

	wholeMenu["Photoshop"] = [];
	wholeMenu["Photoshop"].id = "18_3_3";
	wholeMenu["Photoshop"].color = "white";
	wholeMenu["Photoshop"].hasSub = 0;
	wholeMenu["Photoshop"].link = "software_development_photoshop_eng.html";
	wholeMenu["Photoshop"].html = 'Photoshop';

	wholeMenu["● IDE"] = [];
	wholeMenu["● IDE"].id = "18_4";
	wholeMenu["● IDE"].color = "white";
	wholeMenu["● IDE"].hasSub = 1;
	wholeMenu["● IDE"].link = "";
	wholeMenu["● IDE"].html = '&#9679; IDE';

	wholeMenu["Eclipse"] = [];
	wholeMenu["Eclipse"].id = "18_4_1";
	wholeMenu["Eclipse"].color = "white";
	wholeMenu["Eclipse"].hasSub = 0;
	wholeMenu["Eclipse"].link = "software_development_eclipse_eng.html";
	wholeMenu["Eclipse"].html = 'Eclipse';

	wholeMenu["NetBeans"] = [];
	wholeMenu["NetBeans"].id = "18_4_2";
	wholeMenu["NetBeans"].color = "white";
	wholeMenu["NetBeans"].hasSub = 0;
	wholeMenu["NetBeans"].link = "software_development_netbeans_eng.html";
	wholeMenu["NetBeans"].html = 'NetBeans';

	wholeMenu["● Programming Languages"] = [];
	wholeMenu["● Programming Languages"].id = "18_5";
	wholeMenu["● Programming Languages"].color = "white";
	wholeMenu["● Programming Languages"].hasSub = 1;
	wholeMenu["● Programming Languages"].link = "";
	wholeMenu["● Programming Languages"].html = '&#9679; Programming Languages';

	wholeMenu["Visual Basic"] = [];
	wholeMenu["Visual Basic"].id = "18_5_1";
	wholeMenu["Visual Basic"].color = "white";
	wholeMenu["Visual Basic"].hasSub = 0;
	wholeMenu["Visual Basic"].link = "software_development_visual_basic_eng.html";
	wholeMenu["Visual Basic"].html = 'Visual Basic';

	wholeMenu["C++"] = [];
	wholeMenu["C++"].id = "18_5_2";
	wholeMenu["C++"].color = "white";
	wholeMenu["C++"].hasSub = 0;
	wholeMenu["C++"].link = "software_development_c++_eng.html";
	wholeMenu["C++"].html = 'C++';

	wholeMenu["Fortran"] = [];
	wholeMenu["Fortran"].id = "18_5_3";
	wholeMenu["Fortran"].color = "white";
	wholeMenu["Fortran"].hasSub = 0;
	wholeMenu["Fortran"].link = "software_development_fortran_eng.html";
	wholeMenu["Fortran"].html = 'Fortran';

	wholeMenu["Java/JavaScript"] = [];
	wholeMenu["Java/JavaScript"].id = "18_5_4";
	wholeMenu["Java/JavaScript"].color = "white";
	wholeMenu["Java/JavaScript"].hasSub = 0;
	wholeMenu["Java/JavaScript"].link = "software_development_javascript_eng.html";
	wholeMenu["Java/JavaScript"].html = 'Java/JavaScript';

	wholeMenu["Html"] = [];
	wholeMenu["Html"].id = "18_5_5";
	wholeMenu["Html"].color = "white";
	wholeMenu["Html"].hasSub = 0;
	wholeMenu["Html"].link = "software_development_html_eng.html";
	wholeMenu["Html"].html = 'Html';

	wholeMenu["Laravel"] = [];
	wholeMenu["Laravel"].id = "18_5_6";
	wholeMenu["Laravel"].color = "white";
	wholeMenu["Laravel"].hasSub = 0;
	wholeMenu["Laravel"].link = "software_development_laravel_eng.html";
	wholeMenu["Laravel"].html = 'Laravel';

	wholeMenu["PHP/MySql"] = [];
	wholeMenu["PHP/MySql"].id = "18_5_7";
	wholeMenu["PHP/MySql"].color = "white";
	wholeMenu["PHP/MySql"].hasSub = 0;
	wholeMenu["PHP/MySql"].link = "software_development_php_eng.html";
	wholeMenu["PHP/MySql"].html = 'PHP/MySql';

	wholeMenu["Python"] = [];
	wholeMenu["Python"].id = "18_5_8";
	wholeMenu["Python"].color = "white";
	wholeMenu["Python"].hasSub = 0;
	wholeMenu["Python"].link = "software_development_python_eng.html";
	wholeMenu["Python"].html = 'Python';

	wholeMenu["Ruby On Rails"] = [];
	wholeMenu["Ruby On Rails"].id = "18_5_9";
	wholeMenu["Ruby On Rails"].color = "white";
	wholeMenu["Ruby On Rails"].hasSub = 0;
	wholeMenu["Ruby On Rails"].link = "software_development_ruby_on_rails_eng.html";
	wholeMenu["Ruby On Rails"].html = 'Ruby On Rails';


	wholeMenu["● Text Processing"] = [];
	wholeMenu["● Text Processing"].id = "18_6";
	wholeMenu["● Text Processing"].color = "white";
	wholeMenu["● Text Processing"].hasSub = 1;
	wholeMenu["● Text Processing"].link = "";
	wholeMenu["● Text Processing"].html = '&#9679; Text Processing';

	wholeMenu["Latex"] = [];
	wholeMenu["Latex"].id = "18_6_1";
	wholeMenu["Latex"].color = "white";
	wholeMenu["Latex"].hasSub = 0;
	wholeMenu["Latex"].link = "software_development_latex_eng.html";
	wholeMenu["Latex"].html = 'Latex';

	wholeMenu["Microsoft Office"] = [];
	wholeMenu["Microsoft Office"].id = "18_6_2";
	wholeMenu["Microsoft Office"].color = "white";
	wholeMenu["Microsoft Office"].hasSub = 0;
	wholeMenu["Microsoft Office"].link = "software_development_microsoft_office_eng.html";
	wholeMenu["Microsoft Office"].html = 'Microsoft Office';

	wholeMenu["Notepad++"] = [];
	wholeMenu["Notepad++"].id = "18_6_3";
	wholeMenu["Notepad++"].color = "white";
	wholeMenu["Notepad++"].hasSub = 0;
	wholeMenu["Notepad++"].link = "software_development_notepad++_eng.html";
	wholeMenu["Notepad++"].html = 'Notepad++';

	wholeMenu["Movies About IT"] = [];
	wholeMenu["Movies About IT"].id = "18_7";
	wholeMenu["Movies About IT"].color = "white";
	wholeMenu["Movies About IT"].hasSub = 0;
	wholeMenu["Movies About IT"].link = "software_development_it_movies_eng.html";
	wholeMenu["Movies About IT"].html = 'Movies About IT';

	wholeMenu["Music About IT"] = [];
	wholeMenu["Music About IT"].id = "18_8";
	wholeMenu["Music About IT"].color = "white";
	wholeMenu["Music About IT"].hasSub = 0;
	wholeMenu["Music About IT"].link = "software_development_it_music_eng.html";
	wholeMenu["Music About IT"].html = 'Music About IT';
}




if (lang=="rus") {


	wholeMenu["Разработка Программ"] = [];
	wholeMenu["Разработка Программ"].id = "18";
	wholeMenu["Разработка Программ"].color = "white";
	wholeMenu["Разработка Программ"].hasSub = 1;
	wholeMenu["Разработка Программ"].link = "";
	wholeMenu["Разработка Программ"].html = 'Разработка Программ';


	wholeMenu["● Обработка Аудио/Видео"] = [];
	wholeMenu["● Обработка Аудио/Видео"].id = "18_1";
	wholeMenu["● Обработка Аудио/Видео"].color = "white";
	wholeMenu["● Обработка Аудио/Видео"].hasSub = 1;
	wholeMenu["● Обработка Аудио/Видео"].link = "";
	wholeMenu["● Обработка Аудио/Видео"].html = '&#9679; Обработка Аудио/Видео';


	wholeMenu["GoldWave"] = [];
	wholeMenu["GoldWave"].id = "18_1_1";
	wholeMenu["GoldWave"].color = "white";
	wholeMenu["GoldWave"].hasSub = 0;
	wholeMenu["GoldWave"].link = "software_development_goldvawe_rus.html";
	wholeMenu["GoldWave"].html = 'GoldWave';

	wholeMenu["Movie Maker Online"] = [];
	wholeMenu["Movie Maker Online"].id = "18_1_2";
	wholeMenu["Movie Maker Online"].color = "white";
	wholeMenu["Movie Maker Online"].hasSub = 0;
	wholeMenu["Movie Maker Online"].link = "software_development_movie_maker_online_rus.html";
	wholeMenu["Movie Maker Online"].html = 'Movie Maker Online';

	wholeMenu["Windows Movie Maker"] = [];
	wholeMenu["Windows Movie Maker"].id = "18_1_3";
	wholeMenu["Windows Movie Maker"].color = "white";
	wholeMenu["Windows Movie Maker"].hasSub = 0;
	wholeMenu["Windows Movie Maker"].link = "software_development_windows_movie_maker_rus.html";
	wholeMenu["Windows Movie Maker"].html = 'Windows Movie Maker';

	wholeMenu["● Обработка Данных"] = [];
	wholeMenu["● Обработка Данных"].id = "18_2";
	wholeMenu["● Обработка Данных"].color = "white";
	wholeMenu["● Обработка Данных"].hasSub = 1;
	wholeMenu["● Обработка Данных"].link = "";
	wholeMenu["● Обработка Данных"].html = '&#9679; Обработка Данных';

	wholeMenu["MathCad"] = [];
	wholeMenu["MathCad"].id = "18_2_1";
	wholeMenu["MathCad"].color = "white";
	wholeMenu["MathCad"].hasSub = 0;
	wholeMenu["MathCad"].link = "software_development_mathcad_rus.html";
	wholeMenu["MathCad"].html = 'MathCad';

	wholeMenu["MatLab"] = [];
	wholeMenu["MatLab"].id = "18_2_2";
	wholeMenu["MatLab"].color = "white";
	wholeMenu["MatLab"].hasSub = 0;
	wholeMenu["MatLab"].link = "software_development_matlab_rus.html";
	wholeMenu["MatLab"].html = 'MatLab';

	wholeMenu["● Рисование"] = [];
	wholeMenu["● Рисование"].id = "18_3";
	wholeMenu["● Рисование"].color = "white";
	wholeMenu["● Рисование"].hasSub = 1;
	wholeMenu["● Рисование"].link = "";
	wholeMenu["● Рисование"].html = '&#9679; Рисование';

	wholeMenu["CorelDraw"] = [];
	wholeMenu["CorelDraw"].id = "18_3_1";
	wholeMenu["CorelDraw"].color = "white";
	wholeMenu["CorelDraw"].hasSub = 0;
	wholeMenu["CorelDraw"].link = "software_development_coreldraw_rus.html";
	wholeMenu["CorelDraw"].html = 'CorelDraw';

	wholeMenu["Gimp (Linux)"] = [];
	wholeMenu["Gimp (Linux)"].id = "18_3_2";
	wholeMenu["Gimp (Linux)"].color = "white";
	wholeMenu["Gimp (Linux)"].hasSub = 0;
	wholeMenu["Gimp (Linux)"].link = "software_development_gimp_rus.html";
	wholeMenu["Gimp (Linux)"].html = 'Gimp (Linux)';

	wholeMenu["Paint"] = [];
	wholeMenu["Paint"].id = "18_3_3";
	wholeMenu["Paint"].color = "white";
	wholeMenu["Paint"].hasSub = 0;
	wholeMenu["Paint"].link = "software_development_paint_rus.html";
	wholeMenu["Paint"].html = 'Paint';

	wholeMenu["Photoshop"] = [];
	wholeMenu["Photoshop"].id = "18_3_3";
	wholeMenu["Photoshop"].color = "white";
	wholeMenu["Photoshop"].hasSub = 0;
	wholeMenu["Photoshop"].link = "software_development_photoshop_rus.html";
	wholeMenu["Photoshop"].html = 'Photoshop';

	wholeMenu["● IDE"] = [];
	wholeMenu["● IDE"].id = "18_4";
	wholeMenu["● IDE"].color = "white";
	wholeMenu["● IDE"].hasSub = 1;
	wholeMenu["● IDE"].link = "";
	wholeMenu["● IDE"].html = '&#9679; IDE';

	wholeMenu["Eclipse"] = [];
	wholeMenu["Eclipse"].id = "18_4_1";
	wholeMenu["Eclipse"].color = "white";
	wholeMenu["Eclipse"].hasSub = 0;
	wholeMenu["Eclipse"].link = "software_development_eclipse_rus.html";
	wholeMenu["Eclipse"].html = 'Eclipse';

	wholeMenu["NetBeans"] = [];
	wholeMenu["NetBeans"].id = "18_4_2";
	wholeMenu["NetBeans"].color = "white";
	wholeMenu["NetBeans"].hasSub = 0;
	wholeMenu["NetBeans"].link = "software_development_netbeans_rus.html";
	wholeMenu["NetBeans"].html = 'NetBeans';

	wholeMenu["● Языки Программирования"] = [];
	wholeMenu["● Языки Программирования"].id = "18_5";
	wholeMenu["● Языки Программирования"].color = "white";
	wholeMenu["● Языки Программирования"].hasSub = 1;
	wholeMenu["● Языки Программирования"].link = "";
	wholeMenu["● Языки Программирования"].html = '&#9679; Языки Программирования';

	wholeMenu["Visual Basic"] = [];
	wholeMenu["Visual Basic"].id = "18_5_1";
	wholeMenu["Visual Basic"].color = "white";
	wholeMenu["Visual Basic"].hasSub = 0;
	wholeMenu["Visual Basic"].link = "software_development_visual_basic_rus.html";
	wholeMenu["Visual Basic"].html = 'Visual Basic';

	wholeMenu["C++"] = [];
	wholeMenu["C++"].id = "18_5_2";
	wholeMenu["C++"].color = "white";
	wholeMenu["C++"].hasSub = 0;
	wholeMenu["C++"].link = "software_development_c++_rus.html";
	wholeMenu["C++"].html = 'C++';

	wholeMenu["Fortran"] = [];
	wholeMenu["Fortran"].id = "18_5_3";
	wholeMenu["Fortran"].color = "white";
	wholeMenu["Fortran"].hasSub = 0;
	wholeMenu["Fortran"].link = "software_development_fortran_rus.html";
	wholeMenu["Fortran"].html = 'Fortran';

	wholeMenu["Java/JavaScript"] = [];
	wholeMenu["Java/JavaScript"].id = "18_5_4";
	wholeMenu["Java/JavaScript"].color = "white";
	wholeMenu["Java/JavaScript"].hasSub = 0;
	wholeMenu["Java/JavaScript"].link = "software_development_javascript_rus.html";
	wholeMenu["Java/JavaScript"].html = 'Java/JavaScript';

	wholeMenu["Html"] = [];
	wholeMenu["Html"].id = "18_5_5";
	wholeMenu["Html"].color = "white";
	wholeMenu["Html"].hasSub = 0;
	wholeMenu["Html"].link = "software_development_html_rus.html";
	wholeMenu["Html"].html = 'Html';

	wholeMenu["Laravel"] = [];
	wholeMenu["Laravel"].id = "18_5_6";
	wholeMenu["Laravel"].color = "white";
	wholeMenu["Laravel"].hasSub = 0;
	wholeMenu["Laravel"].link = "software_development_laravel_rus.html";
	wholeMenu["Laravel"].html = 'Laravel';

	wholeMenu["PHP/MySql"] = [];
	wholeMenu["PHP/MySql"].id = "18_5_7";
	wholeMenu["PHP/MySql"].color = "white";
	wholeMenu["PHP/MySql"].hasSub = 0;
	wholeMenu["PHP/MySql"].link = "software_development_php_rus.html";
	wholeMenu["PHP/MySql"].html = 'PHP/MySql';

	wholeMenu["Python"] = [];
	wholeMenu["Python"].id = "18_5_8";
	wholeMenu["Python"].color = "white";
	wholeMenu["Python"].hasSub = 0;
	wholeMenu["Python"].link = "software_development_python_rus.html";
	wholeMenu["Python"].html = 'Python';

	wholeMenu["Ruby On Rails"] = [];
	wholeMenu["Ruby On Rails"].id = "18_5_9";
	wholeMenu["Ruby On Rails"].color = "white";
	wholeMenu["Ruby On Rails"].hasSub = 0;
	wholeMenu["Ruby On Rails"].link = "software_development_ruby_on_rails_rus.html";
	wholeMenu["Ruby On Rails"].html = 'Ruby On Rails';


	wholeMenu["● Обработка Текста"] = [];
	wholeMenu["● Обработка Текста"].id = "18_6";
	wholeMenu["● Обработка Текста"].color = "white";
	wholeMenu["● Обработка Текста"].hasSub = 1;
	wholeMenu["● Обработка Текста"].link = "";
	wholeMenu["● Обработка Текста"].html = '&#9679; Обработка Текста';

	wholeMenu["Latex"] = [];
	wholeMenu["Latex"].id = "18_6_1";
	wholeMenu["Latex"].color = "white";
	wholeMenu["Latex"].hasSub = 0;
	wholeMenu["Latex"].link = "software_development_latex_rus.html";
	wholeMenu["Latex"].html = 'Latex';

	wholeMenu["Microsoft Office"] = [];
	wholeMenu["Microsoft Office"].id = "18_6_2";
	wholeMenu["Microsoft Office"].color = "white";
	wholeMenu["Microsoft Office"].hasSub = 0;
	wholeMenu["Microsoft Office"].link = "software_development_microsoft_office_rus.html";
	wholeMenu["Microsoft Office"].html = 'Microsoft Office';

	wholeMenu["Notepad++"] = [];
	wholeMenu["Notepad++"].id = "18_6_3";
	wholeMenu["Notepad++"].color = "white";
	wholeMenu["Notepad++"].hasSub = 0;
	wholeMenu["Notepad++"].link = "software_development_notepad++_rus.html";
	wholeMenu["Notepad++"].html = 'Notepad++';

	wholeMenu["Фильмы Про IT"] = [];
	wholeMenu["Фильмы Про IT"].id = "18_7";
	wholeMenu["Фильмы Про IT"].color = "white";
	wholeMenu["Фильмы Про IT"].hasSub = 0;
	wholeMenu["Фильмы Про IT"].link = "software_development_it_movies_rus.html";
	wholeMenu["Фильмы Про IT"].html = 'Фильмы Про IT';

	wholeMenu["Музыка Про IT"] = [];
	wholeMenu["Музыка Про IT"].id = "18_8";
	wholeMenu["Музыка Про IT"].color = "white";
	wholeMenu["Музыка Про IT"].hasSub = 0;
	wholeMenu["Музыка Про IT"].link = "software_development_it_music_rus.html";
	wholeMenu["Музыка Про IT"].html = 'Музыка Про IT';
}


return wholeMenu;
}


function  loadMenuSatanism(lang) {


var wholeMenu = [];


if (lang=="eng") {

	wholeMenu["Satanism"] = [];
	wholeMenu["Satanism"].id = "19";
	wholeMenu["Satanism"].color = "green";
	wholeMenu["Satanism"].hasSub = 1;
	wholeMenu["Satanism"].link = "";
	wholeMenu["Satanism"].html = 'Satanism';

	wholeMenu["✘ Atheistic"] = [];
	wholeMenu["✘ Atheistic"].id = "19_1";
	wholeMenu["✘ Atheistic"].color = "green";
	wholeMenu["✘ Atheistic"].hasSub = 0;
	wholeMenu["✘ Atheistic"].link = "satanism_atheistic_eng.html";
	wholeMenu["✘ Atheistic"].html = '✘ Atheistic';

	wholeMenu["✔ Theistic"] = [];
	wholeMenu["✔ Theistic"].id = "19_2";
	wholeMenu["✔ Theistic"].color = "green";
	wholeMenu["✔ Theistic"].hasSub = 0;
	wholeMenu["✔ Theistic"].link = "satanism_theistic_eng.html";
	wholeMenu["✔ Theistic"].html = '✔ Theistic';

	wholeMenu["✔ The True Church of Satan"] = [];
	wholeMenu["✔ The True Church of Satan"].id = "19_3";
	wholeMenu["✔ The True Church of Satan"].color = "green";
	wholeMenu["✔ The True Church of Satan"].hasSub = 0;
	wholeMenu["✔ The True Church of Satan"].link = "satanism_true_eng.html";
	wholeMenu["✔ The True Church of Satan"].html = '✔ The True Church of Satan';

	wholeMenu["✘ Voluntarism"] = [];
	wholeMenu["✘ Voluntarism"].id = "19_4";
	wholeMenu["✘ Voluntarism"].color = "green";
	wholeMenu["✘ Voluntarism"].hasSub = 0;
	wholeMenu["✘ Voluntarism"].link = "satanism_voluntarism_eng.html";
	wholeMenu["✘ Voluntarism"].html = '✘ Voluntarism';

	wholeMenu["Symbolics"] = [];
	wholeMenu["Symbolics"].id = "19_5";
	wholeMenu["Symbolics"].color = "green";
	wholeMenu["Symbolics"].hasSub = 0;
	wholeMenu["Symbolics"].link = "satanism_simvoly_eng.html";
	wholeMenu["Symbolics"].html = 'Symbolics';

}




if (lang=="rus") {

	wholeMenu["Сатанизм"] = [];
	wholeMenu["Сатанизм"].id = "19";
	wholeMenu["Сатанизм"].color = "green";
	wholeMenu["Сатанизм"].hasSub = 1;
	wholeMenu["Сатанизм"].link = "";
	wholeMenu["Сатанизм"].html = 'Сатанизм';

	wholeMenu["✘ Атеистический"] = [];
	wholeMenu["✘ Атеистический"].id = "19_1";
	wholeMenu["✘ Атеистический"].color = "green";
	wholeMenu["✘ Атеистический"].hasSub = 0;
	wholeMenu["✘ Атеистический"].link = "satanism_atheistic_rus.html";
	wholeMenu["✘ Атеистический"].html = '✘ Атеистический';

	wholeMenu["✔ Теистический"] = [];
	wholeMenu["✔ Теистический"].id = "19_2";
	wholeMenu["✔ Теистический"].color = "green";
	wholeMenu["✔ Теистический"].hasSub = 0;
	wholeMenu["✔ Теистический"].link = "satanism_theistic_rus.html";
	wholeMenu["✔ Теистический"].html = '✔ Теистический';

	wholeMenu["✔ Истинная Церковь Сатаны"] = [];
	wholeMenu["✔ Истинная Церковь Сатаны"].id = "19_3";
	wholeMenu["✔ Истинная Церковь Сатаны"].color = "green";
	wholeMenu["✔ Истинная Церковь Сатаны"].hasSub = 0;
	wholeMenu["✔ Истинная Церковь Сатаны"].link = "satanism_true_rus.html";
	wholeMenu["✔ Истинная Церковь Сатаны"].html = '✔ Истинная Церковь Сатаны';

	wholeMenu["✘ Волюнтаризм"] = [];
	wholeMenu["✘ Волюнтаризм"].id = "19_4";
	wholeMenu["✘ Волюнтаризм"].color = "green";
	wholeMenu["✘ Волюнтаризм"].hasSub = 0;
	wholeMenu["✘ Волюнтаризм"].link = "satanism_voluntarism_rus.html";
	wholeMenu["✘ Волюнтаризм"].html = '✘ Волюнтаризм';

	wholeMenu["Символика"] = [];
	wholeMenu["Символика"].id = "19_5";
	wholeMenu["Символика"].color = "green";
	wholeMenu["Символика"].hasSub = 0;
	wholeMenu["Символика"].link = "satanism_simvoly_rus.html";
	wholeMenu["Символика"].html = 'Символика';

}



return wholeMenu;
}



function  loadMenuPsychology(lang) {


var wholeMenu = [];


if (lang=="eng") {

	wholeMenu["Psychology"] = [];
	wholeMenu["Psychology"].id = "22";
	wholeMenu["Psychology"].color = "green";
	wholeMenu["Psychology"].hasSub = 1;
	wholeMenu["Psychology"].link = "";
	wholeMenu["Psychology"].html = 'Psychology';

	wholeMenu["✔ True"] = [];
	wholeMenu["✔ True"].id = "22_1";
	wholeMenu["✔ True"].color = "green";
	wholeMenu["✔ True"].hasSub = 0;
	wholeMenu["✔ True"].link = "psychology_true_eng.html";
	wholeMenu["✔ True"].html = '✔ True';

	wholeMenu["✘ Pseudo-"] = [];
	wholeMenu["✘ Pseudo-"].id = "22_2";
	wholeMenu["✘ Pseudo-"].color = "green";
	wholeMenu["✘ Pseudo-"].hasSub = 0;
	wholeMenu["✘ Pseudo-"].link = "psychology_pseudo_eng.html";
	wholeMenu["✘ Pseudo-"].html = '✘ Pseudo-';

	wholeMenu["Movies"] = [];
	wholeMenu["Movies"].id = "22_3";
	wholeMenu["Movies"].color = "green";
	wholeMenu["Movies"].hasSub = 0;
	wholeMenu["Movies"].link = "psychology_movies_eng.html";
	wholeMenu["Movies"].html = 'Movies';

}




if (lang=="rus") {

	wholeMenu["Психология"] = [];
	wholeMenu["Психология"].id = "22";
	wholeMenu["Психология"].color = "green";
	wholeMenu["Психология"].hasSub = 1;
	wholeMenu["Психология"].link = "";
	wholeMenu["Психология"].html = 'Психология';

	wholeMenu["✔ Труъ"] = [];
	wholeMenu["✔ Труъ"].id = "22_1";
	wholeMenu["✔ Труъ"].color = "green";
	wholeMenu["✔ Труъ"].hasSub = 0;
	wholeMenu["✔ Труъ"].link = "psychology_true_rus.html";
	wholeMenu["✔ Труъ"].html = '✔ Труъ';

	wholeMenu["✘ Псевдо-"] = [];
	wholeMenu["✘ Псевдо-"].id = "22_2";
	wholeMenu["✘ Псевдо-"].color = "green";
	wholeMenu["✘ Псевдо-"].hasSub = 0;
	wholeMenu["✘ Псевдо-"].link = "psychology_pseudo_rus.html";
	wholeMenu["✘ Псевдо-"].html = '✘ Псевдо-';

	wholeMenu["Фильмы"] = [];
	wholeMenu["Фильмы"].id = "22_3";
	wholeMenu["Фильмы"].color = "green";
	wholeMenu["Фильмы"].hasSub = 0;
	wholeMenu["Фильмы"].link = "psychology_movies_rus.html";
	wholeMenu["Фильмы"].html = 'Фильмы';

}

return wholeMenu;
}



function  loadMenuCountries(lang) {


var wholeMenu = [];


if (lang=="eng") {

	wholeMenu["Countries"] = [];
	wholeMenu["Countries"].id = "23";
	wholeMenu["Countries"].color = "green";
	wholeMenu["Countries"].hasSub = 1;
	wholeMenu["Countries"].link = "";
	wholeMenu["Countries"].html = 'Countries';

	wholeMenu["● USSR"] = [];
	wholeMenu["● USSR"].id = "23_1";
	wholeMenu["● USSR"].color = "green";
	wholeMenu["● USSR"].hasSub = 0;
	wholeMenu["● USSR"].link = "countries_ussr_eng.html";
	wholeMenu["● USSR"].html = 'USSR';


	wholeMenu["Ireland"] = [];
	wholeMenu["Ireland"].id = "23_2";
	wholeMenu["Ireland"].color = "green";
	wholeMenu["Ireland"].hasSub = 0;
	wholeMenu["Ireland"].link = "countries_ireland_eng.html";
	wholeMenu["Ireland"].html = 'Ireland';

}




if (lang=="rus") {

	wholeMenu["Страны"] = [];
	wholeMenu["Страны"].id = "23";
	wholeMenu["Страны"].color = "green";
	wholeMenu["Страны"].hasSub = 1;
	wholeMenu["Страны"].link = "";
	wholeMenu["Страны"].html = 'Страны';

	wholeMenu["● СССР"] = [];
	wholeMenu["● СССР"].id = "23_1";
	wholeMenu["● СССР"].color = "green";
	wholeMenu["● СССР"].hasSub = 0;
	wholeMenu["● СССР"].link = "countries_ussr_rus.html";
	wholeMenu["● СССР"].html = 'СССР';


	wholeMenu["Ирландия"] = [];
	wholeMenu["Ирландия"].id = "23_2";
	wholeMenu["Ирландия"].color = "green";
	wholeMenu["Ирландия"].hasSub = 0;
	wholeMenu["Ирландия"].link = "countries_ireland_rus.html";
	wholeMenu["Ирландия"].html = 'Ирландия';

}

return wholeMenu;
}



function  loadMenuPersonalities(lang) {


var wholeMenu = [];


if (lang=="eng") {

	wholeMenu["Personalities"] = [];
	wholeMenu["Personalities"].id = "25";
	wholeMenu["Personalities"].color = "green";
	wholeMenu["Personalities"].hasSub = 1;
	wholeMenu["Personalities"].link = "";
	wholeMenu["Personalities"].html = 'Personalities';

	wholeMenu["Ancient Rome"] = [];
	wholeMenu["Ancient Rome"].id = "25_1";
	wholeMenu["Ancient Rome"].color = "green";
	wholeMenu["Ancient Rome"].hasSub = 0;
	wholeMenu["Ancient Rome"].link = "personalities_ancient_rome_eng.html";
	wholeMenu["Ancient Rome"].html = 'Ancient Rome';

	wholeMenu["Middle Ages"] = [];
	wholeMenu["Middle Ages"].id = "25_2";
	wholeMenu["Middle Ages"].color = "green";
	wholeMenu["Middle Ages"].hasSub = 0;
	wholeMenu["Middle Ages"].link = "personalities_middle_ages_eng.html";
	wholeMenu["Middle Ages"].html = 'Middle Ages';

	wholeMenu["USSR"] = [];
	wholeMenu["USSR"].id = "25_3";
	wholeMenu["USSR"].color = "green";
	wholeMenu["USSR"].hasSub = 0;
	wholeMenu["USSR"].link = "personalities_ussr_eng.html";
	wholeMenu["USSR"].html = 'USSR';


}




if (lang=="rus") {

	wholeMenu["Деятели"] = [];
	wholeMenu["Деятели"].id = "25";
	wholeMenu["Деятели"].color = "green";
	wholeMenu["Деятели"].hasSub = 1;
	wholeMenu["Деятели"].link = "";
	wholeMenu["Деятели"].html = 'Деятели';

	wholeMenu["Древний Рим"] = [];
	wholeMenu["Древний Рим"].id = "25_1";
	wholeMenu["Древний Рим"].color = "green";
	wholeMenu["Древний Рим"].hasSub = 0;
	wholeMenu["Древний Рим"].link = "personalities_ancient_rome_rus.html";
	wholeMenu["Древний Рим"].html = 'Древний Рим';

	wholeMenu["Средние Века"] = [];
	wholeMenu["Средние Века"].id = "25_2";
	wholeMenu["Средние Века"].color = "green";
	wholeMenu["Средние Века"].hasSub = 0;
	wholeMenu["Средние Века"].link = "personalities_middle_ages_rus.html";
	wholeMenu["Средние Века"].html = 'Средние Века';

	wholeMenu["СССР"] = [];
	wholeMenu["СССР"].id = "25_3";
	wholeMenu["СССР"].color = "green";
	wholeMenu["СССР"].hasSub = 0;
	wholeMenu["СССР"].link = "personalities_ussr_rus.html";
	wholeMenu["СССР"].html = 'СССР';

}

return wholeMenu;
}



function  loadMenuNews(lang) {


var wholeMenu = [];


if (lang=="eng") {

	wholeMenu["News"] = [];
	wholeMenu["News"].id = "26";
	wholeMenu["News"].color = "red";
	wholeMenu["News"].hasSub = 1;
	wholeMenu["News"].link = "";
	wholeMenu["News"].html = 'News';

	wholeMenu["BBC RSS Feed"] = [];
	wholeMenu["BBC RSS Feed"].id = "26_1";
	wholeMenu["BBC RSS Feed"].color = "red";
	wholeMenu["BBC RSS Feed"].hasSub = 0;
	wholeMenu["BBC RSS Feed"].link = "news_bbc_eng.html?type=world";
	wholeMenu["BBC RSS Feed"].html = 'BBC RSS Feed';

	wholeMenu["BBC RSS Русская Служба Feed"] = [];
	wholeMenu["BBC RSS Русская Служба Feed"].id = "26_2";
	wholeMenu["BBC RSS Русская Служба Feed"].color = "red";
	wholeMenu["BBC RSS Русская Служба Feed"].hasSub = 0;
	wholeMenu["BBC RSS Русская Служба Feed"].link = "news_bbcrussian_eng.html?type=world";
	wholeMenu["BBC RSS Русская Служба Feed"].html = 'BBC Русская Служба RSS Feed';

	wholeMenu["Lenta.ru RSS Feed"] = [];
	wholeMenu["Lenta.ru RSS Feed"].id = "26_3";
	wholeMenu["Lenta.ru RSS Feed"].color = "red";
	wholeMenu["Lenta.ru RSS Feed"].hasSub = 0;
	wholeMenu["Lenta.ru RSS Feed"].link = "news_lenta_eng.html?type=world";
	wholeMenu["Lenta.ru RSS Feed"].html = 'Lenta.ru RSS Feed';

	wholeMenu["Space Program"] = [];
	wholeMenu["Space Program"].id = "26_4";
	wholeMenu["Space Program"].color = "red";
	wholeMenu["Space Program"].hasSub = 0;
	wholeMenu["Space Program"].link = "news_space_program_eng.html";
	wholeMenu["Space Program"].html = 'Space Program';

}




if (lang=="rus") {


	wholeMenu["Новости"] = [];
	wholeMenu["Новости"].id = "26";
	wholeMenu["Новости"].color = "red";
	wholeMenu["Новости"].hasSub = 1;
	wholeMenu["Новости"].link = "";
	wholeMenu["Новости"].html = 'Новости';

	wholeMenu["BBC RSS Строка"] = [];
	wholeMenu["BBC RSS Строка"].id = "26_1";
	wholeMenu["BBC RSS Строка"].color = "red";
	wholeMenu["BBC RSS Строка"].hasSub = 0;
	wholeMenu["BBC RSS Строка"].link = "news_bbc_rus.html?type=world";
	wholeMenu["BBC RSS Строка"].html = 'BBC RSS Строка';

	wholeMenu["BBC RSS Русская Служба Строка"] = [];
	wholeMenu["BBC RSS Русская Служба Строка"].id = "26_2";
	wholeMenu["BBC RSS Русская Служба Строка"].color = "red";
	wholeMenu["BBC RSS Русская Служба Строка"].hasSub = 0;
	wholeMenu["BBC RSS Русская Служба Строка"].link = "news_bbcrussian_rus.html?type=world";
	wholeMenu["BBC RSS Русская Служба Строка"].html = 'BBC Русская Служба RSS Строка';

	wholeMenu["Lenta.ru RSS Строка"] = [];
	wholeMenu["Lenta.ru RSS Строка"].id = "26_3";
	wholeMenu["Lenta.ru RSS Строка"].color = "red";
	wholeMenu["Lenta.ru RSS Строка"].hasSub = 0;
	wholeMenu["Lenta.ru RSS Строка"].link = "news_lenta_rus.html?type=world";
	wholeMenu["Lenta.ru RSS Строка"].html = 'Lenta.ru RSS Строка';

	wholeMenu["Космическая Программа"] = [];
	wholeMenu["Космическая Программа"].id = "26_4";
	wholeMenu["Космическая Программа"].color = "red";
	wholeMenu["Космическая Программа"].hasSub = 0;
	wholeMenu["Космическая Программа"].link = "news_space_program_rus.html";
	wholeMenu["Космическая Программа"].html = 'Космическая Программа';

}


if (lang=="lat") {


	wholeMenu["Nuntium"] = [];
	wholeMenu["Nuntium"].id = "26";
	wholeMenu["Nuntium"].color = "red";
	wholeMenu["Nuntium"].hasSub = 1;
	wholeMenu["Nuntium"].link = "";
	wholeMenu["Nuntium"].html = 'Nuntium';

	wholeMenu["BBC RSS Acies"] = [];
	wholeMenu["BBC RSS Acies"].id = "26_1";
	wholeMenu["BBC RSS Acies"].color = "red";
	wholeMenu["BBC RSS Acies"].hasSub = 0;
	wholeMenu["BBC RSS Acies"].link = "news_bbc_lat.html?type=world";
	wholeMenu["BBC RSS Acies"].html = 'BBC RSS Acies';

	wholeMenu["BBC RSS Русская Служба Acies"] = [];
	wholeMenu["BBC RSS Русская Служба Acies"].id = "26_2";
	wholeMenu["BBC RSS Русская Служба Acies"].color = "red";
	wholeMenu["BBC RSS Русская Служба Acies"].hasSub = 0;
	wholeMenu["BBC RSS Русская Служба Acies"].link = "news_bbcrussian_lat.html?type=world";
	wholeMenu["BBC RSS Русская Служба Acies"].html = 'BBC Русская Служба RSS Acies';

	wholeMenu["Lenta.ru RSS Acies"] = [];
	wholeMenu["Lenta.ru RSS Acies"].id = "26_3";
	wholeMenu["Lenta.ru RSS Acies"].color = "red";
	wholeMenu["Lenta.ru RSS Acies"].hasSub = 0;
	wholeMenu["Lenta.ru RSS Acies"].link = "news_lenta_lat.html?type=world";
	wholeMenu["Lenta.ru RSS Acies"].html = 'Lenta.ru RSS Acies';


}

return wholeMenu;
}




function  loadMenuContentsLink(ele, lang) {

		var wholeMenu = [];

		wholeMenu[ele.innerText.trim()] = [];
		wholeMenu[ele.innerText.trim()].id = "1";
		wholeMenu[ele.innerText.trim()].color = ele.className.substr(10);
		wholeMenu[ele.innerText.trim()].hasSub = 1;
		wholeMenu[ele.innerText.trim()].link = "";
		wholeMenu[ele.innerText.trim()].html = ''+ele.innerHTML.trim();

		if (lang=="eng") {
			if (typeof ele.dataset.score!== "undefined") {
				wholeMenu["Score"] = [];
				wholeMenu["Score"].id = "1_1";
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
				wholeMenu["Country"] = [];
				wholeMenu["Country"].id = "1_2";
				wholeMenu["Country"].color = ele.className.substr(10);
				wholeMenu["Country"].html = 'Country: ';
				countries=ele.dataset.country.split(";");
				for (var i = 0; i < countries.length; i++) {
					wholeMenu["Country"].html=wholeMenu["Country"].html+'<img src="lang/all/'+countries[i]+'.gif" width="22" height="18"  title="'+getFlagTitle(countries[i], lang)+'"style="vertical-align:middle;"/>';
				}
			}
			if (typeof ele.dataset.title_orig!== "undefined") {
				wholeMenu["TitleOrig"] = [];
				wholeMenu["TitleOrig"].id = "1_3";
				wholeMenu["TitleOrig"].color = ele.className.substr(10);
				wholeMenu["TitleOrig"].html = 'Title '+getLangShort(ele.dataset.lang, lang)+': '+ele.dataset.title_orig;
			}
			if (typeof ele.dataset.genre !== "undefined") {
				wholeMenu["Genre"] = [];
				wholeMenu["Genre"].id = "1_4";
				wholeMenu["Genre"].color = ele.className.substr(10);
				wholeMenu["Genre"].html = 'Genre: '+ele.dataset.genre;
			}
			if (typeof ele.dataset.actor!== "undefined") {
				wholeMenu["Actor"] = [];
				wholeMenu["Actor"].id = "1_5";
				wholeMenu["Actor"].color = ele.className.substr(10);
				wholeMenu["Actor"].html = 'Actor: '+ele.dataset.actor;
			}
			if (typeof ele.dataset.actor_orig!== "undefined") {
				wholeMenu["ActorOrig"] = [];
				wholeMenu["ActorOrig"].id = "1_6";
				wholeMenu["ActorOrig"].color = ele.className.substr(10);
				wholeMenu["ActorOrig"].html = 'Actor '+getLangShort(ele.dataset.lang, lang)+': '+ele.dataset.actor_orig;
			}
			if (typeof ele.dataset.video!== "undefined") {
				wholeMenu["Video"] = [];
				wholeMenu["Video"].id = "1_7";
				wholeMenu["Video"].color = ele.className.substr(10);
				wholeMenu["Video"].html = 'Video: '+ele.dataset.video;
			}
			if (typeof ele.dataset.audio!== "undefined") {
				wholeMenu["Audio"] = [];
				wholeMenu["Audio"].id = "1_8";
				wholeMenu["Audio"].color = ele.className.substr(10);
				wholeMenu["Audio"].html = 'Audio: '+ele.dataset.audio;
			}
			if (typeof ele.dataset.author!== "undefined") {
				wholeMenu["Author"] = [];
				wholeMenu["Author"].id = "1_9";
				wholeMenu["Author"].color = ele.className.substr(10);
				wholeMenu["Author"].html = 'Author: '+ele.dataset.author;
			}
			if (typeof ele.dataset.author_orig!== "undefined") {
				wholeMenu["AuthorOrig"] = [];
				wholeMenu["AuthorOrig"].id = "1_10";
				wholeMenu["AuthorOrig"].color = ele.className.substr(10);
				wholeMenu["AuthorOrig"].html = 'Author '+getLangShort(ele.dataset.lang, lang)+': '+ele.dataset.author_orig;
			}
			if (typeof ele.dataset.year!== "undefined") {
				wholeMenu["Year"] = [];
				wholeMenu["Year"].id = "1_11";
				wholeMenu["Year"].color = ele.className.substr(10);
				wholeMenu["Year"].html = 'Year: '+ele.dataset.year;
			}
			if (typeof ele.dataset.added!== "undefined") {
				wholeMenu["Added"] = [];
				wholeMenu["Added"].id = "1_12";
				wholeMenu["Added"].color = ele.className.substr(10);
				wholeMenu["Added"].html = 'Added: '+ele.dataset.added;
			}
		}

		if (lang=="rus") {
			if (typeof ele.dataset.score!== "undefined") {
				wholeMenu["Счёт"] = [];
				wholeMenu["Счёт"].id = "1_1";
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
				wholeMenu["Страна"] = [];
				wholeMenu["Страна"].id = "1_2";
				wholeMenu["Страна"].color = ele.className.substr(10);
				wholeMenu["Страна"].html = 'Страна: ';
				countries=ele.dataset.country.split(";");
				for (var i = 0; i < countries.length; i++) {
					wholeMenu["Страна"].html=wholeMenu["Страна"].html+'<img src="lang/all/'+countries[i]+'.gif" width="22" height="18"  title="'+getFlagTitle(countries[i], lang)+'"style="vertical-align:middle;"/>';
				}
			}
			if (typeof ele.dataset.title_orig!== "undefined") {
				wholeMenu["НазваниеОриг"] = [];
				wholeMenu["НазваниеОриг"].id = "1_3";
				wholeMenu["НазваниеОриг"].color = ele.className.substr(10);
				wholeMenu["НазваниеОриг"].html = 'Название '+getLangShort(ele.dataset.lang, lang)+': '+ele.dataset.title_orig;
			}
			if (typeof ele.dataset.genre !== "undefined") {
				wholeMenu["Жанр"] = [];
				wholeMenu["Жанр"].id = "1_4";
				wholeMenu["Жанр"].color = ele.className.substr(10);
				wholeMenu["Жанр"].html = 'Жанр: '+ele.dataset.genre;
			}
			if (typeof ele.dataset.actor!== "undefined") {
				wholeMenu["Актёр"] = [];
				wholeMenu["Актёр"].id = "1_5";
				wholeMenu["Актёр"].color = ele.className.substr(10);
				wholeMenu["Актёр"].html = 'Актёр: '+ele.dataset.actor;
			}
			if (typeof ele.dataset.actor_orig!== "undefined") {
				wholeMenu["АктёрОриг"] = [];
				wholeMenu["АктёрОриг"].id = "1_6";
				wholeMenu["АктёрОриг"].color = ele.className.substr(10);
				wholeMenu["АктёрОриг"].html = 'Актёр '+getLangShort(ele.dataset.lang, lang)+': '+ele.dataset.actor_orig;
			}
			if (typeof ele.dataset.video!== "undefined") {
				wholeMenu["Видео"] = [];
				wholeMenu["Видео"].id = "1_7";
				wholeMenu["Видео"].color = ele.className.substr(10);
				wholeMenu["Видео"].html = 'Видео: '+ele.dataset.video;
			}
			if (typeof ele.dataset.audio!== "undefined") {
				wholeMenu["Аудио"] = [];
				wholeMenu["Аудио"].id = "1_8";
				wholeMenu["Аудио"].color = ele.className.substr(10);
				wholeMenu["Аудио"].html = 'Аудио: '+ele.dataset.audio;
			}
			if (typeof ele.dataset.author!== "undefined") {
				wholeMenu["Автор"] = [];
				wholeMenu["Автор"].id = "1_9";
				wholeMenu["Автор"].color = ele.className.substr(10);
				wholeMenu["Автор"].html = 'Автор: '+ele.dataset.author;
			}
			if (typeof ele.dataset.author_orig!== "undefined") {
				wholeMenu["АвторОриг"] = [];
				wholeMenu["АвторОриг"].id = "1_10";
				wholeMenu["АвторОриг"].color = ele.className.substr(10);
				wholeMenu["АвторОриг"].html = 'Автор '+getLangShort(ele.dataset.lang, lang)+': '+ele.dataset.author_orig;
			}
			if (typeof ele.dataset.year!== "undefined") {
				wholeMenu["Год"] = [];
				wholeMenu["Год"].id = "1_11";
				wholeMenu["Год"].color = ele.className.substr(10);
				wholeMenu["Год"].html = 'Год: '+ele.dataset.year;
			}
			if (typeof ele.dataset.added!== "undefined") {
				wholeMenu["Добавлено"] = [];
				wholeMenu["Добавлено"].id = "1_12";
				wholeMenu["Добавлено"].color = ele.className.substr(10);
				wholeMenu["Добавлено"].html = 'Добавлено: '+ele.dataset.added;
			}
		}


		if (lang=="lat") {
			if (typeof ele.dataset.score!== "undefined") {
				wholeMenu["Ratio"] = [];
				wholeMenu["Ratio"].id = "1_1";
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
				wholeMenu["Patriam"] = [];
				wholeMenu["Patriam"].id = "1_2";
				wholeMenu["Patriam"].color = ele.className.substr(10);
				wholeMenu["Patriam"].html = 'Patriam: ';
				countries=ele.dataset.country.split(";");
				for (var i = 0; i < countries.length; i++) {
					wholeMenu["Patriam"].html=wholeMenu["Patriam"].html+'<img src="lang/all/'+countries[i]+'.gif" width="22" height="18"  title="'+getFlagTitle(countries[i], lang)+'"style="vertical-align:middle;"/>';
				}
			}
			if (typeof ele.dataset.title_orig!== "undefined") {
				wholeMenu["TitulusOrig"] = [];
				wholeMenu["TitulusOrig"].id = "1_3";
				wholeMenu["TitulusOrig"].color = ele.className.substr(10);
				wholeMenu["TitulusOrig"].html = 'Titulus '+getLangShort(ele.dataset.lang, lang)+': '+ele.dataset.title_orig;
			}
			if (typeof ele.dataset.genre !== "undefined") {
				wholeMenu["Genus"] = [];
				wholeMenu["Genus"].id = "1_4";
				wholeMenu["Genus"].color = ele.className.substr(10);
				wholeMenu["Genus"].html = 'Genus: '+ele.dataset.genre;
			}
			if (typeof ele.dataset.actor!== "undefined") {
				wholeMenu["Actoris"] = [];
				wholeMenu["Actoris"].id = "1_5";
				wholeMenu["Actoris"].color = ele.className.substr(10);
				wholeMenu["Actoris"].html = 'Actoris: '+ele.dataset.actor;
			}
			if (typeof ele.dataset.actor_orig!== "undefined") {
				wholeMenu["ActorisOrig"] = [];
				wholeMenu["ActorisOrig"].id = "1_6";
				wholeMenu["ActorisOrig"].color = ele.className.substr(10);
				wholeMenu["ActorisOrig"].html = 'Actoris '+getLangShort(ele.dataset.lang, lang)+': '+ele.dataset.actor_orig;
			}
			if (typeof ele.dataset.video!== "undefined") {
				wholeMenu["Video"] = [];
				wholeMenu["Video"].id = "1_7";
				wholeMenu["Video"].color = ele.className.substr(10);
				wholeMenu["Video"].html = 'Video: '+ele.dataset.video;
			}
			if (typeof ele.dataset.audio!== "undefined") {
				wholeMenu["Audio"] = [];
				wholeMenu["Audio"].id = "1_8";
				wholeMenu["Audio"].color = ele.className.substr(10);
				wholeMenu["Audio"].html = 'Audio: '+ele.dataset.audio;
			}
			if (typeof ele.dataset.author!== "undefined") {
				wholeMenu["Auctor"] = [];
				wholeMenu["Auctor"].id = "1_9";
				wholeMenu["Auctor"].color = ele.className.substr(10);
				wholeMenu["Auctor"].html = 'Auctor: '+ele.dataset.author;
			}
			if (typeof ele.dataset.author_orig!== "undefined") {
				wholeMenu["AuctorOrig"] = [];
				wholeMenu["AuctorOrig"].id = "1_10";
				wholeMenu["AuctorOrig"].color = ele.className.substr(10);
				wholeMenu["AuctorOrig"].html = 'Auctor '+getLangShort(ele.dataset.lang, lang)+': '+ele.dataset.author_orig;
			}
			if (typeof ele.dataset.year!== "undefined") {
				wholeMenu["Annus"] = [];
				wholeMenu["Annus"].id = "1_11";
				wholeMenu["Annus"].color = ele.className.substr(10);
				wholeMenu["Annus"].html = 'Annus: '+ele.dataset.year;
			}
			if (typeof ele.dataset.added!== "undefined") {
				wholeMenu["Additae"] = [];
				wholeMenu["Additae"].id = "1_12";
				wholeMenu["Additae"].color = ele.className.substr(10);
				wholeMenu["Additae"].html = 'Additae: '+ele.dataset.added;
			}
		}


return wholeMenu;
}



function  addTableRow(tableSM, menu, lang, type, newTableId) {

	var row = tableSM.insertRow(-1);
	var cell1 = row.insertCell(0);
	cell1 .setAttribute('style', 'padding:0px');
	var divSM=document.createElement("div");
	divSM.setAttribute('id', 'menu_'+menu.id);
	divSM.align = "left";
	if (type!="contentsLink") {
		divSM.setAttribute('onMouseOver', "this.className='menu_selected'; showSubMenu(this, '"+lang+"', '"+type+"', "+newTableId+");");
		divSM.setAttribute('onMouseOut', "this.className='menu_not_selected_"+menu.color+"';");
	}
	if (type!="contentsLink") {
		if (menu.hasSub) {
			divSM.setAttribute('onClick', "showSubMenu(this, '"+lang+"', '"+type+"');");
		} else {
			divSM.setAttribute('onClick', `if (event.ctrlKey==1){
           	                     window.open('`+menu.link+`');
                  	      } else {
                     	           window.location.href='`+menu.link+`';
             	           };`);
		}
	}


	divSM.innerHTML = menu.html;
	divSM.style.display = "inline-block";
	divSM.setAttribute('class', 'menu_not_selected_'+menu.color);
	if (type!="contentsLink") {
		divSM.setAttribute('style', 'width: 280px; border-spacing: 0px; padding-left:5px; padding-right:5px;');
	} else {
		divSM.setAttribute('style', 'cursor:auto; border-spacing: 0px; padding-left:5px; padding-right:5px;');
	}

	cell1.appendChild(divSM);

	return tableSM;
}

lastSubMenuType="";
contentsAreaOver=0;

function  showSubMenu(ele, lang, type, newTableId) {


	if (typeof type==="undefined" ||  type!="contentsLink") ele.setAttribute('class', 'menu_selected');

	if (typeof newTableId==="undefined") hideSubMenu(ele, -1);
	if (typeof type==="undefined") return;

	if (typeof newTableId ==="undefined") {
		newTableId=1;
	} else {
		hideSubMenu(ele);
	}

	tablex=document.getElementById("table"+newTableId);
	if (tablex) return;


	lastSubMenuType=type;

	var wholeMenu;
	if (type=="sitemap") wholeMenu=loadMenuSitemap(lang);
	if (type=="howto") wholeMenu=loadMenuHowto(lang);
	if (type=="music") wholeMenu=loadMenuMusic(lang);
	if (type=="movies") wholeMenu=loadMenuMovies(lang);
	if (type=="series") wholeMenu=loadMenuSeries(lang);
	if (type=="games") wholeMenu=loadMenuGames(lang);
	if (type=="books") wholeMenu=loadMenuBooks(lang);
	if (type=="photos") wholeMenu=loadMenuPhotos(lang);
	if (type=="amv") wholeMenu=loadMenuAmv(lang);
	if (type=="stuff") wholeMenu=loadMenuStuff(lang);
	if (type=="anecdotes") wholeMenu=loadMenuAnecdotes(lang);
	if (type=="relaxation") wholeMenu=loadMenuRelaxation(lang);
	if (type=="software") wholeMenu=loadMenuSoftware(lang);
	if (type=="satanism") wholeMenu=loadMenuSatanism(lang);
	if (type=="psychology") wholeMenu=loadMenuPsychology(lang);
	if (type=="countries") wholeMenu=loadMenuCountries(lang);
	if (type=="personalities") wholeMenu=loadMenuPersonalities(lang);
	if (type=="news") wholeMenu=loadMenuNews(lang);
	if (type=="contentsLink") wholeMenu=loadMenuContentsLink(ele, lang);


	if (type=="contentsLink") ele.id="menu_1";
	key=ele.innerText.trim();

	if (typeof wholeMenu[key] !=="undefined") {

		if (wholeMenu[key].hasSub) ele.setAttribute('onClick', "hideSubMenu(this, 1);");
	

		keys=Object.keys(wholeMenu);
		var matchC=0;
		var id, id2;
		prevId="";

		for (var i = 0; i<keys.length; i++) {
			id=wholeMenu[keys[i]].id;
			if (id.lastIndexOf("_") ==-1) continue;

			if (wholeMenu[key].id==id.substring(0,id.lastIndexOf("_"))) {
				if (id!=prevId) matchC++;
			}
			prevId=id;
		}

		if (matchC>0) {

   			var tableSM=document.createElement("table");
			tableSM.setAttribute('id', "table"+newTableId);
			tableSM.dataset.id=ele.id;
			tableSM.dataset.lang=lang;
			tableSM.dataset.type=type;

			var rect = ele.getBoundingClientRect();
     			top_s=document.documentElement.scrollTop || document.body.scrollTop;
     			top_s=(parseFloat(rect.top)+top_s-(matchC)*11.5-1);
			if (type=="contentsLink") {
				left_s=(parseFloat(rect.right)+10.0);
			} else {
     				left_s=(parseFloat(rect.left)+270.0);
			}

     			tableSM.setAttribute('style', 'border: 1px #ff8a00 solid; border-spacing: 0px; position: absolute; top: '+top_s+'px; left: '+left_s+'px;');

			// caption 
			var row = tableSM.insertRow(-1);
			var cell1 = row.insertCell(0);
			cell1 .setAttribute('style', 'padding:0px;');
			var divSM=document.createElement("div");
			divSM.setAttribute('id', 'div-1'+wholeMenu[key].id);
			divSM.align = "left";
			if (wholeMenu[key].subCaption) {
				divSM.innerHTML = wholeMenu[key].subCaption;
			} else {
				divSM.innerHTML = wholeMenu[key].html;
			}
			divSM.style.display = "inline-block";
			divSM.setAttribute('class', 'menu_selected');
			if (type!="contentsLink") {
				divSM.setAttribute('style', 'width: 280px; border-spacing: 0px; padding-left:5px; padding-right:5px;');
			} else {
				divSM.setAttribute('style', 'cursor:auto; border-spacing: 0px; padding-left:5px; padding-right:5px;');
			}
			cell1.appendChild(divSM);

			c=0;
			prevId="";
			for (var i = 0; i<keys.length; i++) {
				id=wholeMenu[keys[i]].id;
				if (id.lastIndexOf("_") ==-1) continue;
				if (id==prevId) continue;
				prevId=id;
				if (wholeMenu[key].id==id.substring(0,id.lastIndexOf("_"))) {
					tableSM=addTableRow(tableSM, wholeMenu[keys[i]], lang, type, newTableId+1);
					c++;
				}
			}
    			document.body.appendChild(tableSM);

			var rect = tableSM.getBoundingClientRect();
  			var h = Math.max(window.innerHeight, document.documentElement.clientHeight);

			if (rect.top<0) {
	     			top_s=document.documentElement.scrollTop || document.body.scrollTop;
	     			tableSM.setAttribute('style', 'border: 1px #ff8a00 solid; border-spacing: 0px; position: absolute; top: '+top_s+'px; left: '+left_s+'px;');
			} else if (rect.bottom>h) {
				// works too - top_s from definition
				// top_s=top_s-(rect.bottom-h);

	     			top_s=document.documentElement.scrollTop || document.body.scrollTop;
				top_s=top_s+h-rect.height;

	     			tableSM.setAttribute('style', 'border: 1px #ff8a00 solid; border-spacing: 0px; position: absolute; top: '+top_s+'px; left: '+left_s+'px;');
			}
		}
	}
}




function  hideSubMenu(ele, manual) {

	maxSubCount=3;

	if (typeof manual==="undefined") manual=0;
	eleID="";
	if (typeof ele==="undefined") {
		manual=-1;
	} else {
		eleID=ele.id;
	}

	tables=[];
	for (var i =0; i<maxSubCount; i++) {
		tables[i]=document.getElementById("table"+(i+1));
	}

	if (manual==0) {
		for (var i =maxSubCount-1; i>=0; i--) {
			if (tables[i]) {
				if (eleID.indexOf(tables[i].dataset.id)==-1) {
					document.getElementById(tables[i].dataset.id).setAttribute('onClick', "showSubMenu(this, '"+tables[i].dataset.lang+"', '"+tables[i].dataset.type+"', "+(i+1)+");");
			    		tables[i].style.display = "none";
			     		document.body.removeChild(tables[i]);
				}
			}
		}

	}

	if (manual==1) {
		for (var i =maxSubCount-1; i>=0; i--) {
			if (tables[i]) {
				document.getElementById(tables[i].dataset.id).setAttribute('onClick', "showSubMenu(this, '"+tables[i].dataset.lang+"', '"+tables[i].dataset.type+"', "+(i+1)+");");
    				tables[i].style.display = "none";
     				document.body.removeChild(tables[i]);
				if (eleID==tables[i].dataset.id) break;
			}
		}
	}

	if (manual==-1) {
		for (var i =maxSubCount-1; i>=0; i--) {
			if (tables[i]) {
				document.getElementById(tables[i].dataset.id).setAttribute('onClick', "showSubMenu(this, '"+tables[i].dataset.lang+"', '"+tables[i].dataset.type+"', "+(i+1)+");");
	    			tables[i].style.display = "none";
	     			document.body.removeChild(tables[i]);
			}
		}
	}


}

function  hideSubMenuNotCont() {
	if (contentsAreaOver==1 && lastSubMenuType=="contentsLink") {contentsAreaOver=0; return;}
	hideSubMenu();
}


$(document).keyup(function(e) {
	if (e.key === "Escape") {
		hideSubMenu();
	}
});
