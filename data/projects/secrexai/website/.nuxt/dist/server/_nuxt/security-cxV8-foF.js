import { H as Head } from "./components-7B7l7irn.js";
import { defineComponent, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderClass } from "vue/server-renderer";
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
  __name: "security",
  __ssrInlineRender: true,
  setup(__props) {
    const concerns = [
      { q: "對話數據會唔會被 AI 訓練？", a: "絕對唔會。PersonAI 底層技術承諾數據不用於訓練任何 AI 模型。你的業務資料只用於你自己的 AI 助手，唔會被其他人或系統存取。" },
      { q: "數據存喺邊？去唔去美國？", a: "用戶對話記錄儲存亞太區（日本），Tencent Cloud 企業級數據中心。數據唔去美國，受亞太地區法律保護，唔受美國 CLOUD Act 管轄。" },
      { q: "員工對話會唔會洩漏給同事？", a: "每個 WhatsApp 帳號完全獨立隔離，端到端加密傳輸。A 員工嘅對話，B 員工無法存取。管理員可以查看整體使用統計，但唔能看到個人對話內容。" },
      { q: "香港法律管唔管到？PDPO 合規嗎？", a: "PersonAI 由香港公司（Hostlink (HK) Limited × Area2 (HK) Limited）運營，完全符合《個人資料（私隱）條例》（PDPO）要求。企業方案可提供 DPA（數據處理協議）。" }
    ];
    const infraSpecs = [
      "Tencent Cloud 日本地區（亞太）數據中心",
      "Tier 3+ 數據中心，99.99% SLA",
      "企業級防火牆 + DDoS 防護",
      "數據傳輸全程 TLS 1.3 加密",
      "備份數據每日快照",
      "數據隔離：每個用戶獨立儲存區域"
    ];
    const certs = [
      { name: "ISO 27001", emoji: "🏆" },
      { name: "SOC 2 Type 2", emoji: "🔐" },
      { name: "CSA STAR", emoji: "⭐" },
      { name: "PDPO 合規", emoji: "🇭🇰" },
      { name: "TLS 1.3", emoji: "🔒" },
      { name: "企業防火牆", emoji: "🛡️" }
    ];
    const compRows = [
      { feature: "數據存儲位置", personai: "亞太區（日本）", chatgpt: "美國", claude: "美國", others: "多數美國" },
      { feature: "是否訓練 AI 模型", personai: "✗ 絕不", chatgpt: "可選退出", claude: "可選退出", others: "多數會" },
      { feature: "PDPO 合規", personai: "✓ 完全合規", chatgpt: "部分", claude: "部分", others: "不確定" },
      { feature: "可簽 DPA", personai: "✓ 企業版", chatgpt: "企業版", claude: "企業版", others: "多數不可" },
      { feature: "香港公司運營", personai: "✓ 香港公司", chatgpt: "美國公司", claude: "美國公司", others: "多數外國" },
      { feature: "ISO 27001", personai: "✓", chatgpt: "✓", claude: "✓", others: "不確定" },
      { feature: "香港本地支援", personai: "✓ WhatsApp 廣東話", chatgpt: "✗", claude: "✗", others: "✗" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Head = Head;
      _push(`<main${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_Head, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<title${_scopeId}>資訊安全 | PersonAI — 你的業務資料，只屬於你</title><meta name="description" content="PersonAI 資訊安全承諾：數據存亞太區（日本）、絕不訓練模型、PDPO 合規。Tencent Cloud ISO 27001 / SOC 2 認證。"${_scopeId}>`);
          } else {
            return [
              createVNode("title", null, "資訊安全 | PersonAI — 你的業務資料，只屬於你"),
              createVNode("meta", {
                name: "description",
                content: "PersonAI 資訊安全承諾：數據存亞太區（日本）、絕不訓練模型、PDPO 合規。Tencent Cloud ISO 27001 / SOC 2 認證。"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<section class="bg-gradient-to-br from-slate-800 to-slate-900 py-16 text-white"><div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"><div class="text-5xl mb-4">🔒</div><h1 class="text-4xl md:text-5xl font-black mb-4">你的業務資料，只屬於你</h1><p class="text-slate-300 text-xl">SME 最擔心的 4 個安全問題，PersonAI 一一正面回應</p></div></section><section class="section-white py-16"><div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"><div class="space-y-8"><!--[-->`);
      ssrRenderList(concerns, (concern, i) => {
        _push(`<div class="grid grid-cols-1 md:grid-cols-2 gap-6"><div class="bg-red-50 rounded-2xl p-6 border border-red-100"><div class="flex items-center gap-2 mb-3"><span class="text-red-500 font-bold">❓</span><span class="text-red-600 font-semibold text-sm">企業顧慮</span></div><p class="text-gray-800 font-semibold">${ssrInterpolate(concern.q)}</p></div><div class="bg-green-50 rounded-2xl p-6 border border-green-100"><div class="flex items-center gap-2 mb-3"><span class="text-green-500 font-bold">✅</span><span class="text-green-600 font-semibold text-sm">PersonAI 答案</span></div><p class="text-gray-800">${ssrInterpolate(concern.a)}</p></div></div>`);
      });
      _push(`<!--]--></div></div></section><section class="section-blue py-16"><div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"><div class="text-center mb-10"><h2 class="text-3xl font-black text-gray-900 mb-4">🇯🇵 Tencent Cloud 亞太數據中心（日本）</h2><p class="text-gray-600">由 Hostlink (HK) Limited 提供企業級基礎設施支持</p></div><div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8"><div class="bg-white rounded-2xl p-6 shadow-sm"><h3 class="font-bold text-gray-900 mb-4">🏗️ 基礎設施規格</h3><ul class="space-y-3"><!--[-->`);
      ssrRenderList(infraSpecs, (spec) => {
        _push(`<li class="flex items-center gap-3 text-sm text-gray-700"><span class="text-blue-500">▸</span>${ssrInterpolate(spec)}</li>`);
      });
      _push(`<!--]--></ul></div><div class="bg-white rounded-2xl p-6 shadow-sm"><h3 class="font-bold text-gray-900 mb-4">📜 認證清單</h3><div class="grid grid-cols-2 gap-3"><!--[-->`);
      ssrRenderList(certs, (cert) => {
        _push(`<div class="text-center p-3 bg-blue-50 rounded-xl border border-blue-100"><div class="text-xl mb-1">${ssrInterpolate(cert.emoji)}</div><div class="font-semibold text-blue-700 text-xs">${ssrInterpolate(cert.name)}</div></div>`);
      });
      _push(`<!--]--></div></div></div></div></section><section class="section-white py-16"><div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8"><h2 class="text-3xl font-black text-gray-900 text-center mb-10">競品安全比較</h2><div class="overflow-x-auto rounded-2xl shadow-sm border border-gray-100"><table class="w-full bg-white"><thead><tr class="bg-gray-50"><th class="text-left px-6 py-4 font-semibold text-gray-700">安全指標</th><th class="text-center px-4 py-4 font-semibold text-blue-700">PersonAI ✅</th><th class="text-center px-4 py-4 font-semibold text-gray-500">ChatGPT</th><th class="text-center px-4 py-4 font-semibold text-gray-500">Claude.ai</th><th class="text-center px-4 py-4 font-semibold text-gray-500">一般 AI 工具</th></tr></thead><tbody><!--[-->`);
      ssrRenderList(compRows, (row, i) => {
        _push(`<tr class="${ssrRenderClass(i % 2 === 0 ? "bg-white" : "bg-gray-50/50")}"><td class="px-6 py-3 text-sm text-gray-700 font-medium">${ssrInterpolate(row.feature)}</td><td class="text-center px-4 py-3 text-sm font-medium text-green-600">${ssrInterpolate(row.personai)}</td><td class="text-center px-4 py-3 text-sm text-gray-500">${ssrInterpolate(row.chatgpt)}</td><td class="text-center px-4 py-3 text-sm text-gray-500">${ssrInterpolate(row.claude)}</td><td class="text-center px-4 py-3 text-sm text-gray-500">${ssrInterpolate(row.others)}</td></tr>`);
      });
      _push(`<!--]--></tbody></table></div></div></section><section class="section-security py-12"><div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center"><h2 class="text-3xl font-black text-white mb-4">對安全有更多疑問？</h2><p class="text-blue-300 mb-8">我哋的技術團隊隨時以 WhatsApp 廣東話解答你的安全合規問題</p><div class="flex flex-col sm:flex-row gap-4 justify-center"><a href="https://wa.me/85296456787?text=你好！我想了解 PersonAI 的資訊安全詳情" target="_blank" class="inline-flex items-center justify-center gap-2 bg-green-400 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-green-500 transition-colors"> 💬 WhatsApp 詢問安全問題 </a><a href="mailto:eric@hostlink.com.hk" class="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-colors"> ✉️ Email 查詢 </a></div></div></section></main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/security.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=security-cxV8-foF.js.map
