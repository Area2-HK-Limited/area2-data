<template>
  <div class="industry-tabs-wrap">
    <!-- Industry Tab Selector — hidden scrollbar on all browsers -->
    <div class="tab-scroll-wrap">
      <div class="tabs industry-tabs">
        <button
          v-for="ind in industries"
          :key="ind.id"
          type="button"
          class="tab-btn"
          :class="{ active: activeIndustry === ind.id }"
          @click.stop="setActiveIndustry(ind.id)"
        >
          {{ ind.name }}
        </button>
      </div>
    </div>

    <!-- Panel -->
    <transition name="industry-fade" mode="out-in">
      <div :key="activeIndustry">
        <div v-for="ind in industries" v-show="activeIndustry === ind.id" :key="ind.id">
          <div class="demo-split" style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; max-width: 960px; margin: 0 auto;">
            <!-- Pain Points -->
            <div class="card">
              <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1.5rem;">
                <div style="color: #F87171;"><FaIcon icon="triangle-exclamation" style="font-size:1.25rem;" /></div>
                <h3 style="font-size: 1.0625rem;">你的痛點</h3>
              </div>
              <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.875rem;">
                <li v-for="p in ind.pains" :key="p" style="display: flex; align-items: flex-start; gap: 0.625rem; font-size: 0.9rem; color: #94A3B8;">
                  <FaIcon icon="circle-exclamation" style="color: #F87171; flex-shrink: 0; margin-top: 2px; font-size: 0.875rem;" />
                  {{ p }}
                </li>
              </ul>
            </div>
            <!-- Solutions -->
            <div class="card" style="border-color: rgba(59, 130, 246, 0.3); background: linear-gradient(135deg, rgba(59, 130, 246, 0.06) 0%, rgba(139, 92, 246, 0.03) 100%);">
              <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1.5rem;">
                <div style="color: #4ADE80;"><FaIcon icon="circle-check" style="font-size:1.25rem;" /></div>
                <h3 style="font-size: 1.0625rem;">SecrexAI 如何解決</h3>
              </div>
              <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.875rem;">
                <li v-for="s in ind.solutions" :key="s" style="display: flex; align-items: flex-start; gap: 0.625rem; font-size: 0.9rem; color: #94A3B8;">
                  <FaIcon icon="check" style="color: #4ADE80; flex-shrink: 0; margin-top: 2px; font-size: 0.875rem;" />
                  {{ s }}
                </li>
              </ul>
            </div>
          </div>
          <div class="text-center" style="margin-top: 1.5rem;">
            <NuxtLink to="/subscribe" class="btn btn-primary">
              體驗 SecrexAI 幫你解決呢啲問題
              <FaIcon icon="arrow-right" style="font-size:0.8rem;" />
            </NuxtLink>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
const activeIndustry = ref('restaurant')

const setActiveIndustry = (id) => {
  activeIndustry.value = id
}

