import React from "react";

const Header = () => {
  return (
    <header class="header">
      <div class="logo-container">
        <h1 class="logo">Web Toolz</h1>
        <div
          class="visible-xs toggle-sidebar-left"
          data-toggle-class="sidebar-left-opened"
          data-target="html"
          data-fire-event="sidebar-left-opened"
        >
          <i class="fa fa-bars" aria-label="Toggle sidebar"></i>
        </div>
      </div>

      <div class="header-right">
        <ul class="notifications" style={{ margin: "8px 0px" }}>
          <li>
            <div
              style={{
                marginTop: 5,
                display: "flex",
                flexDirection: "row-reverse",
              }}
            >
              <input
                type="checkbox"
                id="chageTheme"
                style={{ margin: "4px 20px 4px 10px" }}
              />
              <span>Dark Mode</span>
            </div>
          </li>

          <li>
            <a id="favorite" href="javascript:;" class="notification-icon">
              <i class="fa fa-star"></i>
            </a>
          </li>
          <li>
            <a id="share" href="javascript:;" class="notification-icon">
              <i class="fa fa-share-alt"></i>
            </a>
          </li>
          <li>
            <a
              id="share"
              href="mailto:goodfriend.3777@gmail.com?subject=Web Toolz에게 바라는 점"
              class="notification-icon"
            >
              <i class="fa fa fa-exclamation"></i>
            </a>
          </li>
        </ul>
        <span class="separator"></span>
        <div id="userbox" class="userbox">
          <a href="#" data-toggle="dropdown" aria-expanded="false">
            <div class="profile-info">
              <span class="name" id="setLanguage">
                KR
              </span>
            </div>
            <i class="fa custom-caret"></i>
          </a>
          <div class="dropdown-menu">
            <ul class="list-unstyled">
              <li class="divider"></li>
              <li>
                <a
                  role="menuitem"
                  id="koBtn"
                  data-lang="ko"
                  tabindex="-1"
                  href="javascript:void();"
                >
                  KR
                </a>
              </li>
              <li>
                <a
                  role="menuitem"
                  id="enBtn"
                  data-lang="en"
                  tabindex="-1"
                  href="javascript:void();"
                >
                  EN
                </a>
              </li>
              <li>
                <a
                  role="menuitem"
                  id="jpBtn"
                  data-lang="jp"
                  tabindex="-1"
                  href="javascript:void();"
                >
                  JP
                </a>
              </li>
              <li>
                <a
                  role="menuitem"
                  id="cnBtn"
                  data-lang="cn"
                  tabindex="-1"
                  href="javascript:void();"
                >
                  CN
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
