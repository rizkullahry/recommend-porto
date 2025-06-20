<template>
  <div class="life-at-buma">
    <header class="life-at-buma__header">
      <div class="header__left">
        <img src="/images/bspace-logo.svg" alt="BSPACE" class="header__logo" />
        <BButton variant="secondary" class="header__home-btn">
          <BIcon name="home" />
          Home
        </BButton>
      </div>

      <div class="header__nav">
        <BIcon name="users" size="medium" />
        <BIcon name="calendar" size="medium" />
        <BIcon name="inbox" size="medium" />
        <BIcon name="building" size="medium" />
        <BIcon name="user-group" size="medium" />
        <BIcon name="shield-check" size="medium" />
        <BIcon name="presentation" size="medium" />
      </div>

      <div class="header__right">
        <div class="production-stats">
          <img src="/images/truck-icon.svg" alt="Production" class="production-stats__icon" />
          <div class="production-stats__content">
            <span class="text-format-caption">Production CM</span>
            <div class="production-stats__numbers">
              <span class="text-heading-small">100,129</span>
              <BChip variant="success" size="small">106 %</BChip>
            </div>
          </div>
        </div>

        <BIcon name="bell" size="medium" class="header__notification" />
        <BIcon name="inbox" size="medium" class="header__inbox" />

        <div class="header__profile">
          <BAvatar src="/path/to/profile.jpg" size="small" />
          <div class="profile__info">
            <span class="text-format-paragraph">John Doe</span>
            <span class="text-format-caption text-primary-600">System Analyst</span>
          </div>
          <BIcon name="chevron-down" size="small" />
        </div>
      </div>
    </header>

    <div class="life-at-buma__hero">
      <BButton variant="text" class="hero__back-btn">
        <BIcon name="arrow-left" />
        Back to BUMA Feeds
      </BButton>
      <h1 class="text-heading-large">Life at BUMA</h1>
    </div>

    <div class="life-at-buma__content">
      <aside class="content__sidebar">
        <div class="sidebar__section">
          <BIcon name="users" size="medium" />
          <span class="text-format-paragraph">B'Closer</span>
        </div>

        <div class="sidebar__section sidebar__section--active">
          <BIcon name="rocket-launch" size="medium" />
          <span class="text-format-paragraph">Change Booster</span>
        </div>

        <div class="sidebar__menu">
          <router-link to="/who-we-are" class="menu-item menu-item--active">Who We Are</router-link>
          <router-link to="/our-team" class="menu-item">Our Team</router-link>
          <router-link to="/join-us" class="menu-item">Join Us</router-link>
          <router-link to="/cb-mission" class="menu-item">CB Mission</router-link>
        </div>
      </aside>

      <main class="content__main">
        <section class="change-booster">
          <h2 class="text-heading-medium">Change Booster</h2>

          <div class="change-booster__accordion">
            <BAccordion>
              <BAccordionItem title="Apa itu Change Booster?" />
              <BAccordionItem title="Tugas dan tanggung jawab Change Booster" />
              <BAccordionItem title="Aktivitas apa aja sih yang biasa Change Booster lakuin?" />
            </BAccordion>
          </div>

          <div class="change-booster__gallery">
            <h3 class="text-heading-medium">Saksikan Keseruan Aktivitas Change Booster</h3>
            
            <div class="gallery__grid">
              <div class="gallery-item">
                <div class="gallery-item__image">
                  <img src="/images/collaboration.jpg" alt="More Collaboration" />
                  <BIcon name="play" size="large" class="play-icon" />
                </div>
                <h4 class="text-heading-small">More Collaboration</h4>
              </div>

              <div class="gallery-item">
                <div class="gallery-item__image">
                  <img src="/images/ownership.jpg" alt="More Ownership" />
                  <BIcon name="play" size="large" class="play-icon" />
                </div>
                <h4 class="text-heading-small">More Ownership</h4>
              </div>

              <div class="gallery-item">
                <div class="gallery-item__image">
                  <img src="/images/plan-better.jpg" alt="Plan Better, Act Faster" />
                  <BIcon name="play" size="large" class="play-icon" />
                </div>
                <h4 class="text-heading-small">Plan Better, Act Faster</h4>
              </div>

              <div class="gallery-item">
                <div class="gallery-item__image">
                  <img src="/images/communication.jpg" alt="More Open Communication" />
                  <BIcon name="play" size="large" class="play-icon" />
                </div>
                <h4 class="text-heading-small">More Open Communication</h4>
              </div>
            </div>
          </div>
        </section>
      </main>

      <aside class="content__cards">
        <div class="nav-card">
          <img src="/images/about-buma.jpg" alt="About BUMA" class="nav-card__image" />
          <div class="nav-card__content">
            <h3 class="text-heading-medium">About<br />BUMA</h3>
          </div>
        </div>

        <div class="nav-card">
          <img src="/images/documents.jpg" alt="Documents Portal" class="nav-card__image" />
          <div class="nav-card__content">
            <h3 class="text-heading-medium">Documents<br />Portal</h3>
          </div>
        </div>
      </aside>
    </div>
  </div>
