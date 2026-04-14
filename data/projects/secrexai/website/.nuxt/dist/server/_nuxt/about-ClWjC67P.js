import { H as Head } from "./components-7B7l7irn.js";
import { defineComponent, withCtx, createVNode, useSSRContext } from "vue";
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
  __name: "about",
  __ssrInlineRender: true,
  setup(__props) {
    const hostlinkItems = [
      "開發、系統架構、資訊安全",
      "伺服器基礎設施管理",
      "14+ 年 IT 服務經驗",
      "Tencent Cloud 亞太數據中心（日本）部署",
      "Wheelock 等大型企業客戶",
      "企業級技術支援能力"
    ];
    const area2Items = [
      "產品設計、包裝、市場推廣",
      "AI 數碼營銷策略",
      "SEO / Paid Media / Social Media",
      "香港 SME 市場深度了解",
      "品牌建立與內容行銷",
      "企業培訓及 AI 應用顧問"
    ];
    const tags = ["香港公司", "PDPO 合規", "14+ 年 IT 經驗", "AI 數碼營銷", "亞太區基礎設施", "廣東話本地支援"];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Head = Head;
      _push(`<main${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_Head, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<title${_scopeId}>關於我們 | PersonAI — 由香港人，為香港人打造</title><meta name="description" content="PersonAI 由 Hostlink (HK) Limited × Area2 (HK) Limited 聯乘推出。技術底子 × 市場洞察 = 真正用得着的 AI 解決方案。"${_scopeId}>`);
          } else {
            return [
              createVNode("title", null, "關於我們 | PersonAI — 由香港人，為香港人打造"),
              createVNode("meta", {
                name: "description",
                content: "PersonAI 由 Hostlink (HK) Limited × Area2 (HK) Limited 聯乘推出。技術底子 × 市場洞察 = 真正用得着的 AI 解決方案。"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<section class="bg-gradient-to-br from-blue-50 to-white py-16"><div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"><h1 class="text-4xl md:text-5xl font-black text-gray-900 mb-4">由香港人，為香港人打造</h1><p class="text-gray-600 text-xl">技術底子 × 市場洞察 = 真正用得着的 AI 解決方案</p></div></section><section class="section-white py-16"><div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8"><div class="text-center mb-12"><h2 class="text-3xl font-black text-gray-900 mb-3">Hostlink × Area2 合作模式</h2><p class="text-gray-500">兩間香港公司的互補優勢</p></div><div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10"><div class="bg-blue-50 rounded-2xl p-8 border border-blue-100"><div class="text-4xl mb-4">🏗️</div><h3 class="font-black text-2xl text-blue-700 mb-2">Hostlink (HK) Limited</h3><div class="text-blue-600 font-medium mb-4">技術夥伴</div><ul class="space-y-2 text-gray-700 text-sm"><!--[-->`);
      ssrRenderList(hostlinkItems, (item) => {
        _push(`<li class="flex items-start gap-2"><span class="text-blue-500 mt-0.5">▸</span>${ssrInterpolate(item)}</li>`);
      });
      _push(`<!--]--></ul></div><div class="bg-teal-50 rounded-2xl p-8 border border-teal-100"><div class="text-4xl mb-4">📣</div><h3 class="font-black text-2xl text-teal-700 mb-2">Area2 (HK) Limited</h3><div class="text-teal-600 font-medium mb-4">產品及市場夥伴</div><ul class="space-y-2 text-gray-700 text-sm"><!--[-->`);
      ssrRenderList(area2Items, (item) => {
        _push(`<li class="flex items-start gap-2"><span class="text-teal-500 mt-0.5">▸</span>${ssrInterpolate(item)}</li>`);
      });
      _push(`<!--]--></ul></div></div><div class="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 text-center"><h3 class="text-2xl font-black text-gray-900 mb-4">為什麼聯乘？</h3><p class="text-gray-600 text-lg mb-6 max-w-2xl mx-auto leading-relaxed"> 「技術底子 × 市場洞察 = 真正用得着的 AI 解決方案」<br> Hostlink 提供企業級亞太區基礎設施，Area2 提供精準香港 SME 數碼營銷能力——兩者互補，為香港中小企帶來「信得過、用得順」的 AI 助手。 </p><div class="flex flex-wrap justify-center gap-4"><!--[-->`);
      ssrRenderList(tags, (tag) => {
        _push(`<span class="bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium border border-blue-100">${ssrInterpolate(tag)}</span>`);
      });
      _push(`<!--]--></div></div></div></section><section class="section-blue py-16"><div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center"><h2 class="text-3xl font-black text-gray-900 mb-8">聯絡我們</h2><div class="grid grid-cols-1 md:grid-cols-2 gap-6"><a href="https://wa.me/85296456787" target="_blank" class="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow text-center group"><div class="text-3xl mb-3">📱</div><div class="font-bold text-gray-900 mb-1">WhatsApp</div><div class="text-blue-600 group-hover:underline">+852 9645 6787</div></a><a href="mailto:eric@hostlink.com.hk" class="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow text-center group"><div class="text-3xl mb-3">✉️</div><div class="font-bold text-gray-900 mb-1">Email</div><div class="text-blue-600 group-hover:underline">eric@hostlink.com.hk</div></a></div></div></section></main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=about-ClWjC67P.js.map
