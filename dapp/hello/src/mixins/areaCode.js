const area = [
    { 'k': 'CN', 'c': '中国大陆', 'o': '中国大陆', 'e': 'China', 'n': '86' },
    {
        'k': 'HK',
        'c': '香港',
        'o': '香港',
        'e': 'Hong Kong',
        'n': '852'
    }, { 'k': 'MO', 'c': '澳门', 'o': '澳門', 'e': 'Macau', 'n': '853' }, {
        'k': 'TW',
        'c': '台湾',
        'o': '台灣',
        'e': 'Taiwan',
        'n': '886'
    }, { 'k': 'AL', 'c': '阿尔巴尼亚', 'o': 'Shqipëri', 'e': 'Albania', 'n': '355' }, {
        'k': 'DZ',
        'c': '阿尔及利亚',
        'o': 'Algeria',
        'e': 'Algeria',
        'n': '213'
    }, { 'k': 'AF', 'c': '阿富汗', 'o': '‫افغانستان‬‎', 'e': 'Afghanistan', 'n': '93' }, {
        'k': 'AR',
        'c': '阿根廷',
        'o': 'Argentina',
        'e': 'Argentina',
        'n': '54'
    }, {
        'k': 'AE',
        'c': '阿拉伯联合酋长国',
        'o': '‫الإمارات العربية المتحدة‬‎',
        'e': 'United Arab Emirates',
        'n': '971'
    }, { 'k': 'AW', 'c': '阿鲁巴', 'o': 'Aruba', 'e': 'Aruba', 'n': '297' }, {
        'k': 'OM',
        'c': '阿曼',
        'o': '‫عُمان‬‎',
        'e': 'Oman',
        'n': '968'
    }, { 'k': 'AZ', 'c': '阿塞拜疆', 'o': 'Azərbaycan', 'e': 'Azerbaijan', 'n': '994' }, {
        'k': 'AC',
        'c': '阿森松岛',
        'o': 'Ascension Island',
        'e': 'Ascension Island',
        'n': '247'
    }, { 'k': 'EG', 'c': '埃及', 'o': '‫مصر‬‎', 'e': 'Egypt', 'n': '20' }, {
        'k': 'ET',
        'c': '埃塞俄比亚',
        'o': 'Ethiopia',
        'e': 'Ethiopia',
        'n': '251'
    }, { 'k': 'IE', 'c': '爱尔兰', 'o': 'Ireland', 'e': 'Ireland', 'n': '353' }, {
        'k': 'EE',
        'c': '爱沙尼亚',
        'o': 'Eesti',
        'e': 'Estonia',
        'n': '372'
    }, { 'k': 'AD', 'c': '安道尔', 'o': 'Andorra', 'e': 'Andorra', 'n': '376' }, {
        'k': 'AO',
        'c': '安哥拉',
        'o': 'Angola',
        'e': 'Angola',
        'n': '244'
    }, { 'k': 'AI', 'c': '安圭拉', 'o': 'Anguilla', 'e': 'Anguilla', 'n': '1264' }, {
        'k': 'AG',
        'c': '安提瓜和巴布达',
        'o': 'Antigua & Barbuda',
        'e': 'Antigua & Barbuda',
        'n': '1268'
    }, { 'k': 'AT', 'c': '奥地利', 'o': 'Österreich', 'e': 'Austria', 'n': '43' }, {
        'k': 'AX',
        'c': '奥兰群岛',
        'o': 'Åland',
        'e': 'Åland Islands',
        'n': '000'

    }, { 'k': 'AU', 'c': '澳大利亚', 'o': 'Australia', 'e': 'Australia', 'n': '61' }, {
        'k': 'BB',
        'c': '巴巴多斯',
        'o': 'Barbados',
        'e': 'Barbados',
        'n': '1246'
    }, { 'k': 'PG', 'c': '巴布亚新几内亚', 'o': 'Papua New Guinea', 'e': 'Papua New Guinea', 'n': '675' }, {
        'k': 'BS',
        'c': '巴哈马',
        'o': 'Bahamas',
        'e': 'Bahamas',
        'n': '1242'
    }, { 'k': 'PK', 'c': '巴基斯坦', 'o': '‫پاکستان‬‎', 'e': 'Pakistan', 'n': '92' }, {
        'k': 'PY',
        'c': '巴拉圭',
        'o': 'Paraguay',
        'e': 'Paraguay',
        'n': '595'
    }, { 'k': 'PS', 'c': '巴勒斯坦', 'o': '‫فلسطين‬‎', 'e': 'Palestine', 'n': '970' }, {
        'k': 'BH',
        'c': '巴林',
        'o': '‫البحرين‬‎',
        'e': 'Bahrain',
        'n': '973'
    }, { 'k': 'PA', 'c': '巴拿马', 'o': 'Panamá', 'e': 'Panama', 'n': '507' }, {
        'k': 'BR',
        'c': '巴西',
        'o': 'Brasil',
        'e': 'Brazil',
        'n': '55'
    }, { 'k': 'BY', 'c': '白俄罗斯', 'o': 'Беларусь', 'e': 'Belarus', 'n': '375' }, {
        'k': 'BM',
        'c': '百慕大',
        'o': 'Bermuda',
        'e': 'Bermuda',
        'n': '1441'
    }, { 'k': 'BG', 'c': '保加利亚', 'o': 'България', 'e': 'Bulgaria', 'n': '359' }, {
        'k': 'MP',
        'c': '北马里亚纳群岛',
        'o': 'Northern Mariana Islands',
        'e': 'Northern Mariana Islands',
        'n': '1'
    }, { 'k': 'BJ', 'c': '贝宁', 'o': 'Bénin', 'e': 'Benin', 'n': '229' }, {
        'k': 'BE',
        'c': '比利时',
        'o': 'Belgium',
        'e': 'Belgium',
        'n': '32'
    }, { 'k': 'IS', 'c': '冰岛', 'o': 'Ísland', 'e': 'Iceland', 'n': '354' }, {
        'k': 'BO',
        'c': '玻利维亚',
        'o': 'Bolivia',
        'e': 'Bolivia',
        'n': '591'
    }, { 'k': 'PR', 'c': '波多黎各', 'o': 'Puerto Rico', 'e': 'Puerto Rico', 'n': '1787' }, {
        'k': 'PL',
        'c': '波兰',
        'o': 'Polska',
        'e': 'Poland',
        'n': '48'
    }, { 'k': 'BA', 'c': '波斯尼亚和黑塞哥维那', 'o': 'Bosna i Hercegovina', 'e': 'Bosnia & Herzegovina', 'n': '387' }, {
        'k': 'BW',
        'c': '博茨瓦纳',
        'o': 'Botswana',
        'e': 'Botswana',
        'n': '267'
    }, { 'k': 'BZ', 'c': '伯利兹', 'o': 'Belize', 'e': 'Belize', 'n': '501' }, {
        'k': 'BT',
        'c': '不丹',
        'o': 'འབྲུག',
        'e': 'Bhutan',
        'n': '975'
    }, { 'k': 'BF', 'c': '布基纳法索', 'o': 'Burkina Faso', 'e': 'Burkina Faso', 'n': '226' }, {
        'k': 'BI',
        'c': '布隆迪',
        'o': 'Uburundi',
        'e': 'Burundi',
        'n': '257'
    }, { 'k': 'BV', 'c': '布韦岛', 'o': 'Bouvet Island', 'e': 'Bouvet Island', 'n': '000'
    }, {
        'k': 'KP',
        'c': '朝鲜',
        'o': '북한',
        'e': 'North Korea',
        'n': '850'
    }, { 'k': 'GQ', 'c': '赤道几内亚', 'o': 'Guinea Ecuatorial', 'e': 'Equatorial Guinea', 'n': '240' }, {
        'k': 'DK',
        'c': '丹麦',
        'o': 'Danmark',
        'e': 'Denmark',
        'n': '45'
    }, { 'k': 'DE', 'c': '德国', 'o': 'Deutschland', 'e': 'Germany', 'n': '49' }, {
        'k': 'DG',
        'c': '迪戈加西亚岛',
        'o': 'Diego Garcia',
        'e': 'Diego Garcia',
        'n': '000'

    }, { 'k': 'TL', 'c': '东帝汶', 'o': 'Timor-Leste', 'e': 'Timor-Leste', 'n': '670' }, {
        'k': 'TG',
        'c': '多哥',
        'o': 'Togo',
        'e': 'Togo',
        'n': '228'
    }, { 'k': 'DO', 'c': '多米尼加共和国', 'o': 'República Dominicana', 'e': 'Dominican Republic', 'n': '1809' }, {
        'k': 'DM',
        'c': '多米尼克',
        'o': 'Dominica',
        'e': 'Dominica',
        'n': '1767'
    }, { 'k': 'RU', 'c': '俄罗斯', 'o': 'Россия', 'e': 'Russia', 'n': '7' }, {
        'k': 'EC',
        'c': '厄瓜多尔',
        'o': 'Ecuador',
        'e': 'Ecuador',
        'n': '593'
    }, { 'k': 'ER', 'c': '厄立特里亚', 'o': 'ኤርትራ', 'e': 'Eritrea', 'n': '291' }, {
        'k': 'FR',
        'c': '法国',
        'o': 'France',
        'e': 'France',
        'n': '33'
    }, { 'k': 'FO', 'c': '法罗群岛', 'o': 'Føroyar', 'e': 'Faroe Islands', 'n': '298' }, {
        'k': 'PF',
        'c': '法属波利尼西亚',
        'o': 'Polynésie française',
        'e': 'French Polynesia',
        'n': '689'
    }, { 'k': 'GF', 'c': '法属圭亚那', 'o': 'Guyane française', 'e': 'French Guiana', 'n': '594' }, {
        'k': 'TF',
        'c': '法属南部领地',
        'o': 'Terres australes françaises',
        'e': 'French Southern Territories',
        'n': '000'

    }, { 'k': 'MF', 'c': '法属圣马丁', 'o': 'Saint-Martin', 'e': 'St Martin', 'n': '590' }, {
        'k': 'PH',
        'c': '菲律宾',
        'o': 'Philippines',
        'e': 'Philippines',
        'n': '63'
    }, { 'k': 'FI', 'c': '芬兰', 'o': 'Suomi', 'e': 'Finland', 'n': '358' }, {
        'k': 'CV',
        'c': '佛得角',
        'o': 'Kabu Verdi',
        'e': 'Cape Verde',
        'n': '238'
    }, {
        'k': 'FK',
        'c': '福克兰群岛（马尔维纳斯群岛）',
        'o': 'Falkland Islands (Islas Malvinas)',
        'e': 'Falkland Islands',
        'n': '500'
    }, { 'k': 'GM', 'c': '冈比亚', 'o': 'Gambia', 'e': 'Gambia', 'n': '220' }, {
        'k': 'CG',
        'c': '刚果（布）',
        'o': 'Congo-Brazzaville',
        'e': 'Congo - Brazzaville',
        'n': '242'
    }, {
        'k': 'CD',
        'c': '刚果（金）',
        'o': 'Jamhuri ya Kidemokrasia ya Kongo',
        'e': 'Congo - Kinshasa',
        'n': '243'
    }, { 'k': 'CO', 'c': '哥伦比亚', 'o': 'Colombia', 'e': 'Colombia', 'n': '57' }, {
        'k': 'CR',
        'c': '哥斯达黎加',
        'o': 'Costa Rica',
        'e': 'Costa Rica',
        'n': '506'
    }, { 'k': 'GD', 'c': '格林纳达', 'o': 'Grenada', 'e': 'Grenada', 'n': '1473' }, {
        'k': 'GL',
        'c': '格陵兰',
        'o': 'Kalaallit Nunaat',
        'e': 'Greenland',
        'n': '299'
    }, { 'k': 'GE', 'c': '格鲁吉亚', 'o': 'საქართველო', 'e': 'Georgia', 'n': '995' }, {
        'k': 'GG',
        'c': '根西岛',
        'o': 'Guernsey',
        'e': 'Guernsey',
        'n': '000'

    }, { 'k': 'CU', 'c': '古巴', 'o': 'Cuba', 'e': 'Cuba', 'n': '53' }, {
        'k': 'GP',
        'c': '瓜德罗普',
        'o': 'Guadeloupe',
        'e': 'Guadeloupe',
        'n': '590'
    }, { 'k': 'GU', 'c': '关岛', 'o': 'Guam', 'e': 'Guam', 'n': '1671' }, {
        'k': 'GY',
        'c': '圭亚那',
        'o': 'Guyana',
        'e': 'Guyana',
        'n': '592'
    }, { 'k': 'KZ', 'c': '哈萨克斯坦', 'o': 'Казахстан', 'e': 'Kazakhstan', 'n': '7' }, {
        'k': 'HT',
        'c': '海地',
        'o': 'Haiti',
        'e': 'Haiti',
        'n': '509'
    }, { 'k': 'KR', 'c': '韩国', 'o': '대한민국', 'e': 'South Korea', 'n': '82' }, {
        'k': 'NL',
        'c': '荷兰',
        'o': 'Nederland',
        'e': 'Netherlands',
        'n': '31'
    }, { 'k': 'BQ', 'c': '荷属加勒比区', 'o': 'Caribbean Netherlands', 'e': 'Caribbean Netherlands', 'n': '599' }, {
        'k': 'SX',
        'c': '荷属圣马丁',
        'o': 'Sint Maarten',
        'e': 'Sint Maarten',
        'n': '1721'
    }, { 'k': 'HM', 'c': '赫德岛和麦克唐纳群岛', 'o': 'Heard & McDonald Islands', 'e': 'Heard & McDonald Islands', 'n': '000'
    }, {
        'k': 'ME',
        'c': '黑山',
        'o': 'Crna Gora',
        'e': 'Montenegro',
        'n': '382'
    }, { 'k': 'HN', 'c': '洪都拉斯', 'o': 'Honduras', 'e': 'Honduras', 'n': '504' }, {
        'k': 'KI',
        'c': '基里巴斯',
        'o': 'Kiribati',
        'e': 'Kiribati',
        'n': '686'
    }, { 'k': 'DJ', 'c': '吉布提', 'o': 'Djibouti', 'e': 'Djibouti', 'n': '253' }, {
        'k': 'KG',
        'c': '吉尔吉斯斯坦',
        'o': 'Кыргызстан',
        'e': 'Kyrgyzstan',
        'n': '996'
    }, { 'k': 'GN', 'c': '几内亚', 'o': 'Guinée', 'e': 'Guinea', 'n': '224' }, {
        'k': 'GW',
        'c': '几内亚比绍',
        'o': 'Guiné-Bissau',
        'e': 'Guinea-Bissau',
        'n': '245'
    }, { 'k': 'CA', 'c': '加拿大', 'o': 'Canada', 'e': 'Canada', 'n': '1' }, {
        'k': 'GH',
        'c': '加纳',
        'o': 'Gaana',
        'e': 'Ghana',
        'n': '233'
    }, { 'k': 'IC', 'c': '加纳利群岛', 'o': 'Canarias', 'e': 'Canary Islands', 'n': '000'
    }, {
        'k': 'GA',
        'c': '加蓬',
        'o': 'Gabon',
        'e': 'Gabon',
        'n': '241'
    }, { 'k': 'KH', 'c': '柬埔寨', 'o': 'កម្ពុជា', 'e': 'Cambodia', 'n': '855' }, {
        'k': 'CZ',
        'c': '捷克',
        'o': 'Česko',
        'e': 'Czechia',
        'n': '420'
    }, { 'k': 'ZW', 'c': '津巴布韦', 'o': 'Zimbabwe', 'e': 'Zimbabwe', 'n': '263' }, {
        'k': 'CM',
        'c': '喀麦隆',
        'o': 'Cameroun',
        'e': 'Cameroon',
        'n': '237'
    }, { 'k': 'QA', 'c': '卡塔尔', 'o': '‫قطر‬‎', 'e': 'Qatar', 'n': '974' }, {
        'k': 'KY',
        'c': '开曼群岛',
        'o': 'Cayman Islands',
        'e': 'Cayman Islands',
        'n': '1345'
    }, { 'k': 'CC', 'c': '科科斯（基林）群岛', 'o': 'Kepulauan Cocos (Keeling)', 'e': 'Cocos (Keeling) Islands', 'n': '000'
    }, {
        'k': 'KM',
        'c': '科摩罗',
        'o': '‫جزر القمر‬‎',
        'e': 'Comoros',
        'n': '269'
    }, { 'k': 'XK', 'c': '科索沃', 'o': 'Kosovë', 'e': 'Kosovo', 'n': '383' }, {
        'k': 'CI',
        'c': '科特迪瓦',
        'o': 'Côte d’Ivoire',
        'e': 'Côte d’Ivoire',
        'n': '225'
    }, { 'k': 'KW', 'c': '科威特', 'o': '‫الكويت‬‎', 'e': 'Kuwait', 'n': '965' }, {
        'k': 'CP',
        'c': '克利珀顿岛',
        'o': 'Clipperton Island',
        'e': 'Clipperton Island',
        'n': '000'
    }, { 'k': 'HR', 'c': '克罗地亚', 'o': 'Hrvatska', 'e': 'Croatia', 'n': '385' }, {
        'k': 'KE',
        'c': '肯尼亚',
        'o': 'Kenya',
        'e': 'Kenya',
        'n': '254'
    }, { 'k': 'CK', 'c': '库克群岛', 'o': 'Cook Islands', 'e': 'Cook Islands', 'n': '682' }, {
        'k': 'CW',
        'c': '库拉索',
        'o': 'Curaçao',
        'e': 'Curaçao',
        'n': '599'
    }, { 'k': 'LV', 'c': '拉脱维亚', 'o': 'Latvija', 'e': 'Latvia', 'n': '371' }, {
        'k': 'LS',
        'c': '莱索托',
        'o': 'Lesotho',
        'e': 'Lesotho',
        'n': '266'
    }, { 'k': 'LA', 'c': '老挝', 'o': 'ລາວ', 'e': 'Laos', 'n': '856' }, {
        'k': 'LB',
        'c': '黎巴嫩',
        'o': '‫لبنان‬‎',
        'e': 'Lebanon',
        'n': '961'
    }, { 'k': 'LR', 'c': '利比里亚', 'o': 'Liberia', 'e': 'Liberia', 'n': '231' }, {
        'k': 'LY',
        'c': '利比亚',
        'o': '‫ليبيا‬‎',
        'e': 'Libya',
        'n': '218'
    }, { 'k': 'LT', 'c': '立陶宛', 'o': 'Lietuva', 'e': 'Lithuania', 'n': '370' }, {
        'k': 'LI',
        'c': '列支敦士登',
        'o': 'Liechtenstein',
        'e': 'Liechtenstein',
        'n': '423'
    }, { 'k': 'RE', 'c': '留尼汪', 'o': 'La Réunion', 'e': 'Réunion', 'n': '262' }, {
        'k': 'LU',
        'c': '卢森堡',
        'o': 'Luxembourg',
        'e': 'Luxembourg',
        'n': '352'
    }, { 'k': 'RW', 'c': '卢旺达', 'o': 'U Rwanda', 'e': 'Rwanda', 'n': '250' }, {
        'k': 'RO',
        'c': '罗马尼亚',
        'o': 'România',
        'e': 'Romania',
        'n': '40'
    }, { 'k': 'MG', 'c': '马达加斯加', 'o': 'Madagasikara', 'e': 'Madagascar', 'n': '261' }, {
        'k': 'IM',
        'c': '马恩岛',
        'o': 'Isle of Man',
        'e': 'Isle of Man',
        'n': '000'

    }, { 'k': 'MT', 'c': '马耳他', 'o': 'Malta', 'e': 'Malta', 'n': '356' }, {
        'k': 'MV',
        'c': '马尔代夫',
        'o': 'Maldives',
        'e': 'Maldives',
        'n': '960'
    }, { 'k': 'MW', 'c': '马拉维', 'o': 'Malawi', 'e': 'Malawi', 'n': '265' }, {
        'k': 'MY',
        'c': '马来西亚',
        'o': 'Malaysia',
        'e': 'Malaysia',
        'n': '60'
    }, { 'k': 'ML', 'c': '马里', 'o': 'Mali', 'e': 'Mali', 'n': '223' }, {
        'k': 'MK',
        'c': '马其顿（前南斯拉夫马其顿共和国）',
        'o': 'Република Македонија',
        'e': 'Macedonia (FYROM)',
        'n': '389'
    }, { 'k': 'MH', 'c': '马绍尔群岛', 'o': 'Marshall Islands', 'e': 'Marshall Islands', 'n': '692' }, {
        'k': 'MQ',
        'c': '马提尼克',
        'o': 'Martinique',
        'e': 'Martinique',
        'n': '596'
    }, { 'k': 'YT', 'c': '马约特', 'o': 'Mayotte', 'e': 'Mayotte', 'n': '000'
    }, {
        'k': 'MU',
        'c': '毛里求斯',
        'o': 'Moris',
        'e': 'Mauritius',
        'n': '230'
    }, { 'k': 'MR', 'c': '毛里塔尼亚', 'o': '‫موريتانيا‬‎', 'e': 'Mauritania', 'n': '222' }, {
        'k': 'US',
        'c': '美国',
        'o': 'United States',
        'e': 'United States',
        'n': '1'
    }, { 'k': 'UM', 'c': '美国本土外小岛屿', 'o': 'U.S. Outlying Islands', 'e': 'US Outlying Islands', 'n': '000'
    }, {
        'k': 'AS',
        'c': '美属萨摩亚',
        'o': 'American Samoa',
        'e': 'American Samoa',
        'n': '1684'
    }, { 'k': 'VI', 'c': '美属维尔京群岛', 'o': 'U.S. Virgin Islands', 'e': 'US Virgin Islands', 'n': '1340' }, {
        'k': 'MN',
        'c': '蒙古',
        'o': 'Монгол',
        'e': 'Mongolia',
        'n': '976'
    }, { 'k': 'MS', 'c': '蒙特塞拉特', 'o': 'Montserrat', 'e': 'Montserrat', 'n': '1664' }, {
        'k': 'BD',
        'c': '孟加拉国',
        'o': 'বাংলাদেশ',
        'e': 'Bangladesh',
        'n': '880'
    }, { 'k': 'PE', 'c': '秘鲁', 'o': 'Perú', 'e': 'Peru', 'n': '51' }, {
        'k': 'FM',
        'c': '密克罗尼西亚',
        'o': 'Micronesia',
        'e': 'Micronesia',
        'n': '691'
    }, { 'k': 'MM', 'c': '缅甸', 'o': 'မြန်မာ', 'e': 'Myanmar (Burma)', 'n': '95' }, {
        'k': 'MD',
        'c': '摩尔多瓦',
        'o': 'Republica Moldova',
        'e': 'Moldova',
        'n': '373'
    }, { 'k': 'MA', 'c': '摩洛哥', 'o': 'Morocco', 'e': 'Morocco', 'n': '212' }, {
        'k': 'MC',
        'c': '摩纳哥',
        'o': 'Monaco',
        'e': 'Monaco',
        'n': '377'
    }, { 'k': 'MZ', 'c': '莫桑比克', 'o': 'Moçambique', 'e': 'Mozambique', 'n': '258' }, {
        'k': 'MX',
        'c': '墨西哥',
        'o': 'México',
        'e': 'Mexico',
        'n': '52'
    }, { 'k': 'NA', 'c': '纳米比亚', 'o': 'Namibië', 'e': 'Namibia', 'n': '264' }, {
        'k': 'ZA',
        'c': '南非',
        'o': 'South Africa',
        'e': 'South Africa',
        'n': '27'
    }, {
        'k': 'GS',
        'c': '南乔治亚和南桑威奇群岛',
        'o': 'South Georgia & South Sandwich Islands',
        'e': 'South Georgia & South Sandwich Islands',
        'n': '000'

    }, { 'k': 'SS', 'c': '南苏丹', 'o': '‫جنوب السودان‬‎', 'e': 'South Sudan', 'n': '211' }, {
        'k': 'NP',
        'c': '尼泊尔',
        'o': 'नेपाल',
        'e': 'Nepal',
        'n': '977'
    }, { 'k': 'NI', 'c': '尼加拉瓜', 'o': 'Nicaragua', 'e': 'Nicaragua', 'n': '505' }, {
        'k': 'NE',
        'c': '尼日尔',
        'o': 'Nijar',
        'e': 'Niger',
        'n': '227'
    }, { 'k': 'NG', 'c': '尼日利亚', 'o': 'Nigeria', 'e': 'Nigeria', 'n': '234' }, {
        'k': 'NU',
        'c': '纽埃',
        'o': 'Niue',
        'e': 'Niue',
        'n': '683'
    }, { 'k': 'NO', 'c': '挪威', 'o': 'Norge', 'e': 'Norway', 'n': '47' }, {
        'k': 'NF',
        'c': '诺福克岛',
        'o': 'Norfolk Island',
        'e': 'Norfolk Island',
        'n': '672'
    }, { 'k': 'PW', 'c': '帕劳', 'o': 'Palau', 'e': 'Palau', 'n': '680' }, {
        'k': 'PN',
        'c': '皮特凯恩群岛',
        'o': 'Pitcairn Islands',
        'e': 'Pitcairn Islands',
        'n': '000'

    }, { 'k': 'PT', 'c': '葡萄牙', 'o': 'Portugal', 'e': 'Portugal', 'n': '351' }, {
        'k': 'JP',
        'c': '日本',
        'o': '日本',
        'e': 'Japan',
        'n': '81'
    }, { 'k': 'SE', 'c': '瑞典', 'o': 'Sverige', 'e': 'Sweden', 'n': '46' }, {
        'k': 'CH',
        'c': '瑞士',
        'o': 'Schweiz',
        'e': 'Switzerland',
        'n': '41'
    }, { 'k': 'SV', 'c': '萨尔瓦多', 'o': 'El Salvador', 'e': 'El Salvador', 'n': '503' }, {
        'k': 'WS',
        'c': '萨摩亚',
        'o': 'Samoa',
        'e': 'Samoa',
        'n': '685'
    }, { 'k': 'RS', 'c': '塞尔维亚', 'o': 'Србија', 'e': 'Serbia', 'n': '381' }, {
        'k': 'SL',
        'c': '塞拉利昂',
        'o': 'Sierra Leone',
        'e': 'Sierra Leone',
        'n': '232'
    }, { 'k': 'SN', 'c': '塞内加尔', 'o': 'Senegaal', 'e': 'Senegal', 'n': '221' }, {
        'k': 'CY',
        'c': '塞浦路斯',
        'o': 'Κύπρος',
        'e': 'Cyprus',
        'n': '357'
    }, { 'k': 'SC', 'c': '塞舌尔', 'o': 'Seychelles', 'e': 'Seychelles', 'n': '248' }, {
        'k': 'SA',
        'c': '沙特阿拉伯',
        'o': '‫المملكة العربية السعودية‬‎',
        'e': 'Saudi Arabia',
        'n': '966'
    }, { 'k': 'BL', 'c': '圣巴泰勒米', 'o': 'Saint-Barthélemy', 'e': 'St Barthélemy', 'n': '590' }, {
        'k': 'CX',
        'c': '圣诞岛',
        'o': 'Christmas Island',
        'e': 'Christmas Island'
    }, { 'k': 'ST', 'c': '圣多美和普林西比', 'o': 'São Tomé e Príncipe', 'e': 'São Tomé & Príncipe', 'n': '239' }, {
        'k': 'SH',
        'c': '圣赫勒拿',
        'o': 'St. Helena',
        'e': 'St Helena',
        'n': '290'
    }, { 'k': 'KN', 'c': '圣基茨和尼维斯', 'o': 'St. Kitts & Nevis', 'e': 'St Kitts & Nevis', 'n': '1869' }, {
        'k': 'LC',
        'c': '圣卢西亚',
        'o': 'St. Lucia',
        'e': 'St Lucia',
        'n': '1758'
    }, { 'k': 'SM', 'c': '圣马力诺', 'o': 'San Marino', 'e': 'San Marino', 'n': '378' }, {
        'k': 'PM',
        'c': '圣皮埃尔和密克隆群岛',
        'o': 'Saint-Pierre-et-Miquelon',
        'e': 'St Pierre & Miquelon',
        'n': '508'
    }, {
        'k': 'VC',
        'c': '圣文森特和格林纳丁斯',
        'o': 'St. Vincent & Grenadines',
        'e': 'St Vincent & Grenadines',
        'n': '1784'
    }, { 'k': 'LK', 'c': '斯里兰卡', 'o': 'ශ්‍රී ලංකාව', 'e': 'Sri Lanka', 'n': '94' }, {
        'k': 'SK',
        'c': '斯洛伐克',
        'o': 'Slovensko',
        'e': 'Slovakia',
        'n': '421'
    }, { 'k': 'SI', 'c': '斯洛文尼亚', 'o': 'Slovenija', 'e': 'Slovenia', 'n': '386' }, {
        'k': 'SJ',
        'c': '斯瓦尔巴和扬马延',
        'o': 'Svalbard og Jan Mayen',
        'e': 'Svalbard & Jan Mayen',
        'n': '000'
    }, { 'k': 'SZ', 'c': '斯威士兰', 'o': 'Swaziland', 'e': 'Swaziland', 'n': '268' }, {
        'k': 'SD',
        'c': '苏丹',
        'o': '‫السودان‬‎',
        'e': 'Sudan',
        'n': '249'
    }, { 'k': 'SR', 'c': '苏里南', 'o': 'Suriname', 'e': 'Suriname', 'n': '597' }, {
        'k': 'SO',
        'c': '索马里',
        'o': 'Soomaaliya',
        'e': 'Somalia',
        'n': '252'
    }, { 'k': 'SB', 'c': '所罗门群岛', 'o': 'Solomon Islands', 'e': 'Solomon Islands', 'n': '677' }, {
        'k': 'TJ',
        'c': '塔吉克斯坦',
        'o': 'Тоҷикистон',
        'e': 'Tajikistan',
        'n': '992'
    }, { 'k': 'TH', 'c': '泰国', 'o': 'ไทย', 'e': 'Thailand', 'n': '66' }, {
        'k': 'TZ',
        'c': '坦桑尼亚',
        'o': 'Tanzania',
        'e': 'Tanzania',
        'n': '255'
    }, { 'k': 'TO', 'c': '汤加', 'o': 'Tonga', 'e': 'Tonga', 'n': '676' }, {
        'k': 'TC',
        'c': '特克斯和凯科斯群岛',
        'o': 'Turks & Caicos Islands',
        'e': 'Turks & Caicos Islands',
        'n': '1649'
    }, {
        'k': 'TT',
        'c': '特立尼达和多巴哥',
        'o': 'Trinidad & Tobago',
        'e': 'Trinidad & Tobago',
        'n': '1868'
    }, { 'k': 'TN', 'c': '突尼斯', 'o': 'Tunisia', 'e': 'Tunisia', 'n': '216' }, {
        'k': 'TV',
        'c': '图瓦卢',
        'o': 'Tuvalu',
        'e': 'Tuvalu',
        'n': '688'
    }, { 'k': 'TR', 'c': '土耳其', 'o': 'Türkiye', 'e': 'Turkey', 'n': '90' }, {
        'k': 'TM',
        'c': '土库曼斯坦',
        'o': 'Turkmenistan',
        'e': 'Turkmenistan',
        'n': '993'
    }, { 'k': 'TK', 'c': '托克劳', 'o': 'Tokelau', 'e': 'Tokelau', 'n': '690' }, {
        'k': 'WF',
        'c': '瓦利斯和富图纳',
        'o': 'Wallis & Futuna',
        'e': 'Wallis & Futuna',
        'n': '681'
    }, { 'k': 'VU', 'c': '瓦努阿图', 'o': 'Vanuatu', 'e': 'Vanuatu', 'n': '678' }, {
        'k': 'GT',
        'c': '危地马拉',
        'o': 'Guatemala',
        'e': 'Guatemala',
        'n': '502'
    }, { 'k': 'VE', 'c': '委内瑞拉', 'o': 'Venezuela', 'e': 'Venezuela', 'n': '58' }, {
        'k': 'BN',
        'c': '文莱',
        'o': 'Brunei',
        'e': 'Brunei',
        'n': '673'
    }, { 'k': 'UG', 'c': '乌干达', 'o': 'Uganda', 'e': 'Uganda', 'n': '256' }, {
        'k': 'UA',
        'c': '乌克兰',
        'o': 'Україна',
        'e': 'Ukraine',
        'n': '380'
    }, { 'k': 'UY', 'c': '乌拉圭', 'o': 'Uruguay', 'e': 'Uruguay', 'n': '598' }, {
        'k': 'UZ',
        'c': '乌兹别克斯坦',
        'o': 'Oʻzbekiston',
        'e': 'Uzbekistan',
        'n': '998'
    }, { 'k': 'GR', 'c': '希腊', 'o': 'Ελλάδα', 'e': 'Greece', 'n': '30' }, {
        'k': 'SG',
        'c': '新加坡',
        'o': 'Singapore',
        'e': 'Singapore',
        'n': '65'
    }, { 'k': 'NC', 'c': '新喀里多尼亚', 'o': 'Nouvelle-Calédonie', 'e': 'New Caledonia', 'n': '687' }, {
        'k': 'NZ',
        'c': '新西兰',
        'o': 'New Zealand',
        'e': 'New Zealand',
        'n': '64'
    }, { 'k': 'HU', 'c': '匈牙利', 'o': 'Magyarország', 'e': 'Hungary', 'n': '36' }, {
        'k': 'EA',
        'c': '休达及梅利利亚',
        'o': 'Ceuta y Melilla',
        'e': 'Ceuta & Melilla'
    }, { 'k': 'SY', 'c': '叙利亚', 'o': '‫سوريا‬‎', 'e': 'Syria', 'n': '963' }, {
        'k': 'JM',
        'c': '牙买加',
        'o': 'Jamaica',
        'e': 'Jamaica',
        'n': '1876'
    }, { 'k': 'AM', 'c': '亚美尼亚', 'o': 'Հայաստան', 'e': 'Armenia', 'n': '374' }, {
        'k': 'YE',
        'c': '也门',
        'o': '‫اليمن‬‎',
        'e': 'Yemen',
        'n': '967'
    }, { 'k': 'IQ', 'c': '伊拉克', 'o': '‫العراق‬‎', 'e': 'Iraq', 'n': '964' }, {
        'k': 'IR',
        'c': '伊朗',
        'o': '‫ایران‬‎',
        'e': 'Iran',
        'n': '98'
    }, { 'k': 'IL', 'c': '以色列', 'o': '‫ישראל‬‎', 'e': 'Israel', 'n': '972' }, {
        'k': 'IT',
        'c': '意大利',
        'o': 'Italia',
        'e': 'Italy',
        'n': '39'
    }, { 'k': 'IN', 'c': '印度', 'o': 'भारत', 'e': 'India', 'n': '91' }, {
        'k': 'ID',
        'c': '印度尼西亚',
        'o': 'Indonesia',
        'e': 'Indonesia',
        'n': '62'
    }, { 'k': 'GB', 'c': '英国', 'o': 'United Kingdom', 'e': 'United Kingdom', 'n': '44' }, {
        'k': 'VG',
        'c': '英属维尔京群岛',
        'o': 'British Virgin Islands',
        'e': 'British Virgin Islands',
        'n': '1284'
    }, {
        'k': 'IO',
        'c': '英属印度洋领地',
        'o': 'British Indian Ocean Territory',
        'e': 'British Indian Ocean Territory',
        'n': '246'
    }, { 'k': 'JO', 'c': '约旦', 'o': '‫الأردن‬‎', 'e': 'Jordan', 'n': '962' }, {
        'k': 'VN',
        'c': '越南',
        'o': 'Việt Nam',
        'e': 'Vietnam',
        'n': '84'
    }, { 'k': 'ZM', 'c': '赞比亚', 'o': 'Zambia', 'e': 'Zambia', 'n': '260' }, {
        'k': 'JE',
        'c': '泽西岛',
        'o': 'Jersey',
        'e': 'Jersey',
        'n': '000'
    }, { 'k': 'TD', 'c': '乍得', 'o': 'Tchad', 'e': 'Chad', 'n': '235' }, {
        'k': 'GI',
        'c': '直布罗陀',
        'o': 'Gibraltar',
        'e': 'Gibraltar',
        'n': '350'
    }, { 'k': 'CL', 'c': '智利', 'o': 'Chile', 'e': 'Chile', 'n': '56' }, {
        'k': 'CF',
        'c': '中非共和国',
        'o': 'République centrafricaine',
        'e': 'Central African Republic',
        'n': '236'
    }, { 'k': 'NR', 'c': '瑙鲁', 'o': 'Nauru', 'e': 'Nauru', 'n': '674' }, {
        'k': 'VA',
        'c': '梵蒂冈',
        'o': 'Città del Vaticano',
        'e': 'Vatican City',
        'n': '379'
}, { 'k': 'FJ', 'c': '斐济', 'o': 'Fiji', 'e': 'Fiji', 'n': '679' }]

function formatter (data) {
    return data;
}

export const getAreaCode = () => formatter(area);