</template>

<script setup lang="ts">
// Component logic here if needed
</script>

<style lang="scss" scoped>
.life-at-buma {
  min-height: 100vh;
  background-color: color(gray, 50);

  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: space(md) space(lg);
    background-color: color(white);
    border-bottom: 1px solid color(gray, 200);

    .header__left {
      display: flex;
      align-items: center;
      gap: space(md);
    }

    .header__nav {
      display: flex;
      gap: space(xl);
    }

    .header__right {
      display: flex;
      align-items: center;
      gap: space(lg);
    }

    .production-stats {
      display: flex;
      align-items: center;
      gap: space(sm);
      padding: space(sm) space(md);
      background-color: color(success, 50);
      border-radius: radius(large);

      &__content {
        display: flex;
        flex-direction: column;
      }

      &__numbers {
        display: flex;
        align-items: center;
        gap: space(xs);
      }
    }

    .header__profile {
      display: flex;
      align-items: center;
      gap: space(sm);
      cursor: pointer;
    }
  }

  &__hero {
    position: relative;
    height: 240px;
    padding: space(xl);
    background-image: url('/images/hero-bg.jpg');
    background-size: cover;
    background-position: center;
    color: color(white);

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4));
    }

    .hero__back-btn {
      position: relative;
      z-index: 1;
      color: color(white);
    }

    h1 {
      position: relative;
      z-index: 1;
      margin-top: space(lg);
    }
  }

  &__content {
    display: grid;
    grid-template-columns: 280px 1fr 320px;
    gap: space(lg);
    padding: space(lg);
  }
}

.content__sidebar {
  background-color: color(white);
  border-radius: radius(large);
  padding: space(md);

  .sidebar__section {
    display: flex;
    align-items: center;
    gap: space(sm);
    padding: space(md);
    cursor: pointer;

    &--active {
      background-color: color(primary, 50);
      color: color(primary, 500);
      border-radius: radius(medium);
    }
  }

  .sidebar__menu {
    margin-top: space(md);
    padding-left: space(xl);

    .menu-item {
      display: block;
      padding: space(sm) space(md);
      color: color(gray, 600);
      text-decoration: none;
      border-radius: radius(medium);

      &--active {
        color: color(primary, 500);
        background-color: color(primary, 50);
      }

      &:hover {
        background-color: color(gray, 50);
      }
    }
  }
}

.content__main {
  background-color: color(white);
  border-radius: radius(large);
  padding: space(xl);

  .change-booster__gallery {
    margin-top: space(xl);

    .gallery__grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: space(lg);
      margin-top: space(lg);
    }

    .gallery-item {
      &__image {
        position: relative;
        border-radius: radius(medium);
        overflow: hidden;
        margin-bottom: space(sm);

        img {
          width: 100%;
          height: 160px;
          object-fit: cover;
        }

        .play-icon {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          color: color(white);
          background-color: rgba(0, 0, 0, 0.5);
          border-radius: 50%;
          padding: space(sm);
        }
      }
    }
  }
}

.content__cards {
  display: flex;
  flex-direction: column;
  gap: space(lg);

  .nav-card {
    position: relative;
    height: 240px;
    border-radius: radius(large);
    overflow: hidden;
    cursor: pointer;

    &__image {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    &__content {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      padding: space(lg);
      color: color(white);
      background: linear-gradient(transparent, rgba(0, 0, 0, 0.7));
    }
  }
}
</style> 