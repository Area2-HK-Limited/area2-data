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
  __name: "terms",
  __ssrInlineRender: true,
  setup(__props) {
    const sections = [
      { title: "1. 服務簡介", content: "PersonAI 係由 Hostlink (HK) Limited × Area2 (HK) Limited 提供的 WhatsApp AI 助手服務。使用本服務即代表你同意本服務條款。" },
      { title: "2. 帳號責任", content: "你有責任妥善保管你的帳號登入資料及 WhatsApp 帳號安全。如發現未授權使用，請立即通知我們。" },
      { title: "3. 可接受用途", content: "你只可將 PersonAI 用於合法業務用途。禁止用於任何違法活動、騷擾他人、傳播虛假資訊或任何濫用行為。" },
      { title: "4. 知識產權", content: "PersonAI 的技術、設計及內容受知識產權法保護。你對自己輸入的內容保有所有權，但授權我們使用以提供服務。" },
      { title: "5. 收費與付款", content: "訂閱費用於每個月初收取。如取消服務，將不會收取下個月費用，已付款項不予退還，但可繼續使用至本月結束。" },
      { title: "6. 服務可用性", content: "我們致力提供 99.9% 正常運行時間，但不保證服務不會中斷。計劃中的維護將提前通知。" },
      { title: "7. 免責聲明", content: "PersonAI 提供的資訊僅供參考，不構成專業法律、財務、醫療或其他專業建議。請自行判斷並在需要時咨詢專業人士。" },
      { title: "8. 責任限制", content: "在法律允許的最大範圍內，PersonAI 不對任何間接、偶發、特殊或後果性損失負責。" },
      { title: "9. 條款修改", content: "我們保留修改本服務條款的權利。重大修改將提前 30 天通知用戶，如不同意可取消訂閱。" },
      { title: "10. 適用法律", content: "本服務條款受香港法律管轄，任何爭議由香港法院管轄。" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Head = Head;
      _push(`<main${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_Head, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<title${_scopeId}>服務條款 | PersonAI</title><meta name="description" content="PersonAI 服務條款。使用 PersonAI 前請細閱以下條款。"${_scopeId}>`);
          } else {
            return [
              createVNode("title", null, "服務條款 | PersonAI"),
              createVNode("meta", {
                name: "description",
                content: "PersonAI 服務條款。使用 PersonAI 前請細閱以下條款。"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<section class="section-bg py-16"><div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8"><h1 class="text-3xl font-black text-gray-900 mb-2">服務條款</h1><p class="text-gray-400 text-sm mb-8">最後更新：2026 年 3 月</p><div class="space-y-4"><!--[-->`);
      ssrRenderList(sections, (s) => {
        _push(`<div class="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"><h2 class="font-black text-lg text-gray-900 mb-3">${ssrInterpolate(s.title)}</h2><p class="text-gray-600 text-sm leading-relaxed">${ssrInterpolate(s.content)}</p></div>`);
      });
      _push(`<!--]--><div class="bg-blue-50 rounded-2xl p-6 border border-blue-100"><p class="text-blue-700 text-sm">如有任何問題，請 WhatsApp <strong>+852 9645 6787</strong> 或 Email <strong>eric@hostlink.com.hk</strong> 聯絡我哋。</p></div></div></div></section></main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/terms.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=terms-D5dYgYGU.js.map
