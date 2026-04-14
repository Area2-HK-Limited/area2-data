import { H as Head } from "./components-7B7l7irn.js";
import { a as __nuxt_component_0 } from "../server.mjs";
import { defineComponent, withCtx, createVNode, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
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
  __name: "ai-coach",
  __ssrInlineRender: true,
  setup(__props) {
    const features = [
      "1 對 1 WhatsApp 廣東話技術支援",
      "30 分鐘 Onboarding：調教 AI 了解你的行業",
      "常見錯誤用法預防，幫你少走彎路",
      "掌握 60+ 技能核心用法快速上手",
      "每月 1 次 review 跟進，持續優化",
      "新功能優先體驗 + 行業專屬配置建議"
    ];
    const pains = [
      { emoji: "😕", text: "「AI 好複雜，唔知點問才最有效」" },
      { emoji: "💸", text: "「試過自己玩，感覺用唔到位，浪費咗訂閱費」" },
      { emoji: "⏰", text: "「唔想花時間自己摸索，想即刻用得好」" }
    ];
    const steps = [
      { title: "📋 Onboarding 設定（30 分鐘）", desc: "我哋了解你的行業、工作模式、最常面對的任務，為你度身調教 PersonAI 的個性同偏好。" },
      { title: "🎓 快速上手培訓", desc: "重點介紹最適合你的 10 個核心技能，帶你實際示範點樣問、點樣用，即刻有效果。" },
      { title: "🔧 問題即時解答", desc: "使用過程中遇到任何問題，WhatsApp 廣東話直接問，1 小時內回應。" },
      { title: "📅 每月 Review（1 次）", desc: "每月定期跟進你的使用情況，識別未善用的功能，提供具體優化建議。" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Head = Head;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<main${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_Head, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<title${_scopeId}>AI 教練 | PersonAI — 唔識用？有人教</title><meta name="description" content="PersonAI AI 教練：真人技術團隊 WhatsApp 廣東話全程支援。30 分鐘 Onboarding + 持續優化。HK$1,500/月。"${_scopeId}>`);
          } else {
            return [
              createVNode("title", null, "AI 教練 | PersonAI — 唔識用？有人教"),
              createVNode("meta", {
                name: "description",
                content: "PersonAI AI 教練：真人技術團隊 WhatsApp 廣東話全程支援。30 分鐘 Onboarding + 持續優化。HK$1,500/月。"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<section class="bg-gradient-to-br from-blue-50 to-white py-16"><div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"><div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"><div><div class="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-sm font-medium mb-6">增值服務</div><h1 class="text-4xl md:text-5xl font-black text-gray-900 mb-4">唔識用？<br>有人教 🎓</h1><p class="text-gray-600 text-xl mb-6 leading-relaxed">真人技術團隊，WhatsApp 廣東話全程支援，確保你用盡 PersonAI 的全部功能。</p><div class="flex items-center gap-4 mb-8"><span class="text-4xl font-black text-orange-500">HK$1,500</span><div class="text-gray-500"><div>/月</div><div class="text-sm">月付，隨時取消</div></div></div><a href="https://wa.me/85296456787?text=你好！我想了解 PersonAI AI 教練服務" target="_blank" class="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-colors"> 💬 WhatsApp 查詢 AI 教練 </a></div><div class="bg-white rounded-2xl p-8 shadow-lg border border-blue-100"><div class="text-center text-5xl mb-4">🎓</div><h3 class="font-black text-xl text-gray-900 text-center mb-6">AI 教練服務包含</h3><div class="space-y-4"><!--[-->`);
      ssrRenderList(features, (f, i) => {
        _push(`<div class="flex items-center gap-3"><span class="w-7 h-7 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">${ssrInterpolate(i + 1)}</span><span class="text-gray-700">${ssrInterpolate(f)}</span></div>`);
      });
      _push(`<!--]--></div></div></div></div></section><section class="section-bg py-12"><div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"><h2 class="text-2xl font-black text-gray-900 text-center mb-8">為什麼需要 AI 教練？</h2><div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10"><!--[-->`);
      ssrRenderList(pains, (pain, i) => {
        _push(`<div class="bg-white rounded-xl p-5 shadow-sm border border-gray-100 text-center"><div class="text-3xl mb-3">${ssrInterpolate(pain.emoji)}</div><p class="text-gray-700 text-sm">${ssrInterpolate(pain.text)}</p></div>`);
      });
      _push(`<!--]--></div><div class="text-center"><div class="inline-flex items-center gap-3 bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold"> ↓ AI 教練幫你解決以上問題 </div></div></div></section><section class="section-blue py-16"><div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"><h2 class="text-3xl font-black text-gray-900 text-center mb-10">AI 教練服務流程</h2><div class="space-y-4"><!--[-->`);
      ssrRenderList(steps, (step, i) => {
        _push(`<div class="bg-white rounded-2xl p-6 shadow-sm flex items-start gap-5"><div class="w-10 h-10 bg-blue-600 text-white rounded-xl flex items-center justify-center font-black text-lg flex-shrink-0">${ssrInterpolate(i + 1)}</div><div><h3 class="font-bold text-gray-900 mb-1">${ssrInterpolate(step.title)}</h3><p class="text-gray-600 text-sm">${ssrInterpolate(step.desc)}</p></div></div>`);
      });
      _push(`<!--]--></div></div></section><section class="section-cta py-12"><div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center"><h2 class="text-3xl font-black text-white mb-4">可與任何方案配合使用</h2><p class="text-blue-200 mb-8">HK$1,500/月，月付，隨時取消</p><div class="flex flex-col sm:flex-row gap-4 justify-center"><a href="https://wa.me/85296456787?text=你好！我想查詢 PersonAI AI 教練服務" target="_blank" class="inline-flex items-center justify-center gap-2 bg-green-400 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-green-500 transition-colors"> 💬 WhatsApp 查詢 AI 教練 </a>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/pricing",
        class: "inline-flex items-center justify-center gap-2 bg-white text-blue-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` 查看定價方案 → `);
          } else {
            return [
              createTextVNode(" 查看定價方案 → ")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/ai-coach.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=ai-coach-DVmpV44Y.js.map