const industries = [
  {
    id: 'restaurant', name: '🍜 餐飲',
    pains: ['訂位、餐牌更新、外賣訂單三頭燒', '每日手寫今日特別餐單，好費時', 'IG 宣傳想做但冇時間整'],
    solutions: ['語音/文字即更新每日餐單 + 自動出 IG Story 圖', '整合訂位提醒 + 自動化確認回覆', '分析顧客常問問題，建立自動回覆範本'],
  },
  {
    id: 'retail', name: '🛍️ 零售',
    pains: ['WhatsApp 客人查詢答唔完', '庫存查詢要人手去搵', '促銷文案唔夠吸引或費時'],
    solutions: ['AI 整理客人查詢優先級 + 草擬個人化回覆', '追蹤庫存關鍵字提醒補貨', '生成多版本促銷文案，一鍵出圖'],
  },
  {
    id: 'property', name: '🏠 地產',
    pains: ['放盤文案要中英對照，好費時', '睇樓提醒要逐個 WhatsApp 人手發', '客源跟進記唔住偏好'],
    solutions: ['輸入樓盤資料即出中英放盤文案', '自動排程睇樓提醒 + 確認訊息', '記憶客人偏好，下次配對更準確'],
  },
  {
    id: 'accounting', name: '💼 會計',
    pains: ['Chase 客人交單據好費時', '每月要出大量個人化報表', '英文 email 唔夠專業流暢'],
    solutions: ['批量個人化 WhatsApp 提醒欠交客人', '自動整理數據出格式化報表', '幫你草擬專業英文 email 往來'],
  },
  {
    id: 'education', name: '📚 教育',
    pains: ['功課批改建議要逐個學生寫', '家長 WhatsApp 查詢回覆慢', '教材翻譯耗時效率低'],
    solutions: ['AI 生成個人化學生反饋範本', '快速分類家長查詢 + 統一回覆', '即時翻譯教材（中英粵互換）'],
  },
  {
    id: 'beauty', name: '💅 美容',
    pains: ['預約管理混亂，容易撞期', 'IG 文案想要本地化但出唔到味', '產品介紹要重複解釋俾不同客人'],
    solutions: ['整理預約日程 + 自動提醒客人記得到訪', '生成粵語風格「種草」文案', '建立常見問題自動回覆範本'],
  },
  {
    id: 'logistics', name: '🚚 物流',
    pains: ['派送更新要逐個客 WhatsApp', '貨物查詢壓垮客服人員', '司機任務調度記唔住'],
    solutions: ['批量發送個人化派送狀態更新', '建立快速查詢回覆自動化系統', '自動整理每日司機任務清單'],
  },
  {
    id: 'medical', name: '🏥 醫療',
    pains: ['預約電話接唔完，double booking 時有發生', '病歷資料分散難整理查閱', '覆診提醒要人手逐個打'],
    solutions: ['整理預約記錄 + 排程提醒覆診', '摘要病人訊息 + 過往來往記錄', '批量個人化覆診 WhatsApp 提醒'],
  },
  {
    id: 'fitness', name: '💪 健身',
    pains: ['課堂排表要手動更新好繁複', '會員跟進記唔住誰快到期', '社媒推廣做唔夠頻繁'],
    solutions: ['整理課堂時間表 + 提醒缺課會員', '記憶每個會員到期日 + 排程續費提醒', '生成健身 IG 推廣文案 + 圖片建議'],
  },
  {
    id: 'renovation', name: '🔨 裝修',
    pains: ['報價單每次都要由頭整起', '多個項目同時進行，進度難追蹤', '客戶跟進靠記性容易漏'],
    solutions: ['AI 快速生成報價單草稿供修改', '整理多個項目進度成一覽表', '排程客戶跟進提醒 + 草擬更新訊息'],
  },
  {
    id: 'design', name: '🎨 設計',
    pains: ['客戶 brief 零散，WhatsApp/email 到處都是', '報價追蹤靠記性，容易忘記', '發票提醒要人手逐個送'],
    solutions: ['整理客戶 brief + 提取關鍵要求一目了然', '記錄項目報價狀態 + 排程跟進', '自動生成個人化發票催收訊息'],
  },
  {
    id: 'ecommerce', name: '🛒 電商',
    pains: ['產品描述要一個個寫，費時費力', '客服查詢量大，回覆唔及時', '庫存低位唔知，補貨慢'],
    solutions: ['批量生成吸引力強的中英文產品描述', '整理常見問題 + 生成標準回覆範本', '低庫存排程提醒及時補貨'],
  },
  {
    id: 'bakery', name: '🎂 烘焙',
    pains: ['WhatsApp 訂單好多，整理好費時', 'IG 宣傳文案唔知點寫才夠有個性', '客戶訂單收咗但唔記得跟進'],
    solutions: ['整理 WhatsApp 訂單資料成清單表格', '生成有個人風格嘅廣東話 IG 文案', '排程訂單確認 + 取貨前自動提示'],
  },
  {
    id: 'legal', name: '⚖️ 律師',
    pains: ['合約文件長，摘要耗時佔精力', 'Client 跟進多個案件難管理', '法律研究耗時，找案例很累'],
    solutions: ['快速摘要合約要點 + 標記關鍵條款', '記錄每個案件進度 + 排程跟進提醒', '搜尋整理相關法律資訊輔助研究'],
  },
  {
    id: 'insurance', name: '📋 保險',
    pains: ['客戶組合分散，難快速了解狀況', '推薦文案要因人而異但又要高效', '跟進提醒靠記性容易遺漏'],
    solutions: ['整理客戶組合 + 生成個人化摘要', '根據客戶需求生成針對性推薦文案', '排程保單續期/生日/市況更新提醒'],
  },
]
</script>

<style scoped>
.industry-tabs-wrap {
  position: relative;
  z-index: 2;
}

/* Scrollable container — hide scrollbar on all browsers */
.tab-scroll-wrap {
  overflow-x: auto;
  overflow-y: hidden;
  padding-bottom: 0;
  margin-bottom: 2rem;
  /* Hide scrollbar */
  scrollbar-width: none;       /* Firefox */
  -ms-overflow-style: none;    /* IE/Edge */
}
.tab-scroll-wrap::-webkit-scrollbar {
  display: none;               /* Chrome/Safari/Opera */
}

.industry-tabs {
  /* Allow horizontal scroll with hidden bar */
  min-width: max-content;
  justify-content: flex-start;
  display: flex;
  flex-wrap: nowrap;
  gap: 0.5rem;
  padding: 0.25rem 0.125rem;
  /* Subtle fade hints at edges for UX */
  position: relative;
}

/* On wider screens, centre the tabs */
@media (min-width: 1100px) {
  .industry-tabs {
    justify-content: center;
    flex-wrap: wrap;
    min-width: unset;
  }
  .tab-scroll-wrap {
    overflow-x: visible;
  }
}

.industry-tabs .tab-btn {
  position: relative;
  z-index: 3;
  pointer-events: auto;
  user-select: none;
  -webkit-tap-highlight-color: rgba(96,165,250,0.2);
  white-space: nowrap;
  flex-shrink: 0;
}
.industry-fade-enter-active,
.industry-fade-leave-active {
  transition: opacity 0.2s ease;
}
.industry-fade-enter-from,
.industry-fade-leave-to {
  opacity: 0;
}
@media (max-width: 768px) {
  .industry-tabs { justify-content: flex-start !important; }
  div[style*="grid-template-columns: 1fr 1fr"] {
    grid-template-columns: 1fr !important;
  }
}
</style>
