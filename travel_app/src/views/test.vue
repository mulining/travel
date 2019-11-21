<template>
  <!--页面切换必须要添加js_container-->
  <div class="container js_container">
    <div class="page">
      <div class="weui-jiaj-panel">
        <div class="page__bd">
          <!--<a href="javascript:;" class="weui-btn weui-btn_primary">点击展现searchBar</a>-->
          <div class="weui-search-bar" id="searchBar">
            <form class="weui-search-bar__form">
              <div class="weui-search-bar__box">
                <i class="weui-icon-search"></i>
                <input
                  type="search"
                  class="weui-search-bar__input"
                  id="searchInput"
                  placeholder="搜索"
                  required=""
                />
                <a
                  href="javascript:"
                  class="weui-icon-clear"
                  id="searchClear"
                ></a>
              </div>
              <label
                class="weui-search-bar__label"
                id="searchText"
                style="transform-origin: 0px 0px 0px; opacity: 1; transform: scale(1, 1);"
              >
                <i class="weui-icon-search"></i>
                <span>搜索</span>
              </label>
            </form>
            <a
              href="javascript:"
              class="weui-search-bar__cancel-btn"
              id="searchCancel"
              >取消</a
            >
          </div>
          <div
            class="weui-cells searchbar-result"
            id="searchResult"
            style="display: none;"
          >
            <div class="weui-cell weui-cell_access">
              <div class="weui-cell__bd weui-cell_primary">
                <p>百度</p>
              </div>
            </div>
            <div class="weui-cell weui-cell_access">
              <div class="weui-cell__bd weui-cell_primary">
                <p>百度网盘</p>
              </div>
            </div>
            <div class="weui-cell weui-cell_access">
              <div class="weui-cell__bd weui-cell_primary">
                <p>试试</p>
              </div>
            </div>
            <div class="weui-cell weui-cell_access">
              <div class="weui-cell__bd weui-cell_primary">
                <p>百度搜索</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
export default {
  mounted() {
    $(function() {
      var $searchBar = $("#searchBar"),
        $searchResult = $("#searchResult"),
        $searchText = $("#searchText"),
        $searchInput = $("#searchInput"),
        $searchClear = $("#searchClear"),
        $searchCancel = $("#searchCancel");

      function hideSearchResult() {
        $searchResult.hide();
        $searchInput.val("");
      }
      function cancelSearch() {
        hideSearchResult();
        $searchBar.removeClass("weui-search-bar_focusing");
        $searchText.show();
      }

      $searchText.on("click", function() {
        $searchBar.addClass("weui-search-bar_focusing");
        $searchInput.focus();
      });
      $searchInput
        .on("blur", function() {
          if (!this.value.length) cancelSearch();
        })
        .on("input", function() {
          if (this.value.length) {
            $searchResult.show();
          } else {
            $searchResult.hide();
          }
        });
      $searchClear.on("click", function() {
        hideSearchResult();
        $searchInput.focus();
      });
      $searchCancel.on("click", function() {
        cancelSearch();
        $searchInput.blur();
      });
    });
  }
};
</script>

<style></style>
