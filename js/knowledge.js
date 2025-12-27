// ========================================
// 知識データベース
// ========================================
// ドラムを10回以上叩くとランダムに表示される知識リスト
// カテゴリー: 公式、数学者、科学者、歴史的発見など

const knowledgeItems = [
    // ============================================
    // カテゴリー: 数学・物理公式
    // ============================================
    // 小学生レベル
    {
        category: "公式",
        title: "三角形の面積",
        content: "底辺 × 高さ ÷ 2"
    },
    {
        category: "公式",
        title: "円の面積",
        content: "半径 × 半径 × 円周率"
    },
    {
        category: "公式",
        title: "円の周の長さ",
        content: "直径 × 円周率"
    },
    {
        category: "公式",
        title: "長方形の面積",
        content: "縦 × 横"
    },
    {
        category: "公式",
        title: "立方体の体積",
        content: "一辺 × 一辺 × 一辺"
    },

    // 中学生レベル
    {
        category: "公式",
        title: "速さの公式",
        content: "速さ = 距離 ÷ 時間"
    },
    {
        category: "公式",
        title: "ピタゴラスの定理",
        content: "a² + b² = c²"
    },
    {
        category: "公式",
        title: "二次方程式の解の公式",
        content: "x = (-b ± √(b²-4ac)) / 2a"
    },
    {
        category: "公式",
        title: "球の体積",
        content: "4/3 × π × r³"
    },
    {
        category: "公式",
        title: "密度の公式",
        content: "密度 = 質量 ÷ 体積"
    },

    // 高校生レベル
    {
        category: "公式",
        title: "運動方程式",
        content: "F = ma"
    },
    {
        category: "公式",
        title: "オームの法則",
        content: "V = IR"
    },
    {
        category: "公式",
        title: "力学的エネルギー保存則",
        content: "運動エネルギー + 位置エネルギー = 一定"
    },
    {
        category: "公式",
        title: "等加速度運動の公式",
        content: "v = v₀ + at"
    },
    {
        category: "公式",
        title: "万有引力の法則",
        content: "F = G(m₁m₂)/r²"
    },
    {
        category: "公式",
        title: "電力の公式",
        content: "P = VI"
    },
    {
        category: "公式",
        title: "ボイルの法則",
        content: "PV = 一定"
    },

    // 大学生レベル
    {
        category: "公式",
        title: "質量とエネルギーの等価性",
        content: "E = mc²"
    },
    {
        category: "公式",
        title: "不確定性原理",
        content: "ΔxΔp ≧ ℏ/2"
    },
    {
        category: "公式",
        title: "マクスウェル方程式（ガウスの法則）",
        content: "∇·E = ρ/ε₀"
    },
    {
        category: "公式",
        title: "シュレーディンガー方程式",
        content: "iℏ ∂ψ/∂t = Ĥψ"
    },
    {
        category: "公式",
        title: "アインシュタインの場の方程式",
        content: "Gμν = 8πG/c⁴ · Tμν"
    },
    {
        category: "公式",
        title: "ボルツマンの関係式",
        content: "S = k ln W"
    },
    {
        category: "公式",
        title: "プランクの関係式",
        content: "E = hν"
    },

    // ============================================
    // カテゴリー: 偉大な数学者
    // ============================================
    {
        category: "数学者",
        title: "ピタゴラス",
        content: "紀元前582年頃 - 紀元前496年頃<br>ピタゴラスの定理、万物は数"
    },
    {
        category: "数学者",
        title: "ユークリッド",
        content: "紀元前300年頃<br>原論、ユークリッド幾何学"
    },
    {
        category: "数学者",
        title: "アルキメデス",
        content: "紀元前287年頃 - 紀元前212年<br>円周率、浮力の原理"
    },
    {
        category: "数学者",
        title: "ブレーズ・パスカル",
        content: "1623年 - 1662年<br>確率論、計算機パスカリーヌ"
    },
    {
        category: "数学者",
        title: "ゴットフリート・ライプニッツ",
        content: "1646年 - 1716年<br>微分積分法、ライプニッツ記法"
    },
    {
        category: "数学者",
        title: "レオンハルト・オイラー",
        content: "1707年 - 1783年<br>オイラーの公式、多作"
    },
    {
        category: "数学者",
        title: "ジョゼフ＝ルイ・ラグランジュ",
        content: "1736年 - 1813年<br>解析学、ラグランジュの四平方定理"
    },
    {
        category: "数学者",
        title: "ソフィー・ジェルマン",
        content: "1776年 - 1831年<br>ソフィー・ジェルマン素数、数論"
    },
    {
        category: "数学者",
        title: "カール・フリードリヒ・ガウス",
        content: "1777年 - 1855年<br>数学の王、素数定理、ガウス曲率"
    },
    {
        category: "数学者",
        title: "エヴァリスト・ガロワ",
        content: "1811年 - 1832年<br>ガロワ理論、群論"
    },
    {
        category: "数学者",
        title: "ベルンハルト・リーマン",
        content: "1826年 - 1866年<br>リーマン幾何学、リーマン予想"
    },
    {
        category: "数学者",
        title: "ゲオルク・カントール",
        content: "1845年 - 1918年<br>集合論、無限集合"
    },
    {
        category: "数学者",
        title: "ダフィット・ヒルベルト",
        content: "1862年 - 1943年<br>ヒルベルトの23の問題"
    },
    {
        category: "数学者",
        title: "ジョン・フォン・ノイマン",
        content: "1903年 - 1957年<br>ゲーム理論、コンピュータ、量子力学"
    },
    {
        category: "数学者",
        title: "アンドリュー・ワイルズ",
        content: "1953年 - 現在<br>フェルマーの最終定理の証明"
    }
];

// 後方互換性のため、formulasという名前でもアクセス可能にする
const formulas = knowledgeItems;
