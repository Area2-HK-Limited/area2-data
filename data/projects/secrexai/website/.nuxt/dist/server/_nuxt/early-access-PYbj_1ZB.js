import { H as Head } from "./components-7B7l7irn.js";
import { a as __nuxt_component_0 } from "../server.mjs";
import { defineComponent, ref, reactive, withCtx, createVNode, unref, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrRenderList, ssrInterpolate, ssrRenderAttr, ssrRenderClass, ssrIncludeBooleanAttr, ssrLooseContain } from "vue/server-renderer";
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
  __name: "early-access",
  __ssrInlineRender: true,
  setup(__props) {
    const submitted = ref(false);
    const emailError = ref("");
    const form = reactive({
      name: "",
      email: "",
      whatsapp: "",
      company: "",
      needs: [],
      other: "",
      agreed: false
    });
    const benefits = [
      { id: 1, emoji: "🎁", title: "月費送 AI 教練", desc: "月付方案首月免費送 HK$1,500 AI 教練服務" },
      { id: 2, emoji: "💰", title: "早鳥折扣", desc: "鎖定早鳥價，正式上線後漲價唔影響你" },
      { id: 3, emoji: "⚡", title: "優先體驗", desc: "比普通用戶優先使用新功能，比其他對手快一步" }
    ];
    const aiOptions = [
      { id: "content", emoji: "✍️", label: "幫我寫文案 / 內容" },
      { id: "search", emoji: "🔍", label: "搜尋資料 / 整理資訊" },
      { id: "translate", emoji: "🌐", label: "翻譯文件 / Email" },
      { id: "reminder", emoji: "⏰", label: "排程提醒 / 任務管理" },
      { id: "report", emoji: "📊", label: "生成報告 / 分析數據" },
      { id: "client", emoji: "💬", label: "客戶溝通 / 回覆範本" },
      { id: "social", emoji: "📱", label: "Social Media 管理" },
      { id: "document", emoji: "📄", label: "文件處理 / 合同草擬" },
      { id: "research", emoji: "🕵️", label: "競品研究 / 市場分析" },
      { id: "training", emoji: "🎓", label: "員工培訓 / 知識庫" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Head = Head;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<main${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_Head, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<title${_scopeId}>優先登記 Early Access | PersonAI — 香港 WhatsApp AI 助手</title><meta name="description" content="PersonAI 優先登記！名額有限，搶先體驗香港 SME 專屬 WhatsApp AI 助手。"${_scopeId}>`);
          } else {
            return [
              createVNode("title", null, "優先登記 Early Access | PersonAI — 香港 WhatsApp AI 助手"),
              createVNode("meta", {
                name: "description",
                content: "PersonAI 優先登記！名額有限，搶先體驗香港 SME 專屬 WhatsApp AI 助手。"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<section class="bg-gradient-to-br from-blue-600 to-blue-800 py-16 text-white"><div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center"><div class="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-1.5 rounded-full text-sm font-medium mb-6"> 🔥 限時優先登記 </div><h1 class="text-4xl md:text-5xl font-black mb-4">搶先體驗 PersonAI</h1><p class="text-blue-200 text-xl mb-8">首批 50 個名額，全部包含早鳥優惠同 AI 教練服務</p><div class="max-w-md mx-auto"><div class="flex justify-between text-sm mb-2"><span class="text-blue-200">已登記 12 位</span><span class="text-blue-200">剩餘 38 個名額</span></div><div class="bg-white/20 rounded-full h-4 overflow-hidden"><div class="bg-green-400 h-4 rounded-full transition-all" style="${ssrRenderStyle({ "width": "24%" })}"></div></div><div class="text-center mt-2 text-sm text-blue-200">12 / 50 名額已使用</div></div></div></section><section class="section-blue py-12"><div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"><h2 class="text-2xl font-black text-gray-900 text-center mb-8">早鳥用戶獨家優惠</h2><div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"><!--[-->`);
      ssrRenderList(benefits, (benefit) => {
        _push(`<div class="bg-white rounded-2xl p-6 shadow-sm text-center border border-blue-100"><div class="text-3xl mb-3">${ssrInterpolate(benefit.emoji)}</div><h3 class="font-bold text-gray-900 mb-2">${ssrInterpolate(benefit.title)}</h3><p class="text-gray-600 text-sm">${ssrInterpolate(benefit.desc)}</p></div>`);
      });
      _push(`<!--]--></div></div></section><section class="section-white py-16"><div class="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">`);
      if (!unref(submitted)) {
        _push(`<div><div class="text-center mb-8"><h2 class="text-3xl font-black text-gray-900 mb-2">立即登記</h2><p class="text-gray-500">填妥資料後，1-3 個工作天內我哋會 WhatsApp 聯絡你</p></div><form class="space-y-5"><div><label class="block font-semibold text-gray-700 mb-2">姓名 <span class="text-red-500">*</span></label><input${ssrRenderAttr("value", unref(form).name)} type="text" required placeholder="陳大文" class="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"></div><div><label class="block font-semibold text-gray-700 mb-2">公司電郵 <span class="text-red-500">*</span></label><input${ssrRenderAttr("value", unref(form).email)} type="email" required placeholder="yourname@company.com" class="${ssrRenderClass([unref(emailError) ? "border-red-400 focus:ring-red-400" : "", "w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"])}">`);
        if (unref(emailError)) {
          _push(`<p class="text-red-500 text-sm mt-1">${ssrInterpolate(unref(emailError))}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<p class="text-gray-400 text-xs mt-1">⚠️ 請使用公司電郵（不接受 Gmail / Yahoo / Hotmail 等免費郵箱）</p></div><div><label class="block font-semibold text-gray-700 mb-2">WhatsApp 號碼 <span class="text-red-500">*</span></label><input${ssrRenderAttr("value", unref(form).whatsapp)} type="tel" required placeholder="+852 9XXX XXXX" class="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"></div><div><label class="block font-semibold text-gray-700 mb-2">公司名稱 <span class="text-red-500">*</span></label><input${ssrRenderAttr("value", unref(form).company)} type="text" required placeholder="你的公司名稱" class="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"></div><div><label class="block font-semibold text-gray-700 mb-3">最想 AI 幫你做咩？（可選多項）</label><div class="grid grid-cols-1 sm:grid-cols-2 gap-2"><!--[-->`);
        ssrRenderList(aiOptions, (option) => {
          _push(`<label class="flex items-start gap-3 bg-gray-50 rounded-xl px-4 py-3 cursor-pointer hover:bg-blue-50 transition-colors border border-transparent hover:border-blue-200"><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(unref(form).needs) ? ssrLooseContain(unref(form).needs, option.id) : unref(form).needs) ? " checked" : ""}${ssrRenderAttr("value", option.id)} class="mt-0.5 accent-blue-600"><span class="text-gray-700 text-sm">${ssrInterpolate(option.emoji)} ${ssrInterpolate(option.label)}</span></label>`);
        });
        _push(`<!--]--></div></div><div><label class="block font-semibold text-gray-700 mb-2">其他需求（選填）</label><textarea rows="3" placeholder="告訴我哋你的特定需求..." class="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none">${ssrInterpolate(unref(form).other)}</textarea></div><div class="flex items-start gap-3"><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(unref(form).agreed) ? ssrLooseContain(unref(form).agreed, null) : unref(form).agreed) ? " checked" : ""} required id="terms" class="mt-0.5 accent-blue-600"><label for="terms" class="text-gray-600 text-sm cursor-pointer"> 我同意 `);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/terms",
          class: "text-blue-600 hover:underline",
          target: "_blank"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`服務條款`);
            } else {
              return [
                createTextVNode("服務條款")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(` 及 `);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/privacy",
          class: "text-blue-600 hover:underline",
          target: "_blank"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`私隱政策`);
            } else {
              return [
                createTextVNode("私隱政策")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`， 並同意 PersonAI 以 WhatsApp 聯絡我。 </label></div><button type="submit"${ssrIncludeBooleanAttr(!unref(form).agreed || !!unref(emailError)) ? " disabled" : ""} class="w-full bg-blue-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"> 🔥 立即提交登記 → </button></form></div>`);
      } else {
        _push(`<div class="text-center py-16"><div class="text-7xl mb-6">🎉</div><h2 class="text-3xl font-black text-gray-900 mb-4">多謝支持！</h2><p class="text-gray-600 text-lg mb-6"> 你的登記已成功提交。<br><strong>1-3 個工作天</strong>內，我哋的團隊會以 WhatsApp 聯絡你，<br> 安排 PersonAI 體驗同早鳥優惠詳情。 </p><div class="bg-blue-50 rounded-2xl p-6 inline-block text-left mb-8 border border-blue-100"><h3 class="font-bold text-gray-900 mb-3">下一步</h3><ul class="space-y-2 text-gray-700 text-sm"><li class="flex items-center gap-2">✅ 留意 WhatsApp 訊息（來自 +852 9645 6787）</li><li class="flex items-center gap-2">📋 準備你想解決的業務痛點清單</li><li class="flex items-center gap-2">🎯 我哋會為你度身安排 30 分鐘 Onboarding</li></ul></div>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/",
          class: "inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` ← 返回首頁 `);
            } else {
              return [
                createTextVNode(" ← 返回首頁 ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      }
      _push(`</div></section></main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/early-access.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=early-access-PYbj_1ZB.js.map
