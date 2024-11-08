# Laravel

- [Documentation](https://laravel.com/)

- [Best Practices](https://github.com/alexeymezenin/laravel-best-practices/tree/master)

## Requirements

### Install PHP & Composer

- [PHP](https://www.php.net/)
- [Composer](https://getcomposer.org/)

:::: tabs

::: tab "MAC"

```bash
/bin/bash -c "$(curl -fsSL https://php.new/install/mac)"
```

:::

::: tab "Windows"

```bash
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://php.new/install/windows'))
```

:::
::: tab "Linux"

```bash
/bin/bash -c "$(curl -fsSL https://php.new/install/linux)"
```

:::

::::

### Install Laravel Installer

- [Laravel Installer](https://github.com/laravel/installer)

```bash
composer global require laravel/installer
```

## Create a new Laravel project

```bash
laravel new example-app
```

## Map laravel's command to system's PATH

If you can't run Laravel commands directly, you can map it to your system's PATH.

:::: tabs

::: tab "bash"

```bash
echo 'export PATH="$PATH:$HOME/.composer/vendor/bin"' >> ~/.bash_profile
```

or

```bash
echo 'export PATH="$PATH:$HOME/.composer/vendor/bin"' >> ~/.bashrc
```

:::
::: tab "fish"

```bash
echo 'export PATH="$HOME/.composer/vendor/bin:$PATH"' >>  ~/.fishrc
```

:::

::::
