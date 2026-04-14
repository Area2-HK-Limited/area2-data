import { H as Head } from "./components-7B7l7irn.js";
import { a as __nuxt_component_0 } from "../server.mjs";
import { defineComponent, ref, withCtx, createVNode, createTextVNode, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrInterpolate } from "vue/server-renderer";
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
  __name: "pricing",
  __ssrInlineRender: true,
  setup(__props) {
    const activeFaq = ref(null);
    const plans = [
      {
        id: "starter",
        name: "Starter",
        target: "個人 / SOHO",
        price: "HK$298",
        period: "/月",
        note: "年付 HK$2,980（省 HK$576）",
        featured: false,
        cta: "14日免費試用",
        features: ["1 個 WhatsApp 帳號", "60+ AI 技能全包", "廣東話原生優化", "永久記憶功能", "亞太區數據儲存（日本）", "PDPO 合規", "電郵技術支援"]
      },
      {
        id: "business",
        name: "Business",
        target: "SME 首選",
        price: "HK$680",
        period: "/月",
        note: "年付 HK$6,800（省 HK$1,360）",
        featured: true,
        cta: "立即免費試用",
        features: ["最多 5 個 WhatsApp 帳號", "60+ AI 技能全包", "廣東話原生優化", "永久記憶功能", "亞太區數據儲存（日本）", "PDPO 合規", "優先 WhatsApp 技術支援", "月度使用分析報告", "行業專屬技能設定"]
      },
      {
        id: "enterprise",
        name: "Enterprise",
        target: "大型企業 / 機構",
        price: "按需定制",
        period: "",
        note: "",
        featured: false,
        cta: "WhatsApp 查詢報價",
        features: ["無限 WhatsApp 帳號", "自訂 AI 個性 + 行業知識庫", "與現有系統 API 整合", "專屬客戶成功經理", "SLA 服務保障協議", "可簽署 DPA 數據協議", "SOC 2 / ISO 27001 合規文件"]
      }
    ];
    const currentTools = [
      { name: "ChatGPT Plus", price: "HK$160/月" },
      { name: "Claude Pro", price: "HK$160/月" },
      { name: "Grammarly Business", price: "HK$208/月" },
      { name: "Canva Pro", price: "HK$380/月" },
      { name: "Notion AI", price: "HK$160/月" },
      { name: "Zapier Starter", price: "HK$360/月" },
      { name: "Buffer Essentials", price: "HK$600/月" }
    ];
    const comparisonRows = [
      { feature: "WhatsApp 帳號數量", starter: "1 個", business: "最多 5 個", enterprise: "無限" },
      { feature: "60+ AI 技能", starter: true, business: true, enterprise: true },
      { feature: "廣東話優化", starter: true, business: true, enterprise: true },
      { feature: "永久記憶", starter: true, business: true, enterprise: true },
      { feature: "數據亞太區儲存（日本）", starter: true, business: true, enterprise: true },
      { feature: "PDPO 合規", starter: true, business: true, enterprise: true },
      { feature: "優先技術支援", starter: false, business: true, enterprise: true },
      { feature: "月度使用報告", starter: false, business: true, enterprise: true },
      { feature: "自訂 AI 個性", starter: false, business: false, enterprise: true },
      { feature: "API 整合", starter: false, business: false, enterprise: true },
      { feature: "可簽 DPA", starter: false, business: false, enterprise: true },
      { feature: "SLA 保障", starter: false, business: false, enterprise: true },
      { feature: "AI 教練（增值）", starter: "可加購", business: "可加購", enterprise: "可加購" }
    ];
    const pricingFaqs = [
      { q: "可以隨時取消嗎？", a: "可以！所有方案均係月付，隨時可以取消，無違約金，無任何額外費用。" },
      { q: "有冇免費試用？", a: "有！所有方案提供 14 日免費試用，無需信用卡，試用期間體驗全部功能。" },
      { q: "可以先試後付嗎？", a: "當然可以！14 日試用期完全免費，試用後先決定係咪繼續，非常靈活。" },
      { q: "超出用量點算？", a: "Starter 和 Business 方案有每月訊息限額。超出時我哋會提前通知你，可以選擇升級方案或按量計費，絕不會突然停服務。" },
      { q: "多人用同一帳號可以嗎？", a: "Business 方案支援最多 5 個獨立帳號，每個帳號有獨立記憶同設定，員工之間對話完全隔離，保護各人私隱。" },
      { q: "可以年付享折扣嗎？", a: "可以！年付享折扣：Starter 年付 HK$2,980（省 HK$576），Business 年付 HK$6,800（省 HK$1,360）。聯絡我哋了解年付詳情。" },
      { q: "企業方案包含咩服務？", a: "Enterprise 方案完全按需定制，包括無限帳號、自訂 AI 個性、API 整合、專屬客戶成功經理、SLA 保障、DPA 簽署等。請 WhatsApp 我哋報價。" },
      { q: "AI 教練係咩？係咪必要？", a: "AI 教練係可選增值服務（HK$1,500/月），提供真人 WhatsApp 廣東話技術支援，幫你快速上手 + 持續優化。大部分用戶可自行上手，但如果想最快發揮效益，AI 教練係最快捷途徑。" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Head = Head;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<main${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_Head, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<title${_scopeId}>定價方案 | PersonAI — 香港 WhatsApp AI 助手</title><meta name="description" content="PersonAI 透明定價。Starter HK$298/月 · Business HK$680/月 · Enterprise 按需。14日免費試用，無需信用卡。"${_scopeId}>`);
          } else {
            return [
              createVNode("title", null, "定價方案 | PersonAI — 香港 WhatsApp AI 助手"),
              createVNode("meta", {
                name: "description",
                content: "PersonAI 透明定價。Starter HK$298/月 · Business HK$680/月 · Enterprise 按需。14日免費試用，無需信用卡。"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<section class="bg-gradient-to-br from-blue-50 to-white py-16"><div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"><h1 class="text-4xl md:text-5xl font-black text-gray-900 mb-4">揀啱你嘅方案，即日開始</h1><p class="text-gray-500 text-xl mb-2">所有方案均包含 60+ 技能 + 廣東話優化 + 永久記憶</p><p class="text-green-600 font-semibold">✓ 14 日免費試用 · 無需信用卡 · 隨時取消</p></div></section><section class="section-bg py-16"><div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"><div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"><!--[-->`);
      ssrRenderList(plans, (plan) => {
        _push(`<div class="${ssrRenderClass([
          "bg-white rounded-2xl p-8 border-2",
          plan.featured ? "border-blue-600 shadow-xl relative" : "border-gray-200 shadow-sm"
        ])}">`);
        if (plan.featured) {
          _push(`<div class="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap"><span class="bg-blue-600 text-white px-4 py-1 rounded-full text-xs font-bold">⭐ SME 首選</span></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="text-center mb-6"><h2 class="font-black text-2xl text-gray-900 mb-1">${ssrInterpolate(plan.name)}</h2><p class="text-gray-500 text-sm mb-4">${ssrInterpolate(plan.target)}</p><div class="text-5xl font-black text-orange-500 mb-1">${ssrInterpolate(plan.price)}</div><div class="text-gray-400 text-sm">${ssrInterpolate(plan.period)}</div>`);
        if (plan.note) {
          _push(`<p class="text-xs text-gray-400 mt-1">${ssrInterpolate(plan.note)}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><ul class="space-y-3 mb-8"><!--[-->`);
        ssrRenderList(plan.features, (f) => {
          _push(`<li class="flex items-start gap-3"><span class="text-green-500 font-bold flex-shrink-0">✓</span><span class="text-gray-700 text-sm">${ssrInterpolate(f)}</span></li>`);
        });
        _push(`<!--]--></ul><a href="https://wa.me/85296456787" target="_blank" class="${ssrRenderClass([
          "block w-full text-center py-3 rounded-xl font-semibold transition-colors",
          plan.featured ? "bg-blue-600 text-white hover:bg-blue-700" : "border-2 border-gray-200 text-gray-700 hover:bg-gray-50"
        ])}">${ssrInterpolate(plan.cta)}</a></div>`);
      });
      _push(`<!--]--></div><div class="bg-gradient-to-r from-blue-600 to-teal-500 rounded-2xl p-8 text-white mb-12"><div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-6"><div><div class="text-sm font-medium text-blue-200 mb-2">增值服務</div><h3 class="text-2xl font-black mb-2">🎓 AI 教練</h3><p class="text-blue-100 text-sm leading-relaxed max-w-lg"> 真人技術團隊 WhatsApp 廣東話全程支援。調教 AI 個性、快速上手、持續優化——確保你用盡 PersonAI 的全部功能。 </p></div><div class="text-center flex-shrink-0"><div class="text-4xl font-black mb-1">HK$1,500</div><div class="text-blue-200 text-sm mb-4">/月 · 可與任何方案配合</div>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/ai-coach",
        class: "inline-block bg-white text-blue-700 px-6 py-2.5 rounded-xl font-semibold hover:bg-blue-50 transition-colors text-sm"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` 了解 AI 教練 → `);
          } else {
            return [
              createTextVNode(" 了解 AI 教練 → ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div><div class="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 mb-12"><h3 class="text-2xl font-black text-gray-900 mb-6 text-center">💰 ROI 計算：一個方案值幾多？</h3><div class="grid grid-cols-1 md:grid-cols-2 gap-8"><div><h4 class="font-bold text-red-600 mb-4">❌ 你現在每月訂閱費</h4><div class="space-y-2"><!--[-->`);
      ssrRenderList(currentTools, (tool) => {
        _push(`<div class="flex justify-between text-sm"><span class="text-gray-700">${ssrInterpolate(tool.name)}</span><span class="font-medium text-gray-900">${ssrInterpolate(tool.price)}</span></div>`);
      });
      _push(`<!--]--><div class="border-t border-gray-200 pt-2 flex justify-between font-bold"><span>每月合計</span><span class="text-red-500">HK$2,028</span></div></div></div><div><h4 class="font-bold text-green-600 mb-4">✅ PersonAI Business 方案</h4><div class="space-y-2"><div class="flex justify-between text-sm"><span class="text-gray-700">PersonAI Business</span><span class="font-medium text-gray-900">HK$680/月</span></div><div class="flex justify-between text-sm"><span class="text-gray-700">涵蓋所有功能</span><span class="font-medium text-green-600">✓ 全包</span></div><div class="border-t border-gray-200 pt-2 flex justify-between font-bold"><span>每月節省</span><span class="text-green-500">HK$1,348</span></div></div><div class="bg-green-50 rounded-xl p-4 mt-4"><p class="text-green-700 font-bold text-lg">年省 <span class="text-2xl">HK$16,176</span> 🎉</p><p class="text-green-600 text-sm">「一張單就回本」— 一個新客戶足以覆蓋全年費用</p></div></div></div></div><div class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-12"><div class="p-6 border-b border-gray-100"><h3 class="text-2xl font-black text-gray-900">方案詳細比較</h3></div><div class="overflow-x-auto"><table class="w-full"><thead><tr class="bg-gray-50"><th class="text-left px-6 py-4 font-semibold text-gray-700">功能</th><th class="text-center px-4 py-4 font-semibold text-gray-700">Starter</th><th class="text-center px-4 py-4 font-semibold text-blue-700 bg-blue-50">Business</th><th class="text-center px-4 py-4 font-semibold text-gray-700">Enterprise</th></tr></thead><tbody><!--[-->`);
      ssrRenderList(comparisonRows, (row, i) => {
        _push(`<tr class="${ssrRenderClass(i % 2 === 0 ? "bg-white" : "bg-gray-50/50")}"><td class="px-6 py-3 text-sm text-gray-700 font-medium">${ssrInterpolate(row.feature)}</td><td class="text-center px-4 py-3 text-sm">`);
        if (row.starter === true) {
          _push(`<span class="text-green-500">✓</span>`);
        } else if (row.starter === false) {
          _push(`<span class="text-gray-300">–</span>`);
        } else {
          _push(`<span class="text-gray-700">${ssrInterpolate(row.starter)}</span>`);
        }
        _push(`</td><td class="text-center px-4 py-3 text-sm bg-blue-50/30">`);
        if (row.business === true) {
          _push(`<span class="text-green-500 font-bold">✓</span>`);
        } else if (row.business === false) {
          _push(`<span class="text-gray-300">–</span>`);
        } else {
          _push(`<span class="text-gray-700 font-medium">${ssrInterpolate(row.business)}</span>`);
        }
        _push(`</td><td class="text-center px-4 py-3 text-sm">`);
        if (row.enterprise === true) {
          _push(`<span class="text-green-500">✓</span>`);
        } else if (row.enterprise === false) {
          _push(`<span class="text-gray-300">–</span>`);
        } else {
          _push(`<span class="text-gray-700">${ssrInterpolate(row.enterprise)}</span>`);
        }
        _push(`</td></tr>`);
      });
      _push(`<!--]--></tbody></table></div></div><div><h3 class="text-2xl font-black text-gray-900 mb-6">定價常見問題</h3><div class="space-y-3"><!--[-->`);
      ssrRenderList(pricingFaqs, (faq, i) => {
        _push(`<div class="bg-white rounded-xl border border-gray-100 shadow-sm"><button class="w-full px-6 py-4 text-left flex items-center justify-between"><span class="font-semibold text-gray-900">${ssrInterpolate(faq.q)}</span><span class="text-gray-400">${ssrInterpolate(unref(activeFaq) === i ? "▲" : "▼")}</span></button>`);
        if (unref(activeFaq) === i) {
          _push(`<div class="px-6 pb-4"><p class="text-gray-600 text-sm leading-relaxed">${ssrInterpolate(faq.a)}</p></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--></div></div></div></section><section class="section-cta py-12"><div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center"><h2 class="text-3xl font-black text-white mb-4">準備好開始了嗎？</h2><p class="text-blue-200 mb-8">14 日免費試用，感受 PersonAI 嘅威力</p><div class="flex flex-col sm:flex-row gap-4 justify-center"><a href="https://wa.me/85296456787?text=你好！我想申請 PersonAI 免費試用" target="_blank" class="inline-flex items-center justify-center gap-2 bg-green-400 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-green-500 transition-colors"> 💬 WhatsApp 開始試用 </a>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/early-access",
        class: "inline-flex items-center justify-center gap-2 bg-white text-blue-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` 🔥 優先登記名額 `);
          } else {
            return [
              createTextVNode(" 🔥 優先登記名額 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></section></main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/pricing.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=pricing-DF2yDkP1.js.map
