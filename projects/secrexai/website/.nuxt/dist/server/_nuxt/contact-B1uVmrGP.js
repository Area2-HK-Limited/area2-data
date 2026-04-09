import { H as Head } from "./components-7B7l7irn.js";
import { defineComponent, ref, reactive, withCtx, createVNode, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
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
  __name: "contact",
  __ssrInlineRender: true,
  setup(__props) {
    const submitted = ref(false);
    const form = reactive({ name: "", email: "", phone: "", message: "" });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Head = Head;
      _push(`<main${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_Head, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<title${_scopeId}>聯絡我們 | PersonAI — 香港 WhatsApp AI 助手</title><meta name="description" content="聯絡 PersonAI 團隊。WhatsApp: +852 9645 6787 | Email: eric@hostlink.com.hk"${_scopeId}>`);
          } else {
            return [
              createVNode("title", null, "聯絡我們 | PersonAI — 香港 WhatsApp AI 助手"),
              createVNode("meta", {
                name: "description",
                content: "聯絡 PersonAI 團隊。WhatsApp: +852 9645 6787 | Email: eric@hostlink.com.hk"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<section class="bg-gradient-to-br from-blue-50 to-white py-16"><div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"><div class="text-center mb-12"><h1 class="text-4xl font-black text-gray-900 mb-4">聯絡我們</h1><p class="text-gray-500 text-lg">有任何問題，我哋隨時以 WhatsApp 廣東話回覆你</p></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-10"><div class="space-y-4"><a href="https://wa.me/85296456787?text=你好！我想了解 PersonAI" target="_blank" class="flex items-center gap-4 bg-green-50 border border-green-100 rounded-2xl p-6 hover:shadow-md transition-shadow group"><div class="w-12 h-12 bg-green-500 text-white rounded-xl flex items-center justify-center text-xl">💬</div><div><div class="font-bold text-gray-900">WhatsApp（推薦）</div><div class="text-green-600 group-hover:underline">+852 9645 6787</div><div class="text-gray-400 text-xs mt-1">通常 1 小時內回覆</div></div></a><a href="mailto:eric@hostlink.com.hk" class="flex items-center gap-4 bg-blue-50 border border-blue-100 rounded-2xl p-6 hover:shadow-md transition-shadow group"><div class="w-12 h-12 bg-blue-500 text-white rounded-xl flex items-center justify-center text-xl">✉️</div><div><div class="font-bold text-gray-900">Email</div><div class="text-blue-600 group-hover:underline">eric@hostlink.com.hk</div><div class="text-gray-400 text-xs mt-1">通常 1 個工作天內回覆</div></div></a><div class="bg-gray-50 border border-gray-100 rounded-2xl p-6"><div class="font-bold text-gray-900 mb-3">辦公地址</div><p class="text-gray-600 text-sm leading-relaxed"> Area2 (HK) Limited<br> 旺角彌敦道 610 號<br> 荷李活商業中心 18 樓 1805-06 室<br> 香港 </p></div></div><div class="bg-white rounded-2xl p-8 shadow-sm border border-gray-100"><h2 class="font-black text-xl text-gray-900 mb-6">發送訊息</h2>`);
      if (!unref(submitted)) {
        _push(`<form class="space-y-4"><div><label class="block font-medium text-gray-700 mb-1.5 text-sm">姓名 *</label><input${ssrRenderAttr("value", unref(form).name)} type="text" required placeholder="陳大文" class="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"></div><div><label class="block font-medium text-gray-700 mb-1.5 text-sm">電郵 *</label><input${ssrRenderAttr("value", unref(form).email)} type="email" required placeholder="yourname@company.com" class="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"></div><div><label class="block font-medium text-gray-700 mb-1.5 text-sm">WhatsApp（選填）</label><input${ssrRenderAttr("value", unref(form).phone)} type="tel" placeholder="+852 9XXX XXXX" class="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"></div><div><label class="block font-medium text-gray-700 mb-1.5 text-sm">訊息 *</label><textarea rows="4" required placeholder="請告訴我哋你的查詢或需求..." class="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none">${ssrInterpolate(unref(form).message)}</textarea></div><button type="submit" class="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors"> 發送訊息 → </button></form>`);
      } else {
        _push(`<div class="text-center py-8"><div class="text-5xl mb-4">✅</div><h3 class="font-bold text-gray-900 mb-2">訊息已發送！</h3><p class="text-gray-600 text-sm">我哋會盡快回覆你。建議同時發 WhatsApp 可以更快得到回應。</p></div>`);
      }
      _push(`</div></div></div></section></main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contact.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=contact-B1uVmrGP.js.map
