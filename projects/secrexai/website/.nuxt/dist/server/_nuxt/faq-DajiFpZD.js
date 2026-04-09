import { H as Head } from "./components-7B7l7irn.js";
import { defineComponent, ref, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import "../server.mjs";
import "/home/openclaw/.openclaw/workspace/data/projects/personai/website/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "/home/openclaw/.openclaw/workspace/data/projects/personai/website/node_modules/hookable/dist/index.mjs";
import "/home/openclaw/.openclaw/workspace/data/projects/personai/website/node_modules/unctx/dist/index.mjs";
import "/home/openclaw/.openclaw/workspace/data/projects/personai/website/node_modules/h3/dist/index.mjs";
import "vue-router";
import "/home/openclaw/.openclaw/workspace/data/projects/personai/website/node_modules/defu/dist/defu.mjs";
import "/home/openclaw/.openclaw/workspace/data/projects/personai/website/node_modules/ufo/dist/index.mjs";
import "tailwindcss/colors";
import "/home/openclaw/.openclaw/workspace/data/projects/personai/website/node_modules/klona/dist/index.mjs";
import "/home/openclaw/.openclaw/workspace/data/projects/personai/website/node_modules/@unhead/vue/dist/index.mjs";
import "@iconify/vue";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "faq",
  __ssrInlineRender: true,
  setup(__props) {
    const openItems = ref(/* @__PURE__ */ new Set());
    const isOpen = (ci, fi) => openItems.value.has(`${ci}-${fi}`);
    const faqCategories = [
      {
        emoji: "🔰",
        title: "基本問題",
        faqs: [
          { q: "PersonAI 係咩？同 ChatGPT 有咩分別？", a: "PersonAI 係住喺你 WhatsApp 的 AI 助手，無需安裝任何 App，廣東話原生，有永久記憶，數據存亞太區（日本）。相比 ChatGPT：香港直接可用（唔需要 VPN）、永遠記得你係誰、支援更豐富的 60+ 技能、有真人廣東話技術支援。" },
          { q: "點樣開始使用？要安裝乜嘢 App 嗎？", a: "唔需要安裝任何 App！你只需要 WhatsApp（你本身已經有），加 PersonAI 為聯絡人，直接發訊息即可使用。零學習成本，上手時間 < 5 分鐘。" },
          { q: "支唔支援廣東話？", a: "完全支援廣東話，而且係原生優化。PersonAI 理解香港口語、俚語、Cantonese romanization，回覆亦可以用廣東話。當然亦支援普通話同英文。" },
          { q: "可以加入 WhatsApp 群組嗎？", a: "可以！Business 和 Enterprise 方案支援將 PersonAI 加入 WhatsApp 群組，成為團隊共用的 AI 助手，協助整理群組資訊、記錄決定等。" }
        ]
      },
      {
        emoji: "💳",
        title: "定價相關",
        faqs: [
          { q: "有冇免費試用？", a: "有！所有方案提供 14 日免費試用，無需信用卡，試用期間體驗全部功能，試用後先決定是否繼續。" },
          { q: "可以隨時取消嗎？", a: "可以！所有方案月付，隨時可以取消，無違約金，無任何額外費用。取消後帳號會在當月結束後停止服務。" },
          { q: "超出用量點算？", a: "Starter 和 Business 方案有每月訊息限額。超出限額前，我哋會提前發 WhatsApp 通知你，可以選擇升級方案或按量計費，絕不會突然停服務。" },
          { q: "可以先試後付嗎？", a: "當然可以！14 日試用期完全免費，不需要任何付款資料，試用後先決定是否繼續。" }
        ]
      },
      {
        emoji: "🔒",
        title: "資訊安全",
        faqs: [
          { q: "我的對話數據會唔會去咗美國？", a: "唔會！PersonAI 用戶對話記錄儲存於 Tencent Cloud 日本（亞太區）數據中心，唔會傳送到美國，不受美國 CLOUD Act 管轄。" },
          { q: "PersonAI 會唔會用我的資料訓練 AI？", a: "絕對唔會！PersonAI 的承諾係：你的業務資料只屬於你，絕不用於任何 AI 模型訓練，亦不做廣告定向分析。" },
          { q: "係咪 PDPO 合規？", a: "PersonAI 由香港公司（Hostlink × Area2）運營，完全符合《個人資料（私隱）條例》（PDPO）要求。Enterprise 方案可提供 DPA（數據處理協議）。" },
          { q: "員工用同一個帳號，對話會互相看到嗎？", a: "唔會！Business 方案提供獨立帳號，每個帳號有完全隔離的記憶同對話記錄。員工之間的對話互相看不到，保護個人私隱。" }
        ]
      },
      {
        emoji: "⚙️",
        title: "技術問題",
        faqs: [
          { q: "需要安裝任何軟件嗎？", a: "唔需要！PersonAI 完全通過 WhatsApp 運作，無需任何安裝或配置。你只需要一部裝了 WhatsApp 的手機或電腦。" },
          { q: "支唔支援 Telegram？", a: "目前 PersonAI 主要通過 WhatsApp 提供服務。Telegram 版本正在規劃中，如果你有興趣，可以 WhatsApp 告訴我哋，會優先通知你。" },
          { q: "60+ 技能包括啲咩？", a: "PersonAI 技能涵蓋：內容創作（文案/報告/Email）、資料搜尋與整理、翻譯（中英）、排程提醒管理、市場分析、圖片生成、數據報表、競品研究、客戶溝通範本等。詳細技能清單可 WhatsApp 查詢。" }
        ]
      },
      {
        emoji: "🏢",
        title: "企業應用",
        faqs: [
          { q: "適合幾多人的公司？", a: "PersonAI 適合 1 人 SOHO 到數十人中小企。Starter 適合個人，Business 適合 5 人以下團隊，Enterprise 適合更大規模企業，可按需定制帳號數量和功能。" },
          { q: "可以訂製行業專屬功能嗎？", a: "可以！Enterprise 方案支援自訂 AI 個性、行業知識庫、與現有系統 API 整合。請 WhatsApp 我哋詳談你的需求。" },
          { q: "有冇試用版俾我先測試效果？", a: "有！14 日免費試用，可以充分測試 PersonAI 在你具體業務場景中的效果，然後再決定是否付費。" }
        ]
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Head = Head;
      _push(`<main${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_Head, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<title${_scopeId}>常見問題 FAQ | PersonAI — 香港 WhatsApp AI 助手</title><meta name="description" content="PersonAI 常見問題解答。了解功能、定價、安全、技術支援等所有你想知道的答案。"${_scopeId}>`);
          } else {
            return [
              createVNode("title", null, "常見問題 FAQ | PersonAI — 香港 WhatsApp AI 助手"),
              createVNode("meta", {
                name: "description",
                content: "PersonAI 常見問題解答。了解功能、定價、安全、技術支援等所有你想知道的答案。"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<section class="bg-gradient-to-br from-blue-50 to-white py-16"><div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8"><div class="text-center mb-12"><h1 class="text-4xl font-black text-gray-900 mb-4">常見問題</h1><p class="text-gray-500 text-lg">找唔到答案？<a href="https://wa.me/85296456787" target="_blank" class="text-blue-600 hover:underline">WhatsApp 直接問我哋</a></p></div><!--[-->`);
      ssrRenderList(faqCategories, (category, ci) => {
        _push(`<div class="mb-10"><h2 class="text-xl font-black text-gray-900 mb-4 flex items-center gap-2"><span>${ssrInterpolate(category.emoji)}</span>${ssrInterpolate(category.title)}</h2><div class="space-y-3"><!--[-->`);
        ssrRenderList(category.faqs, (faq, fi) => {
          _push(`<div class="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden"><button class="w-full px-6 py-4 text-left flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors"><span class="font-semibold text-gray-900 text-sm">${ssrInterpolate(faq.q)}</span><span class="text-gray-400 flex-shrink-0 text-xs">${ssrInterpolate(isOpen(ci, fi) ? "▲" : "▼")}</span></button>`);
          if (isOpen(ci, fi)) {
            _push(`<div class="px-6 pb-4 text-gray-600 text-sm leading-relaxed">${ssrInterpolate(faq.a)}</div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        });
        _push(`<!--]--></div></div>`);
      });
      _push(`<!--]--><div class="text-center bg-blue-600 rounded-2xl p-8 text-white"><h3 class="font-black text-xl mb-3">仍然有疑問？</h3><p class="text-blue-200 mb-6">我哋隨時以 WhatsApp 廣東話回答你的問題</p><a href="https://wa.me/85296456787?text=你好！我有關於 PersonAI 的問題想查詢" target="_blank" class="inline-flex items-center gap-2 bg-green-400 text-white px-8 py-3 rounded-xl font-bold hover:bg-green-500 transition-colors"> 💬 WhatsApp 即時咨詢 </a></div></div></section></main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/faq.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=faq-DajiFpZD.js.map
