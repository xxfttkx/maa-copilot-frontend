import { atomWithStorage } from "jotai/utils";

interface Character {
    elite: number;
    id: string;
    level: number;
    name: string;
    own: boolean;
    potential: number;
    rarity: number;
}

export function patchChara(content: object): Character[] {
  atomWithStorage('chars', content);
  return content as Character[];
}

export function load(): Character[] {
  let str = loadsStorage('chars');
  return str as Character[];
}

export const characters: Character[] = [
  {
    "elite": 0,
    "id": "char_204_platnm",
    "level": 12,
    "name": "白金",
    "own": true,
    "potential": 2,
    "rarity": 5
  },
  {
    "elite": 2,
    "id": "char_1012_skadi2",
    "level": 90,
    "name": "浊心斯卡蒂",
    "own": true,
    "potential": 4,
    "rarity": 6
  },
  {
    "elite": 0,
    "id": "char_271_spikes",
    "level": 1,
    "name": "芳汀",
    "own": true,
    "potential": 6,
    "rarity": 4
  },
  {
    "elite": 2,
    "id": "char_336_folivo",
    "level": 50,
    "name": "稀音",
    "own": true,
    "potential": 6,
    "rarity": 5
  },
  {
    "elite": 0,
    "id": "char_4016_kazema",
    "level": 1,
    "name": "风丸",
    "own": true,
    "potential": 3,
    "rarity": 5
  },
  {
    "elite": 0,
    "id": "char_433_windft",
    "level": 1,
    "name": "掠风",
    "own": true,
    "potential": 5,
    "rarity": 5
  },
  {
    "elite": 2,
    "id": "char_293_thorns",
    "level": 90,
    "name": "棘刺",
    "own": true,
    "potential": 1,
    "rarity": 6
  },
  {
    "elite": 0,
    "id": "char_451_robin",
    "level": 1,
    "name": "罗宾",
    "own": true,
    "potential": 6,
    "rarity": 5
  },
  {
    "elite": 1,
    "id": "char_010_chen",
    "level": 80,
    "name": "陈",
    "own": true,
    "potential": 2,
    "rarity": 6
  },
  {
    "elite": 2,
    "id": "char_112_siege",
    "level": 60,
    "name": "推进之王",
    "own": true,
    "potential": 1,
    "rarity": 6
  },
  {
    "elite": 2,
    "id": "char_437_mizuki",
    "level": 30,
    "name": "水月",
    "own": true,
    "potential": 1,
    "rarity": 6
  },
  {
    "elite": 0,
    "id": "char_4100_caper",
    "level": 1,
    "name": "跃跃",
    "own": true,
    "potential": 1,
    "rarity": 4
  },
  {
    "elite": 2,
    "id": "char_300_phenxi",
    "level": 90,
    "name": "菲亚梅塔",
    "own": true,
    "potential": 1,
    "rarity": 6
  },
  {
    "elite": 2,
    "id": "char_1023_ghost2",
    "level": 90,
    "name": "归溟幽灵鲨",
    "own": true,
    "potential": 1,
    "rarity": 6
  },
  {
    "elite": 0,
    "id": "char_301_cutter",
    "level": 1,
    "name": "刻刀",
    "own": true,
    "potential": 6,
    "rarity": 4
  },
  {
    "elite": 2,
    "id": "char_140_whitew",
    "level": 50,
    "name": "拉普兰德",
    "own": true,
    "potential": 1,
    "rarity": 5
  },
  {
    "elite": 2,
    "id": "char_147_shining",
    "level": 60,
    "name": "闪灵",
    "own": true,
    "potential": 1,
    "rarity": 6
  },
  {
    "elite": 2,
    "id": "char_485_pallas",
    "level": 60,
    "name": "帕拉斯",
    "own": true,
    "potential": 1,
    "rarity": 6
  },
  {
    "elite": 2,
    "id": "char_003_kalts",
    "level": 60,
    "name": "凯尔希",
    "own": true,
    "potential": 2,
    "rarity": 6
  },
  {
    "elite": 2,
    "id": "char_1021_kroos2",
    "level": 50,
    "name": "寒芒克洛丝",
    "own": true,
    "potential": 6,
    "rarity": 5
  },
  {
    "elite": 2,
    "id": "char_362_saga",
    "level": 60,
    "name": "嵯峨",
    "own": true,
    "potential": 2,
    "rarity": 6
  },
  {
    "elite": 0,
    "id": "char_333_sidero",
    "level": 1,
    "name": "铸铁",
    "own": true,
    "potential": 1,
    "rarity": 5
  },
  {
    "elite": 2,
    "id": "char_350_surtr",
    "level": 60,
    "name": "史尔特尔",
    "own": true,
    "potential": 1,
    "rarity": 6
  },
  {
    "elite": 2,
    "id": "char_311_mudrok",
    "level": 90,
    "name": "泥岩",
    "own": true,
    "potential": 1,
    "rarity": 6
  },
  {
    "elite": 1,
    "id": "char_122_beagle",
    "level": 31,
    "name": "米格鲁",
    "own": true,
    "potential": 6,
    "rarity": 3
  },
  {
    "elite": 1,
    "id": "char_400_weedy",
    "level": 2,
    "name": "温蒂",
    "own": true,
    "potential": 1,
    "rarity": 6
  },
  {
    "elite": 2,
    "id": "char_1013_chen2",
    "level": 90,
    "name": "假日威龙陈",
    "own": true,
    "potential": 2,
    "rarity": 6
  },
  {
    "elite": 0,
    "id": "char_174_slbell",
    "level": 2,
    "name": "初雪",
    "own": true,
    "potential": 2,
    "rarity": 5
  },
  {
    "elite": 2,
    "id": "char_222_bpipe",
    "level": 60,
    "name": "风笛",
    "own": true,
    "potential": 2,
    "rarity": 6
  },
  {
    "elite": 2,
    "id": "char_102_texas",
    "level": 50,
    "name": "德克萨斯",
    "own": true,
    "potential": 3,
    "rarity": 5
  },
  {
    "elite": 1,
    "id": "char_420_flamtl",
    "level": 80,
    "name": "焰尾",
    "own": true,
    "potential": 1,
    "rarity": 6
  },
  {
    "elite": 2,
    "id": "char_017_huang",
    "level": 60,
    "name": "煌",
    "own": true,
    "potential": 1,
    "rarity": 6
  },
  {
    "elite": 1,
    "id": "char_249_mlyss",
    "level": 1,
    "name": "缪尔赛思",
    "own": true,
    "potential": 2,
    "rarity": 6
  },
  {
    "elite": 2,
    "id": "char_4080_lin",
    "level": 60,
    "name": "林",
    "own": true,
    "potential": 1,
    "rarity": 6
  },
  {
    "elite": 0,
    "id": "char_187_ccheal",
    "level": 1,
    "name": "嘉维尔",
    "own": true,
    "potential": 6,
    "rarity": 4
  },
  {
    "elite": 2,
    "id": "char_264_f12yin",
    "level": 60,
    "name": "山",
    "own": true,
    "potential": 1,
    "rarity": 6
  },
  {
    "elite": 2,
    "id": "char_1014_nearl2",
    "level": 60,
    "name": "耀骑士临光",
    "own": true,
    "potential": 1,
    "rarity": 6
  },
  {
    "elite": 2,
    "id": "char_474_glady",
    "level": 30,
    "name": "歌蕾蒂娅",
    "own": true,
    "potential": 6,
    "rarity": 6
  },
  {
    "elite": 0,
    "id": "char_325_bison",
    "level": 1,
    "name": "拜松",
    "own": true,
    "potential": 6,
    "rarity": 5
  },
  {
    "elite": 2,
    "id": "char_172_svrash",
    "level": 60,
    "name": "银灰",
    "own": true,
    "potential": 1,
    "rarity": 6
  },
  {
    "elite": 2,
    "id": "char_202_demkni",
    "level": 60,
    "name": "塞雷娅",
    "own": true,
    "potential": 1,
    "rarity": 6
  },
  {
    "elite": 0,
    "id": "char_4054_malist",
    "level": 1,
    "name": "至简",
    "own": true,
    "potential": 1,
    "rarity": 5
  },
  {
    "elite": 2,
    "id": "char_416_zumama",
    "level": 60,
    "name": "森蚺",
    "own": true,
    "potential": 1,
    "rarity": 6
  },
  {
    "elite": 0,
    "id": "char_4071_peper",
    "level": 1,
    "name": "明椒",
    "own": true,
    "potential": 1,
    "rarity": 5
  },
  {
    "elite": 2,
    "id": "char_136_hsguma",
    "level": 60,
    "name": "星熊",
    "own": true,
    "potential": 1,
    "rarity": 6
  },
  {
    "elite": 2,
    "id": "char_4138_narant",
    "level": 60,
    "name": "娜仁图亚",
    "own": true,
    "potential": 1,
    "rarity": 6
  },
  {
    "elite": 1,
    "id": "char_4039_horn",
    "level": 80,
    "name": "号角",
    "own": true,
    "potential": 1,
    "rarity": 6
  },
  {
    "elite": 0,
    "id": "char_4062_totter",
    "level": 1,
    "name": "铅踝",
    "own": true,
    "potential": 1,
    "rarity": 4
  },
  {
    "elite": 0,
    "id": "char_4040_rockr",
    "level": 1,
    "name": "洛洛",
    "own": true,
    "potential": 1,
    "rarity": 5
  },
  {
    "elite": 2,
    "id": "char_180_amgoat",
    "level": 60,
    "name": "艾雅法拉",
    "own": true,
    "potential": 2,
    "rarity": 6
  },
  {
    "elite": 2,
    "id": "char_2025_shu",
    "level": 60,
    "name": "黍",
    "own": true,
    "potential": 1,
    "rarity": 6
  },
  {
    "elite": 2,
    "id": "char_4055_bgsnow",
    "level": 60,
    "name": "鸿雪",
    "own": true,
    "potential": 1,
    "rarity": 6
  },
  {
    "elite": 2,
    "id": "char_103_angel",
    "level": 60,
    "name": "能天使",
    "own": true,
    "potential": 2,
    "rarity": 6
  },
  {
    "elite": 2,
    "id": "char_4046_ebnhlz",
    "level": 60,
    "name": "黑键",
    "own": true,
    "potential": 1,
    "rarity": 6
  },
  {
    "elite": 2,
    "id": "char_134_ifrit",
    "level": 60,
    "name": "伊芙利特",
    "own": true,
    "potential": 1,
    "rarity": 6
  },
  {
    "elite": 0,
    "id": "char_427_vigil",
    "level": 50,
    "name": "伺夜",
    "own": true,
    "potential": 3,
    "rarity": 6
  },
  {
    "elite": 0,
    "id": "char_4063_quartz",
    "level": 1,
    "name": "石英",
    "own": true,
    "potential": 1,
    "rarity": 4
  },
  {
    "elite": 2,
    "id": "char_358_lisa",
    "level": 60,
    "name": "铃兰",
    "own": true,
    "potential": 1,
    "rarity": 6
  },
  {
    "elite": 2,
    "id": "char_1040_blaze2",
    "level": 60,
    "name": "烛煌",
    "own": true,
    "potential": 1,
    "rarity": 6
  },
  {
    "elite": 2,
    "id": "char_197_poca",
    "level": 30,
    "name": "早露",
    "own": true,
    "potential": 1,
    "rarity": 6
  },
  {
    "elite": 2,
    "id": "char_291_aglina",
    "level": 60,
    "name": "安洁莉娜",
    "own": true,
    "potential": 1,
    "rarity": 6
  },
  {
    "elite": 2,
    "id": "char_225_haak",
    "level": 60,
    "name": "阿",
    "own": true,
    "potential": 2,
    "rarity": 6
  },
  {
    "elite": 2,
    "id": "char_322_lmlee",
    "level": 60,
    "name": "老鲤",
    "own": true,
    "potential": 3,
    "rarity": 6
  },
  {
    "elite": 0,
    "id": "char_183_skgoat",
    "level": 32,
    "name": "地灵",
    "own": true,
    "potential": 6,
    "rarity": 4
  },
  {
    "elite": 2,
    "id": "char_486_takila",
    "level": 1,
    "name": "龙舌兰",
    "own": true,
    "potential": 6,
    "rarity": 5
  },
  {
    "elite": 0,
    "id": "char_369_bena",
    "level": 1,
    "name": "贝娜",
    "own": true,
    "potential": 6,
    "rarity": 5
  },
  {
    "elite": 2,
    "id": "char_1016_agoat2",
    "level": 60,
    "name": "纯烬艾雅法拉",
    "own": true,
    "potential": 2,
    "rarity": 6
  },
  {
    "elite": 2,
    "id": "char_128_plosis",
    "level": 50,
    "name": "白面鸮",
    "own": true,
    "potential": 1,
    "rarity": 5
  },
  {
    "elite": 0,
    "id": "char_294_ayer",
    "level": 1,
    "name": "断崖",
    "own": true,
    "potential": 1,
    "rarity": 5
  },
  {
    "elite": 2,
    "id": "char_4042_lumen",
    "level": 60,
    "name": "流明",
    "own": true,
    "potential": 6,
    "rarity": 6
  },
  {
    "elite": 2,
    "id": "char_401_elysm",
    "level": 50,
    "name": "极境",
    "own": true,
    "potential": 4,
    "rarity": 5
  },
  {
    "elite": 0,
    "id": "char_155_tiger",
    "level": 1,
    "name": "因陀罗",
    "own": true,
    "potential": 1,
    "rarity": 5
  },
  {
    "elite": 2,
    "id": "char_1028_texas2",
    "level": 60,
    "name": "缄默德克萨斯",
    "own": true,
    "potential": 1,
    "rarity": 6
  },
  {
    "elite": 2,
    "id": "char_179_cgbird",
    "level": 60,
    "name": "夜莺",
    "own": true,
    "potential": 2,
    "rarity": 6
  },
  {
    "elite": 0,
    "id": "char_185_frncat",
    "level": 2,
    "name": "慕斯",
    "own": true,
    "potential": 6,
    "rarity": 4
  },
  {
    "elite": 2,
    "id": "char_243_waaifu",
    "level": 50,
    "name": "槐琥",
    "own": true,
    "potential": 3,
    "rarity": 5
  },
  {
    "elite": 2,
    "id": "char_2013_cerber",
    "level": 30,
    "name": "刻俄柏",
    "own": true,
    "potential": 1,
    "rarity": 6
  },
  {
    "elite": 1,
    "id": "char_1031_slent2",
    "level": 1,
    "name": "淬羽赫默",
    "own": true,
    "potential": 1,
    "rarity": 6
  },
  {
    "elite": 0,
    "id": "char_489_serum",
    "level": 1,
    "name": "蚀清",
    "own": true,
    "potential": 4,
    "rarity": 5
  },
  {
    "elite": 0,
    "id": "char_4123_ela",
    "level": 50,
    "name": "艾拉",
    "own": true,
    "potential": 1,
    "rarity": 6
  },
  {
    "elite": 2,
    "id": "char_148_nearl",
    "level": 50,
    "name": "临光",
    "own": true,
    "potential": 1,
    "rarity": 5
  },
  {
    "elite": 2,
    "id": "char_254_vodfox",
    "level": 50,
    "name": "巫恋",
    "own": true,
    "potential": 3,
    "rarity": 5
  },
  {
    "elite": 2,
    "id": "char_252_bibeak",
    "level": 50,
    "name": "柏喙",
    "own": true,
    "potential": 6,
    "rarity": 5
  },
  {
    "elite": 2,
    "id": "char_421_crow",
    "level": 50,
    "name": "羽毛笔",
    "own": true,
    "potential": 5,
    "rarity": 5
  },
  {
    "elite": 2,
    "id": "char_171_bldsk",
    "level": 50,
    "name": "华法琳",
    "own": true,
    "potential": 1,
    "rarity": 5
  },
  {
    "elite": 2,
    "id": "char_002_amiya",
    "level": 30,
    "name": "阿米娅",
    "own": true,
    "potential": 6,
    "rarity": 5
  },
  {
    "elite": 2,
    "id": "char_143_ghost",
    "level": 30,
    "name": "幽灵鲨",
    "own": true,
    "potential": 2,
    "rarity": 5
  },
  {
    "elite": 1,
    "id": "char_129_bluep",
    "level": 70,
    "name": "蓝毒",
    "own": true,
    "potential": 2,
    "rarity": 5
  },
  {
    "elite": 0,
    "id": "char_141_nights",
    "level": 1,
    "name": "夜烟",
    "own": true,
    "potential": 6,
    "rarity": 4
  },
  {
    "elite": 0,
    "id": "char_1027_greyy2",
    "level": 1,
    "name": "承曦格雷伊",
    "own": true,
    "potential": 1,
    "rarity": 5
  },
  {
    "elite": 1,
    "id": "char_115_headbr",
    "level": 50,
    "name": "凛冬",
    "own": true,
    "potential": 4,
    "rarity": 5
  },
  {
    "elite": 2,
    "id": "char_237_gravel",
    "level": 40,
    "name": "砾",
    "own": true,
    "potential": 6,
    "rarity": 4
  },
  {
    "elite": 1,
    "id": "char_107_liskam",
    "level": 50,
    "name": "雷蛇",
    "own": true,
    "potential": 2,
    "rarity": 5
  },
  {
    "elite": 0,
    "id": "char_496_wildmn",
    "level": 1,
    "name": "野鬃",
    "own": true,
    "potential": 6,
    "rarity": 5
  },
  {
    "elite": 1,
    "id": "char_108_silent",
    "level": 50,
    "name": "赫默",
    "own": true,
    "potential": 2,
    "rarity": 5
  },
  {
    "elite": 2,
    "id": "char_1024_hbisc2",
    "level": 2,
    "name": "濯尘芙蓉",
    "own": true,
    "potential": 2,
    "rarity": 5
  },
  {
    "elite": 2,
    "id": "char_163_hpsts",
    "level": 1,
    "name": "火神",
    "own": true,
    "potential": 2,
    "rarity": 5
  },
  {
    "elite": 1,
    "id": "char_449_glider",
    "level": 70,
    "name": "蜜莓",
    "own": true,
    "potential": 5,
    "rarity": 5
  },
  {
    "elite": 0,
    "id": "char_236_rope",
    "level": 1,
    "name": "暗索",
    "own": true,
    "potential": 6,
    "rarity": 4
  },
  {
    "elite": 0,
    "id": "char_4130_luton",
    "level": 1,
    "name": "露托",
    "own": true,
    "potential": 1,
    "rarity": 4
  },
  {
    "elite": 0,
    "id": "char_373_lionhd",
    "level": 1,
    "name": "莱恩哈特",
    "own": true,
    "potential": 3,
    "rarity": 5
  },
  {
    "elite": 1,
    "id": "char_304_zebra",
    "level": 50,
    "name": "暴雨",
    "own": true,
    "potential": 6,
    "rarity": 5
  },
  {
    "elite": 1,
    "id": "char_219_meteo",
    "level": 50,
    "name": "陨星",
    "own": true,
    "potential": 2,
    "rarity": 5
  },
  {
    "elite": 1,
    "id": "char_275_breeze",
    "level": 50,
    "name": "微风",
    "own": true,
    "potential": 1,
    "rarity": 5
  },
  {
    "elite": 1,
    "id": "char_144_red",
    "level": 50,
    "name": "红",
    "own": true,
    "potential": 3,
    "rarity": 5
  },
  {
    "elite": 1,
    "id": "char_326_glacus",
    "level": 1,
    "name": "格劳克斯",
    "own": true,
    "potential": 4,
    "rarity": 5
  },
  {
    "elite": 0,
    "id": "char_4025_aprot2",
    "level": 1,
    "name": "暮落",
    "own": true,
    "potential": 3,
    "rarity": 5
  },
  {
    "elite": 0,
    "id": "char_230_savage",
    "level": 2,
    "name": "暴行",
    "own": true,
    "potential": 2,
    "rarity": 5
  },
  {
    "elite": 0,
    "id": "char_4023_rfalcn",
    "level": 1,
    "name": "红隼",
    "own": true,
    "potential": 1,
    "rarity": 5
  },
  {
    "elite": 0,
    "id": "char_4067_lolxh",
    "level": 2,
    "name": "罗小黑",
    "own": true,
    "potential": 1,
    "rarity": 4
  },
  {
    "elite": 1,
    "id": "char_475_akafyu",
    "level": 46,
    "name": "赤冬",
    "own": true,
    "potential": 6,
    "rarity": 5
  },
  {
    "elite": 0,
    "id": "char_4043_erato",
    "level": 50,
    "name": "埃拉托",
    "own": true,
    "potential": 5,
    "rarity": 5
  },
  {
    "elite": 0,
    "id": "char_4124_iana",
    "level": 1,
    "name": "双月",
    "own": true,
    "potential": 1,
    "rarity": 5
  },
  {
    "elite": 0,
    "id": "char_367_swllow",
    "level": 12,
    "name": "灰喉",
    "own": true,
    "potential": 5,
    "rarity": 5
  },
  {
    "elite": 0,
    "id": "char_158_milu",
    "level": 2,
    "name": "守林人",
    "own": true,
    "potential": 4,
    "rarity": 5
  },
  {
    "elite": 0,
    "id": "char_365_aprl",
    "level": 1,
    "name": "四月",
    "own": true,
    "potential": 1,
    "rarity": 5
  },
  {
    "elite": 0,
    "id": "char_220_grani",
    "level": 1,
    "name": "格拉尼",
    "own": true,
    "potential": 6,
    "rarity": 5
  },
  {
    "elite": 0,
    "id": "char_349_chiave",
    "level": 1,
    "name": "贾维",
    "own": true,
    "potential": 1,
    "rarity": 5
  },
  {
    "elite": 0,
    "id": "char_4017_puzzle",
    "level": 1,
    "name": "谜图",
    "own": true,
    "potential": 1,
    "rarity": 5
  },
  {
    "elite": 0,
    "id": "char_4119_wanqin",
    "level": 1,
    "name": "万顷",
    "own": true,
    "potential": 1,
    "rarity": 5
  },
  {
    "elite": 1,
    "id": "char_385_finlpp",
    "level": 1,
    "name": "清流",
    "own": true,
    "potential": 6,
    "rarity": 4
  },
  {
    "elite": 0,
    "id": "char_4052_surfer",
    "level": 1,
    "name": "寻澜",
    "own": true,
    "potential": 1,
    "rarity": 5
  },
  {
    "elite": 0,
    "id": "char_476_blkngt",
    "level": 1,
    "name": "夜半",
    "own": true,
    "potential": 6,
    "rarity": 5
  },
  {
    "elite": 0,
    "id": "char_356_broca",
    "level": 1,
    "name": "布洛卡",
    "own": true,
    "potential": 1,
    "rarity": 5
  },
  {
    "elite": 0,
    "id": "char_488_buildr",
    "level": 1,
    "name": "青枳",
    "own": true,
    "potential": 1,
    "rarity": 5
  },
  {
    "elite": 0,
    "id": "char_497_ctable",
    "level": 1,
    "name": "晓歌",
    "own": true,
    "potential": 1,
    "rarity": 5
  },
  {
    "elite": 0,
    "id": "char_265_sophia",
    "level": 1,
    "name": "鞭刃",
    "own": true,
    "potential": 6,
    "rarity": 5
  },
  {
    "elite": 0,
    "id": "char_215_mantic",
    "level": 1,
    "name": "狮蝎",
    "own": true,
    "potential": 1,
    "rarity": 5
  },
  {
    "elite": 0,
    "id": "char_4106_bryota",
    "level": 1,
    "name": "苍苔",
    "own": true,
    "potential": 1,
    "rarity": 5
  },
  {
    "elite": 0,
    "id": "char_157_dagda",
    "level": 1,
    "name": "达格达",
    "own": true,
    "potential": 1,
    "rarity": 5
  },
  {
    "elite": 0,
    "id": "char_106_franka",
    "level": 1,
    "name": "芙兰卡",
    "own": true,
    "potential": 2,
    "rarity": 5
  },
  {
    "elite": 0,
    "id": "char_415_flint",
    "level": 1,
    "name": "燧石",
    "own": true,
    "potential": 1,
    "rarity": 5
  },
  {
    "elite": 0,
    "id": "char_4151_tinman",
    "level": 1,
    "name": "锡人",
    "own": true,
    "potential": 1,
    "rarity": 5
  },
  {
    "elite": 0,
    "id": "char_131_flameb",
    "level": 1,
    "name": "炎客",
    "own": true,
    "potential": 6,
    "rarity": 5
  },
  {
    "elite": 0,
    "id": "char_154_morgan",
    "level": 1,
    "name": "摩根",
    "own": true,
    "potential": 1,
    "rarity": 5
  },
  {
    "elite": 0,
    "id": "char_274_astesi",
    "level": 1,
    "name": "星极",
    "own": true,
    "potential": 1,
    "rarity": 5
  },
  {
    "elite": 0,
    "id": "char_4125_rdoc",
    "level": 1,
    "name": "医生",
    "own": true,
    "potential": 1,
    "rarity": 5
  },
  {
    "elite": 0,
    "id": "char_4047_pianst",
    "level": 1,
    "name": "车尔尼",
    "own": true,
    "potential": 1,
    "rarity": 5
  },
  {
    "elite": 0,
    "id": "char_502_nblade",
    "level": 30,
    "name": "夜刀",
    "own": true,
    "potential": 1,
    "rarity": 2
  },
  {
    "elite": 0,
    "id": "char_306_leizi",
    "level": 1,
    "name": "惊蛰",
    "own": true,
    "potential": 1,
    "rarity": 5
  },
  {
    "elite": 0,
    "id": "char_4148_philae",
    "level": 1,
    "name": "菲莱",
    "own": true,
    "potential": 1,
    "rarity": 5
  },
  {
    "elite": 0,
    "id": "char_431_ashlok",
    "level": 1,
    "name": "灰毫",
    "own": true,
    "potential": 1,
    "rarity": 5
  },
  {
    "elite": 0,
    "id": "char_478_kirara",
    "level": 1,
    "name": "绮良",
    "own": true,
    "potential": 2,
    "rarity": 5
  },
  {
    "elite": 0,
    "id": "char_201_moeshd",
    "level": 1,
    "name": "可颂",
    "own": true,
    "potential": 2,
    "rarity": 5
  },
  {
    "elite": 0,
    "id": "char_4109_baslin",
    "level": 1,
    "name": "深律",
    "own": true,
    "potential": 1,
    "rarity": 5
  },
  {
    "elite": 0,
    "id": "char_302_glaze",
    "level": 1,
    "name": "安比尔",
    "own": true,
    "potential": 6,
    "rarity": 4
  },
  {
    "elite": 0,
    "id": "char_218_cuttle",
    "level": 1,
    "name": "安哲拉",
    "own": true,
    "potential": 4,
    "rarity": 5
  },
  {
    "elite": 0,
    "id": "char_455_nothin",
    "level": 1,
    "name": "乌有",
    "own": true,
    "potential": 1,
    "rarity": 5
  },
  {
    "elite": 0,
    "id": "char_226_hmau",
    "level": 1,
    "name": "吽",
    "own": true,
    "potential": 1,
    "rarity": 5
  },
  {
    "elite": 0,
    "id": "char_493_firwhl",
    "level": 1,
    "name": "火哨",
    "own": true,
    "potential": 1,
    "rarity": 5
  },
  {
    "elite": 0,
    "id": "char_378_asbest",
    "level": 1,
    "name": "石棉",
    "own": true,
    "potential": 1,
    "rarity": 5
  },
  {
    "elite": 0,
    "id": "char_346_aosta",
    "level": 1,
    "name": "奥斯塔",
    "own": true,
    "potential": 3,
    "rarity": 5
  },
  {
    "elite": 0,
    "id": "char_4006_melnte",
    "level": 1,
    "name": "玫拉",
    "own": true,
    "potential": 1,
    "rarity": 5
  },
  {
    "elite": 0,
    "id": "char_145_prove",
    "level": 1,
    "name": "普罗旺斯",
    "own": true,
    "potential": 4,
    "rarity": 5
  },
  {
    "elite": 0,
    "id": "char_379_sesa",
    "level": 1,
    "name": "慑砂",
    "own": true,
    "potential": 2,
    "rarity": 5
  },
  {
    "elite": 0,
    "id": "char_279_excu",
    "level": 1,
    "name": "送葬人",
    "own": true,
    "potential": 2,
    "rarity": 5
  },
  {
    "elite": 0,
    "id": "char_446_aroma",
    "level": 1,
    "name": "阿罗玛",
    "own": true,
    "potential": 1,
    "rarity": 5
  },
  {
    "elite": 0,
    "id": "char_388_mint",
    "level": 1,
    "name": "薄绿",
    "own": true,
    "potential": 1,
    "rarity": 5
  },
  {
    "elite": 0,
    "id": "char_4014_lunacu",
    "level": 1,
    "name": "子月",
    "own": true,
    "potential": 6,
    "rarity": 5
  },
  {
    "elite": 0,
    "id": "char_405_absin",
    "level": 1,
    "name": "苦艾",
    "own": true,
    "potential": 1,
    "rarity": 5
  },
  {
    "elite": 0,
    "id": "char_363_toddi",
    "level": 1,
    "name": "熔泉",
    "own": true,
    "potential": 1,
    "rarity": 5
  },
  {
    "elite": 0,
    "id": "char_338_iris",
    "level": 1,
    "name": "爱丽丝",
    "own": true,
    "potential": 1,
    "rarity": 5
  },
  {
    "elite": 0,
    "id": "char_473_mberry",
    "level": 1,
    "name": "桑葚",
    "own": true,
    "potential": 1,
    "rarity": 5
  },
  {
    "elite": 0,
    "id": "char_411_tomimi",
    "level": 1,
    "name": "特米米",
    "own": true,
    "potential": 6,
    "rarity": 5
  },
  {
    "elite": 0,
    "id": "char_466_qanik",
    "level": 1,
    "name": "雪绒",
    "own": true,
    "potential": 1,
    "rarity": 5
  },
  {
    "elite": 0,
    "id": "char_149_scave",
    "level": 1,
    "name": "清道夫",
    "own": true,
    "potential": 6,
    "rarity": 4
  },
  {
    "elite": 0,
    "id": "char_4013_kjera",
    "level": 1,
    "name": "耶拉",
    "own": true,
    "potential": 6,
    "rarity": 5
  },
  {
    "elite": 0,
    "id": "char_499_kaitou",
    "level": 1,
    "name": "折光",
    "own": true,
    "potential": 1,
    "rarity": 5
  },
  {
    "elite": 0,
    "id": "char_282_catap",
    "level": 1,
    "name": "空爆",
    "own": true,
    "potential": 6,
    "rarity": 3
  },
  {
    "elite": 0,
    "id": "char_117_myrrh",
    "level": 1,
    "name": "末药",
    "own": true,
    "potential": 6,
    "rarity": 4
  },
  {
    "elite": 0,
    "id": "char_494_vendla",
    "level": 1,
    "name": "刺玫",
    "own": true,
    "potential": 1,
    "rarity": 5
  },
  {
    "elite": 0,
    "id": "char_135_halo",
    "level": 1,
    "name": "星源",
    "own": true,
    "potential": 1,
    "rarity": 5
  },
  {
    "elite": 0,
    "id": "char_1011_lava2",
    "level": 1,
    "name": "炎狱炎熔",
    "own": true,
    "potential": 6,
    "rarity": 5
  },
  {
    "elite": 0,
    "id": "char_164_nightm",
    "level": 1,
    "name": "夜魔",
    "own": true,
    "potential": 2,
    "rarity": 5
  },
  {
    "elite": 0,
    "id": "char_436_whispr",
    "level": 1,
    "name": "絮雨",
    "own": true,
    "potential": 1,
    "rarity": 5
  },
  {
    "elite": 0,
    "id": "char_4032_provs",
    "level": 1,
    "name": "但书",
    "own": true,
    "potential": 1,
    "rarity": 5
  },
  {
    "elite": 0,
    "id": "char_4019_ncdeer",
    "level": 1,
    "name": "九色鹿",
    "own": true,
    "potential": 1,
    "rarity": 5
  },
  {
    "elite": 0,
    "id": "char_242_otter",
    "level": 1,
    "name": "梅尔",
    "own": true,
    "potential": 3,
    "rarity": 5
  },
  {
    "elite": 0,
    "id": "char_4122_grabds",
    "level": 1,
    "name": "小满",
    "own": true,
    "potential": 1,
    "rarity": 5
  },
  {
    "elite": 0,
    "id": "char_348_ceylon",
    "level": 1,
    "name": "锡兰",
    "own": true,
    "potential": 6,
    "rarity": 5
  },
  {
    "elite": 0,
    "id": "char_127_estell",
    "level": 1,
    "name": "艾丝黛尔",
    "own": true,
    "potential": 4,
    "rarity": 4
  },
  {
    "elite": 0,
    "id": "char_345_folnic",
    "level": 1,
    "name": "亚叶",
    "own": true,
    "potential": 6,
    "rarity": 5
  },
  {
    "elite": 0,
    "id": "char_4045_heidi",
    "level": 1,
    "name": "海蒂",
    "own": true,
    "potential": 1,
    "rarity": 5
  },
  {
    "elite": 0,
    "id": "char_492_quercu",
    "level": 1,
    "name": "夏栎",
    "own": true,
    "potential": 1,
    "rarity": 5
  },
  {
    "elite": 0,
    "id": "char_4172_xingzh",
    "level": 1,
    "name": "行箸",
    "own": true,
    "potential": 1,
    "rarity": 5
  },
  {
    "elite": 0,
    "id": "char_343_tknogi",
    "level": 1,
    "name": "月禾",
    "own": true,
    "potential": 3,
    "rarity": 5
  },
  {
    "elite": 0,
    "id": "char_4036_forcer",
    "level": 1,
    "name": "见行者",
    "own": true,
    "potential": 6,
    "rarity": 5
  },
  {
    "elite": 0,
    "id": "char_4015_spuria",
    "level": 1,
    "name": "空构",
    "own": true,
    "potential": 1,
    "rarity": 5
  },
  {
    "elite": 0,
    "id": "char_195_glassb",
    "level": 1,
    "name": "真理",
    "own": true,
    "potential": 2,
    "rarity": 5
  },
  {
    "elite": 0,
    "id": "char_214_kafka",
    "level": 1,
    "name": "卡夫卡",
    "own": true,
    "potential": 1,
    "rarity": 5
  },
  {
    "elite": 0,
    "id": "char_241_panda",
    "level": 1,
    "name": "食铁兽",
    "own": true,
    "potential": 2,
    "rarity": 5
  },
  {
    "elite": 0,
    "id": "char_383_snsant",
    "level": 1,
    "name": "雪雉",
    "own": true,
    "potential": 6,
    "rarity": 5
  },
  {
    "elite": 2,
    "id": "char_328_cammou",
    "level": 30,
    "name": "卡达",
    "own": true,
    "potential": 6,
    "rarity": 4
  },
  {
    "elite": 1,
    "id": "char_298_susuro",
    "level": 60,
    "name": "苏苏洛",
    "own": true,
    "potential": 6,
    "rarity": 4
  },
  {
    "elite": 2,
    "id": "char_151_myrtle",
    "level": 30,
    "name": "桃金娘",
    "own": true,
    "potential": 6,
    "rarity": 4
  },
  {
    "elite": 0,
    "id": "char_173_slchan",
    "level": 1,
    "name": "崖心",
    "own": true,
    "potential": 1,
    "rarity": 5
  },
  {
    "elite": 1,
    "id": "char_337_utage",
    "level": 60,
    "name": "宴",
    "own": true,
    "potential": 6,
    "rarity": 4
  },
  {
    "elite": 1,
    "id": "char_258_podego",
    "level": 60,
    "name": "波登可",
    "own": true,
    "potential": 6,
    "rarity": 4
  },
  {
    "elite": 0,
    "id": "char_126_shotst",
    "level": 1,
    "name": "流星",
    "own": true,
    "potential": 6,
    "rarity": 4
  },
  {
    "elite": 1,
    "id": "char_272_strong",
    "level": 60,
    "name": "孑",
    "own": true,
    "potential": 6,
    "rarity": 4
  },
  {
    "elite": 1,
    "id": "char_355_ethan",
    "level": 50,
    "name": "伊桑",
    "own": true,
    "potential": 1,
    "rarity": 4
  },
  {
    "elite": 1,
    "id": "char_109_fmout",
    "level": 40,
    "name": "远山",
    "own": true,
    "potential": 6,
    "rarity": 4
  },
  {
    "elite": 0,
    "id": "char_199_yak",
    "level": 1,
    "name": "角峰",
    "own": true,
    "potential": 6,
    "rarity": 4
  },
  {
    "elite": 1,
    "id": "char_289_gyuki",
    "level": 1,
    "name": "缠丸",
    "own": true,
    "potential": 6,
    "rarity": 4
  },
  {
    "elite": 1,
    "id": "char_193_frostl",
    "level": 1,
    "name": "霜叶",
    "own": true,
    "potential": 6,
    "rarity": 4
  },
  {
    "elite": 1,
    "id": "char_190_clour",
    "level": 1,
    "name": "红云",
    "own": true,
    "potential": 6,
    "rarity": 4
  },
  {
    "elite": 1,
    "id": "char_196_sunbr",
    "level": 50,
    "name": "古米",
    "own": true,
    "potential": 6,
    "rarity": 4
  },
  {
    "elite": 1,
    "id": "char_118_yuki",
    "level": 47,
    "name": "白雪",
    "own": true,
    "potential": 6,
    "rarity": 4
  },
  {
    "elite": 1,
    "id": "char_277_sqrrel",
    "level": 40,
    "name": "阿消",
    "own": true,
    "potential": 6,
    "rarity": 4
  },
  {
    "elite": 1,
    "id": "char_159_peacok",
    "level": 1,
    "name": "断罪者",
    "own": true,
    "potential": 1,
    "rarity": 4
  },
  {
    "elite": 1,
    "id": "char_381_bubble",
    "level": 1,
    "name": "泡泡",
    "own": true,
    "potential": 6,
    "rarity": 4
  },
  {
    "elite": 1,
    "id": "char_181_flower",
    "level": 1,
    "name": "调香师",
    "own": true,
    "potential": 6,
    "rarity": 4
  },
  {
    "elite": 0,
    "id": "char_503_rang",
    "level": 30,
    "name": "巡林者",
    "own": true,
    "potential": 1,
    "rarity": 2
  },
  {
    "elite": 0,
    "id": "char_198_blackd",
    "level": 45,
    "name": "讯使",
    "own": true,
    "potential": 6,
    "rarity": 4
  },
  {
    "elite": 0,
    "id": "char_235_jesica",
    "level": 2,
    "name": "杰西卡",
    "own": true,
    "potential": 6,
    "rarity": 4
  },
  {
    "elite": 0,
    "id": "char_130_doberm",
    "level": 1,
    "name": "杜宾",
    "own": true,
    "potential": 6,
    "rarity": 4
  },
  {
    "elite": 0,
    "id": "char_290_vigna",
    "level": 45,
    "name": "红豆",
    "own": true,
    "potential": 6,
    "rarity": 4
  },
  {
    "elite": 0,
    "id": "char_452_bstalk",
    "level": 1,
    "name": "豆苗",
    "own": true,
    "potential": 6,
    "rarity": 4
  },
  {
    "elite": 0,
    "id": "char_347_jaksel",
    "level": 1,
    "name": "杰克",
    "own": true,
    "potential": 6,
    "rarity": 4
  },
  {
    "elite": 0,
    "id": "char_137_brownb",
    "level": 1,
    "name": "猎蜂",
    "own": true,
    "potential": 6,
    "rarity": 4
  },
  {
    "elite": 0,
    "id": "char_4004_pudd",
    "level": 1,
    "name": "布丁",
    "own": true,
    "potential": 1,
    "rarity": 4
  },
  {
    "elite": 0,
    "id": "char_260_durnar",
    "level": 1,
    "name": "坚雷",
    "own": true,
    "potential": 6,
    "rarity": 4
  },
  {
    "elite": 0,
    "id": "char_150_snakek",
    "level": 1,
    "name": "蛇屠箱",
    "own": true,
    "potential": 6,
    "rarity": 4
  },
  {
    "elite": 0,
    "id": "char_133_mm",
    "level": 1,
    "name": "梅",
    "own": true,
    "potential": 6,
    "rarity": 4
  },
  {
    "elite": 0,
    "id": "char_440_pinecn",
    "level": 1,
    "name": "松果",
    "own": true,
    "potential": 6,
    "rarity": 4
  },
  {
    "elite": 0,
    "id": "char_253_greyy",
    "level": 1,
    "name": "格雷伊",
    "own": true,
    "potential": 6,
    "rarity": 4
  },
  {
    "elite": 0,
    "id": "char_366_acdrop",
    "level": 1,
    "name": "酸糖",
    "own": true,
    "potential": 6,
    "rarity": 4
  },
  {
    "elite": 0,
    "id": "char_469_indigo",
    "level": 1,
    "name": "深靛",
    "own": true,
    "potential": 6,
    "rarity": 4
  },
  {
    "elite": 0,
    "id": "char_4041_chnut",
    "level": 1,
    "name": "褐果",
    "own": true,
    "potential": 1,
    "rarity": 4
  },
  {
    "elite": 0,
    "id": "char_484_robrta",
    "level": 1,
    "name": "罗比菈塔",
    "own": true,
    "potential": 6,
    "rarity": 4
  },
  {
    "elite": 0,
    "id": "char_4165_ctrail",
    "level": 1,
    "name": "云迹",
    "own": true,
    "potential": 1,
    "rarity": 4
  },
  {
    "elite": 1,
    "id": "char_208_melan",
    "level": 55,
    "name": "玫兰莎",
    "own": true,
    "potential": 6,
    "rarity": 3
  },
  {
    "elite": 1,
    "id": "char_124_kroos",
    "level": 55,
    "name": "克洛丝",
    "own": true,
    "potential": 6,
    "rarity": 3
  },
  {
    "elite": 1,
    "id": "char_120_hibisc",
    "level": 55,
    "name": "芙蓉",
    "own": true,
    "potential": 6,
    "rarity": 3
  },
  {
    "elite": 0,
    "id": "char_110_deepcl",
    "level": 1,
    "name": "深海色",
    "own": true,
    "potential": 6,
    "rarity": 4
  },
  {
    "elite": 0,
    "id": "char_4107_vrdant",
    "level": 1,
    "name": "维荻",
    "own": true,
    "potential": 1,
    "rarity": 4
  },
  {
    "elite": 1,
    "id": "char_123_fang",
    "level": 55,
    "name": "芬",
    "own": true,
    "potential": 6,
    "rarity": 3
  },
  {
    "elite": 1,
    "id": "char_284_spot",
    "level": 55,
    "name": "斑点",
    "own": true,
    "potential": 6,
    "rarity": 3
  },
  {
    "elite": 1,
    "id": "char_210_stward",
    "level": 55,
    "name": "史都华德",
    "own": true,
    "potential": 6,
    "rarity": 3
  },
  {
    "elite": 1,
    "id": "char_278_orchid",
    "level": 55,
    "name": "梓兰",
    "own": true,
    "potential": 6,
    "rarity": 3
  },
  {
    "elite": 0,
    "id": "char_192_falco",
    "level": 1,
    "name": "翎羽",
    "own": true,
    "potential": 6,
    "rarity": 3
  },
  {
    "elite": 0,
    "id": "char_281_popka",
    "level": 1,
    "name": "泡普卡",
    "own": true,
    "potential": 6,
    "rarity": 3
  },
  {
    "elite": 0,
    "id": "char_209_ardign",
    "level": 1,
    "name": "卡缇",
    "own": true,
    "potential": 6,
    "rarity": 3
  },
  {
    "elite": 1,
    "id": "char_121_lava",
    "level": 1,
    "name": "炎熔",
    "own": true,
    "potential": 6,
    "rarity": 3
  },
  {
    "elite": 0,
    "id": "char_240_wyvern",
    "level": 1,
    "name": "香草",
    "own": true,
    "potential": 6,
    "rarity": 3
  },
  {
    "elite": 0,
    "id": "char_283_midn",
    "level": 1,
    "name": "月见夜",
    "own": true,
    "potential": 6,
    "rarity": 3
  },
  {
    "elite": 0,
    "id": "char_211_adnach",
    "level": 1,
    "name": "安德切尔",
    "own": true,
    "potential": 6,
    "rarity": 3
  },
  {
    "elite": 0,
    "id": "char_212_ansel",
    "level": 1,
    "name": "安赛尔",
    "own": true,
    "potential": 6,
    "rarity": 3
  },
  {
    "elite": 0,
    "id": "char_500_noirc",
    "level": 30,
    "name": "黑角",
    "own": true,
    "potential": 2,
    "rarity": 2
  },
  {
    "elite": 0,
    "id": "char_009_12fce",
    "level": 1,
    "name": "12F",
    "own": true,
    "potential": 1,
    "rarity": 2
  },
  {
    "elite": 0,
    "id": "char_4000_jnight",
    "level": 30,
    "name": "正义骑士号",
    "own": true,
    "potential": 2,
    "rarity": 1
  },
  {
    "elite": 0,
    "id": "char_376_therex",
    "level": 30,
    "name": "THRM-EX",
    "own": true,
    "potential": 2,
    "rarity": 1
  },
  {
    "elite": 0,
    "id": "char_501_durin",
    "level": 30,
    "name": "杜林",
    "own": true,
    "potential": 4,
    "rarity": 2
  },
  {
    "elite": 0,
    "id": "char_286_cast3",
    "level": 30,
    "name": "Castle-3",
    "own": true,
    "potential": 1,
    "rarity": 1
  },
  {
    "elite": 0,
    "id": "char_285_medic2",
    "level": 30,
    "name": "Lancet-2",
    "own": true,
    "potential": 6,
    "rarity": 1
  }
];

export function getCharacterNamesSet(characters: Character[]): Set<string> {
    return new Set(characters.map(character => character.name));
  }
  
export const characterNamesSet = getCharacterNamesSet(characters);