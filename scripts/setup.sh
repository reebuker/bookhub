#!/bin/bash

# Определяем менеджер пакетов
if command -v apt-get &>/dev/null; then
    PKG_MANAGER="apt-get"
    UPDATE_CMD="update"
    INSTALL_CMD="install -y"
elif command -v dnf &>/dev/null; then
    PKG_MANAGER="dnf"
    UPDATE_CMD="makecache"
    INSTALL_CMD="install -y"
elif command -v yum &>/dev/null; then
    PKG_MANAGER="yum"
    UPDATE_CMD="makecache"
    INSTALL_CMD="install -y"
else
    echo "Ошибка: не поддерживаемый менеджер пакетов"
    exit 1
fi

# Функция проверки и установки пакета
check_install() {
    if ! command -v "$1" &>/dev/null; then
        echo "Установка $2..."
        sudo $PKG_MANAGER $INSTALL_CMD "$2"
    else
        echo "$1 уже установлен"
    fi
}

# Обновляем список пакетов
echo "Обновление информации о пакетах..."
sudo $PKG_MANAGER $UPDATE_CMD

# Проверяем и устанавливаем необходимые компоненты
check_install "g++" "g++"
check_install "make" "make"
check_install "cmake" "cmake"
check_install "git" "git"
check_install "npm" "npm"
check_install "react-scripts" "react-scripts"

echo "Готово!"
